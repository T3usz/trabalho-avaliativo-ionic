import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { save } from 'ionicons/icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon
  ]
})
export class CadastroPage implements OnInit {
  cliente: Cliente = {
    email: '',
    nome: '',
    endereco: '',
    cep: '',
    cidade: '',
    bairro: '',
    estado: '',
    telefone: ''
  };

  isEdicao = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private toastController: ToastController
  ) {
    addIcons({ save });
  }

  ngOnInit() {
    // Verificar se já existe um cliente cadastrado para edição
    const clienteExistente = this.clienteService.getCliente();
    if (clienteExistente) {
      this.cliente = { ...clienteExistente }; // Cria uma cópia para edição
      this.isEdicao = true;
    }

    // Verificar se veio dados pela navegação (caso específico)
    const clienteData = this.route.snapshot.queryParams['cliente'];
    if (clienteData) {
      this.cliente = JSON.parse(clienteData);
      this.isEdicao = true;
    }
  }

  async salvarDados() {
    try {
      // Validação básica
      if (!this.cliente.nome || !this.cliente.email || !this.cliente.telefone) {
        const toast = await this.toastController.create({
          message: 'Por favor, preencha os campos obrigatórios',
          duration: 2000,
          color: 'warning',
          position: 'top'
        });
        toast.present();
        return;
      }

      // Salvar dados do cliente no service
      this.clienteService.salvarCliente(this.cliente);

      // Mostrar mensagem de sucesso
      const toast = await this.toastController.create({
        message: this.isEdicao ? 'Dados atualizados com sucesso!' : 'Cliente cadastrado com sucesso!',
        duration: 2000,
        color: 'success',
        position: 'top'
      });
      toast.present();

      // Aguardar um pouco antes de navegar para garantir que o toast apareça
      setTimeout(() => {
        this.router.navigate(['/tabs/conta']);
      }, 500);

    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
      
      const toast = await this.toastController.create({
        message: 'Erro ao salvar dados. Tente novamente.',
        duration: 2000,
        color: 'danger',
        position: 'top'
      });
      toast.present();
    }
  }

  voltarParaConta() {
    this.router.navigate(['/tabs/conta']);
  }
}