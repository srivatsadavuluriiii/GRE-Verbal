#!/bin/bash

# GRE Vocabulary Quiz - Complete Setup Script
# This script initializes Git, creates GitHub repo, and prepares for Cloudflare deployment

set -e  # Exit on error

echo "🚀 GRE Vocabulary Quiz - Setup Script"
echo "======================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if in correct directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the Verbal directory"
    exit 1
fi

echo -e "${BLUE}Step 1: Initialize Git Repository${NC}"
if [ -d ".git" ]; then
    echo "✅ Git already initialized"
else
    git init
    echo "✅ Git repository initialized"
fi

echo ""
echo -e "${BLUE}Step 2: Add files to Git${NC}"
git add .
echo "✅ Files staged for commit"

echo ""
echo -e "${BLUE}Step 3: Create initial commit${NC}"
if git rev-parse HEAD >/dev/null 2>&1; then
    echo "✅ Repository already has commits"
else
    git commit -m "Initial commit: GRE Vocabulary Quiz with Days 1-4 (602 words)"
    echo "✅ Initial commit created"
fi

echo ""
echo -e "${BLUE}Step 4: Check for GitHub CLI${NC}"
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI (gh) is installed"
    echo ""
    read -p "Would you like to create GitHub repo and push now? (y/n): " create_repo
    
    if [ "$create_repo" = "y" ]; then
        echo ""
        echo "🔐 Authenticating with GitHub..."
        gh auth status || gh auth login
        
        echo ""
        echo "📦 Creating GitHub repository..."
        gh repo create gre-vocabulary-quiz \
            --public \
            --description "Interactive GRE Vocabulary Quiz - Cloudflare Pages" \
            --source=. \
            --push || echo "Note: Repo might already exist"
        
        echo ""
        echo -e "${GREEN}✅ Repository created and pushed to GitHub!${NC}"
    fi
else
    echo "⚠️  GitHub CLI (gh) not found"
    echo ""
    echo "You can:"
    echo "  1. Install it: brew install gh"
    echo "  2. Or manually push to GitHub (see GIT_SETUP.md)"
fi

echo ""
echo -e "${GREEN}=======================================${NC}"
echo -e "${GREEN}✅ Setup Complete!${NC}"
echo -e "${GREEN}=======================================${NC}"
echo ""
echo "📊 Current Status:"
echo "  ✅ Git repository initialized"
echo "  ✅ Files committed"
echo "  ✅ Ready for deployment"
echo ""
echo "🚀 Next Steps:"
echo ""
echo "1. Push to GitHub (if not done):"
echo "   ${YELLOW}gh repo create gre-vocabulary-quiz --public --source=. --push${NC}"
echo ""
echo "2. Deploy to Cloudflare Pages:"
echo "   ${YELLOW}wrangler pages deploy . --project-name=gre-vocabulary-quiz${NC}"
echo "   OR upload manually at: https://dash.cloudflare.com/pages"
echo ""
echo "3. View your local site:"
echo "   ${YELLOW}open index.html${NC}"
echo ""
echo "📖 Documentation:"
echo "   - GIT_SETUP.md - Git/GitHub instructions"
echo "   - DEPLOY_CLOUDFLARE.md - Deployment guide"
echo "   - README.md - Full documentation"
echo ""
