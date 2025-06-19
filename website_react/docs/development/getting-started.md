# Getting Started

This guide will help you set up your development environment for bjornmelin-platform-io.

## Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- AWS CLI configured with appropriate credentials
- Git

## Initial Setup

1. Clone the repository:

```bash
git clone https://github.com/bjornmelin/bjornmelin-platform-io.git
cd bjornmelin-platform-io
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
# Copy the example env file
cp .env.example .env.local

# Configure your environment variables:
# - AWS credentials
# - API endpoints
# - Other environment-specific settings
```

## Development Server

Run the development server:

```bash
yarn dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## Infrastructure Development

For working with AWS infrastructure:

1. Install AWS CDK globally:

```bash
npm install -g aws-cdk
```

2. Navigate to infrastructure directory:

```bash
cd infrastructure
```

3. Install infrastructure dependencies:

```bash
yarn install
```

4. Deploy infrastructure:

```bash
cdk deploy
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build production bundle
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript checks

## Project Structure

```
.
├── src/                  # Application source code
├── public/              # Static files
├── infrastructure/      # AWS CDK infrastructure
├── docs/               # Documentation
└── prisma/             # Database schema and migrations
```

## Code Style

- ESLint configuration in `.eslintrc.json`
- Prettier for code formatting
- TypeScript strict mode enabled

## Testing

Run tests:

```bash
yarn test
```

## Common Issues

### AWS Credentials

Ensure your AWS credentials are properly configured in `~/.aws/credentials` or through environment variables:

```bash
export AWS_ACCESS_KEY_ID="your_access_key"
export AWS_SECRET_ACCESS_KEY="your_secret_key"
export AWS_DEFAULT_REGION="your_region"
```

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
PORT=3001 yarn dev
```

## Next Steps

1. Review the [Architecture Overview](../architecture/README.md)
2. Explore the [API Documentation](../api/README.md)
3. Check the [Frontend Architecture](../architecture/frontend.md)

## Getting Help

If you encounter any issues:

1. Check the documentation
2. Review existing GitHub issues
3. Create a new issue with detailed information about your problem
