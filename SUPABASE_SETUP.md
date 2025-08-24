# Configurare Supabase pentru Prep Center France

## 1. Creează Proiectul Supabase

1. **Mergi pe** [supabase.com](https://supabase.com)
2. **Click pe** "Start your project"
3. **Creează cont** sau autentifică-te
4. **Click pe** "New Project"
5. **Completează:**
   - Organization: Alege organizația ta
   - Name: `prep-center-france`
   - Database Password: Generează o parolă sigură
   - Region: Europe (Frankfurt) - cel mai aproape de Franța
6. **Click pe** "Create new project"

## 2. Configurează Variabilele de Mediu

După ce proiectul este creat:

1. **În Supabase Dashboard**, mergi la Settings → API
2. **Copiază:**
   - Project URL
   - Anon public key

3. **Actualizează fișierul `.env`:**
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 3. Rulează Migrațiile

1. **În Supabase Dashboard**, mergi la SQL Editor
2. **Copiază conținutul** din `supabase/migrati