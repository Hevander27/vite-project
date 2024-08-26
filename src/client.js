import { createClient } from '@supabase/supabase-js';

const URL = 'https://hravfxgcxmvexiybzqro.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyYXZmeGdjeG12ZXhpeWJ6cXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MTAyNzMsImV4cCI6MjA0MDE4NjI3M30.pnRN5LoAADMLSUehQN8ZP1yA_R_aaIM1J1UynqKIvZc';

export const supabase = createClient(URL, API_KEY);
