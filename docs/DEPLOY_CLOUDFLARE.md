# Deploy to Cloudflare Pages - Quick Guide

## 🚀 3 Ways to Deploy

### ⭐ Method 1: Direct Upload (Fastest - 5 minutes)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click **Pages** in the left sidebar
3. Click **Create a project** → **Upload assets**
4. Drag and drop these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `quiz-data.js`
5. Project name: `gre-vocabulary-quiz`
6. Click **Deploy site**
7. Done! Your site will be live at `https://gre-vocabulary-quiz.pages.dev`

---

### 🔗 Method 2: Git Integration (Best for updates)

1. **Push to GitHub** (see instructions below)

2. **Connect to Cloudflare:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Pages → Create a project → Connect to Git
   - Select your GitHub repository
   
3. **Build Settings:**
   - Framework preset: `None`
   - Build command: (leave empty)
   - Build output directory: `/`
   - Root directory: `/`
   
4. Click **Save and Deploy**

5. **Auto-deploy:** Every push to main branch will auto-deploy!

---

### 💻 Method 3: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages deploy . --project-name=gre-vocabulary-quiz

# Update later
wrangler pages deploy .
```

---

## 📦 Files to Deploy

**Required files only:**
- `index.html`
- `style.css`
- `script.js`
- `quiz-data.js`

**Optional** (for source control):
- `README.md`
- `.gitignore`
- Other `.txt` files

---

## 🌐 Custom Domain (Optional)

1. In Cloudflare Pages dashboard
2. Go to your project → **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `gre-quiz.yourdomain.com`)
5. Follow DNS instructions

---

## ✅ After Deployment

Your quiz will be live at:
- Default: `https://gre-vocabulary-quiz.pages.dev`
- With custom domain: `https://your-custom-domain.com`

**Features enabled automatically:**
- ✅ HTTPS (SSL)
- ✅ Global CDN
- ✅ Unlimited bandwidth
- ✅ Fast load times worldwide
- ✅ DDoS protection

---

## 🔄 Updating the Site

### If using Git:
```bash
git add .
git commit -m "Update quiz data"
git push
```
→ Auto-deploys!

### If using Direct Upload:
1. Go to your project in Cloudflare Pages
2. Click **Create a new deployment**
3. Upload updated files

### If using Wrangler:
```bash
wrangler pages deploy .
```

---

## 🐛 Troubleshooting

**Issue**: Site doesn't load
- Check browser console (F12)
- Verify all 4 required files are uploaded

**Issue**: Quiz data missing
- Ensure `quiz-data.js` is uploaded
- Check file size isn't too large (should be ~100KB)

**Issue**: Style looks broken
- Clear browser cache (Ctrl+Shift+R)
- Verify `style.css` is uploaded

---

## 📱 Testing Locally

Before deploying, test locally:

```bash
# Simple Python server
python3 -m http.server 8000

# Or just open index.html in browser
open index.html
```

Visit: `http://localhost:8000`
