# AngularBlog

## Sobre o Projeto
O **AngularBlog** é uma aplicação web demonstrativa, criada com Angular CLI (versão 14.1.2), que exemplifica boas práticas de desenvolvimento com Angular. O projeto utiliza componentes, serviços, rotas e testes automatizados para garantir qualidade e escalabilidade.

## Sumário
- [Descrição do Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução do Servidor de Desenvolvimento](#execução-do-servidor-de-desenvolvimento)
- [Geração de Código](#geração-de-código)
- [Build do Projeto](#build-do-projeto)
- [Testes](#testes)
  - [Testes Unitários](#testes-unitários)
  - [Testes End-to-End](#testes-end-to-end)
- [Ajuda e Documentação](#ajuda-e-documentação)
- [Contribuições](#contribuições)

## Pré-requisitos
Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **Angular CLI** (versão 14.1.2)

## Instalação
1. Clone o repositório:
   ```sh
   git clone https://seu-repositorio.git
   cd AngularBlog
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## Execução do Servidor de Desenvolvimento
Para iniciar o servidor de desenvolvimento, execute:

```sh
ng serve
```

Acesse a aplicação em: [http://localhost:4200/](http://localhost:4200/). O servidor recarrega automaticamente ao detectar alterações nos arquivos.

## Geração de Código
Para gerar novos componentes, diretivas, pipes, serviços e outros elementos, utilize o Angular CLI. Exemplo para criar um novo componente:

```sh
ng generate component nome-do-componente
```

## Build do Projeto
Para gerar a versão de produção, execute:

```sh
ng build
```

Os arquivos gerados estarão no diretório `dist/`.

## Testes
### Testes Unitários
Execute os testes unitários com o Karma:

```sh
ng test
```

### Testes End-to-End
Para rodar os testes end-to-end:

```sh
ng e2e
```

> Obs.: Certifique-se de que um pacote de testes E2E esteja configurado no projeto.

## Ajuda e Documentação
Para mais informações sobre o Angular CLI, consulte:

- [Documentação Oficial do Angular CLI](https://angular.io/cli)
- [Referência de Comandos do Angular](https://angular.io/guide/cli-commands)

## Contribuições
Contribuições são bem-vindas! Para colaborar:

1. Abra uma issue para relatar problemas ou sugerir melhorias.
2. Envie um pull request com suas alterações seguindo boas práticas de desenvolvimento.
