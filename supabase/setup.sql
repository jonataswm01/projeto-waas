-- Script SQL para criar a tabela 'leads' no Supabase
-- Execute este script no SQL Editor do Supabase Dashboard

-- Criar a tabela leads
CREATE TABLE IF NOT EXISTS public.leads (
  id TEXT PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  nome TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  empresa TEXT NOT NULL,
  nicho TEXT NOT NULL,
  dominio TEXT NOT NULL,
  template TEXT NOT NULL,
  plano TEXT,
  preco TEXT,
  status TEXT NOT NULL DEFAULT 'PENDING',
  cnpj TEXT,
  tipo_documento TEXT
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir inserção via service_role (Server Actions)
-- Nota: service_role bypassa RLS automaticamente, mas é bom ter políticas definidas
CREATE POLICY "Allow service role full access" ON public.leads
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Comentários nas colunas
COMMENT ON TABLE public.leads IS 'Tabela de leads do onboarding';
COMMENT ON COLUMN public.leads.status IS 'Status do lead: PENDING, PAID, CANCELED';

