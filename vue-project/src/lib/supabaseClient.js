import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://hmtzrdosowbjnzgnydfk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhtdHpyZG9zb3diam56Z255ZGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MjExNTcsImV4cCI6MjA1Mzk5NzE1N30.JgmPD6qP9dyLVWjqYtOw7TWY2Amw44h1knzzFMwf_D0')