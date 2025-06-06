import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    {
      codigo: 'PROD001',
      descricao: 'Smartphone Samsung Galaxy A54',
      valorNormal: 1899.90,
      valorComDesconto: 1599.90,
      detalhes: 'Smartphone com tela de 6.4", 128GB de armazenamento, câmera tripla de 50MP, bateria de 5000mAh e processador Exynos 1380.'
    },
    {
      codigo: 'PROD002',
      descricao: 'Notebook Dell Inspiron 15',
      valorNormal: 3499.90,
      valorComDesconto: 2999.90,
      detalhes: 'Notebook com processador Intel Core i5, 8GB RAM, SSD 256GB, tela 15.6" Full HD e Windows 11.'
    },
    {
      codigo: 'PROD003',
      descricao: 'Smart TV LG 50" 4K',
      valorNormal: 2299.90,
      valorComDesconto: 1999.90,
      detalhes: 'Smart TV 50 polegadas com resolução 4K, WebOS, HDR10, Wi-Fi integrado e controle remoto com comando de voz.'
    },
    {
      codigo: 'PROD004',
      descricao: 'Fone JBL Tune 510BT',
      valorNormal: 199.90,
      valorComDesconto: 149.90,
      detalhes: 'Fone de ouvido bluetooth sem fio, bateria de até 40h, som JBL Pure Bass e microfone integrado.'
    },
    {
      codigo: 'PROD005',
      descricao: 'Mouse Gamer Logitech G403',
      valorNormal: 249.90,
      valorComDesconto: 199.90,
      detalhes: 'Mouse gamer com sensor óptico de alta precisão, iluminação RGB personalizável e design ergonômico.'
    },
    {
      codigo: 'PROD006',
      descricao: 'Teclado Mecânico Redragon',
      valorNormal: 299.90,
      valorComDesconto: 249.90,
      detalhes: 'Teclado mecânico com switches azuis, iluminação LED rainbow e layout ABNT2.'
    },
    {
      codigo: 'PROD007',
      descricao: 'Caixa de Som JBL Flip 6',
      valorNormal: 599.90,
      valorComDesconto: 499.90,
      detalhes: 'Caixa de som portátil à prova d\'água, bluetooth 5.1, bateria de 12h e som potente de 30W.'
    },
    {
      codigo: 'PROD008',
      descricao: 'Câmera Canon EOS Rebel T7',
      valorNormal: 2199.90,
      valorComDesconto: 1899.90,
      detalhes: 'Câmera DSLR de 24.1MP, lente 18-55mm, gravação Full HD, Wi-Fi e NFC para conectividade.'
    },
    {
      codigo: 'PROD009',
      descricao: 'Tablet Samsung Galaxy Tab A8',
      valorNormal: 899.90,
      valorComDesconto: 749.90,
      detalhes: 'Tablet com tela de 10.5", processador octa-core, 4GB RAM, 64GB armazenamento e Android 11.'
    },
    {
      codigo: 'PROD010',
      descricao: 'Smartwatch Amazfit GTS 3',
      valorNormal: 799.90,
      valorComDesconto: 649.90,
      detalhes: 'Smartwatch com tela AMOLED de 1.75", GPS, monitoramento de saúde 24h e bateria de até 12 dias.'
    },
    {
      codigo: 'PROD011',
      descricao: 'Console PlayStation 5',
      valorNormal: 4699.90,
      valorComDesconto: 4299.90,
      detalhes: 'Console de videogame com SSD ultra-rápido, áudio 3D, controle DualSense e jogos em 4K.'
    },
    {
      codigo: 'PROD012',
      descricao: 'Ar Condicionado Split 12000 BTUs',
      valorNormal: 1899.90,
      valorComDesconto: 1599.90,
      detalhes: 'Ar condicionado split inverter, classificação A em eficiência energética, controle remoto e função sleep.'
    }
  ];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getProdutoByCodigo(codigo: string): Produto | undefined {
    return this.produtos.find(p => p.codigo === codigo);
  }
}