# PROJETO WEBJ - ARQUITETURA TÉCNICA

## 1. Stack Tecnológica
* **Framework:** Next.js 15 (App Router).
* **Linguagem:** TypeScript.
* **Estilização:** Tailwind CSS.
* **Componentes:** Shadcn UI (obrigatório para cards, botões, inputs).
* **Animações:** Framer Motion (para fades, hovers e interações suaves).
* **Ícones:** Lucide React.

---

## 2. Estrutura de Pastas (App Router)
O projeto utiliza **Route Groups** para isolar o layout da Landing Page (Marketing) dos Layouts dos Demos (Clientes).

```text
/app
├── (marketing)/                # SITE PRINCIPAL (Venda da Assinatura)
│   ├── layout.tsx              # Navbar e Footer da WebJ
│   └── page.tsx                # LP de Alta Conversão (Copy P.A.S.)
│
├── sites/                      # ÁREA DE DEMOS (Portfólio)
│   ├── layout.tsx              # Layout Mestre dos Demos (Injeta a DemoBar)
│   │
│   ├── implantes-premium/      # Demo 1: Dentista (Clean/Saúde)
│   │   ├── layout.tsx          # Navbar específica (Branco/Azul)
│   │   └── page.tsx
│   │
│   ├── advocacia-civil/        # Demo 3: Advogado (Sóbrio/Azul Marinho/Serifa)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── studio-arquitetura/     # Demo 4: Arquiteto (Minimalista/Preto e Branco)
│       ├── layout.tsx
│       └── page.tsx
│
└── components/
    ├── ui/                     # Shadcn Components
    ├── marketing/              # Componentes exclusivos da LP de Venda
    ├── demos/                  # Componentes reutilizáveis nos demos
    └── shared/                 # Componente DemoBar (Barra flutuante)

3. Instruções de Componentes Chave
A. DemoBar (Barra de Aviso)
Deve ser um componente fixo (fixed bottom ou top) que aparece em todos os sites dentro da pasta /sites/.

Texto: "Este é um site de demonstração criado pela WebJ."

Ações: Botão "Voltar ao Portfólio" (Link para /) e Botão "Quero um site assim" (Link para WhatsApp).

Estilo: backdrop-blur-md bg-black/80 text-white.

B. Uso de Imagens (Placeholders)
Como não temos assets finais, utilizar imagens reais via URL externa (Unsplash).

Dentista: Buscar imagens de "dental clinic", "smile".

Solar: Buscar imagens de "solar panels", "clean energy".

Advogado: Buscar imagens de "law office", "meeting".

Arquiteto: Buscar imagens de "modern house", "interior design".

Dica: Usar componentes <Image /> do Next.js configurados para domínios externos.

C. Hero Section (Marketing)
Deve implementar tipografia gigante e responsiva.

Mobile First: Texto grande no celular, gigante no desktop.

Background: Efeito sutil de grade (Grid Pattern) em cinza muito claro (slate-50) para dar textura técnica.

D. Componentes Shadcn Necessários
Instalar imediatamente:

Button

Card

Accordion (Para o FAQ)

Badge (Para tags de "Oferta")

Input/Textarea (Se houver form)

4. Comandos de Setup (Para o Cursor executar)
npx create-next-app@latest webj-portfolio --typescript --tailwind --eslint

npx shadcn-ui@latest init (Style: Default, Color: Slate)

npm install framer-motion lucide-react

Configurar next.config.js para aceitar imagens de domínios externos (unsplash.com).



