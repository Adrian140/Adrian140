# Ghid de Lansare în Producție - Prep Center France

## 1. Backend Development (OBLIGATORIU)

### API Endpoints Necesare:

#### Autentificare:
- `POST /api/auth/login` - Login utilizatori
- `POST /api/auth/register` - Înregistrare utilizatori
- `POST /api/auth/validate` - Validare token
- `POST /api/auth/forgot-password` - Resetare parolă
- `POST /api/auth/enable-2fa` - Activare 2FA
- `POST /api/auth/verify-2fa` - Verificare 2FA
- `POST /api/auth/disable-2fa` - Dezactivare 2FA

#### Profil Utilizator:
- `PUT /api/user/profile` - Actualizare profil
- `POST /api/auth/change-password` - Schimbare parolă

#### Adrese:
- `GET /api/addresses` - Lista adrese
- `POST /api/addresses` - Adăugare adresă
- `PUT /api/addresses/:id` - Actualizare adresă
- `DELETE /api/addresses/:id` - Ștergere adresă

#### Profile de Facturare:
- `GET /api/billing-profiles` - Lista profile
- `POST /api/billing-profiles` - Adăugare profil
- `PUT /api/billing-profiles/:id` - Actualizare profil
- `DELETE /api/billing-profiles/:id` - Ștergere profil
- `POST /api/validate-vat` - Validare VAT

#### Facturi:
- `GET /api/invoices` - Lista facturi
- `GET /api/invoices/:id/download` - Descărcare factură
- `GET /api/invoices/:id/view` - Vizualizare factură

#### Admin Panel:
- `GET /api/admin/services` - Lista servicii
- `POST /api/admin/services` - Adăugare serviciu
- `PUT /api/admin/services/:id` - Actualizare serviciu
- `DELETE /api/admin/services/:id` - Ștergere serviciu
- `GET /api/admin/pricing` - Lista prețuri
- `POST /api/admin/pricing` - Adăugare preț
- `PUT /api/admin/pricing/:id` - Actualizare preț
- `DELETE /api/admin/pricing/:id` - Ștergere preț
- `GET /api/admin/content` - Conținut site
- `PUT /api/admin/content` - Actualizare conținut
- `GET /api/admin/pricingContent` - Conținut prețuri
- `PUT /api/admin/pricingContent` - Actualizare conținut prețuri
- `GET /api/admin/users` - Lista utilizatori

## 2. Baza de Date

### Tabele Necesare:

#### users
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  country VARCHAR(2) DEFAULT 'FR',
  language VARCHAR(2) DEFAULT 'fr',
  role VARCHAR(20) DEFAULT 'user',
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  two_factor_secret VARCHAR(255),
  email_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### addresses
```sql
CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL, -- 'shipping', 'billing', 'both'
  label VARCHAR(100),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  company VARCHAR(255),
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  country VARCHAR(2) NOT NULL,
  phone VARCHAR(20),
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### billing_profiles
```sql
CREATE TABLE billing_profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL, -- 'individual', 'company'
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  company_name VARCHAR(255),
  vat_number VARCHAR(50),
  siren_siret VARCHAR(20),
  country VARCHAR(2) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  postal_code VARCHAR(20) NOT NULL,
  phone VARCHAR(20),
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### services
```sql
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  features JSONB,
  price VARCHAR(20),
  unit VARCHAR(50),
  category VARCHAR(50),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### pricing
```sql
CREATE TABLE pricing (
  id SERIAL PRIMARY KEY,
  service VARCHAR(255) NOT NULL,
  price VARCHAR(20) NOT NULL,
  unit VARCHAR(50) NOT NULL,
  category VARCHAR(50),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### content
```sql
CREATE TABLE content (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  type VARCHAR(50) DEFAULT 'text',
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 3. Variabile de Mediu

Creează fișierul `.env`:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/prep_center_france

# JWT
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Email (pentru resetare parolă)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# 2FA
TWO_FACTOR_SERVICE_NAME=Prep Center France

# VAT Validation (opțional)
VAT_VALIDATION_API_KEY=your-vat-api-key

# Environment
NODE_ENV=production
PORT=3001
```

## 4. Deployment

### Opțiuni de Hosting:

#### A. Vercel (Frontend) + Railway/Render (Backend)
1. **Frontend pe Vercel:**
   - Conectează repository-ul GitHub
   - Configurează variabilele de mediu
   - Deploy automat

2. **Backend pe Railway/Render:**
   - Creează serviciu nou
   - Conectează repository backend
   - Configurează variabilele de mediu
   - Adaugă baza de date PostgreSQL

#### B. VPS (Complet)
1. **Server Setup:**
   ```bash
   # Instalează Node.js, PostgreSQL, Nginx
   sudo apt update
   sudo apt install nodejs npm postgresql nginx
   ```

2. **Database Setup:**
   ```bash
   sudo -u postgres createdb prep_center_france
   sudo -u postgres createuser prep_user
   ```

3. **Application Deploy:**
   ```bash
   git clone your-backend-repo
   cd backend
   npm install
   npm run build
   pm2 start dist/index.js --name prep-center-api
   ```

4. **Nginx Configuration:**
   ```nginx
   server {
       listen 80;
       server_name prep-center.eu www.prep-center.eu;
       
       location /api {
           proxy_pass http://localhost:3001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
       
       location / {
           root /var/www/prep-center-frontend/dist;
           try_files $uri $uri/ /index.html;
       }
   }
   ```

## 5. SSL Certificate

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d prep-center.eu -d www.prep-center.eu
```

## 6. Monitoring & Backup

### Monitoring:
- Configurează PM2 pentru restart automat
- Adaugă logging pentru erori
- Monitorizează performanța bazei de date

### Backup:
```bash
# Backup automat baza de date
pg_dump prep_center_france > backup_$(date +%Y%m%d).sql
```

## 7. Testing

Înainte de lansare, testează:
- ✅ Înregistrare/Login utilizatori
- ✅ Actualizare profil
- ✅ Gestionare adrese
- ✅ Profile de facturare
- ✅ Admin panel (toate funcțiile)
- ✅ Responsive design
- ✅ Performanță (PageSpeed Insights)
- ✅ SEO (Google Search Console)

## 8. Post-Launch

1. **Analytics:**
   - Configurează Google Analytics
   - Adaugă Google Search Console
   - Monitorizează conversiile

2. **Marketing:**
   - Optimizează SEO
   - Configurează Google Ads
   - Social media presence

3. **Maintenance:**
   - Updates regulate
   - Backup-uri automate
   - Monitoring securitate
