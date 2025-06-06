import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonIcon, 
  IonButton, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonLabel 
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonIcon, 
    IonButton, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonList, 
    IonItem, 
    IonLabel
  ]
})
export class ContaPage implements OnInit, OnDestroy {
  cliente: Cliente | null = null;
  private clienteSubscription?: Subscription;

  private clienteService = inject(ClienteService);
  private router = inject(Router);

  constructor() {}

  ngOnInit() {

    this.cliente = this.clienteService.getCliente();
    
    this.clienteSubscription = this.clienteService.getClienteObservable().subscribe(
      (cliente) => {
        this.cliente = cliente;
        console.log('Cliente atualizado na conta:', cliente);
      }
    );
  }

  ngOnDestroy() {

    if (this.clienteSubscription) {
      this.clienteSubscription.unsubscribe();
    }
  }

  ionViewWillEnter() {
 
    this.cliente = this.clienteService.getCliente();
    console.log('ionViewWillEnter - Cliente:', this.cliente);
  }

  ionViewDidEnter() {

    this.cliente = this.clienteService.getCliente();
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  editarDados() {
    this.router.navigate(['/cadastro']);
  }

  recarregarDados() {
    this.cliente = this.clienteService.getCliente();
    console.log('Dados recarregados:', this.cliente);
  }
}