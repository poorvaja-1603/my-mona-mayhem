# Parte 1: Configuração e engenharia de contexto

---

Nesta parte você vai configurar seu ambiente de desenvolvimento **e** ensinar o Copilot sobre o código base para que toda futura solicitação comece com o contexto correto.

## Seção 1: Configuração inicial

### Etapa 1: Crie seu repositório

1. Abra [github.com/copilot-dev-days/mona-mayhem](https://github.com/copilot-dev-days/mona-mayhem)
2. Crie seu próprio repositório de uma destas formas:
   - clicando em **Use this template** → **Create a new repository**, ou
   - fazendo fork do repositório.
3. Nomeie-o como `my-mona-mayhem` e defina a visibilidade como **Public** (se você o criou a partir do template)

<!-- track:vscode:start -->
### Etapa 2: Escolha seu ambiente de desenvolvimento

#### Opção A: VS Code local

1. Abra o VS Code e execute **Git: Clone** → **Clone from GitHub**
2. Selecione seu repositório `my-mona-mayhem`
3. Quando solicitado, instale as **extensões recomendadas**

#### Opção B: GitHub Codespaces

1. Abra seu repositório no GitHub
2. Clique em **Code** → **Codespaces** → **Create codespace on main**
3. Aguarde o ambiente iniciar e as dependências instalar

### Etapa 3: Instale as dependências e inicie o app

1. Abra o terminal integrado no seu repositório.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o app:

   ```bash
   npm run dev
   ```

> ✅ **O app está em execução no seu navegador!**
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Etapa 2: Instale o GitHub Copilot CLI

Use o caminho de instalação que combina com sua máquina:

- **npm (multiplataforma, requer Node.js 22+)**

  ```bash
  npm install -g @github/copilot
  ```

- **Homebrew (macOS/Linux)**

  ```bash
  brew install copilot-cli
  ```

- **WinGet (Windows)**

  ```bash
  winget install GitHub.Copilot
  ```

### Etapa 3: Inicie o app e autentique a CLI

1. Clone seu repositório localmente e abra um terminal na raiz do projeto.
2. Instale as dependências e inicie o app:

   ```bash
   npm install
   npm run dev
   ```

3. Abra um **segundo terminal** no mesmo repositório e inicie o Copilot CLI:

   ```bash
   copilot
   ```

4. Na sessão interativa, digite:

   ```
   /login
   ```

5. Siga as instruções do fluxo do dispositivo e confirme que você confia no repositório quando a CLI pedir aprovação.

> ✅ **Agora você tem a prévia do app em um terminal e o Copilot CLI pronto em outro.**
<!-- track:cli:end -->

## Seção 2: Engenharia de contexto

Engenharia de contexto é a forma de ensinar a IA sobre seu código base. Quanto melhor for o contexto, melhor será cada resposta futura.

<!-- track:vscode:start -->
### Tarefa 1: Gere instruções do workspace com /init

Vamos usar o comando integrado `/init` para gerar um arquivo de instruções do workspace para o Copilot:

1. Abra o **Copilot Chat** e digite:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Revise o arquivo gerado — o Copilot vai analisar seu projeto e criar um `.github/copilot-instructions.md`.
3. Aceite as alterações e **faça commit** do arquivo de instruções.

> **Resultado:** Todas as solicitações futuras do Copilot agora têm um mapa do workspace incorporado.

### Tarefa 2: Agentes em segundo plano

**Agente local em segundo plano:**

1. No painel de chat, clique em **+** para uma nova conversa
2. Na parte inferior da janela você verá **Local** mudar para **Copilot CLI**
3. Digite o prompt:

   > "Add linting rules for unused vars and improve code style; fix any errors"

4. Quando terminar, **Revise e aplique** as alterações e arquive a sessão se quiser.

**Agente em nuvem:**

1. No painel de chat, clique em **+** para uma nova conversa
2. Na parte inferior da janela você verá **Local** mudar para **Cloud**

   > "Make the README more engaging as a landing page"

> **Resultado:** Regras de linting adicionadas, erros corrigidos e README melhorado — tudo sem sair do editor.

### Tarefa 3: Explore o projeto

Abra o **Copilot Chat** em **Ask mode** e tente estes prompts:

- `"Explain the architecture of this project"`
- `"What files are in the src directory and what do they do?"`
- `"What would I need to build to make the Battle button work?"`

> 💡 Use **@workspace** para dar ao Copilot contexto do projeto inteiro e obter respostas mais precisas.
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Tarefa 1: Gere instruções do repositório com /init

Vamos usar `/init` para gerar um arquivo de instruções do workspace para o Copilot:

1. No Copilot CLI, digite:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Revise o arquivo gerado — o Copilot vai analisar seu projeto e criar um `.github/copilot-instructions.md`.
3. Faça commit do arquivo de instruções.

> **Resultado:** Futuras sessões da CLI herdam automaticamente instruções específicas do repositório a partir de `.github/copilot-instructions.md`.

### Tarefa 2: Ajuste seu ambiente da CLI

Pratique os controles da CLI que deixam as próximas etapas mais suaves:

1. Execute `/help` para ver os comandos disponíveis.
2. Use `/model` para verificar os modelos disponíveis para você.
3. Se o Copilot aprendeu muitas aprovações durante as experiências, redefina-as com:

   ```
   /reset-allowed-tools
   ```

4. Se seu repositório estiver em um diretório pai maior, use `/add-dir PATH` para expandir explicitamente o workspace permitido.

> 💡 A documentação da CLI recomenda instruções personalizadas curtas e permissões explícitas para manter o Copilot rápido e previsível.

### Tarefa 3: Explore o projeto pelo terminal

Tente estes prompts dentro do Copilot CLI:

- `Give me an overview of this project.`
- `@src/pages/api/contributions/[username].ts What is this file for and what needs to be built here?`
- `@src/pages/index.astro What exists here and what would I need to add to build the battle page?`

Se quiser uma resposta rápida fora da sessão interativa, tente:

```bash
copilot -p "Summarize the architecture of this repo in 5 bullet points"
```

> **Resultado:** Você agora tem instruções, consciência de comandos e uma ideia de como alimentar arquivos no contexto do Copilot CLI.
<!-- track:cli:end -->

## ✅ Parte 1 concluída

Você aprendeu como:

- **Configurar** o repositório e o ambiente local de desenvolvimento
- **Gerar instruções** com `/init` para que o Copilot entenda seu projeto e a direção de design
- **Estabelecer um hábito de revisão** antes de aplicar mudanças geradas
- **Explorar a base de código** com prompts ricos em contexto
