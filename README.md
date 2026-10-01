# React CI/CD Demo

A deliberately simple React + Vite project for learning CI/CD with Azure DevOps.

## Run locally

Install Node.js 20+.

```bash
npm install
npm run dev
```

Open the URL shown by Vite.

## Run tests

```bash
npm test
```

## Create a production build

```bash
npm run build
```

The production files will be created in:

```text
dist/
```

## CI/CD learning path

The included `azure-pipelines.yml` demonstrates:

1. Triggering a pipeline when code is pushed to `main`
2. Installing Node.js
3. Installing dependencies
4. Running tests
5. Creating a production build
6. Publishing `dist/` as an Azure Pipeline artifact

The next step is to connect this repository to Azure DevOps and create the pipeline.
