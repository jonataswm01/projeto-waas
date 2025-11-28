# PROJETO WEBJ - DOCUMENTAÇÃO ESTRATÉGICA & DESIGN

## 1. Visão Geral do Produto
O projeto é uma plataforma de "WaaS" (Website as a Service).
**Objetivo:** Vender sites profissionais por assinatura (R$ 100,00/mês) para pequenas empresas.
**Público Alvo:** Pequenos empresários (Dentistas, Advogados, Prestadores de Serviço) que sentem a dor de não estar no Google.
**Diferencial:** Tecnologia de ponta (Next.js) com custo de entrada zero, focado em conversão e não apenas estética.

---

## 2. Identidade Visual (Design System)
O visual deve seguir o estilo **"Clean Tech Premium"**.
* **Vibe:** Minimalista, Tecnológico, Confiável, Rápido.
* **Referências:** Bento Grids (Apple), Swiss Design (Tipografia grande), SaaS modernos (Stripe/Vercel).

### Paleta de Cores (Tailwind Classes)
* **Canvas (Fundo):** Branco Puro (`bg-white`) e Cinza Gelo (`bg-slate-50`) para alternar seções.
* **Estrutura (Prata/Metal):** Bordas e linhas sutis em `border-slate-200` ou `bg-slate-100`.
* **Texto Principal:** Cinza Chumbo (`text-slate-900`) para títulos, Cinza Médio (`text-slate-600`) para parágrafos. **NUNCA** usar preto `#000`.
* **Acento (Call to Action):** **AZUL ELÉTRICO** (`bg-blue-600` hover `bg-blue-700`).
    * *Regra:* O Azul só aparece onde o usuário deve clicar ou em ícones de destaque.

### Tipografia
* Fonte: **Inter** ou **Geist Sans**.
* Estilo: Títulos pesados (Bold/Tracking-tight) para impacto.

---

## 3. Estrutura de Copywriting (Funil P.A.S.)
A Landing Page Principal deve seguir rigidamente esta ordem psicológica:

### Seção 1: Hero (O Choque)
* **Headline:** "Enquanto você lê isso, seu concorrente acabou de fechar uma venda pelo Google."
* **Sub:** "Sua empresa é invisível? Pare de depender do Instagram. Tenha um Site Profissional no ar em 7 dias."
* **CTA:** "QUERO PARAR DE PERDER DINHEIRO" (Link para WhatsApp).

### Seção 2: A Dor (Diagnóstico)
* **Foco:** Medo de ficar para trás.
* **Pontos:**
    1.  Instagram não é casa própria (pode ser banido).
    2.  Sem site = Amador (Cliente não confia).
    3.  Invisível no Google (Dinheiro na mesa).

### Seção 3: A Solução (Modelo de Assinatura)
* **Comparativo:** Tabela "Agência Tradicional (R$ 3k + demora)" vs "WebJ (R$ 100 + rápido)".
* **Argumento:** Tecnologia de Big Tech (Next.js) acessível.

### Seção 4: Vitrine (Demos)
Mostrar os 4 nichos (Links internos para `/sites/...`):
1.  **Odontologia (Implantes):** Foco em agendamento.
2.  **Energia Solar:** Foco em economia/orçamento.
3.  **Advocacia:** Foco em autoridade/sobriedade.
4.  **Arquitetura:** Foco visual/galeria.

### Seção 5: Oferta (Preço)
* **Ancoragem:** De R$ 2.500 por R$ 100/mês.
* **Incluso:** Hospedagem, Domínio, Manutenção, Suporte.

---

## 4. Dados de Contato (Conversão)
* **Ação Principal:** Botão de WhatsApp.
* **Número:** 5516997330113
* **Link Formatado:** `https://wa.me/5516997330113?text=Olá, quero saber mais sobre a assinatura de sites.`