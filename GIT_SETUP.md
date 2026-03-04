# Git Setup & GitHub Upload Guide

## 🔧 Fix Git Issue First (If needed)

If you see Xcode license error:
```bash
sudo xcodebuild -license
# Press space to scroll, type 'agree' at the end
```

---

## 📝 Initialize Git Repository

```bash
cd /Users/srivatsadavuluri/Developer/Verbal

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: GRE Vocabulary Quiz with Days 1-4"
```

---

## 🌐 Upload to GitHub

### Option 1: Using GitHub CLI (gh)

```bash
# Install GitHub CLI if needed
brew install gh

# Login
gh auth login

# Create repo and push
gh repo create gre-vocabulary-quiz --public --source=. --push
```

### Option 2: Manual GitHub Setup

1. **Create GitHub Repository:**
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `gre-vocabulary-quiz`
   - Description: `Interactive GRE Vocabulary Quiz`
   - Make it **Public**
   - **Don't** initialize with README (we have one)
   - Click **Create repository**

2. **Connect and Push:**
   ```bash
   cd /Users/srivatsadavuluri/Developer/Verbal
   
   # Add GitHub as remote (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/gre-vocabulary-quiz.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

---

## 🔄 Future Updates

After making changes:

```bash
# Check what changed
git status

# Add changes
git add .

# Commit with message
git commit -m "Add Day 5 quiz data"

# Push to GitHub
git push
```

---

## 📦 Quick Command Reference

```bash
# Check status
git status

# See commit history
git log --oneline

# See what changed
git diff

# Undo changes (before commit)
git checkout -- <filename>

# See remote URL
git remote -v
```

---

## 🚀 After GitHub Setup

Once your code is on GitHub, you can:

1. **Deploy to Cloudflare Pages** (see DEPLOY_CLOUDFLARE.md)
2. **Enable auto-deployment** - every git push deploys automatically
3. **Collaborate** - share the repo link
4. **Track changes** - full version history

---

## ⚡ Complete Setup in One Go

```bash
cd /Users/srivatsadavuluri/Developer/Verbal

# Initialize and commit
git init
git add .
git commit -m "Initial commit: GRE Quiz Days 1-4 complete"

# Create GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/gre-vocabulary-quiz.git
git branch -M main
git push -u origin main
```

Done! 🎉
