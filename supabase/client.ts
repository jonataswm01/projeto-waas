import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "./config";

// Cliente para Server Actions (usa service_role para bypass RLS)
// Este cliente tem acesso total ao banco, use apenas em Server Actions
export const supabaseAdmin = createClient(
  supabaseConfig.url,
  supabaseConfig.serviceRoleKey ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhZGd3c3VwYW9wdmprZHh3Z2N3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDc2NDMwOSwiZXhwIjoyMDgwMzQwMzA5fQ.Kzl8kUwRINW3NqbV7zdhDxjp61kSJEy60HoHur0R5Wg",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);

// Cliente público para uso no browser (Auth, queries seguras com RLS)
export const supabase = createClient(supabaseConfig.url, supabaseConfig.anonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
  },
});

