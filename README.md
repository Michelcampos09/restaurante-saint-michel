# Saint-Michel — Alta Gastronomia Franco-Brasileira

Site institucional do restaurante fictício **Saint-Michel**, que une a técnica clássica francesa aos sabores do Brasil. O projeto apresenta o restaurante, o menu e o chef, e tem uma página de reservas com formulário.

Feito apenas com **HTML, CSS e JavaScript puros**. Não usa framework nem etapa de build.

## 🌐 Acesse o site online

**[https://restaurante-saint-michel.vercel.app/]**

O site está publicado na **Vercel**. Basta clicar no link para ver tudo funcionando, sem baixar arquivos nem rodar nada no seu computador.

## Páginas

### `index.html` — Página inicial

- **Cabeçalho fixo** com logotipo, navegação por âncoras e botão "Reservas". No celular, a navegação vira um menu sanduíche.
- **Hero**: título "Saint-Michel" sobre foto de fundo (rooftop).
- **Sobre nós**: história e conceito do restaurante.
- **Nosso Menu**: apresentação da proposta gastronômica.
- **O Chef**: perfil do chef Louis Clement-Lorran.
- **Rodapé**: navegação, endereços ("Nossos Locais") e contato.

### `reserva.html` — Reservas

- Banner da página e formulário de **solicitação de reserva**: nome, sobrenome, número de lugares, telefone, e-mail, data e observações.
- **Modal de confirmação** exibido após o envio.
- Mesmo cabeçalho e rodapé da página inicial.

## Estrutura de pastas

```
.
├── index.html            # Página inicial
├── reserva.html          # Página de reservas
├── styles/
│   ├── style.css         # Estilos globais (variáveis, header, seções, footer)
│   └── reserva.css       # Estilos específicos da página de reservas
├── scripts/
│   └── script.js         # Interatividade e validação
└── assets/
    ├── images/           # Fotos, bandeira e logo (logo-saint-michel.svg)
    └── docs/             # Documentos de apoio
```

## Funcionalidades (JavaScript)

| Recurso             | Descrição                                                                           |
| ------------------- | ----------------------------------------------------------------------------------- |
| Ícones              | Inicializa os ícones [Lucide](https://lucide.dev) (`lucide.createIcons()`).         |
| Data mínima         | O campo de data só aceita o dia atual ou datas futuras.                             |
| Máscara de telefone | Formata automaticamente como `(11) 91234-5678`, limitado a 11 dígitos.              |
| Validação           | Confere os campos obrigatórios antes de enviar.                                     |
| Sanitização         | `sanitizarTexto()` escapa `& < > " '` antes de exibir dados do usuário, contra XSS. |
| Confirmação         | Mostra no modal uma mensagem personalizada com nome, lugares e data da reserva.     |
| Menu mobile         | Abre e fecha a navegação e atualiza `aria-expanded`.                                |

> O formulário **não envia dados a um servidor**. Ele valida, exibe a confirmação e limpa os campos. Para uso real, falta ligar o envio a um back-end, e-mail ou WhatsApp.

## Design

- **Paleta:** verde oliva `#4c6d30`, verde destaque `#98ca6f`, areia `#a59e7c`, fundo creme `#fbf9f5` e texto `#1f221c`. As cores ficam em variáveis CSS (`:root`) em `style.css`.
- **Tipografia (Google Fonts):** _Cormorant Garamond_ e _Playfair Display_ nos títulos, _Inter_ no texto.
- **Logo:** [`assets/images/logo-saint-michel.svg`](assets/images/logo-saint-michel.svg). É um emblema com espada, flor-de-lis e ramos de louro. Também é o favicon do site.
- **Responsivo:** layout em Flexbox e menu adaptado para telas pequenas.
- **Acessibilidade e SEO:** `lang="pt-br"`, `title` e `meta description` em cada página, `alt` nas imagens, `aria-label` e `aria-expanded` nos controles, `loading="lazy"` nas imagens.

## Como acessar

O site está no ar na Vercel: **[https://saint-michel.vercel.app](https://saint-michel.vercel.app)**. Não é preciso instalar nada.

## Dependências externas (CDN)

- [Google Fonts](https://fonts.google.com): Cormorant Garamond, Playfair Display e Inter.
- [Lucide Icons](https://lucide.dev): ícones SVG.

É preciso internet para carregar fontes e ícones.
