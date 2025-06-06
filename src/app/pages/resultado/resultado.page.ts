import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho.service';
import { 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonIcon, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonNote, 
  IonButton 
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonButton
  ]
})
export class ResultadoPage implements OnInit {
  valorProdutos = 0;
  frete = 0;
  totalPago = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private router: Router
  ) {}

  ngOnInit() {

    this.valorProdutos = this.carrinhoService.getTotal();
    this.frete = this.carrinhoService.getFrete();
    this.totalPago = this.carrinhoService.getTotalComFrete();
    

    this.carrinhoService.limparCarrinho();
  }

  voltarInicio() {
    this.router.navigate(['/tabs/inicio']);
  }
}