# Contrato Por Sessão

O tipo mais simples: cada sessão realizada tem um valor. É o tipo do **Plano Padrão**, criado automaticamente com todo paciente novo.

## Como configurar

Ao [criar o contrato](/contratos/), escolha o tipo **Por Sessão** e defina o **Valor por Sessão**. Se quiser cobrar faltas, configure também a [política de faltas](/contratos/politica-de-faltas).

## Como a cobrança funciona

Há dois jeitos, dependendo do contrato:

### Cobrança automática (é assim no Plano Padrão)

Toda vez que uma sessão é marcada como **Realizada**, o Zenna cria na hora uma cobrança daquela sessão, com vencimento na data do atendimento. Você só precisa [registrar o pagamento](/financas/registrar-pagamento) quando receber.

### Cobrança acumulada (gerar débito manualmente)

Você deixa as sessões realizadas se acumularem e, quando quiser cobrar (por exemplo, no fim do mês):

1. Abra a ficha do paciente, aba **Débitos**.
2. Clique em **Gerar Débito**.
3. O Zenna lista as **sessões realizadas ainda não cobradas** — marque as que entram na cobrança. Faltas com política de cobrança já vêm incluídas.
4. Confirme. A cobrança é criada com o total (valor por sessão × sessões escolhidas).

::: tip Dica
Use a cobrança automática para quem paga sessão a sessão, e a acumulada para quem prefere pagar tudo junto no fim do mês.
:::

## Veja também

- [Criar uma cobrança](/financas/nova-cobranca)
- [Política de faltas](/contratos/politica-de-faltas)
- [Concluir uma sessão](/agenda/concluir-sessao)
