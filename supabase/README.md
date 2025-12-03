# Configuração Supabase

Esta pasta contém todos os arquivos relacionados à integração com o Supabase.

## Arquivos

- `setup.sql` - Script SQL para criar a tabela `leads` no banco de dados
- `client.ts` - Cliente Supabase configurado para Server Actions

## Setup Inicial

### 1. Criar a tabela no Supabase

1. Acesse o painel do Supabase: https://radgwsupaopvjkdxwgcw.supabase.co
2. Vá em **SQL Editor**
3. Cole e execute o conteúdo do arquivo `setup.sql`
4. Verifique se a tabela `leads` foi criada em **Table Editor**

### 2. Variáveis de Ambiente

As seguintes variáveis devem estar no arquivo `.env`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://radgwsupaopvjkdxwgcw.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Estrutura da Tabela

A tabela `leads` possui os seguintes campos:

- `id` (TEXT, PRIMARY KEY) - UUID do lead
- `created_at` (TIMESTAMP) - Data de criação
- `nome` (TEXT) - Nome completo do cliente
- `whatsapp` (TEXT) - Número do WhatsApp
- `email` (TEXT) - Email do cliente
- `empresa` (TEXT) - Nome da empresa
- `nicho` (TEXT) - Nicho de mercado
- `dominio` (TEXT) - Domínio escolhido
- `template` (TEXT) - ID do template selecionado
- `status` (TEXT) - Status do lead (PENDING, PAID, CANCELED)
- `cnpj` (TEXT, NULLABLE) - CNPJ da empresa (opcional)

## Uso

O cliente Supabase é usado nas Server Actions para salvar dados no banco:

```typescript
import { supabaseAdmin } from "@/supabase/client"

// Exemplo de uso
const { data, error } = await supabaseAdmin
  .from('leads')
  .insert({ ... })
```

