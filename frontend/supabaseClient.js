// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// ⚡ URL do seu projeto Supabase
const supabaseUrl = 'https://aws-1-sa-east-1.pooler.supabase.com';

// ⚡ Chave pública anônima do Supabase (para uso seguro no frontend)
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjeHZnYmh5Y3RvemZxb3RuYWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MDkzNDgsImV4cCI6MjA5MDE4NTM0OH0.YQe2HC6r8XvoGktdTLzwgncc0uxXGlz87HqN1ipjeXM';

// 🔥 Cria cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);