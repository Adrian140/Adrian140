# 🚀 PAȘI PENTRU APLICAREA FIX-ULUI TRADUCERI

## 📋 PASUL 1: APLICĂ FIX-UL TRADUCERI

### A. Deschide fișierul local:
1. **Navighează la:** `src/translations/index.js`
2. **Selectează tot conținutul** (Ctrl+A)
3. **Șterge tot** și **înlocuiește** cu codul de mai sus

### B. Salvează și testează local:
```bash
# În terminal, în folderul proiectului:
npm run dev
```
4. **Deschide:** http://localhost:5173
5. **Testează:** Apasă pe steagurile DE, ES, IT - ar trebui să schimbe limba

## �� PASUL 2: PUBLICĂ MODIFICĂRILE

### În terminal:
```bash
git add .
git commit -m "Fix: Traduceri complete pentru toate limbile (DE, ES, IT, NL, PL, RO, EN, FR)"
git push origin main
```

### Verifică deployment:
1. **Mergi pe:** https://vercel.com/dashboard
2. **Selectează proiectul** prep-center-france
3. **Verifică** că build-ul rulează (va dura 2-3 minute)
4. **Așteaptă** să vezi "Ready" cu bifă verde

## �� PASUL 3: TESTEAZĂ LIVE

### După 3-5 minute:
1. **Deschide:** https://prep-center.eu
2. **Testează fiecare steag:**
   - 🇫🇷 FR → Franceză
   - 🇬🇧 EN → Engleză  
   - 🇩🇪 DE → Germană
   - 🇳🇱 NL → Olandeză
   - 🇪🇸 ES → Spaniolă
   - 🇮🇹 IT → Italiană
   - 🇵�� PL → Poloneză
   - 🇷🇴 RO → Română

---

## 🔧 ALTE MODIFICĂRI IMPORTANTE

### 1. ACTUALIZARE PREȚURI

**Fișier:** `src/pages/ServicesPricing.jsx`

**Găsește și modifică:**
```javascript
// Linia ~15-20, schimbă prețurile:
const rate = quantity <= 100 ? 0.45 : 0.50; // Prețul pentru FNSKU

// Linia ~180-190, schimbă prețurile FBM:
<p className="text-3xl font-bold text-primary mb-2">€1.20</p> // Starter
<p className="text-3xl font-bold text-primary mb-2">€1.10</p> // Growth  
<p className="text-3xl font-bold text-primary mb-2">€0.95</p> // Enterprise
```

### 2. ACTUALIZARE INFORMAȚII CONTACT

**Fișier:** `src/components/Footer.jsx`

**Găsește și modifică:**
```javascript
// Linia ~45-50:
<span className="text-text-secondary">contact@prep-center.eu</span>
<span className="text-text-secondary">+33 6 75 11 62 18</span>
<span className="text-text-secondary">35350 La Gouesnière, France</span>
```

### 3. ACTUALIZARE LINK-URI WHATSAPP

**Caută în toate fișierele:**
```javascript
// Înlocui