# PLANEJAMENTO DE IMPLEMENTAÇÃO - PROJETO WEBJ

## 📊 STATUS ATUAL

### ✅ O QUE JÁ FOI FEITO

1. **Infraestrutura Base**
   - ✅ Next.js 15 com App Router configurado
   - ✅ TypeScript configurado
   - ✅ Tailwind CSS configurado
   - ✅ Shadcn UI inicializado
   - ✅ Framer Motion e Lucide React instalados
   - ✅ Configuração do Next.js para imagens externas (Unsplash)

2. **Componentes Base**
   - ✅ Button (Shadcn)
   - ✅ Card (Shadcn)
   - ✅ Accordion (Shadcn)
   - ✅ Badge (Shadcn)
   - ✅ Navbar (Marketing)
   - ✅ Footer (Marketing)
   - ✅ DemoBar (Barra flutuante para demos)

3. **Estrutura de Rotas**
   - ✅ Layout Marketing `(marketing)/`
   - ✅ Layout Sites `sites/`
   - ✅ Rotas dos 4 demos criadas (estrutura básica)

4. **Landing Page (Marketing)**
   - ✅ Hero Section completa com animações
   - ✅ Grid pattern background
   - ✅ CTA principal funcionando

---

## 🎯 O QUE PRECISA SER FEITO

### FASE 1: COMPLETAR LANDING PAGE (MARKETING) - PRIORIDADE ALTA

#### 1.1 Seção "O Diagnóstico" (A Dor)
- [ ] Criar componente de cards com os 3 problemas
- [ ] Card 1: "O Instagram não é seu"
- [ ] Card 2: "Sem site = Amador"
- [ ] Card 3: "Dinheiro na Mesa"
- [ ] Adicionar ícones apropriados (Lucide)
- [ ] Animações de entrada (Framer Motion)

#### 1.2 Seção "A Solução" (Modelo WaaS)
- [ ] Título: "Ter um site de elite custava R$ 3.000,00. Até agora."
- [ ] Tabela comparativa visual (Modelo Velho vs Modelo WebJ)
- [ ] Cards com checkmarks e X marks
- [ ] Design clean tech premium

#### 1.3 Seção "A Vitrine" (Portfólio)
- [ ] Grid de 4 cards (Bento Grid style)
- [ ] Card para cada demo:
  - Odontologia (Implantes Premium)
  - Energia Solar (Solar Tech)
  - Advocacia (Advocacia Civil)
  - Arquitetura (Studio Arquitetura)
- [ ] Imagens de preview (Unsplash)
- [ ] Botão "VER DEMO AO VIVO" em cada card
- [ ] Links funcionais para `/sites/[demo]`

#### 1.4 Seção "Recursos Técnicos"
- [ ] 4 cards com ícones:
  - Velocidade (Next.js)
  - Mobile First
  - Blindado (Segurança)
  - Suporte Humanizado
- [ ] Ícones apropriados (Lucide)
- [ ] Textos traduzidos do "tecniquês" para "lucrês"

#### 1.5 Seção "A Oferta" (Preço)
- [ ] Box de preço destacado
- [ ] Ancoragem: De R$ 2.500 por R$ 100/mês
- [ ] Checklist de inclusos (5 itens)
- [ ] CTA gigante: "QUERO MEU SITE NO AR AGORA"
- [ ] Badge "Sem fidelidade. Sem multas."

#### 1.6 Seção FAQ
- [ ] Usar componente Accordion (Shadcn)
- [ ] 3 perguntas principais:
  1. "O site é meu?"
  2. "Tenho fidelidade?"
  3. "Vocês escrevem os textos?"
- [ ] Respostas conforme copywriting

#### 1.7 Ajustes Finais Landing Page
- [ ] Adicionar Badge "PARE DE PERDER VENDAS HOJE" no Hero
- [ ] Micro-copy "Assinatura mensal. Cancele quando quiser." no Hero
- [ ] Espaçamento e padding entre seções
- [ ] Alternância de fundo (branco/slate-50)
- [ ] Responsividade mobile-first

---

### FASE 2: IMPLEMENTAR SITES DE DEMO - PRIORIDADE ALTA

#### 2.1 Demo 1: Implantes Premium (Odontologia)
- [ ] Layout específico (Navbar branco/azul)
- [ ] Hero Section com imagem de clínica dental (Unsplash)
- [ ] Seção "Sobre" com foco em agendamento
- [ ] Seção "Serviços" (implantes, clareamento, etc.)
- [ ] Seção "Agendamento" com CTA para WhatsApp
- [ ] Galeria de antes/depois (placeholders)
- [ ] Depoimentos (opcional)
- [ ] Footer com informações de contato

#### 2.2 Demo 2: Solar Tech (Energia Solar)
- [ ] Layout específico (Navbar tech/verde/laranja)
- [ ] Hero Section com imagem de painéis solares (Unsplash)
- [ ] Seção "Como Funciona" (explicar economia)
- [ ] Calculadora de economia (simples, visual)
- [ ] Seção "Benefícios" (cards)
- [ ] Formulário de orçamento (ou CTA WhatsApp)
- [ ] Galeria de instalações
- [ ] Footer

#### 2.3 Demo 3: Advocacia Civil
- [ ] Layout específico (Navbar sóbrio/azul marinho/serifa)
- [ ] Hero Section com imagem de escritório (Unsplash)
- [ ] Seção "Áreas de Atuação"
- [ ] Seção "Sobre o Advogado" (autoridade)
- [ ] Seção "Processos" ou "Resultados"
- [ ] CTA para consulta
- [ ] Footer profissional

#### 2.4 Demo 4: Studio Arquitetura
- [ ] Layout específico (Navbar minimalista/preto e branco)
- [ ] Hero Section com imagem de arquitetura moderna (Unsplash)
- [ ] Galeria de projetos (grid de imagens)
- [ ] Seção "Sobre o Studio"
- [ ] Seção "Serviços" (projetos residenciais, comerciais)
- [ ] Formulário de contato ou CTA
- [ ] Footer minimalista

#### 2.5 Componentes Reutilizáveis para Demos
- [ ] Criar pasta `components/demos/`
- [ ] Componente `HeroSection` (reutilizável com props)
- [ ] Componente `ServiceCard` (para serviços)
- [ ] Componente `ImageGallery` (para galerias)
- [ ] Componente `ContactForm` (opcional, ou apenas CTA WhatsApp)
- [ ] Componente `TestimonialCard` (para depoimentos)

---

### FASE 3: LAYOUTS ESPECÍFICOS DOS DEMOS - PRIORIDADE MÉDIA

#### 3.1 Layout Implantes Premium
- [ ] Navbar branco com acentos azuis
- [ ] Logo/identidade visual
- [ ] Menu de navegação (se necessário)
- [ ] CTA WhatsApp fixo ou no navbar

#### 3.2 Layout Solar Tech
- [ ] Navbar tech com cores verde/laranja
- [ ] Visual moderno e tecnológico
- [ ] Gradientes sutis (se necessário)

#### 3.3 Layout Advocacia Civil
- [ ] Navbar sóbrio azul marinho
- [ ] Tipografia serifada (se disponível)
- [ ] Visual profissional e confiável

#### 3.4 Layout Studio Arquitetura
- [ ] Navbar minimalista preto e branco
- [ ] Tipografia clean
- [ ] Espaçamento generoso

---

### FASE 4: OTIMIZAÇÕES E POLIMENTO - PRIORIDADE BAIXA

#### 4.1 Performance
- [ ] Otimizar imagens (Next.js Image)
- [ ] Lazy loading de seções
- [ ] Verificar Core Web Vitals

#### 4.2 SEO
- [ ] Meta tags em todas as páginas
- [ ] Open Graph tags
- [ ] Sitemap.xml
- [ ] robots.txt

#### 4.3 Acessibilidade
- [ ] Alt text em todas as imagens
- [ ] Contraste de cores (WCAG)
- [ ] Navegação por teclado
- [ ] ARIA labels onde necessário

#### 4.4 Animações e Micro-interações
- [ ] Scroll animations (Framer Motion)
- [ ] Hover effects em cards
- [ ] Transições suaves entre seções
- [ ] Loading states (se necessário)

---

## 📋 CHECKLIST DE PRIORIDADES

### 🔴 CRÍTICO (Fazer Primeiro)
1. Completar Landing Page com todas as seções
2. Implementar pelo menos 2 demos completos (para validação)
3. Garantir que todos os CTAs de WhatsApp funcionam

### 🟡 IMPORTANTE (Fazer Depois)
4. Completar os outros 2 demos
5. Criar layouts específicos para cada demo
6. Adicionar imagens reais do Unsplash

### 🟢 DESEJÁVEL (Polimento Final)
7. Otimizações de performance
8. SEO básico
9. Acessibilidade
10. Animações extras

---

## 🎨 DIRETRIZES DE DESIGN

### Cores (Tailwind)
- Fundo: `bg-white` e `bg-slate-50` (alternar)
- Texto: `text-slate-900` (títulos), `text-slate-600` (parágrafos)
- Acento: `bg-blue-600` hover `bg-blue-700`
- Bordas: `border-slate-200`

### Tipografia
- Fonte: Inter ou Geist Sans (padrão Next.js)
- Títulos: Bold, tracking-tight
- Mobile-first: Texto grande no mobile, gigante no desktop

### Componentes
- Usar Shadcn UI obrigatoriamente para: Cards, Buttons, Accordion, Badge
- Framer Motion para animações suaves
- Lucide React para ícones

---

## 📝 NOTAS IMPORTANTES

1. **Imagens**: Usar Unsplash com URLs diretas via Next.js Image component
2. **WhatsApp**: Todos os CTAs devem usar o número: `5516997330113`
3. **Responsividade**: Mobile-first, testar em diferentes tamanhos
4. **Copywriting**: Seguir rigorosamente os textos do `PROJETO_COPYWRITING.md`
5. **Performance**: Manter o site rápido (Next.js já ajuda com isso)

---

## 🚀 PRÓXIMOS PASSOS IMEDIATOS

1. **Começar pela Landing Page:**
   - Implementar seção "O Diagnóstico"
   - Implementar seção "A Solução"
   - Implementar seção "A Vitrine"

2. **Depois partir para os Demos:**
   - Começar com Implantes Premium (mais simples)
   - Depois Solar Tech
   - Depois os outros dois

3. **Testar e iterar:**
   - Verificar todos os links
   - Testar responsividade
   - Validar copywriting

---

**Última atualização:** Baseado na análise dos documentos em `docs/`

