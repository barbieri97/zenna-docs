# Contrato de Sessões Pré-pagas

O paciente compra um **pacote de sessões antecipadamente** e vai usando os créditos conforme agenda. Cada sessão marcada consome 1 crédito do pacote.

## Como configurar

Ao [criar o contrato](/contratos/), escolha o tipo **Sessões Pré-pagas** e defina:

- **Valor por Sessão (R$)**
- **Total de Sessões Pré-pagas** — o tamanho do pacote

## Passo essencial: gerar o débito do pacote

::: warning As sessões só liberam depois do débito
Criar o contrato **não libera** os agendamentos. Você precisa **gerar a cobrança do pacote** primeiro: ficha do paciente → aba **Débitos** → **Gerar Débito**. Isso cria a cobrança (valor por sessão × total de sessões) e credita as sessões no contrato.
:::

## Como os créditos funcionam

- **Agendar uma sessão consome 1 crédito.** O cartão do contrato mostra as **"Sessões restantes"**.
- **Cancelar ou apagar uma sessão devolve o crédito** ao pacote.
- Quando os créditos acabam, o agendamento é bloqueado até você gerar um novo pacote (novo débito).
- Realizar a sessão não gera cobrança nenhuma — o pacote já foi cobrado.

## Séries recorrentes com pacote

Ao agendar uma [série recorrente](/agenda/recorrencia) neste contrato:

- É **obrigatório** definir o fim da série (**Terminar em** ou **Número de sessões**).
- O Zenna calcula quantas sessões a série terá e **consome todos esses créditos de uma vez**.
- Se não houver créditos suficientes, aparece a mensagem "Créditos insuficientes" com o saldo disponível — reduza a série ou gere um novo pacote.

## Veja também

- [Criar uma cobrança](/financas/nova-cobranca)
- [Sessões recorrentes](/agenda/recorrencia)
- [Editar, remarcar e apagar](/agenda/editar-remarcar-apagar)
