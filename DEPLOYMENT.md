# Deployment Guide - AI Resume Builder

This guide provides instructions for deploying the **AI Resume Builder SaaS Platform** to various production environments.

---

## 🛠️ Deployment Overview

| Layer | Recommended Provider | Method |
| :--- | :--- | :--- |
| **Frontend** | Vercel / Netlify | Git Push (CI/CD) |
| **Backend API** | AWS (ECS/App Runner) / DigitalOcean | Docker Container |
| **Database** | Supabase (PostgreSQL) / AWS RDS | Managed Database |
| **AI Inference** | Groq / Together AI / Self-hosted | REST API / GPU Instance |
| **Cache & Queue** | Upstash (Redis) / AWS ElastiCache | Managed Redis |
| **Storage** | AWS S3 / Cloudflare R2 | Object Storage |

---

## 🚀 Step 1: Frontend (Next.js)

The frontend is optimized for **Vercel**.

1. Connect your GitHub repository to Vercel.
2. Set the following Environment Variables in the Vercel Dashboard:
   - `NEXT_PUBLIC_API_URL`: URL of your deployed FastAPI backend.
3. Deploy! (Vercel automatically handles the build process).

---

## 🐳 Step 2: Backend (FastAPI with Docker)

We recommend using **Docker** for a consistent backend environment.

### 1. Build the Docker Image
```bash
docker build -t ai-resume-backend .
```

### 2. Configure Environment Variables
Ensure your production server has the `.env` variables set:
- `DATABASE_URL`: Production Postgres string.
- `REDIS_URL`: Production Redis string.
- `AI_API_KEY`: API key for Groq/OpenAI/Together.
- `JWT_SECRET`: A strong, random string.

### 3. Run with Docker Compose (Standard VPS)
```bash
docker-compose -f docker-compose.prod.yml up -d
```

---

## 🤖 Step 3: AI Inference Setup

There are two primary ways to run LLaMA-3 in production:

### Option A: Scalable Cloud APIs (Recommended)
Use **Groq**, **Together AI**, or **DeepInfra**.
- Pro: Extremely fast (200+ tokens/sec), zero server maintenance.
- Con: Costs per token (though very low).

### Option B: Self-Hosted Ollama (GPU VPS)
Deploy to a VPS with an NVIDIA GPU (e.g., Lambda Labs, RunPod).
1. Install Ollama: `curl -fsSL https://ollama.com/install.sh | sh`
2. Pull LLaMA-3: `ollama pull llama3`
3. Expose the API or run it on the same network as your backend.

---

## 📦 Step 4: Storage & CDN (AWS S3)

1. Create an S3 Bucket (e.g., `resume-builder-assets`).
2. Configure **CORS** to allow your frontend domain.
3. Update the backend `.env` with `AWS_ACCESS_KEY` and `AWS_SECRET_KEY`.
4. Ensure the IAM user has `PutObject` and `GetObject` permissions.

---

## 🔄 Step 5: CI/CD Pipeline (GitHub Actions)

A professional deployment should use CI/CD.

```yaml
# .github/workflows/deploy.yml
name: Deploy Backend
on:
  push:
    branches: [ main ]
jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker Image
        run: docker build -t user/ai-resume-backend .
      - name: Push to Registry
        run: docker push user/ai-resume-backend
      - name: Deploy to Server
        run: |
          ssh deploy@api.yoursite.com "cd app && docker-compose pull && docker-compose up -d"
```

---

## 🛡️ Post-Deployment Checklist
- [ ] Enable HTTPS (via Cloudflare or Let's Encrypt).
- [ ] Set up database backups (weekly/daily).
- [ ] Configure Sentry or LogRocket for error monitoring.
- [ ] Verify AI API rate limits.
- [ ] Test PDF export functionality in a production-like environment.
