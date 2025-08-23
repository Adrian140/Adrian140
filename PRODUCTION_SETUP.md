# Configurare pentru Producție - Prep Center France

## 1. Variabile de Mediu

Creează fișierul `.env` în root-ul proiectului:

```env
# API Configuration
VITE_API_URL=https://api.prep-center.eu

# Environment
VITE_NODE_ENV=production

# Analytics (optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Contact Form (optional)
VITE_CONTACT_EMAIL=contact@prep-center.eu
```

## 2. Backend API Endpoints Necesare

Aplicația frontend se conectează la următoarele endpoint-uri:

### Autentificare:
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/auth/validate`
- `POST /api/auth/forgot-password`
- `POST /api/auth/change-password`
- `POST /api/auth/enable-2fa`
- `POST /api/auth/verify-2fa`
- `POST /api/auth/disable-2fa`

### Profil Utilizator:
- `PUT /api/user/profile`

### Adrese:
- `GET /api/addresses`
- `POST /api/addresses`
- `PUT /api/addresses/:id`
- `DELETE /api/addresses/:id`

### Profile de Facturare:
- `GET /api/billing-profiles`
- `POST /api/billing-profiles`
- `PUT /api/billing-profiles/:id`
- `DELETE /api/billing-profiles/:id`
- `POST /api/validate-vat`

### Facturi:
- `GET /api/invoices`
- `GET /api/invoices/:id/download`
- `GET /api/invoices/:id/view`

### Admin Panel:
- `GET /api/admin/services`
- `POST /api/admin/services`
- `PUT /api/admin/services/:id`
- `DELETE /api/admin/services/:id`
- `GET /api/admin/pricing`
- `POST /api/admin/pricing`
- `PUT /api/admin/pricing/:id`
- `DELETE /api/admin/pricing/:id`
- `GET /api/admin/content`
- `PUT /api/admin/content`
- `GET /api/admin/pricingContent`
- `PUT /api/admin/pricingContent`
- `GET /api/admin/users`

### Contact:
- `POST /api/contact`

## 3. Deployment pe Vercel

1. **Conectează repository-ul la Vercel**
2. **Configurează variabilele de mediu în Vercel Dashboard**
3. **Deploy automat**

### Configurare Vercel:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## 4. CORS Configuration

Backend-ul trebuie să permită cereri de la:
- `https://prep-center.eu`
- `https://www.prep-center.eu`

## 5. SSL Certificate

Vercel gestionează automat SSL pentru domeniul tău.

## 6. Testing

Înainte de lansare, testează:
- ✅ Toate funcțiile de autentificare
- ✅ Dashboard-ul utilizatorului
- ✅ Admin panel-ul
- ✅ Formularul de contact
- ✅ Responsive design
- ✅ Performanța site-ului

## 7. Monitoring

După lansare:
- Monitorizează erorile în Vercel Dashboard
- Configurează Google Analytics
- Testează toate funcționalitățile live

## 8. Backup

- Configurează backup-uri automate pentru baza de date
- Păstrează copii de siguranță ale configurațiilor

## 9. Security

- Toate parolele sunt hash-uite
- JWT tokens pentru autentificare
- HTTPS obligatoriu
- Validare input pe backend
- Rate limiting pentru API-uri

## 10. Performance

- Optimizare imagini
- Lazy loading pentru componente
- Caching pentru API responses
- CDN pentru assets statice
