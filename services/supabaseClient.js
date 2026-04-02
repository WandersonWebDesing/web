import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vcxvgbhyctozfqotnaik.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjeHZnYmh5Y3RvemZxb3RuYWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2MDkzNDgsImV4cCI6MjA5MDE4NTM0OH0.YQe2HC6r8XvoGktdTLzwgncc0uxXGlz87HqN1ipjeXM";

export const supabase = createClient(supabaseUrl, supabaseKey);