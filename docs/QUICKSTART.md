# Quick Start Guide

## 📦 What You Have

Complete GRE Vocabulary Quiz ready to deploy:
- ✅ 602 words across Days 1-4
- ✅ Fully functional quiz interface
- ✅ Ready for Cloudflare Pages
- ✅ All documentation

---

## 🚀 Deploy in 3 Steps

### Step 1: Fix Xcode License (One-time only)

```bash
sudo xcodebuild -license
# Press space to scroll, type 'agree'
```

### Step 2: Run Setup Script

```bash
cd /Users/srivatsadavuluri/Developer/Verbal
./setup.sh
```

This will:
- Initialize Git
- Create initial commit
- Optionally push to GitHub

### Step 3: Deploy to Cloudflare

**Option A - Direct Upload (Fastest):**
1. Go to https://dash.cloudflare.com/pages
2. Upload these 4 files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `quiz-data.js`
3. Done! Live in 1 minute.

**Option B - Git Integration:**
1. Push to GitHub (setup.sh does this)
2. Connect Cloudflare Pages to GitHub
3. Auto-deploys on every push

**Option C - Wrangler CLI:**
```bash
npm install -g wrangler
wrangler login
wrangler pages deploy . --project-name=gre-vocabulary-quiz
```

---

## 📁 Files Overview

**Core App (Deploy these):**
- `index.html` - Main page
- `style.css` - Styling
- `script.js` - Quiz logic
- `quiz-data.js` - 602 questions

**Backups:**
- `quiz-day1.txt` to `quiz-day4.txt`

**Source Data:**
- `Day1.txt` to `Day7.txt` - Original word lists

**Documentation:**
- `README.md` - Main docs
- `DEPLOY_CLOUDFLARE.md` - Deployment details
- `GIT_SETUP.md` - Git/GitHub guide
- `QUICKSTART.md` - This file

**Tools:**
- `setup.sh` - Automated setup script
- `generate_quiz_detailed.py` - Quiz generator
- `wrangler.toml` - Cloudflare config

---

## ⚡ Commands Cheat Sheet

```bash
# Setup Git and GitHub
./setup.sh

# Test locally
open index.html
# or
python3 -m http.server 8000

# Deploy with Wrangler
wrangler pages deploy .

# Update after changes
git add .
git commit -m "Update"
git push

# Generate more quiz data
python3 generate_quiz_detailed.py
```

---

## 🎯 Your URL After Deploy

Cloudflare will give you:
- Default: `https://gre-vocabulary-quiz.pages.dev`
- Or custom domain of your choice

---

## 🔄 Current Status

- ✅ Day 1: 150 words
- ✅ Day 2: 150 words
- ✅ Day 3: 152 words
- ✅ Day 4: 150 words
- 🔄 Day 5: Pending (150 words)
- 🔄 Day 6: Pending (150 words)
- 🔄 Day 7: Pending (120 words)

**602 of 1050 words complete (57%)**

---

## ❓ Need Help?

1. **Git Setup**: See `GIT_SETUP.md`
2. **Cloudflare Deploy**: See `DEPLOY_CLOUDFLARE.md`
3. **Full Docs**: See `README.md`

---

## ✅ Everything Ready!

Your quiz is 100% functional and ready to deploy. Just follow the 3 steps above! 🚀
