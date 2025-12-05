-- Migração: Adicionar coluna tipo_documento na tabela leads
-- Execute este script no SQL Editor do Supabase Dashboard se a tabela já existir

-- Adicionar coluna tipo_documento (se não existir)
ALTER TABLE public.leads 
ADD COLUMN IF NOT EXISTS tipo_documento TEXT;

-- Comentário na coluna
COMMENT ON COLUMN public.leads.tipo_documento IS 'Tipo de documento: CPF ou CNPJ';

