-- Migração: Adicionar colunas plano e preco na tabela leads
-- Execute este script no SQL Editor do Supabase Dashboard se a tabela já existir

-- Adicionar coluna plano (se não existir)
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS plano TEXT;

-- Adicionar coluna preco (se não existir)
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS preco TEXT;

-- Comentários nas colunas
COMMENT ON COLUMN public.leads.plano IS 'Nome do plano selecionado (ex: Essencial - Para Começar)';
COMMENT ON COLUMN public.leads.preco IS 'Preço do plano no momento da contratação (ex: R$ 189,90)';

