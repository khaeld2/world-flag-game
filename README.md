# World Flag Game

A fun geography game that tests your knowledge of world flags.

## Deployment Instructions

This project is configured to deploy to GitHub Pages using GitHub Actions. Follow these steps to ensure proper deployment:

### 1. Repository Settings

1. Go to your repository on GitHub: https://github.com/khaeld2/world-flag-game
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions** instead of the default branch option

### 2. Permissions for GitHub Actions

The 403 error in your GitHub Actions workflow indicates a permissions issue. To fix this:

1. Go to **Settings** > **Actions** > **General**
2. Scroll down to "Workflow permissions"
3. Select **Read and write permissions**
4. Click **Save**

### 3. Branch Configuration

Make sure your repository has:
- A `main` branch with your source code
- The GitHub Actions workflow will create a `gh-pages` branch for deployment

### 4. Verify Configuration Files

Your project already has the correct configuration:
- `vite.config.js` has `base: '/world-flag-game/'` which matches your repository name
- `.github/workflows/deploy.yml` is configured to deploy to GitHub Pages

### 5. After Configuration

After making these changes:
1. Push any small change to trigger the workflow
2. Check the Actions tab to monitor the deployment
3. Once successful, your site will be available at: https://khaeld2.github.io/world-flag-game/

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features

- Interactive flag quiz game
- Multiple difficulty levels
- Personalized experience with player name
- Visual feedback with confetti animations

## Technologies Used

- React
- Material UI
- Vite
- GitHub Pages for deployment