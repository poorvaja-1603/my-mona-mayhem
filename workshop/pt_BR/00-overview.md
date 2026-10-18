# 🎮 Mona Mayhem — Workshop do GitHub Copilot

---

> **Duração:** ~1 hora  
> **Nível:** Intermediário  
> **Stack:** Astro / Node.js / TypeScript

Crie um aplicativo retro de comparação de contribuições do GitHub — **Mona Mayhem** — enquanto aprende todo o espectro de fluxos de trabalho do GitHub Copilot. O workshop oferece **dois caminhos**: uma experiência no VS Code e outra na GitHub Copilot CLI.

---

## 🎯 Escolha seu caminho

- **Caminho do VS Code** — fique dentro do editor e pratique Chat, Plan Mode, Agent Mode, agentes em segundo plano e o ciclo de revisão integrado.
- **Caminho da CLI** — fique no terminal e pratique `copilot`, contexto com `@file`, `/plan`, edições autônomas, `/fleet`, `/delegate` e `/review`.

Siga o caminho que melhor combina com o seu fluxo de trabalho preferido.

---

## 📋 Checklist rápido

Antes de começar, verifique:

- [ ] GitHub Copilot ativado para sua conta
- [ ] Node.js instalado
- [ ] Git instalado e configurado
- [ ] Seu navegador e terminal estão prontos

<!-- track:vscode:start -->
- [ ] VS Code **v1.107+** (sem atualizações pendentes)
- [ ] Conectado à extensão **GitHub Copilot**
- [ ] Painel de Chat aberto e Agent pronto
<!-- track:vscode:end -->

<!-- track:cli:start -->
- [ ] GitHub Copilot CLI instalado e disponível como `copilot`
- [ ] Autenticado na CLI com `/login`
- [ ] Confortável usando comandos com barra como `/help`, `/plan` e `/review`
<!-- track:cli:end -->

> 💡 **Dica:** use o DevContainer para um ambiente pré-configurado se quiser começar rápido no VS Code.

---

## 🧠 O que você vai aprender

| # | Habilidade | Descrição |
|---|------------|-----------|
| 1 | **Engenharia de contexto** | Ensine o Copilot sobre o seu código com instruções, referências e restrições claras |
| 2 | **Planejamento primeiro** | Escreva a arquitetura antes da implementação |
| 3 | **Implementação agentic** | Deixe o Copilot executar trabalho de codificação em várias etapas com sua supervisão |
| 4 | **Design iterativo** | Use o Copilot para transformar elementos visuais e refinar detalhes de interação |
| 5 | **Fluxos de trabalho em paralelo** | Divida a tarefa entre agentes, sessões ou tarefas delegadas |

<!-- track:vscode:start -->
### Foco de recursos do VS Code

- **Chat + Ask mode** para exploração
- **Plan Mode** para arquitetura e prompts de design
- **Agent Mode** para implementação multiarquivo
- **Agentes em segundo plano e na nuvem** para polimento paralelo
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Foco de recursos do Copilot CLI

- **Sessões interativas de CLI** com `copilot`
- **`/plan` e Shift+Tab** para planejamento estruturado
- **Edições autônomas** com aprovações em linha e `/diff`
- **`/fleet`, `/delegate` e `/review`** para paralelismo e gates de qualidade
<!-- track:cli:end -->

---

## 📚 Partes do laboratório

| Parte | Título | Descrição |
|------|--------|-----------|
| [**01**](01-setup.md) | Configuração e engenharia de contexto | Crie seu repositório, prepare o ambiente e dê ao Copilot o contexto certo |
| [**02**](02-plan-and-scaffold.md) | Planejamento e estrutura | Projete a API e a arquitetura da página antes de implementar |
| [**03**](03-agent-mode.md) | Construir o jogo | Conecte a página de batalha e os gráficos de contribuição com ajuda agentic |
| [**04**](04-design-vibes.md) | Tematização orientada pelo design | Transforme o scaffold em uma experiência retro arcade |
| [**05**](05-polish.md) | Polimento e trabalho em paralelo | Use fluxos multiagente para melhorar UX, robustez e qualidade |
| [**06**](06-bonus.md) | Bônus e extensões | Explore recursos abertos, fluxos de compartilhamento e experimentos extras |

---

## 💡 Dicas profissionais

1. **Mantenha o navegador aberto** — acompanhe atualizações em tempo real enquanto codifica.
2. **Faça commits com frequência** — salve checkpoints limpos enquanto itera.
3. **Refine o plano antes da implementação** — planos melhores levam a melhores resultados.
4. **Revise as alterações do Copilot** — use a visualização de diff ou as ferramentas de revisão da CLI em vez de aceitar sem pensar.

<!-- track:vscode:start -->
5. **Use checkpoints e Desfazer** no chat se uma iteração sair do controle.
<!-- track:vscode:end -->

<!-- track:cli:start -->
5. **Use `/session`, `/context` e `/share file`** quando quiser inspecionar ou preservar seu trabalho.
<!-- track:cli:end -->
