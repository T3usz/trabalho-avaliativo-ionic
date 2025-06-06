import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private cliente: Cliente | null = null;
  private readonly STORAGE_KEY = 'cliente_dados';
  

  private clienteSubject = new BehaviorSubject<Cliente | null>(null);
  public cliente$ = this.clienteSubject.asObservable();

  constructor() {
    this.carregarClienteDoStorage();
  }

  private carregarClienteDoStorage(): void {
    try {
      const dadosSalvos = localStorage.getItem(this.STORAGE_KEY);
      if (dadosSalvos) {
        this.cliente = JSON.parse(dadosSalvos);
        this.clienteSubject.next(this.cliente);
      }
    } catch (error) {
      console.error('Erro ao carregar dados do cliente:', error);
    }
  }

  private salvarNoStorage(): void {
    try {
      if (this.cliente) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cliente));
      } else {
        localStorage.removeItem(this.STORAGE_KEY);
      }
    } catch (error) {
      console.error('Erro ao salvar dados do cliente:', error);
    }
  }

  getCliente(): Cliente | null {
    return this.cliente;
  }

  getClienteObservable(): Observable<Cliente | null> {
    return this.cliente$;
  }

  salvarCliente(cliente: Cliente): void {
    this.cliente = { ...cliente }; // Cria uma cópia
    this.salvarNoStorage();
    this.clienteSubject.next(this.cliente); // Notifica todos os observadores
  }

  hasCliente(): boolean {
    return this.cliente !== null && this.cliente.nome.trim() !== '';
  }

  limparCliente(): void {
    this.cliente = null;
    this.salvarNoStorage();
    this.clienteSubject.next(null);
  }

  atualizarCliente(dadosAtualizados: Partial<Cliente>): void {
    if (this.cliente) {
      this.cliente = { ...this.cliente, ...dadosAtualizados };
      this.salvarNoStorage();
      this.clienteSubject.next(this.cliente);
    }
  }
}