# 🔍 GitHub Profile Viewer

Um visualizador de perfis do GitHub simples e elegante, que permite buscar usuários e visualizar suas principais informações, como bio, seguidores, quem seguem e os 10 repositórios mais recentes com suas respectivas estatísticas.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as tecnologias web fundamentais, focando em uma arquitetura modular moderna:

- **HTML5**: Estrutura semântica da aplicação.
- **CSS3**: Estilização personalizada com variáveis, Grid e Flexbox para um design responsivo.
- **JavaScript (ES6+)**: Lógica da aplicação utilizando módulos para separação de responsabilidades.
- **GitHub API**: Consumo de dados reais da plataforma.

## ✨ Funcionalidades

- **Busca Dinâmica**: Pesquise qualquer usuário do GitHub pelo nome de usuário.
- **Atalhos de Teclado**: Realize a busca pressionando a tecla `Enter`.
- **Perfil Completo**: Visualize avatar, nome, bio e contadores de seguidores/seguindo.
- **Listagem de Repositórios**: Exibe os 10 últimos repositórios criados, incluindo:
  - Estrelas (Stars)
  - Forks
  - Visualizações (Watchers)
  - Linguagem principal utilizada.
- **Tratamento de Erros**: Alertas amigáveis para usuários não encontrados ou campos vazios.

## 📂 Estrutura de Arquivos (Modular)

O projeto segue o padrão de módulos do ES6 para facilitar a manutenção:

```text
/
├── index.html          # Ponto de entrada HTML
├── src/
│   ├── css/            # Arquivos de estilo (reset, layouts, responsividade)
│   └── js/
│       ├── index.js      # Controlador principal e eventos
│       ├── githubAPI.js  # Serviço de comunicação com a API do GitHub
│       └── profileView.js # Responsável pela renderização do DOM
```

## 🛠️ Como Executar o Projeto

Como o projeto utiliza **JavaScript Modules (`import`/`export`)**, ele não pode ser executado abrindo o arquivo `index.html` diretamente no navegador (devido a restrições de segurança/CORS).

1.  Clone este repositório ou baixe os arquivos.
2.  Abra a pasta do projeto no seu editor (ex: **VS Code**).
3.  Utilize uma extensão de servidor local, como o **Live Server**.
4.  Clique em "Go Live" e o projeto abrirá automaticamente no seu navegador.

---

Desenvolvido com 💜 por [Isis/IsisJardim]
