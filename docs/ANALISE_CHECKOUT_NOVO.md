# 📋 ANÁLISE E PLANO DE IMPLEMENTAÇÃO - NOVO CHECKOUT LUMINA

**Data:** Janeiro 2025  
**Baseado em:** DOC original + Referências HostGator + Estrutura atual do projeto

---

## 🎯 ANÁLISE DA PROPOSTA

### ✅ **Pontos Fortes Identificados**

1. **Experiência Premium Alinhada**
   - Similar à configuração de carro: Modelo → Personalização → Finalização
   - Layout limpo, focado em conversão
   - Sidebar sticky com resumo sempre visível

2. **Redução de Fricção**
   - Validação de domínio ANTES de pedir CPF (escolhas difíceis primeiro)
   - Confirmação do modelo escolhido (reforço emocional)
   - Ciclo anual como padrão com destaque visual

3. **Arquitetura Técnica Sólida**
   - Rotas isoladas `(checkout)/` sem distrações
   - Zustand para estado simples e persistente
   - Server Actions já existentes (checkDomain, createLead)

---

## 💡 **ANÁLISE: "ETAPA DE CARRINHO" COMO DIFERENCIAL**

### **O que seria a "Etapa de Carrinho"?**

Baseado nas referências do HostGator, a "etapa de carrinho" seria uma **página intermediária dedicada** onde o usuário:

1. **Vê o resumo completo** do que está configurando
2. **Pode ajustar configurações** (ciclo, domínio, add-ons futuros)
3. **Tem visibilidade total** dos valores antes de prosseguir
4. **Sente controle** sobre a compra (não é apenas um "carrinho vazio")

### **Vantagens desta Abordagem:**

✅ **Diferencial Competitivo**
- A maioria dos SaaS vai direto para checkout após escolher plano
- Ter uma etapa dedicada de "configuração/carrinho" é mais premium
- Alinha com a experiência de comprar carro (você vê tudo antes de assinar)

✅ **Redução de Abandono**
- Usuário vê exatamente o que está comprando
- Pode revisar antes de inserir dados pessoais
- Transparência total aumenta confiança

✅ **Oportunidade de Upsell**
- Espaço para mostrar add-ons futuros (SEO Plus, Suporte Premium, etc.)
- Pode sugerir upgrade de plano baseado na escolha

✅ **Melhor UX**
- Separa claramente: "Configurar" → "Revisar" → "Identificar" → "Pagar"
- Cada etapa tem propósito específico

### **Estrutura Proposta com Etapa de Carrinho:**

```
Step 1: CONFIGURAÇÃO (Nova página)
  - Escolha do Modelo (se não veio da landing)
  - Escolha do Ciclo (Mensal/Anual)
  - Validação de Domínio
  → Botão: "Adicionar ao Carrinho" ou "Continuar para Revisão"

Step 2: CARRINHO/REVISÃO (Nova página - DIFERENCIAL)
  - Resumo visual completo do pedido
  - Possibilidade de editar ciclo/domínio
  - Lista de itens (Assinatura, Modelo, Domínio)
  - Total destacado
  → Botão: "Continuar para Identificação"

Step 3: IDENTIDADE (Nova página)
  - Login/Cadastro (Supabase Auth)
  - Dados Fiscais (CPF/CNPJ) - reutilizar componente existente
  → Botão: "Continuar para Pagamento"

Step 4: PAGAMENTO (Nova página)
  - Resumo final
  - Integração futura com Asaas API
  → Botão: "Finalizar Compra"
```

### **Recomendação:**

**SIM, implementar a etapa de carrinho!** É um diferencial real e alinha perfeitamente com a experiência premium que você busca. Vai além de um checkout tradicional e cria uma jornada de "configuração" ao invés de apenas "compra".

---

## 📊 **VALORES E PLANOS (Confirmados)**

### **Preços Mensais:**
- Essencial: **R$ 185,90/mês**
- Profissional: **R$ 225,90/mês**
- Empresarial: **R$ 345,90/mês**

### **Preços Anuais (valor mensal):**
- Essencial: **R$ 95,90/mês** (≈48% desconto)
- Profissional: **R$ 125,90/mês** (≈44% desconto)
- Empresarial: **R$ 195,90/mês** (≈43% desconto)

### **Cálculo de Economia:**
- Essencial: R$ 185,90 × 12 = R$ 2.230,80 (anual cheio) vs R$ 95,90 × 12 = R$ 1.150,80 (anual) = **Economia de R$ 1.080,00**
- Profissional: R$ 225,90 × 12 = R$ 2.710,80 vs R$ 125,90 × 12 = R$ 1.510,80 = **Economia de R$ 1.200,00**
- Empresarial: R$ 345,90 × 12 = R$ 4.150,80 vs R$ 195,90 × 12 = R$ 2.350,80 = **Economia de R$ 1.800,00**

### **Domínio:**
- **Grátis** no plano anual
- **R$ 40,00** no plano mensal (valor a confirmar, mas seguindo referência do doc)

---

## 🏗️ **ARQUITETURA PROPOSTA**

### **Estrutura de Rotas:**

```
app/
├── (checkout)/                    # Grupo isolado (sem navbar/footer)
│   ├── layout.tsx                 # Layout Clean (Logo + Progress + Segurança)
│   │
│   ├── checkout/
│   │   ├── page.tsx               # Redirect → /checkout/step-1
│   │   ├── store.ts               # Zustand Store (com localStorage)
│   │   │
│   │   ├── step-1/                # ETAPA 1: CONFIGURAÇÃO
│   │   │   └── page.tsx           # Modelo + Ciclo + Domínio
│   │   │
│   │   ├── step-2/                # ETAPA 2: CARRINHO/REVISÃO (DIFERENCIAL)
│   │   │   └── page.tsx           # Resumo completo + Edição
│   │   │
│   │   ├── step-3/                # ETAPA 3: IDENTIDADE
│   │   │   └── page.tsx           # Login/Cadastro + Dados Fiscais
│   │   │
│   │   └── step-4/                # ETAPA 4: PAGAMENTO
│   │       └── page.tsx           # Cartão/Pix + Resumo Final
│   │
│   └── payment-success/           # Página de Obrigado
│       └── page.tsx
```

### **Componentes a Criar:**

```
components/
└── checkout/
    ├── checkout-layout.tsx        # Layout com Progress Indicator
    ├── progress-indicator.tsx     # Barra (desktop) + Círculo (mobile)
    ├── order-summary.tsx          # Sidebar Sticky (OrderSummary)
    ├── model-hero.tsx             # Card de confirmação do modelo
    ├── plan-selector.tsx          # Radio Cards (Mensal/Anual)
    ├── domain-setup.tsx           # Validação de domínio (reutilizar lógica)
    ├── cart-review.tsx            # Página de revisão do carrinho
    └── [reutilizar existentes]
        ├── document-input.tsx     # ✅ Já existe
        └── legal-modal.tsx        # ✅ Já existe
```

---

## 🗄️ **GERENCIAMENTO DE ESTADO (Zustand)**

### **Store com Persistência localStorage:**

```typescript
// app/(checkout)/checkout/store.ts

interface CheckoutState {
  // Configuração do Produto
  selectedModelId: string | null;        // 'essencial' | 'profissional' | 'empresarial'
  billingCycle: 'monthly' | 'annual';      // Default: 'annual'
  domain: string | null;
  domainValidated: boolean;
  
  // Dados do Usuário (Step 3)
  email: string | null;
  customerData: {
    document: string;                      // CPF/CNPJ
    name: string;
    phone: string;
    tipoDocumento: 'cpf' | 'cnpj';
  } | null;

  // Actions
  setModel: (modelId: string) => void;
  setCycle: (cycle: 'monthly' | 'annual') => void;
  setDomain: (domain: string, validated: boolean) => void;
  setCustomer: (data: CustomerData) => void;
  reset: () => void;
  
  // Getters
  getTotalPrice: () => number;
  getDomainPrice: () => number;
  getSavings: () => number;
  isStepComplete: (step: number) => boolean;
}
```

### **Persistência localStorage:**
- Salvar estado completo no localStorage
- Restaurar ao carregar página
- Limpar após pagamento bem-sucedido

---

## 🎨 **DESIGN SYSTEM (Aurora Glass)**

### **Cards:**
- Fundo branco (`bg-white`)
- Borda sutil (`border border-slate-200`)
- Sombra suave (`shadow-sm`)
- Padding generoso (`p-6`)

### **Seleção:**
- Borda colorida (`border-blue-500`)
- Fundo tintado (`bg-blue-50`)
- Transição suave (`transition-all`)

### **Botões:**
- Primários: Gradientes (`bg-gradient-to-r from-blue-600 to-purple-600`)
- Secundários: Outline (`border border-slate-300`)

### **Tipografia:**
- Títulos: `text-2xl font-bold text-slate-900`
- Corpo: `text-base text-slate-700`
- Destaques: `text-lg font-semibold`

---

## 📱 **PROGRESS INDICATOR**

### **Desktop:**
- Barra horizontal no topo
- Segmentos preenchidos conforme progresso
- Texto: "Etapa X de 4" + "Próximo: Nome da Etapa"

### **Mobile:**
- Círculo no topo
- Preenchimento progressivo
- Número no centro: "4/6" (exemplo)
- Texto abaixo: "Etapa X de 4"

---

## 🔄 **FLUXO COMPLETO**

### **1. Entrada no Checkout:**
```
Landing Page → Clica "Começar" → /checkout?model=essencial
ou
Landing Page → Clica "Ver Planos" → Escolhe modelo → /checkout?model=profissional
```

### **2. Step 1: Configuração**
- Se `?model=` na URL → Mostra confirmação do modelo
- Se não → Mostra seleção de modelos
- Seleciona ciclo (default: anual)
- Valida domínio
- Botão: "Continuar para Revisão"

### **3. Step 2: Carrinho/Revisão (DIFERENCIAL)**
- Resumo visual completo
- Lista de itens com valores
- Total destacado
- Botão "Editar" para ciclo/domínio
- Botão: "Continuar para Identificação"

### **4. Step 3: Identidade**
- Login/Cadastro (Supabase Auth)
- Se já logado → Pula para dados fiscais
- Dados Fiscais (CPF/CNPJ) - reutilizar componente
- Botão: "Continuar para Pagamento"

### **5. Step 4: Pagamento**
- Resumo final
- Métodos de pagamento (placeholder)
- Aceite de termos (reutilizar LegalModal)
- Botão: "Finalizar Compra"
- → Redireciona para `/payment-success`

---

## ✅ **COMPONENTES A REUTILIZAR**

1. ✅ **DocumentInput** (`components/checkout/document-input.tsx`)
   - Validação CPF/CNPJ
   - Máscaras
   - Toggle CPF/CNPJ

2. ✅ **LegalModal** (`components/checkout/legal-modal.tsx`)
   - Modal de termos
   - Aceite legal

3. ✅ **checkDomainAvailability** (`app/actions/checkDomain.ts`)
   - Validação de domínio
   - Integração Registro.br

4. ✅ **createLead** (`app/actions/createLead.ts`)
   - Salvar lead no Supabase
   - Validações

5. ✅ **Supabase Auth** (`supabase/client.ts`)
   - Login/Cadastro
   - Sessão do usuário

---

## 🚀 **PLANO DE IMPLEMENTAÇÃO**

### **Fase 1: Fundação (Store + Layout)**
1. Instalar Zustand
2. Criar store com persistência localStorage
3. Criar layout do checkout (isolado)
4. Criar Progress Indicator

### **Fase 2: Step 1 (Configuração)**
1. Criar página step-1
2. Componente ModelHero
3. Componente PlanSelector
4. Componente DomainSetup (reutilizar lógica)
5. Integrar com store

### **Fase 3: Step 2 (Carrinho - DIFERENCIAL)**
1. Criar página step-2
2. Componente CartReview
3. Componente OrderSummary (Sidebar)
4. Lógica de edição

### **Fase 4: Step 3 (Identidade)**
1. Criar página step-3
2. Integrar Supabase Auth
3. Reutilizar DocumentInput
4. Validações

### **Fase 5: Step 4 (Pagamento)**
1. Criar página step-4
2. Placeholder para integração Asaas
3. Reutilizar LegalModal
4. Página de sucesso

### **Fase 6: Polimento**
1. Responsividade mobile
2. Animações
3. Testes
4. Ajustes finais

---

## 🎯 **PRÓXIMOS PASSOS**

1. ✅ Validar arquitetura proposta
2. ✅ Confirmar implementação da etapa de carrinho
3. ✅ Iniciar Fase 1 (Store + Layout)
4. ✅ Implementar Step 1
5. ✅ Implementar Step 2 (Diferencial)
6. ✅ Implementar Step 3
7. ✅ Implementar Step 4
8. ✅ Polimento final

---

## 📝 **OBSERVAÇÕES IMPORTANTES**

1. **Modelos vs Planos:**
   - Modelos (templates) estão vinculados aos planos
   - Essencial → essencial-pet
   - Profissional → corporativo-nexus
   - Empresarial → implantes-premium
   - Deixar espaço para criar mais modelos futuros

2. **Domínio:**
   - Grátis no anual
   - R$ 40,00 no mensal (confirmar valor)

3. **Integração Asaas:**
   - Por enquanto placeholder
   - Futuro: API do Asaas para criar assinatura dinâmica

4. **Persistência:**
   - localStorage para manter carrinho entre sessões
   - Limpar após pagamento bem-sucedido

---

**Status:** ✅ Análise completa - Pronto para implementação
