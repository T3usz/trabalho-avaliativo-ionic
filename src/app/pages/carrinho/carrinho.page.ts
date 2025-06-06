import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ ADICIONADO
import { CarrinhoService } from '../../services/carrinho.service'; // ✅ ADICIONADO
import { CarrinhoItem } from '../../models/carrinho-item.model'; // ✅ ADICIONADO
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle, 
  IonItem, 
  IonLabel, 
  IonButton, 
  IonIcon, 
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonThumbnail,
  IonNote
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonItem, 
    IonLabel, 
    IonButton, 
    IonIcon, 
    IonList,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonThumbnail,
    IonNote
  ]
})
export class CarrinhoPage implements OnInit {
  itens: CarrinhoItem[] = []; // ✅ CORRIGIDO - Tipagem correta
  
  // ✅ CORRIGIDO - Injeção dos serviços
  private carrinhoService = inject(CarrinhoService);
  private router = inject(Router);

  constructor() { }

  ngOnInit() {
    // ✅ CORRIGIDO - Carregar itens do carrinho
    this.carregarItens();
  }

  ionViewWillEnter() {
    // ✅ ADICIONADO - Atualiza sempre que entrar na página
    this.carregarItens();
  }

  private carregarItens() {
    this.itens = this.carrinhoService.getItens();
  }

  removerItem(codigo: string) {
    // ✅ CORRIGIDO - Implementação real
    this.carrinhoService.removerItem(codigo);
    this.carregarItens(); // Atualiza a lista
  }

  finalizarCompra() {
    // ✅ CORRIGIDO - Navegar para resultado
    if (this.itens.length > 0) {
      this.router.navigate(['/resultado']);
    }
  }

  // ✅ CORRIGIDO - Métodos que realmente funcionam
  getTotal() { 
    return this.carrinhoService.getTotal();
  }
  
  getFrete() { 
    return this.carrinhoService.getFrete();
  }
  
  getTotalComFrete() { 
    return this.carrinhoService.getTotalComFrete();
  }
}