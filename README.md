# Gallery

Demostration project to show how to display images from an S3-compatible Object Storage service, like Digital Ocean Spaces.

## Getting started

- Make a copy of the `backend/example.env` file and renamed it as `.env` in the same directory, then add the corresponding values.

- Install dependencies

```bash
cd backend
pnpm install

cd ../frontend
pnpm install
```

- Start the app

```bash
cd backend
pnpm dev

# On another Terminal
cd frontend
pnpm dev
```