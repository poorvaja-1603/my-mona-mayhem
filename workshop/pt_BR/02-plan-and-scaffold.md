# Parte 2: Planejamento e estrutura

---

Antes de escrever qualquer código, vamos usar os fluxos de planejamento do Copilot para pensar na arquitetura. Planejar primeiro ajuda a criar sistemas melhores e dá ao Copilot o contexto necessário para gerar código de melhor qualidade.

## Tarefa 1: Planeje a arquitetura da API

<!-- track:vscode:start -->
1. Mude para o modo **Plan** no Copilot Chat (clique no seletor de modo na parte inferior do painel do chat)
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Entre em **plan mode** no Copilot CLI pressionando **Shift+Tab** até a mudança de modo, ou usando `/plan`.
<!-- track:cli:end -->

2. Digite este prompt:

   ```
   I need to build a server-side API proxy that fetches GitHub contribution data
   for any username. The endpoint is https://github.com/{username}.contribs which
   returns JSON. We need to bypass CORS restrictions. Plan the implementation
   including the route structure, error handling, and caching strategy.
   ```

3. **Revise o plano** — aqui é onde o planejamento brilha. Não aceite a primeira resposta às cegas:
   - Pergunte esclarecimentos sobre qualquer coisa confusa
   - Sugira alterações se algo não parecer certo
   - Itére até ficar satisfeito com a abordagem

<!-- track:vscode:start -->
4. Quando estiver satisfeito com o plano, peça ao Copilot para implementá-lo — mude para o modo **Agent** e diga para seguir em frente.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Quando estiver satisfeito com o plano, diga ao Copilot CLI para prosseguir com a implementação.
5. Revise os arquivos resultantes com `/diff` antes de aprovar.
<!-- track:cli:end -->

6. **Resultado:** você agora deve ter uma rota de API criada em:

   ```
   src/pages/api/contributions/[username].ts
   ```

## Tarefa 2: Teste a API

> **⚠️ Não está vendo mudanças?** Se o servidor de desenvolvimento não detectar a nova rota, pare-o (`Ctrl+C`) e reinicie com `npm run dev`.

1. Certifique-se de que o servidor de desenvolvimento está em execução e teste o endpoint:

   ```bash
   curl http://localhost:4321/api/contributions/octocat
   ```

2. Você deve ver JSON com os dados de contribuição retornados.
3. Teste também o caso de erro — tente um nome de usuário inválido e confirme que ele retorna uma resposta de erro apropriada.

## Tarefa 3: Planeje a página de batalha

<!-- track:vscode:start -->
1. Continue em **Plan** mode e digite este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Continue em plan mode (ou execute `/plan`) e digite este prompt:
<!-- track:cli:end -->

   ```
   Now I need the main page. Plan a battle page for "Mona Mayhem - GitHub
   Contribution Battle Arena" with: two username inputs (Player 1 and Player 2),
   a battle button, and a results area. Keep the UI simple — don't over-engineer
   the layout or styling at this stage. Plan the HTML structure, basic styling,
   and how the battle interaction will work.
   ```

2. **Revise e itere** sobre o plano — faça perguntas, sugira mudanças, refine a abordagem.

<!-- track:vscode:start -->
3. Quando estiver satisfeito, mude para **Agent** mode e deixe o Copilot montar a página.
<!-- track:vscode:end -->

<!-- track:cli:start -->
3. Quando estiver satisfeito, faça o Copilot CLI implementar o plano aprovado.
4. Use `/diff` novamente para inspecionar o HTML e o CSS de esqueleto antes de aprovar.
<!-- track:cli:end -->

## Tarefa 4: Verifique o scaffold

> **⚠️ Não está vendo mudanças?** Se a página não estiver com visual certo ou não tiver atualizado, pare o servidor (`Ctrl+C`) e reinicie com `npm run dev`, depois atualize o navegador.

1. Abra http://localhost:4321 no navegador.
2. Você deve ver:
   - O título do jogo
   - Dois campos de entrada de usuário (Jogador 1 e Jogador 2)
   - Um botão de batalha
3. O botão ainda não funcionará — isso é esperado! Ainda não conectamos a lógica da interação. Isso vem a seguir.

---

## ✅ Parte 2 concluída!

Você aprendeu como:

- **Planejar antes de codificar** em vez de pular direto para a implementação
- **Iterar sobre os planos** até a arquitetura parecer certa
- **Ir do plano para a implementação** com um fluxo mais claro e seguro
