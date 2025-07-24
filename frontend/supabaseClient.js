import { createClient } from '@supabase/supabase-js'
//Replace these w/ thy own values from Supabase Dashboard > Settings > API
const supabaseUrl = 'https://Project Split.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6eXlrb3dmaGNycWx1aWlwdnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MDYxMjYsImV4cCI6MjA2ODE4MjEyNn0.noHFdo1sUyBTarrPCROJTT0BD0z6gMapWpDN8NmQveU'

export const supabase = createClient(supabaseUrl, supabaseKey)
