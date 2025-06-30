# 🗂️ DESCRIPTION OF PROJECT FILES

The project is structured according to modern **DevOps** practices: each component is isolated, **CI/CD** and containerization via Docker are supported.

---

## 🔗 Backend (Flask API)

> Directory: `/backend/`

- `app.py` — the main code of the Flask application. Implements the REST API at `/api`, returning JSON.
- `requirements.txt` — a list of Python dependencies used when building the image.
- `Dockerfile` — instructions for building a backend image based on `python:3.11-slim`.

### 🔧 Additional for Backend (optional)

- `__init__.py` — initialization of the Python package (if the structure becomes more complex).
- `tests/` — directory for unit or integration tests.

---

## 🌐 Frontend (Node.js / Express)

> Directory: `/frontend/`

- `index.js` — main code of Node.js server. Returns base page.
- `package.json` — dependencies and scripts file.
- `package-lock.json` — locked versions of packages.
- `Dockerfile` — instructions for building frontend image based on Node.js LTS.
- `package.jsonc` - Dependencies and Node.js scripts with comments (not used)

### 🔧 Additional for Frontend (optional)

- `public/` — directory for statics.
- `tests/` — directory for frontend tests.

---

## 🚪 Nginx (reverse proxy)

> Directory: `/nginx/`

- `nginx.conf` — main nginx configuration, redirects requests to backend and frontend.
- `Dockerfile` — nginx Docker image build instructions

### 🔧 Additional for Nginx

- `default.conf` — alternative configuration file for advanced routing.

</details>

---

## ⚙️ CI/CD and infrastructure

> Directories: project root and `.github/`

- `docker-compose.yml` — local service launch: backend, frontend, nginx.
- `docker-compose.prod.yml` — configuration for deployment from **Docker Hub**.
- `.github/workflows/docker-ci.yml` — **CI/CD** pipeline: build, test, publish.

### 🔧 Additional for CI/CD

- `.dockerignore` — excludes unnecessary files from the Docker build context.
- `.gitignore` — excludes temporary and service files from the Git repository.

---

## 📚 Documentation

Organized by language:

> Catalog: `/docs/en/` — in English

- `01_overview.md` — Project description
- `02_requirements.md` — Requirements
- ...
- `12_contacts.md` — Contacts and links
- `README.md` — Introduction
- `SUMMARY.md` — Documentation structure for **GitBook**

> Catalog: `docs/ru/` — in Russian

- `01_overview.ru.md` — Project description
- `02_requirements.ru.md` — Requirements
- ...
- `12_contacts.ru.md` — Contacts and links
- `README.ru.md` — Introduction
- `SUMMARY.ru.md` — Documentation structure for **GitBook**
