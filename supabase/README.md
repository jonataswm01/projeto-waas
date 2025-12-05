# Configuração Supabase

Esta pasta contém todos os arquivos relacionados à integração com o Supabase.

## Arquivos

- `setup.sql` - Script SQL para criar a tabela `leads` no banco de dados
- `migration_add_tipo_documento.sql` - Script de migração para adicionar campo tipo_documento
- `migration_add_plano_preco.sql` - Script de migração para adicionar campos plano e preco
- `client.ts` - Cliente Supabase configurado para Server Actions

## Setup Inicial

### 1. Criar a tabela no Supabase

1. Acesse o painel do Supabase: https://radgwsupaopvjkdxwgcw.supabase.co
2. Vá em **SQL Editor**
3. Cole e execute o conteúdo do arquivo `setup.sql`
4. Verifique se a tabela `leads` foi criada em **Table Editor**

### 1.1. Migrações: Adicionar campos novos

Se a tabela `leads` já existe, execute os scripts de migração na ordem:

**Migração 1: tipo_documento**
1. Acesse o painel do Supabase
2. Vá em **SQL Editor**
3. Cole e execute o conteúdo do arquivo `migration_add_tipo_documento.sql`
4. Verifique se a coluna `tipo_documento` foi adicionada

**Migração 2: plano e preco**
1. No mesmo **SQL Editor**
2. Cole e execute o conteúdo do arquivo `migration_add_plano_preco.sql`
3. Verifique se as colunas `plano` e `preco` foram adicionadas

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
- `template` (TEXT) - ID do template selecionado (essencial, profissional, empresarial)
- `plano` (TEXT, NULLABLE) - Nome do plano selecionado (ex: "Essencial - Para Começar")
- `preco` (TEXT, NULLABLE) - Preço do plano no momento da contratação (ex: "R$ 189,90")
- `status` (TEXT) - Status do lead (PENDING, PAID, CANCELED)
- `cnpj` (TEXT, NULLABLE) - CPF ou CNPJ da empresa (obrigatório, sem máscara)
- `tipo_documento` (TEXT, NULLABLE) - Tipo de documento: "cpf" ou "cnpj"

## Uso

O cliente Supabase é usado nas Server Actions para salvar dados no banco:

```typescript
import { supabaseAdmin } from "@/supabase/client"

// Exemplo de uso
const { data, error } = await supabaseAdmin
  .from('leads')
  .insert({ ... })
```

