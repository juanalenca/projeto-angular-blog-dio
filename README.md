# Blog BideoGēmu 🎮

Blog de notícias sobre videogames construído com **Angular 14**, desenvolvido como projeto prático da plataforma [DIO](https://www.dio.me/). A aplicação simula um portal de notícias gaming com navegação entre artigos, componentes reutilizáveis e arquitetura modular baseada em princípios **SOLID**.

---

## Objetivo

Consolidar conhecimentos fundamentais do ecossistema Angular através da construção de um blog funcional, abordando:

- Componentização e reutilização de elementos visuais
- Roteamento dinâmico com parâmetros (`/content/:id`)
- Data binding unidirecional via `@Input()`
- Injeção de Dependência com Services (`@Injectable`)
- Tipagem forte com Interfaces TypeScript
- Renderização condicional e iterativa (`*ngIf`, `*ngFor`)

---

## Funcionalidades

- **Página Home:** Exibe um artigo principal em destaque (`BigCardComponent`) e uma listagem lateral de artigos secundários (`SmallCardComponent`), ambos alimentados dinamicamente via `ArticleService`.
- **Página de Conteúdo:** Ao clicar em qualquer card, o usuário é redirecionado para a rota `/content/:id`, onde o artigo completo é renderizado com título, imagem de capa e descrição em HTML interpretado (`[innerHTML]`).
- **Menu de Navegação:** Barra superior com links externos para LinkedIn e GitHub do autor.
- **Header Temático:** Título estilizado "Blog BideoGēmu" com separadores visuais.

---

## Arquitetura do Projeto

```text
src/app/
├── components/
│   ├── big-card/            # Card principal de destaque (imagem, título, descrição)
│   ├── small-card/          # Card compacto lateral (imagem, título)
│   ├── menu-bar/            # Barra de navegação com links sociais
│   └── menu-title/          # Header com título do blog
├── data/
│   └── dataFake.ts          # Banco de dados mock tipado (Article[])
├── models/
│   └── article.ts           # Interface Article (id, title, description, photoCover)
├── pages/
│   ├── home/                # Página inicial — consome ArticleService via DI
│   └── content/             # Página de artigo individual — busca por ID via Service
├── services/
│   └── article.service.ts   # Camada de acesso a dados centralizada (@Injectable)
├── app-routing.module.ts    # Definição de rotas (Home e Content)
├── app.module.ts            # Módulo raiz com declarações de componentes
└── app.component.*          # Componente raiz (router-outlet)
```

### Fluxo de Dados

```
dataFake.ts (Article[]) → ArticleService → Pages (Home / Content) → Components (Cards)
```

Os componentes de página (`HomeComponent`, `ContentComponent`) nunca acessam os dados diretamente. Toda requisição passa pelo `ArticleService`, respeitando o princípio de **Inversão de Dependência** (SOLID).

---

## Stack Tecnológica

| Tecnologia | Versão | Função |
|---|---|---|
| Angular | 14.1.0 | Framework SPA |
| TypeScript | 4.7.2 | Tipagem estática |
| RxJS | 7.5.0 | Programação reativa (ParamMap) |
| Karma + Jasmine | 6.4 / 4.2 | Testes unitários |
| Zone.js | 0.11.4 | Detecção de mudanças |

---

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/juanalenca/projeto-angular-blog-dio.git
   ```

2. Instale as dependências:
   ```bash
   cd projeto-angular-blog-dio
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

4. Acesse no navegador:
   ```
   http://localhost:4200
   ```

---

## Conteúdo Atual

O blog contém 4 artigos mock sobre o universo gaming:

| ID | Título |
|---|---|
| 1 | Grand Theft Auto VI ganha novo trailer |
| 2 | Monster Hunter Wilds quebra recordes |
| 3 | Novo Batman Arkham em desenvolvimento? |
| 4 | Hogwarts Legacy 2 anunciado para 2026 |

Para adicionar novos artigos, insira objetos no array `DATA_FAKE` em `src/app/data/dataFake.ts` seguindo a interface `Article`.
