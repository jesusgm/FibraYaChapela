# GitHub Actions Setup for Surge.sh Deployment

## Required GitHub Secrets

To enable automatic deployments, you need to configure these secrets in your GitHub repository:

### 1. Get Surge Token
Run this command locally to get your Surge token:
```bash
surge token
```

### 2. Add GitHub Secrets
Go to your repository on GitHub → Settings → Secrets and variables → Actions → New repository secret

Add these secrets:
- `SURGE_TOKEN`: Your Surge token from the command above
- `SURGE_LOGIN`: Your Surge email (optional but recommended)

## How the Workflow Works

1. **Trigger**: Runs on every push to master branch
2. **Setup**: Uses Node.js 20 with npm caching for speed
3. **Install**: Runs `npm ci` for clean, fast dependency installation
4. **Deploy**: Executes `make release` which builds, deploys to Surge, and cleans up
5. **Status**: Shows deployment success/failure with URL

## Local Development

The makefile still works locally without environment variables:
```bash
make release  # Uses your local Surge credentials
```

## Troubleshooting

- If deployment fails, check the Actions tab in GitHub for detailed logs
- Make sure your Surge token is valid and has access to the domain
- The workflow will fail gracefully and show error messages if credentials are missing
