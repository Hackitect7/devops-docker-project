# DevOps Docker Project

A beginner-friendly yet production-grade **CI/CD** demo project using **Docker**, **GitHub Actions**, **Flask**, **Node.js**, and **Nginx**.

---

![Stars](https://img.shields.io/github/stars/Hackitect7/devops-docker-project) ![CI](https://github.com/Hackitect7/devops-docker-project/actions/workflows/docker-ci.yml/badge.svg) ![Docker Pulls](https://img.shields.io/docker/pulls/hackitect7/flask-api) ![Image Size](https://img.shields.io/docker/image-size/hackitect7/flask-api/latest) ![Last Commit](https://img.shields.io/github/last-commit/Hackitect7/devops-docker-project) ![License](https://img.shields.io/github/license/Hackitect7/devops-docker-project) ![Issues](https://img.shields.io/github/issues/Hackitect7/devops-docker-project)

---

## 🚀 Features

- 🔧 CI/CD pipeline with **GitHub Actions**
- 🐳 Docker-based development and deployment
- 🔁 Reverse proxy with Nginx
- 🐍 Flask backend API
- 🚀 Node.js frontend
- ☁️ Auto-push to **Docker Hub**

---

## ⚡ Quick Start

```bash
git clone https://github.com/Hackitect7/devops-docker-project.git
cd devops-docker-project
sudo docker compose up --build
```

Open in browser:

<http://localhost/api> — Flask API

<http://localhost:3000> — Node.js frontend

<http://localhost> — Nginx reverse proxy (port 80)

To stop services:

```bash
docker compose down
```

## 🧩 Project Structure

```text
/backend       - Flask API (Python)
  app.py
  Dockerfile

/frontend      - Node.js frontend
  index.js
  Dockerfile

/nginx         - Nginx config
  nginx.conf
  Dockerfile

/.github/workflows/docker-ci.yml  - CI/CD pipeline
```

## 📚 Documentation

[Documentation in English](./docs/en/SUMMARY.md)

[Documentation in Russian](./docs/ru/SUMMARY.ru.md)

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE).

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📬 **Contact Us:**

💼 **LinkedIn:** [https://www.linkedin.com/in/aleksei-polovinkin-918603278/](https://www.linkedin.com/in/aleksei-polovinkin-918603278/)

✉️ **Email:** [papulya2012@gmail.com](mailto:papulya2012@gmail.com)

💬 **Telegram:** [@manfred251278](https://t.me/Manfred251278)

