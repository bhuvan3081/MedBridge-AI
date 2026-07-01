#!/usr/bin/env bash

# Helper script to initialize git, login to GitHub, create repository, and push codes for MedBridge AI

# 1. Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed."
    echo "Please install it by running: sudo apt update && sudo apt install -y git"
    exit 1
fi

# 2. Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Please install it by running: sudo apt update && sudo apt install -y gh"
    exit 1
fi

# 3. Check GitHub Auth Status
echo "Checking GitHub authentication status..."
if ! gh auth status &> /dev/null; then
    echo "🔑 You need to log in to GitHub first."
    echo "Please follow the interactive login prompts below:"
    gh auth login || { echo "❌ GitHub authentication failed."; exit 1; }
fi

# 4. Initialize Git Repo if not already done
if [ ! -d .git ]; then
    echo "⚙️ Initializing a new local Git repository..."
    git init -b main
else
    echo "✅ Local Git repository already initialized."
fi

# 5. Add files & commit
echo "📦 Adding files and committing..."
git add .
git commit -m "Initial commit - MedBridge AI codebase"

# 6. Create GitHub Repository and Push
REPO_NAME="MedBridge-AI"
echo "🌐 Creating GitHub repository '$REPO_NAME'..."

# Check if the repo already exists on user's GitHub
if gh repo view "$REPO_NAME" &> /dev/null; then
    echo "⚠️ Repository '$REPO_NAME' already exists on GitHub."
    echo "Adding remote and pushing..."
    # Set remote URL if not already set
    USER_NAME=$(gh api user -q .login)
    git remote remove origin &> /dev/null
    git remote add origin "https://github.com/$USER_NAME/$REPO_NAME.git"
    git branch -M main
    git push -u origin main
else
    echo "🚀 Creating repository and pushing..."
    gh repo create "$REPO_NAME" --public --source=. --push || {
        echo "❌ Failed to create or push repository automatically."
        echo "Please check if repository already exists or if you have proper permissions."
        exit 1
    }
fi

echo "🎉 Success! Your code has been pushed to GitHub."
echo "Visit your repository: $(gh repo view "$REPO_NAME" --web)"
