# Parte 3: Construa o jogo com fluxos agentic

---

Esta é a parte em que o Copilot passa de planejador para implementador. Em vez de escrever código linha por linha, você descreve o que quer e deixa o Copilot executar o trabalho nos arquivos que precisam mudar.

## Tarefa 1: Conecte a batalha

<!-- track:vscode:start -->
1. Mude para o modo **Agent** no Copilot Chat.
2. Digite este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Retorne o Copilot CLI ao seu fluxo padrão de codificação (ou permaneça em autopilot se quiser que o Copilot continue indo até você parar).
2. Mencione o arquivo da página para contexto extra se for útil: `@src/pages/index.astro`
3. Digite este prompt:
<!-- track:cli:end -->

   > Add client-side JavaScript to the battle page that:
   > 1. When the Battle button is clicked, gets both usernames from the inputs
   > 2. Validates both are filled (show error if not)
   > 3. Fetches both users' contribution data in parallel from our API
   > 4. Renders contribution graphs as colored grids — each day is a colored square using GitHub's color palette
   > 5. Shows a VS badge between the two users
   > 6. Displays username, total contributions, and date range for each user
   > 7. Handles loading states and errors
   > 8. Also triggers on Enter key in input fields.
   > 9. Simple UI for now that is already scaffolded.
   >
   > Use TypeScript interfaces for the contribution data structure.

<!-- track:vscode:start -->
3. Deixe o Agent Mode trabalhar na implementação em `index.astro`.
4. Revise as mudanças propostas na visualização de diff antes de aceitá-las.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Deixe o Copilot CLI trabalhar na implementação em `src/pages/index.astro`.
5. Use `/diff` para inspecionar as mudanças geradas e depois aprove-as.
<!-- track:cli:end -->

## Tarefa 2: Teste a batalha

> **⚠️ Não está vendo mudanças?** Se a página de batalha não tiver atualizado, pare o servidor de desenvolvimento (`Ctrl+C`) e reinicie com `npm run dev`, depois atualize o navegador.

1. Digite `octocat` e `torvalds` como os dois nomes de usuário e clique em **Battle**.
2. Você deve ver ambos os gráficos de contribuição renderizados lado a lado com grades coloridas.
3. Teste os casos de erro:
   - Deixe um ou ambos os campos vazios e clique em Battle — você deve ver um erro de validação.
   - Digite um nome de usuário inválido — o app deve mostrar um erro da API.
4. Teste a tecla **Enter** em qualquer campo de entrada — ela deve iniciar a batalha da mesma forma que clicar no botão.

## Tarefa 3: Itére com o Copilot

Se algo não estiver tão certo, dê feedback de acompanhamento diretamente ao Copilot. Por exemplo:

- *"The contribution squares are too large, make them 12x12px"*
- *"Add a hover tooltip showing the date and contribution count"*
- *"The loading state needs a pulse animation"*

<!-- track:vscode:start -->
Agent Mode lida com mudanças e iterações em vários arquivos naturalmente. Cada prompt de acompanhamento se baseia na conversa anterior, então você pode refinar a implementação incrementalmente sem começar do zero.
<!-- track:vscode:end -->

<!-- track:cli:start -->
As sessões do Copilot CLI mantêm o histórico, então cada prompt posterior se baseia no anterior. Use `/session` ou `/context` se quiser inspecionar o que o Copilot está carregando, e `/review` depois de uma iteração maior se quiser uma passada extra para bugs ou refinamento.
<!-- track:cli:end -->

## Dicas para esta parte

- **Seja específico sobre o que você quer** — requisitos claros geram melhores resultados.
- **Divida tarefas grandes em prompts menores** se o Copilot sair do rumo.
- **Revise as alterações antes de aceitá-las** — código gerado é mais rápido de inspecionar do que reescrever depois.
- **Teste o app imediatamente após cada passagem de implementação** para manter os problemas localizados.

## ✅ Parte 3 concluída

Você aprendeu como:

- Usar o Copilot para **trabalhos de implementação multiarquivo**
- **Iterar sobre resultados** com prompts de acompanhamento focados
- Lidar com o **ciclo completo da funcionalidade** — implementação, revisão, testes e refinamento
