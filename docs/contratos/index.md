# Contratos — visão geral

Um **contrato** é o acordo de cobrança entre você e um paciente: ele define quanto e como cada atendimento será cobrado. Toda sessão agendada fica ligada a um contrato — é ele que diz o que acontece no financeiro quando a sessão é realizada.

::: tip O Plano Padrão
Todo paciente novo já nasce com um contrato chamado **Plano Padrão**: tipo Por Sessão, valor R$ 0, com cobrança automática ao concluir a sessão. Edite-o para colocar o valor real da sua sessão — ou crie um contrato de outro tipo e use-o nos agendamentos.
:::

## Os quatro tipos de contrato

| Tipo | Como cobra | Quando a cobrança é gerada | Ideal para |
|---|---|---|---|
| [**Por Sessão**](/contratos/por-sessao) | Um valor por sessão realizada | Automaticamente ao concluir (Plano Padrão) ou quando você gera o débito das sessões acumuladas | Atendimento contínuo com pagamento por sessão |
| [**Mensalidade**](/contratos/mensalidade) | Valor fixo mensal + número de sessões por mês | Uma vez por mês, quando você gera a cobrança do mês | Pacientes com valor fechado mensal |
| [**Avaliação Fixa**](/contratos/avaliacao-fixa) | Valor total único por um número de sessões | Uma única vez, para o pacote inteiro | Avaliações e processos com começo, meio e fim |
| [**Sessões Pré-pagas**](/contratos/sessoes-pre-pagas) | O paciente paga antes por um pacote de sessões | Ao gerar o débito do pacote — que libera os agendamentos | Pacotes pagos antecipadamente |

## Criar um contrato

1. No menu lateral, clique em **Contratos** e depois em **Novo Contrato** (ou use o botão **Novo Contrato** na ficha do paciente).
2. Preencha:
   - **Paciente**
   - **Tipo de Contrato** — um dos quatro acima
   - **Nome do Plano** — ex.: "Plano Mensal Família"
   - **Tipo de Atendimento** — define a cor e a duração das sessões na agenda ([Tipos de sessão](/configuracoes/tipos-de-sessao))
   - Os campos de valor específicos do tipo escolhido
   - **Data de Início** e, se quiser, observações
3. Configure a [política de faltas](/contratos/politica-de-faltas), se desejar.
4. Clique em **Criar Contrato**.

Um paciente pode ter **vários contratos** ao mesmo tempo — por exemplo, uma mensalidade de terapia e uma avaliação fixa em paralelo. Na hora de agendar, você escolhe qual contrato vale para aquela sessão.

## Guias desta seção

- [Por Sessão](/contratos/por-sessao) · [Mensalidade](/contratos/mensalidade) · [Avaliação Fixa](/contratos/avaliacao-fixa) · [Sessões Pré-pagas](/contratos/sessoes-pre-pagas)
- [Política de faltas](/contratos/politica-de-faltas)
- [Editar e encerrar](/contratos/editar-e-encerrar)
