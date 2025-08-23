# Configurație DNS Corectă pentru prep-center.eu

## Configurația Actuală - Probleme Identificate:

### ❌ PROBLEME:

### Adaugă CNAME pentru www:
```
CNAME  www  cname.vercel-dns.com  (DNS only)
```

**De ce ai nevoie de www:**
- Utilizatorii pot accesa www.prep-center.eu
- Vercel va face redirect automat către prep-center.eu
- SEO mai bun (Google indexează ambele variante)
1. **Record A pentru prep-center.eu**
   - IP: `76.76.19.61` - Acest IP nu pare să fie de la Vercel
   - **PROBLEMĂ:** Dacă folosești Vercel, nu ai nevoie de record A

2. **CNAME pentru www**
   - `cname.vercel-dns.com` - Corect pentru Vercel

3. **Email Records**
   - MX, SPF, DMARC - Configurate corect pentru Outlook/Microsoft 365

## ✅ CONFIGURAȚIA CORECTĂ:

### Pentru Vercel Hosting:

#### Opțiunea 1: Folosind doar CNAME (RECOMANDAT)
```
CNAME  prep-center.eu     cname.vercel-dns.com     (Proxied/Auto)
CNAME  www               cname.vercel-dns.com     (Proxied/Auto)
```

#### Opțiunea 2: Folosind A Records pentru Vercel
```
A      prep-center.eu     76.76.19.61             (Proxied/Auto) - DOAR dacă este IP-ul corect Vercel
CNAME  www               cname.vercel-dns.com     (Proxied/Auto)
```

### Email Records (PĂSTREAZĂ-LE):
```
MX     prep-center.eu     prepcenter-eu01b.mail.protection.outlook.com  (Priority: 0)
TXT    prep-center.eu     "v=spf1 include:spf.protection.outlook.com -all"
TXT    prep-center.eu     "NETORGFT1882120.onmicrosoft.com"
TXT    _dmarc            "v=DMARC1; p=none; rua=mailto:admin@prep-center.eu; ruf=mailto:admin@prep-center.eu; fo=1"
```

## 🔧 MODIFICĂRI NECESARE:

### 1. Verifică IP-ul Vercel
Pentru a afla IP-urile corecte Vercel:
```bash
nslookup cname.vercel-dns.com
```

### 2. Modifică Record A (dacă este necesar)
- Dacă `76.76.19.61` NU este IP-ul Vercel → **ȘTERGE** record A
- Adaugă CNAME pentru prep-center.eu → cname.vercel-dns.com

### 3. Configurație Vercel
În dashboard-ul Vercel:
- Adaugă domeniul: `prep-center.eu`
- Adaugă domeniul: `www.prep-center.eu`
- Setează redirect de la www la non-www (sau invers)

### 4. Setări Cloudflare Proxy (IMPORTANT!)
Pentru Vercel hosting:
- **DEZACTIVEAZĂ** proxy pentru toate CNAME-urile către Vercel
- Setează pe "DNS only" (cloud gri) NU "Proxied" (cloud portocaliu)

```
CNAME  prep-center.eu     cname.vercel-dns.com     (DNS only - cloud gri)
CNAME  www               cname.vercel-dns.com     (DNS only - cloud gri)
```

**DE CE?**
- Vercel are propriul sistem de SSL și CDN
- Cloudflare proxy poate cauza conflicte cu Vercel
- "DNS only" permite Vercel să gestioneze totul corect
## �� CONFIGURAȚIA FINALĂ RECOMANDATĂ:

```
# Pentru site
CNAME  prep-center.eu     cname.vercel-dns.com
CNAME  www               cname.vercel-dns.com

# Pentru email (PĂSTREAZĂ)
MX     prep-center.eu     prepcenter-eu01b.mail.protection.outlook.com  0
TXT    prep-center.eu     "v=spf1 include:spf.protection.outlook.com -all"
TXT    prep-center.eu     "NETORGFT1882120.onmicrosoft.com"
TXT    _dmarc            "v=DMARC1; p=none; rua=mailto:admin@prep-center.eu; ruf=mailto:admin@prep-center.eu; fo=1"
```
CNAME  prep-center.eu     cname.vercel-dns.com     (DNS only)
CNAME  www               cname.vercel-dns.com     (DNS only)
CNAME  www               cname.vercel-dns.com     (DNS only)

## 🔍 VERIFICARE:

După modificări, testează:
```bash
# Verifică rezolvarea DNS
nslookup prep-center.eu
nslookup www.prep-center.eu

# Testează în browser
https://prep-center.eu
https://www.prep-center.eu
```

## 🔄 PAȘI PENTRU MODIFICARE:

1. **În Cloudflare DNS:**
   - Click pe cloud-ul portocaliu de lângă prep-center.eu
   - Schimbă la "DNS only" (cloud gri)
   - Fă la fel pentru www

2. **Verifică în Vercel:**
   - Domeniul prep-center.eu să fie adăugat
   - SSL să fie activat
   - Deployment să fie activ
## ⚠️ ATENȚIE:

1. **TTL (Time To Live):** Modificările DNS pot dura 24-48 ore să se propage
2. **Cloudflare Proxy:** Dacă folosești Cloudflare, setează pe "Proxied" (orange cloud)
3. **SSL:** Vercel va genera automat certificat SSL după configurarea corectă

2. **Cloudflare Proxy:** Pentru Vercel, setează pe "DNS only" (cloud gri) NU "Proxied"
## 📧 EMAIL TESTING:

Configurația ta actuală este 95% corectă. Doar adaugă CNAME pentru www și ești 100% pregătit pentru lansare!
Testează email-ul după modificări:
- Trimite email către admin@prep-center.eu
- Verifică SPF/DKIM/DMARC cu tools online
