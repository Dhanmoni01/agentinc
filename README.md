Here’s a **complete, professional `README.md`** file that fits both your frontend + backend repos for **AgentInc – AI Social Media Automation SaaS**.
It reads like a startup-grade technical README with setup, architecture, tech stack, deployment, and contribution info.

---

# 🧠 AgentInc – AI-Powered Social Media Automation

> Automate your daily Instagram & Facebook posting, generate AI captions, and track analytics — all from one smart dashboard.

---

## 🚀 Overview

AgentInc is an end-to-end SaaS platform built to simplify content posting and engagement tracking for creators, influencers, and small businesses.

Users can:

* Upload videos or reels once.
* Automatically post them daily via n8n workflows.
* Let AI generate optimized captions and hashtags.
* Analyze engagement and growth via the analytics dashboard.

---

## 🏗️ Architecture Overview

```
Frontend (Next.js + Tailwind)
      ↓
Backend API (FastAPI + Postgres + Redis)
      ↓
n8n Workflow Agent (posting automation)
      ↓
Meta Graph API (Instagram/Facebook)
      ↓
OpenAI/Claude API (caption generation)
```

---

## 🧩 Tech Stack

### 🖥️ Frontend

* **Next.js 14 (App Router)**
* **Tailwind CSS**
* **TypeScript**
* **Axios** for API communication
* **shadcn/ui** for modern UI components

### ⚙️ Backend

* **FastAPI**
* **SQLAlchemy + PostgreSQL**
* **Redis** for caching and job queues
* **JWT** authentication
* **n8n** for automation workflows
* **Stripe** for billing integration
* **OpenAI API** for caption generation

---

## 📦 Project Structure

### `agentinc-frontend/`

```
app/                  # Next.js App Router
components/           # UI + layout components
lib/                  # API helpers, hooks
styles/               # Tailwind global styles
.env.local.example    # Environment variables
```

### `agentinc-backend/`

```
src/
 ├── api/             # FastAPI routers
 ├── domain/          # Business logic
 ├── infra/           # DB, security, logger
 ├── services/        # Integrations (Meta, Stripe, OpenAI)
 ├── utils/           # Helpers
 └── main.py          # Entry point
.env.example
docker-compose.yml
```

---

## ⚡️ Quick Start

### 1️⃣ Clone Repos

```bash
git clone https://github.com/<yourname>/agentinc-backend.git
git clone https://github.com/<yourname>/agentinc-frontend.git
```

---

### 2️⃣ Setup Backend (FastAPI)

```bash
cd agentinc-backend
cp .env.example .env
pip install --upgrade pip
pip install -r <(python - <<'PY'
import tomllib; d=tomllib.load(open('pyproject.toml','rb'))
print('\\n'.join(d['project']['dependencies']))
PY
) || pip install fastapi uvicorn sqlalchemy psycopg[binary] pyjwt httpx
```

Run server:

```bash
uvicorn src.main:app --reload
```

Visit → [http://localhost:8000/docs](http://localhost:8000/docs)

---

### 3️⃣ Setup Frontend (Next.js)

```bash
cd agentinc-frontend
cp .env.local.example .env.local
npm install
npm run dev
```

Visit → [http://localhost:3000](http://localhost:3000)

---

### 4️⃣ Docker Setup (optional)

```bash
docker compose up --build
```

This runs:

* FastAPI backend on port **8000**
* PostgreSQL DB on **5432**

---

## 🔐 Environment Variables

### Backend `.env`

```
ENV=dev
JWT_SECRET=change-me
DATABASE_URL=postgresql+psycopg://postgres:postgres@db:5432/agentinc
CORS_ALLOW_ORIGINS=["http://localhost:3000"]
STRIPE_SECRET_KEY=sk_test_xxx
OPENAI_API_KEY=sk-xxx
```

### Frontend `.env.local`

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

---

## 🧠 n8n Workflow Integration

* Deploy **n8n** locally or via Docker.
* Connect it to the `/agent/due-items` and `/agent/update-status` API routes.
* Configure cron to run every 10 minutes to post scheduled reels.

Example Workflow Steps:

1. Cron trigger (every 10m)
2. HTTP GET → `/agent/due-items`
3. Loop: upload → wait → publish → callback → `/agent/update-status`

---

## 📈 Analytics & Insights

Nightly workflow (00:30 IST):

* Fetch IG metrics via Graph API
* Save to `metrics_daily`
* Display reach, followers, engagement graphs on dashboard

---

## 🧰 Developer Tools

* **Testing:** `pytest`, `Playwright`
* **Formatting:** `black`, `isort`, `eslint`, `prettier`
* **CI/CD:** GitHub Actions (build, lint, deploy)
* **Deployment:**

  * Backend → Render / Fly.io / AWS ECS
  * Frontend → Vercel
  * DB → Supabase / RDS
  * Automation → n8n Docker container

---

## 🧪 Running Tests

```bash
pytest -v
```

---

## 📊 Roadmap

| Phase   | Feature                  | Status         |
| ------- | ------------------------ | -------------- |
| Phase 1 | Auth + JWT               | ✅ Done         |
| Phase 2 | Instagram/Facebook OAuth | 🚧 In progress |
| Phase 3 | AI Captions + Hashtags   | 🧠 Planned     |
| Phase 4 | Analytics Dashboard      | 🧩 Planned     |
| Phase 5 | Billing (Stripe)         | 💳 Planned     |

---

## 💡 Future Enhancements

* Support TikTok / LinkedIn / X
* Auto-comment & engagement AI
* Team accounts and roles
* Mobile app (React Native)
* Multi-language captions

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create feature branch:
   `git checkout -b feature/your-feature-name`
3. Commit:
   `git commit -m "feat(module): add feature"`
4. Push & PR to `develop`

---

## 📜 License

MIT © 2025 — AgentInc
Created by **Dhanmoni Choudhury**

---

## ❤️ Support

For feature requests, bugs, or ideas:

* Open an issue in GitHub
* Or reach out via [LinkedIn](https://www.linkedin.com/in/dhanmoni-choudhury)

---

Would you like me to create **two separate `README.md` versions** —
✅ one for **backend** (FastAPI setup, API docs)
✅ and one for **frontend** (Next.js setup, UI info)?

That’s ideal for independent GitHub repos.
