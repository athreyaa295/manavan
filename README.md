# AI Resume Builder Pro 🚀

A production-ready, full-stack SaaS platform for creating high-impact, ATS-optimized resumes using LLaMA-3.

## 🌟 Features

- **AI Content Generation**: Generate professional summaries and bullet points using LLaMA-3 and RAG.
- **ATS Optimization**: Real-time analysis of your resume against job descriptions with scoring and keyword suggestions.
- **Modern Drag-and-Drop Editor**: A premium, responsive interface for building your resume.
- **Cover Letter Generator**: Tailored cover letters based on your resume and target job.
- **Portfolio Website Generator**: (Coming soon) Turn your resume into a stunning personal website.
- **Multiple Templates**: Choose from Modern, Minimal, Corporate, and Creative templates.

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, TailwindCSS, Framer Motion, Zustand.
- **Backend**: Python, FastAPI, SQLAlchemy, PostgreSQL.
- **AI**: Ollama (LLaMA-3), LangChain, FAISS (Vector DB).
- **Background Jobs**: Redis, Celery (for async generation and export).
- **Infrastructure**: Docker, Docker Compose.

## 🚀 Quick Start

### Prerequisites

- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [Ollama](https://ollama.ai/) installed locally (if running without Docker)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/ai-resume-builder-pro.git
   cd ai-resume-builder-pro
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   # Update variables in .env if needed
   ```

3. **Spin up the stack**
   ```bash
   docker-compose up --build
   ```

4. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8000`
   - API Docs: `http://localhost:8000/docs`

## 📂 Project Structure

- `/frontend`: Next.js application.
- `/backend`: FastAPI application and models.
- `/ai`: AI logic, RAG pipelines, and generators.
- `/vector_db`: Vector storage for resume examples and domain knowledge.
- `docker-compose.yml`: Infrastructure orchestration.

## 📄 License

MIT
