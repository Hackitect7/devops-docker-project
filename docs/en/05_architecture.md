# 🏗️ PROJECT ARCHITECTURE AND HOW IT WORKS

The project is built on three containers that interact with each other via **Docker Compose** and are managed via **GitHub Actions**.

---

## 🧩 Container architecture components

Each module is responsible for its own part of the functionality:

- **backend** — Flask API application that processes REST requests and business logic
- **frontend** — Express application on Node.js that provides a web interface and requests data from the backend
- **nginx** — reverse proxy that receives external requests and forwards them to the desired container

📊 **Component interaction diagram:**

```text
Client  ──►  NGINX (Reverse Proxy)  ──►  Frontend (Node.js Express)
                                │
                                └─────►  Backend (Flask API)
```

---

## ⚙️ Role Docker Compose

**Docker Compose** provides:

- 📦 Quick deployment of the entire infrastructure based on `docker-compose.yml`
- 🔗 Creation of a common network between services (by default — bridge)
- 🛠️ Simplified launch and testing of components in isolation

Example of launch:

```bash
sudo docker compose up --build
```

## 🔁 GitHub Actions Role

**GitHub Actions** automates the **CI/CD** process:

- 🧪 **CI (Continuous Integration)**: testing and building images with each push
- 📤 **CD (Continuous Delivery)**: publishing Docker images to **Docker Hub**

📦 **CI/CD** Pipeline:

- ✅ The developer makes a `push` to the main or dev branch
- 🏗️ **GitHub Actions** runs a workflow from `.github/workflows/docker-ci.yml`
- 🐳 For each component:
  - Build a Docker image
  - Run tests (if any)
  - Login to **Docker Hub** using secrets
  - Push an image to **Docker Hub** with tags (e.g. `USERNAME/backend:latest`)
- 🚀 After a successful publish, you can:
  - Run locally with `docker-compose.yml`
  - Deploy to production with `docker-compose.prod.yml`
