# 🔍 ANÁLISE COMPLETA DO FLUXO DE ONBOARDING - LUMINA
## Separado por Partes para Revisão

---

## 📋 **PARTE 1: ENTRADA NO SITE E LANDING PAGE**

### [ETAPA 1: Entrada no Site] ---------------------> [ETAPA 2: Landing Page]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/page.tsx`
   ├─ ⚙️ Lógica Detectada: 
       - Landing page completa com múltiplas seções
       - Hero Section com CTA principal
       - Seções: Pain Points, Solução, Vitrine (templates), Recursos, Planos, FAQ
       - Todos os CTAs apontam para `/comecar`
   └─ 🚦 STATUS: ✅ **COMPLETO**
         └─ Landing page funcional e responsiva

### [ETAPA 2: Landing Page] ---------------------> [ETAPA 3: Página de Onboarding]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/page.tsx`
   ├─ ⚙️ Lógica Detectada: 
       - Múltiplos links `<Link href="/comecar">` em:
         * Hero Section (linha 231)
         * Card "O Jeito Lumina" (linha 393)
         * Cards de templates (linhas 473, 564, 632)
         * Seção Recursos (linha 757)
         * Footer (linha 988)
       - Redirecionamento via Next.js Link (client-side navigation)
   └─ 🚦 STATUS: ✅ **COMPLETO**
         └─ Redirecionamento funcional

---

## 📋 **PARTE 2: INÍCIO DO ONBOARDING (PÁGINA /COMECAR)**

### [ETAPA 3: Página de Onboarding] ---------------------> [ETAPA 4: Seleção de Template]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/comecar/page.tsx`
   ├─ ⚙️ Lógica Detectada: 
       - Wizard de 3 passos implementado
       - Estado inicial: `step = 0`
       - Progress bar animada (0% → 33% → 66% → 100%)
       - Layout responsivo com Card principal
       - Navegação entre passos com animações (Framer Motion)
   └─ 🚦 STATUS: ✅ **COMPLETO**
         └─ Estrutura do wizard funcional

---

## 📋 **PARTE 3: SELEÇÃO DE TEMPLATE**

### [ETAPA 4: Seleção de Template] ---------------------> [ETAPA 5: Formulário de Dados]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/comecar/page.tsx` (linhas 453-579)
   ├─ ⚙️ Lógica Detectada: 
       - Renderiza 3 templates:
         * `essencial` - R$ 189,90
         * `profissional` - R$ 229,90
         * `empresarial` - R$ 349,90
       - Cada template tem:
         * Preview visual com scroll automático no hover
         * Botão "Ver ao vivo" (abre demo em nova aba)
         * Badge de estilo e popularidade
         * Botão "Quero Este Site" / "Selecionado"
       - `handleTemplateSelect()`:
         * Atualiza `formData.template`
         * Define `formData.plano` e `formData.preco`
         * Avança automaticamente para `step = 1` após 300ms
   └─ 🚦 STATUS: ✅ **COMPLETO**
         └─ Seleção de template funcional com transição suave

---

## 📋 **PARTE 4: COLETA DE DADOS DO CLIENTE**

### [ETAPA 5: Formulário de Dados] ---------------------> [ETAPA 6: Validação de Domínio]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/comecar/page.tsx` (linhas 581-866)
   ├─ ⚙️ Lógica Detectada: 
       - **Campos Coletados:**
         * Nome completo (obrigatório)
         * WhatsApp (obrigatório)
         * Email (obrigatório, validação regex)
         * Empresa (obrigatório)
         * Nicho (obrigatório, via Combobox - `lib/niches.ts`)
         * Documento (CPF ou CNPJ, obrigatório)
         * Domínio (obrigatório)
       - **Validações:**
         * CPF/CNPJ com máscara automática (`DocumentInput`)
         * Validação de dígitos verificadores
         * Email com regex básico
         * Todos os campos obrigatórios bloqueiam avanço
       - **Componentes:**
         * `DocumentInput` - Input com toggle CPF/CNPJ
         * Combobox de nichos (26 opções disponíveis)
   └─ 🚦 STATUS: ✅ **COMPLETO**
         └─ Formulário completo com validações robustas

---

## 📋 **PARTE 5: VALIDAÇÃO DE DOMÍNIO**

### [ETAPA 6: Validação de Domínio] ---------------------> [ETAPA 7: Criação do Lead]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/comecar/page.tsx` (linhas 174-198, 786-848)
   ├─ 📂 Action: `app/actions/checkDomain.ts`
   ├─ ⚙️ Lógica Detectada: 
       - **Dois Modos de Domínio:**
         1. **Domínio Novo** (padrão):
            * Chama `checkDomainAvailability()` via Server Action
            * Consulta API RDAP do Registro.br (`https://rdap.registro.br/domain/`)
            * Sanitiza domínio (remove http/https/www, adiciona .com.br se necessário)
            * Status 404 = disponível, Status 200 = indisponível
         2. **Domínio Existente**:
            * Validação regex básica (formato válido)
            * Não consulta API
            * Apenas valida formato
       - **Estados:**
         * `idle` - Inicial
         * `checking` - Verificando (com loading)
         * `available` - Disponível (verde, permite avanço)
         * `unavailable` - Indisponível (vermelho, bloqueia avanço)
       - **Bloqueio de Avanço:**
         * Domínio novo: só avança se `domainStatus === "available"`
         * Domínio existente: só avança se `existingDomainValidated === true`
   └─ 🚦 STATUS: ✅ **COMPLETO**
         └─ Validação de domínio funcional para ambos os casos

---

## 📋 **PARTE 6: CRIAÇÃO DO LEAD NO BANCO**

### [ETAPA 7: Criação do Lead] ---------------------> [ETAPA 8: Resumo e Checkout]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/comecar/page.tsx` (linhas 270-290)
   ├─ 📂 Action: `app/actions/createLead.ts`
   ├─ 📂 Banco: Supabase (tabela `leads`)
   ├─ ⚙️ Lógica Detectada: 
       - **Trigger:** Ao clicar "Ir para Resumo" no passo 1
       - **Processo:**
         1. Valida todos os campos obrigatórios
         2. Valida formato de email
         3. Limpa máscara do documento (remove pontos/traços)
         4. Insere no Supabase via `supabaseAdmin` (bypass RLS)
         5. Define `status = "PENDING"` por padrão
         6. Gera UUID para `id`
       - **Campos Salvos:**
         * `id`, `nome`, `whatsapp`, `email`, `empresa`, `nicho`
         * `dominio`, `template`, `plano`, `preco`
         * `cnpj` (documento limpo), `tipo_documento` (cpf/cnpj)
         * `status` (PENDING), `created_at` (auto)
       - **Feedback:**
         * Animação de sucesso antes de avançar
         * Exibe `leadId` no passo 2
         * Tratamento de erros com mensagem
   └─ 🚦 STATUS: ✅ **COMPLETO**
         └─ Criação de lead funcional com validações e feedback

---

## 📋 **PARTE 7: RESUMO E CHECKOUT**

### [ETAPA 8: Resumo e Checkout] ---------------------> [ETAPA 9: Redirecionamento para Pagamento]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/comecar/page.tsx` (linhas 869-1065)
   ├─ ⚙️ Lógica Detectada: 
       - **Resumo Exibido:**
         * Template selecionado (imagem, nome, estilo)
         * Domínio validado
         * Nicho selecionado
         * Preço mensal (template.price)
         * Instalação: "Grátis" (riscado R$ 500,00)
       - **Aceite Legal:**
         * Checkbox obrigatório
         * Links para "Termos de Uso" e "Contrato de Prestação"
         * Modais legais (`LegalModal`) com conteúdo placeholder
         * Botão desabilitado até aceitar termos
       - **Botão Final:**
         * "Finalizar e Ativar Site 🔒"
         * Chama `getPaymentLink(formData.template)`
         * Abre link em nova aba (`target="_blank"`)
   └─ 🚦 STATUS: ⚠️ **PARCIAL**
         └─ **PROBLEMA:** Links de pagamento vazios (veja Parte 8)

---

## 📋 **PARTE 8: PAGAMENTO (ASAAS)** ⚠️ **CRÍTICO**

### [ETAPA 9: Redirecionamento para Pagamento] ---------------------> [ETAPA 10: Processamento do Pagamento]
   │
   ├─ 📂 Arquivo Principal: `app/(marketing)/comecar/page.tsx` (linhas 67-76)
   ├─ ⚙️ Lógica Detectada: 
       - **Função `getPaymentLink()`:**
         ```typescript
         const getPaymentLink = (templateId: string): string => {
           const links: Record<string, string> = {
             essencial: "", // TODO: Link Asaas para Essencial (R$ 189,90/mês)
             profissional: "", // TODO: Link Asaas para Profissional (R$ 229,90/mês)
             empresarial: "", // TODO: Link Asaas para Empresarial (R$ 349,90/mês)
           }
           return links[templateId] || "#"
         }
         ```
       - **Problema:** Todos os links retornam string vazia `""`
       - **Consequência:** Cliente clica e vai para `#` (página vazia)
   └─ 🚦 STATUS: ❌ **FALTANDO/QUEBRADO**
         └─ **AÇÃO NECESSÁRIA:** 
              - Configurar links do Asaas para cada template
              - Links devem ser de pagamento recorrente (assinatura mensal)
              - Formato esperado: URL completa do Asaas

---

## 📋 **PARTE 9: WEBHOOK E CONFIRMAÇÃO DE PAGAMENTO** ❌ **CRÍTICO**

### [ETAPA 10: Processamento do Pagamento] ---------------------> [ETAPA 11: Webhook de Confirmação]
   │
   ├─ 📂 Arquivo Principal: **NÃO EXISTE**
   ├─ ⚙️ Lógica Detectada: 
       - **Nenhuma rota de webhook encontrada**
       - Não existe `/api/webhook/asaas` ou similar
       - Não há processamento de eventos do Asaas
   └─ 🚦 STATUS: ❌ **FALTANDO/QUEBRADO**
         └─ **AÇÃO NECESSÁRIA:** 
              - Criar rota `/app/api/webhook/asaas/route.ts`
              - Validar assinatura do webhook (token do Asaas)
              - Processar eventos: `PAYMENT_RECEIVED`, `PAYMENT_OVERDUE`, etc.
              - Atualizar status do lead no banco

### [ETAPA 11: Webhook de Confirmação] ---------------------> [ETAPA 12: Atualização do Lead]
   │
   ├─ 📂 Arquivo Principal: **NÃO EXISTE**
   ├─ ⚙️ Lógica Detectada: 
       - **Nenhuma Server Action para atualizar lead**
       - Não existe `updateLeadStatus()` ou similar
       - Status do lead permanece `PENDING` mesmo após pagamento
   └─ 🚦 STATUS: ❌ **FALTANDO/QUEBRADO**
         └─ **AÇÃO NECESSÁRIA:** 
              - Criar `app/actions/updateLeadStatus.ts`
              - Função para atualizar `leads.status` (PENDING → PAID)
              - Vincular pagamento ao lead (via email ou leadId no webhook)
              - Salvar dados do pagamento (valor, data, ID do Asaas)

---

## 📋 **PARTE 10: PÓS-PAGAMENTO E ÁREA DO CLIENTE** ❌ **CRÍTICO**

### [ETAPA 12: Atualização do Lead] ---------------------> [ETAPA 13: Redirecionamento Pós-Pagamento]
   │
   ├─ 📂 Arquivo Principal: **NÃO EXISTE**
   ├─ ⚙️ Lógica Detectada: 
       - **Nenhuma página de sucesso**
       - Não existe `/sucesso` ou `/obrigado`
       - Cliente não recebe confirmação após pagamento
   └─ 🚦 STATUS: ❌ **FALTANDO/QUEBRADO**
         └─ **AÇÃO NECESSÁRIA:** 
              - Criar `app/(marketing)/sucesso/page.tsx`
              - Página de confirmação com:
                * Mensagem de sucesso
                * Resumo do pedido
                * Próximos passos (prazo de entrega, contato)
                * Link para área do cliente (quando implementada)

### [ETAPA 13: Redirecionamento Pós-Pagamento] ---------------------> [ETAPA 14: Área do Cliente/Dashboard]
   │
   ├─ 📂 Arquivo Principal: **NÃO EXISTE**
   ├─ ⚙️ Lógica Detectada: 
       - **Nenhum sistema de autenticação**
       - Supabase Auth não está configurado
       - Não há criação de usuário após pagamento
       - Não há dashboard/área do cliente
   └─ 🚦 STATUS: ❌ **FALTANDO/QUEBRADO**
         └─ **AÇÃO NECESSÁRIA:** 
              - Configurar Supabase Auth
              - Criar usuário após pagamento confirmado
              - Criar área do cliente (`app/(dashboard)/`)
              - Dashboard com:
                * Status do pedido
                * Informações do site
                * Histórico de pagamentos
                * Suporte/contato

---

## 📋 **PARTE 11: OBSERVAÇÕES ADICIONAIS**

### [OnboardingModal - Componente Não Utilizado]
   │
   ├─ 📂 Arquivo Principal: `components/marketing/OnboardingModal.tsx`
   ├─ ⚙️ Lógica Detectada: 
       - Modal de onboarding alternativo com 4 passos
       - Coleta: nome, empresa, estilo visual, nicho, domínio
       - Ao final, redireciona para WhatsApp (não salva no banco)
       - **Problema:** Não está sendo usado na landing page
   └─ 🚦 STATUS: ⚠️ **PARCIAL**
         └─ Componente existe mas não está integrado

### [Dependências de Banco de Dados]
   │
   ├─ 📂 Schema: `prisma/schema.prisma`
   ├─ ⚙️ Estrutura Atual: 
       - ✅ Tabela `leads` existe e funcional
       - ✅ Campo `status` existe (PENDING, PAID, CANCELED)
       - ❌ Não há tabela `users` ou `customers`
       - ❌ Não há relação entre `leads` e pagamentos
       - ❌ Não há tabela de `payments` ou `subscriptions`
   └─ 🚦 STATUS: ⚠️ **PARCIAL**
         └─ Estrutura básica existe, mas falta relacionamentos

---

## 📊 **RESUMO EXECUTIVO**

### ✅ **O QUE ESTÁ FUNCIONANDO:**
1. Landing page completa
2. Redirecionamento para `/comecar`
3. Wizard de 3 passos
4. Seleção de template
5. Coleta de dados completa
6. Validação de domínio (novo e existente)
7. Criação de lead no banco
8. Resumo e checkout (UI)

### ❌ **O QUE ESTÁ FALTANDO (CRÍTICO):**
1. **Links de pagamento do Asaas** (Parte 8)
2. **Webhook de confirmação** (Parte 9)
3. **Atualização de status** (Parte 9)
4. **Página de sucesso** (Parte 10)
5. **Sistema de autenticação** (Parte 10)
6. **Área do cliente** (Parte 10)

### ⚠️ **O QUE PRECISA ATENÇÃO:**
1. OnboardingModal não utilizado
2. Estrutura de banco incompleta (falta relacionamentos)
3. Não há notificações (email/SMS)
4. Não há vinculação pagamento-lead automática

---

## 🎯 **PRIORIDADES DE IMPLEMENTAÇÃO**

### **Prioridade 1 - Bloqueadores:**
1. Configurar links do Asaas
2. Criar webhook de pagamento
3. Criar função de atualização de status
4. Criar página de sucesso

### **Prioridade 2 - Importante:**
5. Implementar autenticação
6. Criar área do cliente
7. Vincular pagamento ao lead

### **Prioridade 3 - Melhorias:**
8. Notificações por email
9. Dashboard administrativo
10. Integrar OnboardingModal (se necessário)

