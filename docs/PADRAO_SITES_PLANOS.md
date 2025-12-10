# Padrão de Design: Sites por Plano

## 📊 Visão Geral dos 3 Planos

| Plano | Páginas | Características | Diferenciais |
|-------|---------|-----------------|--------------|
| **Essencial** | 1 página única | Design minimalista, foco em conversão | Página única, sem navegação complexa |
| **Profissional** | 4-5 páginas | Site completo multi-página | Navbar, footer completo, páginas dedicadas |
| **Empresarial** | Ilimitado | Páginas longas, animações, efeitos hover | Páginas single para cada serviço/produto |

---

## 🎯 PLANO ESSENCIAL

### Estrutura
**1 página única** com todas as seções em rolagem

### Seções (5 seções)
1. **Hero** - Layout assimétrico com título, descrição e bloco lateral
2. **Serviços** - Grid assimétrico com preview de serviços
3. **CTA Final** - Card horizontal com chamada para WhatsApp
4. **Contato** - Grid 2 colunas com informações básicas
5. **Footer** - Footer simples (copyright apenas)

### Características
- ✅ Sem navbar (ou navbar mínima)
- ✅ Sem navegação complexa
- ✅ Footer simples
- ✅ Foco total em conversão WhatsApp
- ✅ Design autoral (mesmo padrão dos outros)

### Design Pattern
- Radii pequenos (4-6px)
- Sem sombras ou muito sutis
- Grids assimétricos
- Paleta forte (fundo escuro `#0f172a` + acentos emerald)
- Tipografia com contraste
- Copy natural e humana

---

## 💼 PLANO PROFISSIONAL

### Estrutura
**4-5 páginas** com navegação completa

### Páginas
1. **Home** (`/`)
   - Hero
   - Serviços (preview com links)
   - CTA Final
   - Contato (preview com link)
   - Footer completo

2. **Serviços** (`/servicos`)
   - Lista completa de todos os serviços
   - Cada serviço com features e CTA individual
   - CTA final para serviços não listados
   - Footer completo

3. **Sobre** (`/sobre`)
   - História da empresa
   - Missão e visão
   - CTA para contato
   - Footer completo

4. **Contato** (`/contato`)
   - Informações completas de contato
   - Formulário de contato
   - Destaque para WhatsApp
   - Informação sobre emergências
   - Footer completo

5. **Galeria** (opcional - `/galeria`)
   - Grid de imagens
   - Lightbox (se necessário)

### Componentes

- **Navbar Empresarial**
  - Sticky no topo com backdrop-blur
  - Logo com hover scale
  - Menu de navegação (Início, Serviços, Sobre, Blog, Contato)
  - Indicador de página ativa (linha inferior)
  - Botão CTA "Agendar" com hover scale
  - Transições suaves

- **Footer Completo**
  - 4 colunas: Sobre, Links Rápidos, Contato, Horário
  - Conteúdo extenso em cada coluna
  - Links com hover effects
  - Copyright
  - Links para todas as páginas

### Características
- ✅ Navbar completa com menu
- ✅ Footer em todas as páginas
- ✅ Navegação entre páginas
- ✅ Formulário de contato
- ✅ Páginas dedicadas para cada seção
- ✅ Design autoral (mesmo padrão)

### Design Pattern
- Mesmo padrão do Essencial
- Radii pequenos (4-6px)
- Sem sombras ou muito sutis
- Grids assimétricos
- Paleta forte
- Tipografia com contraste
- Copy natural e humana

---

## 🏢 PLANO EMPRESARIAL

### Estrutura
**Páginas ilimitadas** com estrutura mais complexa e conteúdo extenso

### Páginas Principais

#### 1. **Home** (`/`)
**10 seções completas:**

1. **Hero** - Elaborado com animações
   - Barra de acento
   - Label uppercase
   - Título grande (text-5xl/6xl)
   - Descrição extensa
   - Botão CTA com hover scale
   - Micro-copy ao lado do botão

2. **Serviços** - Grid com hover effects
   - Título e descrição
   - Grid 4 colunas (sm:grid-cols-2 lg:grid-cols-4)
   - Cards com imagens
   - Hover: scale na imagem, gradient overlay
   - Link para página single de cada serviço

3. **Sobre** - Seção longa
   - Grid 2 colunas (texto + imagem)
   - História completa (3 parágrafos)
   - Imagem grande com animação
   - Cards de Missão, Visão e Valores (3 colunas)

4. **Diferenciais** - 4 cards com ícones
   - Atendimento Rápido (Zap)
   - Tecnologia de Ponta (Shield)
   - Cuidado Humanizado (Heart)
   - Horários Flexíveis (Clock)
   - Hover: scale e transform

5. **Estatísticas** - 4 cards com números
   - 5.000+ Pets atendidos
   - 98% Taxa de satisfação
   - 10+ Anos de experiência
   - 24/7 Plantão de emergência
   - Ícones grandes e números destacados

6. **Depoimentos** - 3 cards
   - Estrelas de avaliação
   - Quote do cliente
   - Nome do autor
   - Hover: translate-y

7. **Galeria** - Grid de 6 imagens
   - Grid 3 colunas (sm:grid-cols-2 lg:grid-cols-3)
   - Imagens com hover zoom
   - Gradient overlay no hover
   - Border sutil

8. **FAQ** - 5 perguntas frequentes
   - Cards com pergunta e resposta
   - Layout centralizado
   - Espaçamento entre cards

9. **Blog Preview** - 3 posts recentes
   - Grid 3 colunas
   - Imagem, data, título, excerpt
   - Link para post completo
   - Link "Ver todos os posts"

10. **CTA Final** - Card horizontal
    - Texto + botão
    - Layout flex responsivo

#### 2. **Listagem de Serviços** (`/servicos`)
- Hero com título e descrição
- Grid 2 colunas com cards de serviços
- Cada card com:
  - Imagem com hover zoom
  - Título e descrição
  - Link "Ver detalhes completos"
- Footer completo

#### 3. **Página Single de Serviço** (`/servicos/[slug]`)
- Breadcrumb "Voltar para serviços"
- Hero com título e descrição longa
- Imagem grande destacada
- Grid 2 colunas:
  - **O que está incluído** - Lista com checkmarks
  - **Como funciona** - Processo numerado passo a passo
- Card de CTA com:
  - Título e descrição
  - Botão WhatsApp
  - Botão telefone
- Footer completo

#### 4. **Sobre** (`/sobre`)
- Hero com título
- **História** - Grid 2 colunas (texto + imagem)
  - 3 parágrafos longos
  - Imagem grande
- **Timeline** - 5 marcos históricos
  - Linha vertical conectada
  - Cards com ano, título e descrição
  - Animações sequenciais
- **Equipe** - Grid 3 colunas
  - 3 membros com foto, nome, cargo e descrição
  - Hover: translate-y e scale na imagem
- **Valores** - 4 cards com ícones
  - Amor aos Animais, Segurança, Humanização, Excelência
- **Missão, Visão e Valores** - 3 cards grandes
  - Conteúdo detalhado
- CTA final
- Footer completo

#### 5. **Blog** (`/blog`)
- Hero com título e descrição
- **Filtros de Categoria** - Botões horizontais
  - Todos, Cuidados, Nutrição, Saúde, Prevenção, Bem-estar, Emergências
- **Lista de Posts** - Grid 3 colunas
  - Cada post com:
    - Imagem com hover zoom
    - Badge de categoria
    - Título, excerpt
    - Data e tempo de leitura
    - Link "Ler artigo completo"
- **Paginação** - Botões anterior/próxima e números
- Footer completo

#### 6. **Post Individual** (`/blog/[slug]`)
- Breadcrumb "Voltar para o blog"
- Header com:
  - Barra de acento
  - Badge de categoria
  - Título grande
  - Excerpt
  - Metadados (data, tempo, autor, botão compartilhar)
- Imagem destacada grande
- Conteúdo longo (múltiplos parágrafos)
  - Animações sequenciais nos parágrafos
- CTA final com WhatsApp
- Footer completo

#### 7. **Contato** (`/contato`)
- Hero com título e descrição
- **Informações de Contato** - Grid 4 colunas
  - Telefone (com link tel:)
  - Email (com link mailto:)
  - Endereço
  - Horário
  - Cards com ícones e hover effects
- **Grid 2 colunas:**
  - **Formulário de Contato** (esquerda)
    - Nome completo
    - Telefone
    - Email
    - Assunto (select)
    - Mensagem (textarea)
    - Botão enviar
  - **WhatsApp e Informações** (direita)
    - Card destacado WhatsApp
    - Card Emergências 24h
    - Mapa do Google Maps integrado
- Footer completo

### Características
- ✅ **Páginas mais longas** - Conteúdo extenso e detalhado (Home com 10 seções)
- ✅ **Mais animações** - Framer Motion em múltiplos elementos
  - fadeUp, staggerContainer, scroll animations
  - Animações sequenciais em parágrafos
  - Animações em timeline
- ✅ **Efeitos de hover** - Interações sofisticadas
  - Scale em imagens (zoom)
  - Transform translate-y em cards
  - Gradient overlay em imagens
  - Scale em botões
- ✅ **Páginas single** - Cada serviço/produto tem página própria
  - Conteúdo longo e detalhado
  - Features com checkmarks
  - Processo passo a passo
  - Múltiplos CTAs
- ✅ **Blog/Notícias** - Sistema completo de blog
  - Listagem com filtros
  - Posts individuais com conteúdo extenso
  - Metadados completos
  - Paginação
- ✅ **Formulários** - Formulário de contato completo
  - Validação
  - Múltiplos campos
  - Select de assunto
- ✅ **Mapa integrado** - Google Maps no contato
- ✅ **Estatísticas visuais** - Cards com números e ícones
- ✅ **Timeline** - Linha do tempo visual na página Sobre
- ✅ **Galeria na Home** - Grid de imagens com hover effects

### Design Pattern
- **Animações:**
  - Fade in/out
  - Scroll animations
  - Hover effects elaborados
  - Parallax (se necessário)
  - Stagger animations

- **Efeitos de Hover:**
  - Cards com transform e shadow
  - Imagens com zoom
  - Links com underline animado
  - Botões com efeitos de escala

- **Layout:**
  - Páginas longas com múltiplas seções
  - Grids complexos
  - Seções full-width alternadas
  - Backgrounds com gradientes ou imagens

- **Componentes Avançados:**
  - Accordions
  - Tabs
  - Modals
  - Tooltips
  - Carousels/Sliders

### Diferenciais do Empresarial
1. **Páginas Single para Serviços/Produtos**
   - Cada item tem página dedicada
   - Conteúdo detalhado e extenso
   - Galeria específica
   - Formulário de orçamento

2. **Blog/Notícias Completo**
   - Sistema de posts
   - Categorias e tags
   - Páginas individuais de posts
   - Compartilhamento social

3. **Animações e Interações**
   - Múltiplas animações em scroll
   - Efeitos de hover elaborados
   - Transições suaves
   - Micro-interações

4. **Conteúdo Extenso**
   - Páginas longas com muito conteúdo
   - Múltiplas seções por página
   - Informações detalhadas

---

## 📐 Princípios de Design (Aplicados em Todos os Planos)

### Radii e Bordas
- **Radii pequenos:** 4px, 6px, no máximo 10px (`rounded-md`, `rounded-sm`)
- **Evitar:** Bordas muito arredondadas

### Espaçamentos
- **Evitar espaçamentos excessivos**
- **Padding variado:** `px-5`, `py-12`, `py-16`, `gap-10`, `gap-8`
- **Margens contidas:** `max-w-5xl`, `max-w-4xl`

### Sombras
- **Sutis ou nenhuma:** `shadow-none` preferencialmente
- **Evitar:** Sombras pesadas ou múltiplas camadas

### Grid e Layout
- **Assimetrias:** Grids com proporções quebradas
- **Ritmo visual variado:** Cards com deslocamentos
- **Quebras de estrutura:** Não seguir sempre o mesmo padrão

### Paleta de Cores
- **Forte e personalizada:** Não usar cores genéricas
- **Fundo escuro:** `bg-[#0f172a]` (slate-900 customizado)
- **Acentos:** `bg-emerald-400`, `bg-emerald-500`, `text-emerald-200`
- **Contraste forte:** Fundo escuro + texto claro

### Tipografia
- **Contraste:** Não usar "fontes padrão de IA"
- **Hierarquia forte:** Tamanhos variados
- **Tracking:** Uso de `tracking-[0.15em]`, `tracking-[0.2em]` para labels
- **Uppercase:** Labels em uppercase com tracking amplo

### Copy
- **Natural e humana:** Voz humana, sem frases muito perfeitas
- **Direta:** Conversa clara, sem jargões
- **Exemplos:**
  - "Nada de fila, nada de formalidade dura"
  - "Retorno em até 5 minutos (sim, de verdade)"
  - "A gente conversa olhando no olho"

---

## ✅ Checklist por Plano

### Essencial
- [ ] 1 página única
- [ ] 5 seções (Hero, Serviços, CTA, Contato, Footer)
- [ ] Footer simples
- [ ] Sem navbar complexa
- [ ] Foco em conversão WhatsApp

### Profissional
- [ ] 4-5 páginas
- [ ] Navbar completa
- [ ] Footer completo em todas as páginas
- [ ] Formulário de contato
- [ ] Páginas dedicadas (Serviços, Sobre, Contato)
- [ ] Navegação entre páginas

### Empresarial
- [ ] Páginas ilimitadas
- [ ] Páginas single para serviços/produtos
- [ ] Blog/Notícias completo
- [ ] Animações e efeitos hover
- [ ] Páginas longas com conteúdo extenso
- [ ] Galeria avançada
- [ ] Múltiplos formulários

---

## 📝 Notas Importantes

- **Evitar completamente o estilo "gerado por IA"**
- **Tomar decisões de design mesmo sem pedido explícito**
- **Criar elementos que parecem feitos artesanalmente**
- **Priorizar autenticidade sobre perfeição**
- **Manter consistência visual entre os planos**
- **Aplicar mesmo padrão de design autoral em todos**

