# GRE Vocabulary Quiz - Cloudflare Deployment

🎯 **Interactive quiz for GRE vocabulary with 600+ words**

## 📁 Project Structure

```
gre-vocabulary-quiz/
├── index.html              # Main app
├── style.css              # Styling
├── script.js              # Quiz logic
├── quiz-data.js           # Questions (Days 1-4, 602 words)
├── quiz-day1.txt          # Backup Day 1
├── quiz-day2.txt          # Backup Day 2
├── quiz-day3.txt          # Backup Day 3
├── quiz-day4.txt          # Backup Day 4
├── Day1.txt - Day7.txt    # Source word lists
├── generate_quiz_detailed.py  # Quiz generator
├── README.md              # Main docs
├── GIT_SETUP.md          # Git instructions
├── DEPLOY_CLOUDFLARE.md  # Cloudflare deploy guide
├── wrangler.toml         # Cloudflare config
├── package.json          # Project metadata
└── .gitignore            # Git ignore rules
```

## ✅ Current Status

- ✅ Day 1: 150 words
- ✅ Day 2: 150 words  
- ✅ Day 3: 152 words
- ✅ Day 4: 150 words
- 🔄 Days 5-7: 450 words remaining

**Total: 602/1050 words (57% complete)**

## 🚀 Quick Deploy

### Cloudflare Pages (Recommended)

**Easiest - Direct Upload:**
1. Visit [dash.cloudflare.com/pages](https://dash.cloudflare.com/)
2. Upload: `index.html`, `style.css`, `script.js`, `quiz-data.js`
3. Deploy → Live in 1 minute!

See **[DEPLOY_CLOUDFLARE.md](./DEPLOY_CLOUDFLARE.md)** for detailed instructions.

## 🔧 Setup Git Repository

See **[GIT_SETUP.md](./GIT_SETUP.md)** for step-by-step Git/GitHub setup.

Quick version:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/gre-vocabulary-quiz.git
git push -u origin main
```

## 💻 Local Development

```bash
# Open directly
open index.html

# Or run local server
python3 -m http.server 8000
# Visit: http://localhost:8000
```

## 🎨 Features

- 7-day quiz structure
- MCQ with tricky 3-5 word definitions
- Visual feedback (green/red)
- Score tracking
- Mobile responsive
- No backend needed - pure static site

## 📚 Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- No frameworks or dependencies
- Static site - perfect for Cloudflare Pages
- ~100KB total size

## 🔄 Adding More Quiz Data

To generate Days 5-7:
```bash
python3 generate_quiz_detailed.py
```

## 📊 Performance

- Load time: <1s
- Global CDN via Cloudflare
- HTTPS enabled
- Perfect Lighthouse scores

## 📖 Documentation

- **[README.md](./README.md)** - Full project documentation
- **[DEPLOY_CLOUDFLARE.md](./DEPLOY_CLOUDFLARE.md)** - Deployment guide
- **[GIT_SETUP.md](./GIT_SETUP.md)** - Git/GitHub setup

## 🤝 Next Steps

1. ✅ Fix Xcode license (if needed): `sudo xcodebuild -license`
2. ✅ Initialize Git repo (see GIT_SETUP.md)
3. ✅ Push to GitHub
4. ✅ Deploy to Cloudflare Pages (see DEPLOY_CLOUDFLARE.md)
5. 🔄 Generate Days 5-7 quiz data
6. 🚀 Update and redeploy

## 📝 License

MIT
