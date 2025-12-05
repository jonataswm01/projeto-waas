# 🚀 GUIA DE IMPLEMENTAÇÃO - MUDANÇAS DE COPY E TERMOS

## 📋 DECISÕES FINAIS

✅ **Tom de Voz:** Amigável e Explicativo COM Urgência  
✅ **Blog:** Traduzir para "Seção de Notícias"  
✅ **Premium:** Traduzir para "Exclusivo"  
✅ **Termos em Inglês:** Traduzir todos (seguir recomendações)

---

## 🎯 TOM DE VOZ: AMIGÁVEL + EXPLICATIVO + URGÊNCIA

### **Princípios:**
- ✅ Explicar de forma clara e simples
- ✅ Não intimidar, mas criar urgência positiva
- ✅ Focar na solução e no que o cliente ganha
- ✅ Usar linguagem acessível (sem termos técnicos)
- ✅ Criar senso de oportunidade, não de ameaça

### **Exemplos de Aplicação:**

**Urgência Positiva:**
- ❌ "Enquanto você lê isso, seu concorrente acabou de fechar uma venda pelo Google."
- ✅ "Seu concorrente está vendendo pelo Google. E você? Não perca mais tempo."

**Explicativo:**
- ❌ "Sem site = Amador."
- ✅ "Ter um site profissional mostra que você é sério e confiável. Sem ele, você pode parecer amador."

**Amigável:**
- ❌ "3 Sinais de que sua empresa está com os dias contados no digital"
- ✅ "3 Motivos para ter um site profissional agora"

---

## 📝 SUBSTITUIÇÕES DE TERMOS

### **Tabela Completa de Traduções:**

| Termo Original | Tradução | Onde Usar |
|---------------|----------|-----------|
| Landing Page | **Página Única** | Todos os lugares |
| LP | **Página** | Abreviações |
| Template | **Modelo** | Todos os lugares |
| Setup | **Configuração** | Todos os lugares |
| Checkout | **Finalizar Pedido** | Onboarding |
| Mobile First | **Funciona Perfeitamente no Celular** | Recursos Técnicos |
| SEO | **Otimização para Google** ou **Aparecer no Google** | Todos os lugares |
| SSL | **Certificado de Segurança** | Recursos Técnicos |
| Blog | **Seção de Notícias** | Todos os lugares |
| Corporate | **Empresarial** | Todos os lugares |
| Authority | **Profissional** | Nomes de templates |
| Premium | **Exclusivo** | Nomes de templates |
| Clean | **Simples** | Nomes de templates |
| Tech Modern | **Moderno** | Nomes de templates |
| Big Tech | **Grandes Empresas** | Recursos Técnicos |
| Next.js | **Tecnologia Moderna** ou manter (é nome próprio) | Recursos Técnicos |

---

## 🔄 MUDANÇAS POR ARQUIVO

### **1. `app/(marketing)/page.tsx` - Landing Page**

#### **Hero Section:**
```diff
- "Enquanto você lê isso, seu concorrente acabou de fechar uma venda pelo Google."
+ "Seu concorrente está vendendo pelo Google. E você? Não perca mais tempo."

- "Sua empresa é invisível? O Instagram não é o suficiente. Tenha um Site Profissional, Otimizado e Seguro no ar em 7 dias. Sem investir milhares de reais."
+ "Sua empresa é invisível? O Instagram é importante, mas não é suficiente. Tenha um Site Profissional, Otimizado e Seguro no ar em 7 dias. Sem investir milhares de reais."
```

#### **Seção "O Diagnóstico":**
```diff
- "3 Sinais de que sua empresa está com os dias contados no digital:"
+ "3 Motivos para ter um site profissional agora:"

- "O Instagram não é seu."
+ "O Instagram não é sua propriedade."

- "Sem site = Amador."
+ "Sem site, você pode parecer amador. Ter um site profissional mostra que você é sério e confiável."

- "Sem SEO (Otimização), você é invisível para esse lucro."
+ "Sem otimização para o Google, você é invisível para esse lucro."
```

#### **Seção "A Solução":**
```diff
- "Ter um site de elite custava R$ 3.000,00. Até agora."
+ "Ter um site profissional custava R$ 3.000,00. Agora você paga apenas R$ 79,90 por mês."

- "Tecnologia sempre atualizada (Next.js)"
+ "Tecnologia sempre atualizada (tecnologia moderna)"
```

#### **Seção "A Vitrine":**
```diff
- "Não acredite em promessas. Veja resultados."
+ "Veja os modelos prontos. Escolha o ideal para você."

- "Escolha o nível de complexidade ideal para o seu negócio."
+ "Todos os modelos são otimizados para converter visitantes em clientes."

- "Institucional Corporate"
+ "Institucional Empresarial"

- "LP Authority"
+ "Página Profissional"

- "LP Essencial"
+ "Página Essencial"

- "Landing Page de Alta Conversão."
+ "Página única otimizada para converter visitantes em clientes."

- "Landing Page enxuta com foco total em WhatsApp"
+ "Página única focada em WhatsApp e chamadas diretas"
```

#### **Seção "Recursos Técnicos":**
```diff
- "Tecnologia de Big Tech. Preço de Pequena Empresa."
+ "Tecnologia das Grandes Empresas. Preço de Pequena Empresa."

- "Tecnologia Next.js. Carrega instantaneamente."
+ "Tecnologia moderna. Carrega na hora."

- "Mobile First"
+ "Funciona Perfeitamente no Celular"

- "Segurança SSL e Proteção contra ataques inclusos."
+ "Certificado de Segurança e Proteção contra ataques inclusos."
```

#### **Seção "A Oferta":**
```diff
- "Landing Page simples para começar a vender"
+ "Página única simples para começar a vender"

- "Landing Page Simples (Página Única)"
+ "Página Única Simples"

- "Otimização SEO (Google)"
+ "Otimização para aparecer no Google"

- "Blog Integrado (Opcional)"
+ "Seção de Notícias (Opcional)"

- "Setup e Configuração Zero"
+ "Configuração e Instalação Grátis"
```

#### **FAQ:**
```diff
- "Sim! Desenvolvemos toda a estrutura seguindo as melhores práticas de SEO (Otimização para Buscadores). Isso facilita que o Google leia e ranqueie seu site nas pesquisas da sua região."
+ "Sim! Desenvolvemos toda a estrutura otimizada para o Google encontrar seu site. Isso facilita que você apareça nas pesquisas da sua região."
```

---

### **2. `app/(marketing)/comecar/page.tsx` - Onboarding**

#### **Templates Array:**
```diff
const templates = [
  {
    id: "profissional",
-   name: "Clean Health",
-   style: "Clean/Health",
+   name: "Essencial - Para Começar",
+   style: "Simples e Direto",
    image: "/vet-full.jpg",
-   price: "R$ 97",
+   price: "R$ 79,90",
    demoUrl: "/sites/vetcare-aurora",
    isPopular: false,
  },
  {
    id: "essencial",
-   name: "Premium Aesthetic",
-   style: "Dark/Luxo",
+   name: "Profissional - Para Crescer",
+   style: "Exclusivo e Moderno",
    image: "/dentista-full.png",
-   price: "R$ 197",
+   price: "R$ 129,90",
    demoUrl: "/sites/implantes-premium",
    isPopular: false,
  },
  {
    id: "corporativo",
-   name: "Tech Modern",
-   style: "Tech/Modern",
+   name: "Corporativo - Para Empresas",
+   style: "Moderno e Completo",
    image: "/corporativo-nexus-full.png",
-   price: "R$ 297",
+   price: "R$ 199,90",
    demoUrl: "/sites/corporativo-nexus",
-   isPopular: true,
+   isPopular: true, // ⭐ MAIS POPULAR no mais caro
  },
]
```

#### **Template Prices:**
```diff
const templatePrices: Record<string, string> = {
- essencial: "R$ 197",
- profissional: "R$ 97",
- corporativo: "R$ 297",
+ essencial: "R$ 129,90",
+ profissional: "R$ 79,90",
+ corporativo: "R$ 199,90",
}
```

#### **Textos do Onboarding:**
```diff
- "Nossa Galeria de Templates"
+ "Escolha o modelo ideal para o seu negócio"

- "Cada design foi criado com atenção aos detalhes"
+ "Todos os modelos são otimizados para converter visitantes em clientes. Veja qual combina mais com você."

- "Selecione o template perfeito para o seu negócio"
+ "Escolha o modelo perfeito para o seu negócio"

- "Template profissional completo"
+ "Modelo profissional completo"

- "Checkout"
+ "Finalizar Pedido"
```

---

### **3. Outros Arquivos**

#### **Sites de Demo (WhatsApp Links):**
```diff
- "Plano Essencial (LP Simples)"
+ "Plano Essencial (Página Única)"

- "Plano Profissional (LP Avançada)"
+ "Plano Profissional (Página Avançada)"

- "Plano Corporativo (Institucional)"
+ "Plano Corporativo (Institucional Empresarial)"
```

---

## 📊 RESUMO DAS MUDANÇAS

### **Nomes dos Templates:**
1. **Essencial - Para Começar** (antes: Clean Health) - R$ 79,90
2. **Profissional - Para Crescer** (antes: Premium Aesthetic) - R$ 129,90
3. **Corporativo - Para Empresas** (antes: Tech Modern) - R$ 199,90 ⭐ **MAIS POPULAR**

### **Principais Traduções:**
- Landing Page → Página Única
- Template → Modelo
- Setup → Configuração
- Checkout → Finalizar Pedido
- Mobile First → Funciona Perfeitamente no Celular
- SEO → Otimização para Google / Aparecer no Google
- SSL → Certificado de Segurança
- Blog → Seção de Notícias
- Corporate → Empresarial
- Authority → Profissional
- Premium → Exclusivo
- Big Tech → Grandes Empresas

### **Tom de Voz Aplicado:**
- ✅ Amigável: Explica sem intimidar
- ✅ Explicativo: Deixa claro o que é cada coisa
- ✅ Urgência: "Não perca mais tempo", "agora", mas de forma positiva
- ✅ Simples: Palavras curtas e claras

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### **Arquivo 1: `app/(marketing)/page.tsx`**
- [ ] Hero Section (textos)
- [ ] Seção "O Diagnóstico" (títulos e textos)
- [ ] Seção "A Solução" (textos)
- [ ] Seção "A Vitrine" (nomes e descrições)
- [ ] Seção "Recursos Técnicos" (títulos e textos)
- [ ] Seção "A Oferta" (textos dos planos)
- [ ] FAQ (textos)

### **Arquivo 2: `app/(marketing)/comecar/page.tsx`**
- [ ] Array de templates (nomes, estilos, preços)
- [ ] Template prices object
- [ ] Textos do passo 1 (títulos)
- [ ] Textos do passo 3 (resumo)
- [ ] Labels e descrições

### **Arquivo 3: Sites de Demo**
- [ ] Links do WhatsApp (textos dos planos)
- [ ] (Se houver outros textos em inglês)

### **Arquivo 4: Componentes**
- [ ] (Verificar se há textos em componentes)

---

## 🎨 TABELA COMPARATIVA - PROPOSTA DE DESIGN

### **Estrutura Sugerida para Onboarding:**

```
┌─────────────────────────────────────────────────────────┐
│  Escolha o modelo ideal para o seu negócio              │
│  Todos incluem: Hospedagem + Domínio + Suporte         │
└─────────────────────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  ESSENCIAL   │  │ PROFISSIONAL  │  │ CORPORATIVO  │
│  Para Começar│  │ Para Crescer  │  │ Para Empresas│
│  R$ 79,90/mês│  │ R$ 129,90/mês│  │ R$ 199,90/mês│
│              │  │              │  │              │
│ ✅ 1 página  │  │ ✅ 5 páginas │  │ ✅ Site      │
│ ✅ WhatsApp  │  │ ✅ Google    │  │   completo  │
│ ✅ Básico    │  │ ✅ Notícias  │  │ ✅ Notícias  │
│              │  │              │  │ ✅ Avançado  │
│ [Ver Demo]   │  │ [Ver Demo]   │  │ [Ver Demo]   │
│              │  │              │  │              │
│ [ESCOLHER]   │  │ [ESCOLHER]   │  │ [ESCOLHER] ⭐│
└──────────────┘  └──────────────┘  └──────────────┘
```

---

## 🚀 PRÓXIMOS PASSOS

1. ✅ **Decisões tomadas** (tom de voz, traduções)
2. ⏳ **Implementar mudanças** nos arquivos
3. ⏳ **Criar tabela comparativa** no onboarding
4. ⏳ **Testar** todas as mudanças
5. ⏳ **Revisar** textos finais

---

**Última atualização:** Dezembro 2024  
**Status:** Pronto para implementação ✅

