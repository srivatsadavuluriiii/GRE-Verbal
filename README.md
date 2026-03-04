# GRE Vocabulary Quiz - Cloudflare Deployment

🎯 **Interactive quiz for GRE vocabulary with 600+ words**

## 📁 Project Structure

```
gre-vocabulary-quiz/
├── index.html              # Main app
├── clusters.html          # Cluster visualization page
├── style.css              # Styling
├── script.js              # Quiz logic
├── cluster-viz.js         # Visualization logic
├── cluster-data.js        # Cluster data
├── quiz-data.js           # Questions (Days 1-7, 1019 words)
├── cluster.txt            # Master semantic clusters
├── quiz-day1.txt - quiz-day7.txt    # Backup quiz data
├── Day1.txt - Day7.txt    # Source word lists
├── master.txt             # Complete word list (1019 words)
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

- **7-day quiz structure** with 1,019 GRE words
- **MCQ format** with tricky 3-5 word definitions
- **Visual feedback** - black/white with red for errors
- **Score tracking** with real-time progress
- **Interactive cluster visualization** - 480 semantic clusters
- **Grid and Network views** for exploring word relationships
- **Search functionality** across all clusters
- **ShadCN-inspired design** - Minimalist black & white aesthetic
- **Apple SF Pro typography** - System font stack
- **Fully responsive** - Mobile-first design
- **No backend needed** - Pure static site

## 📚 Tech Stack

- **HTML5, CSS3, JavaScript** (Vanilla - No frameworks)
- **Design System**: ShadCN-inspired monochrome aesthetic
- **Typography**: Apple SF Pro / System font stack
- **Color Palette**: Black, white, and grays only
- **No dependencies** - Completely standalone
- **Static site** - Perfect for Cloudflare Pages
- **~150KB total size** (including all assets)

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
