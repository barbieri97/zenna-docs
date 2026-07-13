# Cadastrar paciente

## Passo a passo

1. No menu lateral, clique em **Pacientes**.
2. Clique no botão **Novo Paciente**.
3. Preencha os **Dados do Paciente**:
   - **Nome** — o único campo obrigatório
   - **Email** e **Telefone** — usados para lembretes e cobranças
   - **Nascimento** — o Zenna calcula a idade automaticamente
   - **CPF**
   - **Anotações** — observações clínicas iniciais
4. Se quiser, adicione [responsáveis](/pacientes/responsaveis) na seção **Responsáveis**.
5. Clique em **Cadastrar**.

::: tip Um contrato é criado automaticamente
Ao salvar o paciente, o Zenna cria um contrato chamado **Plano Padrão** — do tipo Por Sessão, com valor R$ 0. Com ele, toda sessão marcada como **Realizada** já gera uma cobrança automaticamente. Vá na aba **Contrato** do paciente para definir o valor da sua sessão ou [trocar o tipo de contrato](/contratos/).
:::

::: warning Limite de pacientes do plano
Cada plano tem um número máximo de pacientes ativos (o plano Free permite 5). Ao atingir o limite, o botão **Novo Paciente** fica desativado com o aviso "Limite de pacientes atingido. Faça upgrade do plano." — veja como em [Mudar de plano](/assinatura/mudar-de-plano).
:::

## Veja também

- [Responsáveis](/pacientes/responsaveis)
- [Contratos — visão geral](/contratos/)
- [Agendar uma consulta](/agenda/nova-consulta)
