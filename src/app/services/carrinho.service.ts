import { Injectable } from '@angular/core';
import { CarrinhoItem } from '../models/carrinho-item.model';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: CarrinhoItem[] = [];
  private readonly FRETE = 21.54;

  getItens(): CarrinhoItem[] {
    return this.itens;
  }

  adicionarProduto(produto: Produto): void {
    const itemExistente = this.itens.find(item => item.produto.codigo === produto.codigo);
    
    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.itens.push({
        produto: produto,
        quantidade: 1
      });
    }
  }

  removerItem(codigo: string): void {
    this.itens = this.itens.filter(item => item.produto.codigo !== codigo);
  }

  getTotal(): number {
    return this.itens.reduce((total, item) => 
      total + (item.produto.valorComDesconto * item.quantidade), 0
    );
  }

  getFrete(): number {
    return this.FRETE;
  }

  getTotalComFrete(): number {
    return this.getTotal() + this.FRETE;
  }

  limparCarrinho(): void {
    this.itens = [];
  }

  getQuantidadeItens(): number {
    return this.itens.reduce((total, item) => total + item.quantidade, 0);
  }
}