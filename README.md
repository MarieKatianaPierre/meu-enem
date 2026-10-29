# 🎓 Meu ENEM

Aplicativo mobile desenvolvido para auxiliar estudantes na preparação para o Exame Nacional do Ensino Médio (ENEM), oferecendo recursos para organização dos estudos, acesso a conteúdos, revisões, simulados e auxílio por Inteligência Artificial.

---

## 📱 Sobre o projeto

O **Meu ENEM** é um aplicativo desenvolvido como projeto acadêmico do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

A proposta é oferecer aos estudantes uma ferramenta que facilite a organização da preparação para o ENEM, reunindo diferentes recursos de estudo em um único aplicativo.

O aplicativo busca proporcionar uma experiência simples, organizada e acessível para estudantes que desejam acompanhar sua preparação para a prova.

---

## 🎯 Objetivo

O objetivo do Meu ENEM é ajudar estudantes a:

- Organizar seus estudos;
- Acessar conteúdos para preparação;
- Criar e acompanhar um cronograma;
- Realizar revisões;
- Consultar materiais de estudo;
- Responder simulados e questões;
- Utilizar Inteligência Artificial para auxiliar nas dúvidas;
- Acompanhar seu desempenho.

---

## 🚀 Funcionalidades

### 📚 Conteúdos

Permite ao estudante acessar conteúdos relacionados às áreas de conhecimento do ENEM.

### 📅 Cronograma

Auxilia na organização da rotina de estudos, permitindo que o estudante acompanhe o que precisa estudar.

### 📝 Revisões e materiais

Reúne recursos que podem ser utilizados para revisar os conteúdos estudados e apoiar a preparação.

### 🤖 Inteligência Artificial

A Inteligência Artificial tem como objetivo auxiliar o estudante durante os estudos, principalmente em dúvidas relacionadas aos conteúdos e questões.

### 🧠 Simulados e questões

Permite que o estudante pratique por meio de questões e simulados, ajudando na preparação para o ENEM e no acompanhamento do desempenho.


### 👤 Cadastro e perfil do usuário

O aplicativo permite que o usuário selecione seu tipo de perfil durante o cadastro:

- **Aluno:** para estudantes que utilizam o aplicativo na preparação para o ENEM.
- **Professor:** para professores que desejam utilizar os recursos disponíveis no aplicativo.
- **Outro:** para usuários que não se enquadram nas opções anteriores.

O tipo de usuário selecionado pode ser apresentado na página de perfil, facilitando a identificação da categoria escolhida durante o cadastro.

### 💬 Comentários e sugestões

O Meu ENEM conta com uma página destinada a comentários e sugestões dos usuários.

O objetivo é permitir que os usuários compartilhem opiniões, apresentem sugestões de melhorias e contribuam para a evolução do aplicativo.

A funcionalidade está sendo preparada para permitir que os comentários sejam compartilhados entre os usuários por meio de uma integração com um serviço de backend e banco de dados.

**Observação:** o compartilhamento entre diferentes usuários depende da implementação e da integração desse serviço.



---

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias voltadas para desenvolvimento de aplicações mobile.

### React Native

Framework utilizado para desenvolvimento da aplicação mobile utilizando JavaScript/TypeScript e componentes nativos.

### Lucide React Native

ícones da interface.

### Expo

Plataforma utilizada para facilitar o desenvolvimento, execução e testes da aplicação React Native.

### Expo Router

Utilizado para organizar a navegação entre as telas do aplicativo.

### JavaScript / TypeScript

Utilizados na implementação da lógica e dos componentes da aplicação.

### Git

Sistema de controle de versão utilizado para acompanhar as alterações realizadas no projeto.

### GitHub

Plataforma utilizada para armazenar o código-fonte e permitir o trabalho colaborativo entre os integrantes do grupo.

---

## 📂 Estrutura do projeto

A estrutura principal do projeto utiliza o Expo Router.

```text
meu-enem/
├── assets/
│   └── images/
├── src/
│   ├── app/
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── cadastro.tsx
│   │   ├── recuperar.tsx
│   │   ├── home.tsx
│   │   ├── materias.tsx
│   │   ├── estudo.tsx
│   │   ├── cronograma.tsx
│   │   ├── revisoes.tsx
│   │   ├── simulado.tsx
│   │   ├── perfil.tsx
│   │   └── comentarios.tsx
│   └── theme/
│       └── colors.ts
├── package.json
└── README.md
```

### `src/app`

Contém as telas e rotas principais da aplicação.

### `assets`

Contém recursos utilizados pela aplicação, como imagens e o logotipo.

### `package.json`

Contém informações do projeto e suas dependências.

### `app.json`

Contém configurações do aplicativo Expo.

### `README.md`

Documento com informações e instruções sobre o projeto.

### AsyncStorage

Biblioteca utilizada para armazenar dados localmente no dispositivo, como informações do usuário e outros dados da aplicação.

npx expo export --platform web
---

## 💻 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/MarieKatianaPierre/meu-enem.git
```

### 2. Entrar na pasta

```bash
cd meu-enem
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o Expo

```bash
npx expo start
```

Depois disso, será exibido um QR Code no terminal.

O aplicativo pode ser executado utilizando:

- Expo Go no celular;
- Navegador;
- Emulador Android;
- Emulador iOS, quando disponível.

---

## 📱 Executar no celular

Para testar pelo celular:

1. Instale o **Expo Go**;
2. Conecte o celular e o computador à mesma rede Wi-Fi;
3. Execute:

```bash
npx expo start
```

4. Escaneie o QR Code apresentado pelo Expo.

---

## 🔀 Git e GitHub

O GitHub é utilizado para permitir que os integrantes do grupo trabalhem no mesmo projeto.

### Verificar o status

```bash
git status
```

### Baixar alterações do GitHub

```bash
git pull
```

### Adicionar alterações

```bash
git add .
```

### Criar um commit

```bash
git commit -m "Descrição da alteração"
```

### Enviar alterações

```bash
git push
```

### Atualizar o projeto antes de começar a trabalhar

É recomendado executar:

```bash
git pull
```

antes de começar novas alterações.

---

## 👥 Trabalho em equipe

Cada integrante pode trabalhar em uma parte do projeto.

Para evitar conflitos, é recomendado:

1. Atualizar o projeto com `git pull`;
2. Fazer as alterações;
3. Testar o aplicativo;
4. Executar `git status`;
5. Criar um commit;
6. Enviar as alterações com `git push`.

---

## 🎨 Identidade do projeto

**Nome:** Meu ENEM

**Categoria:** Aplicativo educacional

**Público-alvo:** Estudantes que estão se preparando para o ENEM.

**Objetivo:** Auxiliar na organização e preparação dos estudos.

---

## 📌 Status do projeto

🚧 **Em desenvolvimento**

O projeto está sendo desenvolvido de forma incremental. Novas telas, funcionalidades e melhorias podem ser adicionadas durante o desenvolvimento.

---

## 🎓 Projeto acadêmico

Projeto desenvolvido como atividade acadêmica do curso de:

**Análise e Desenvolvimento de Sistemas — ADS**

**Instituição:** UniNorte

---

## 👩‍💻 Equipe

Projeto desenvolvido pelo grupo responsável pelo desenvolvimento do **Meu ENEM**.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.