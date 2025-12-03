/**
 * Configuração do Supabase
 * 
 * Este arquivo centraliza as configurações do Supabase.
 * As credenciais são carregadas das variáveis de ambiente.
 */

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://radgwsupaopvjkdxwgcw.supabase.co',
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
}

// Validação das variáveis de ambiente
if (!supabaseConfig.serviceRoleKey) {
  console.warn('⚠️ SUPABASE_SERVICE_ROLE_KEY não configurada no .env')
}

if (!supabaseConfig.url) {
  console.warn('⚠️ NEXT_PUBLIC_SUPABASE_URL não configurada no .env')
}

