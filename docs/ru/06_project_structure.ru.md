# 🗂️ ОПИСАНИЕ ФАЙЛОВ ПРОЕКТА

Проект структурирован по современным **DevOps**-практикам: каждый компонент изолирован, поддерживается **CI/CD** и контейнеризация через Docker.

---

## 🔗 Backend (Flask API)

> Каталог: `/backend/`

- `app.py` — основной код Flask-приложения. Реализует REST API по пути `/api`, возвращающий JSON.
- `requirements.txt` — список Python-зависимостей, используемый при сборке образа.
- `Dockerfile` — инструкция по сборке backend-образа на основе `python:3.11-slim`.

### 🔧 Дополнительно для Backend (опционально)

- `__init__.py` — инициализация пакета Python (если усложняется структура).
- `tests/` — директория для unit- или integration-тестов.

---

## 🌐 Frontend (Node.js / Express)

> Каталог: `/frontend/`

- `index.js` — основной код Node.js-сервера. Возвращает базовую страницу.
- `package.json` — файл зависимостей и скриптов.
- `package-lock.json` — зафиксированные версии пакетов.
- `Dockerfile` — инструкция по сборке frontend-образа на основе Node.js LTS.
- `package.jsonc` - Зависимости и скрипты Node.js с комментариями (не применяется)

### 🔧 Дополнительно для Frontend (опционально)

- `public/` — директория для статики.
- `tests/` — директория для frontend-тестов.

---

## 🚪 Nginx (обратный прокси)

> Каталог: `/nginx/`

- `nginx.conf` — основная конфигурация nginx, перенаправляет запросы на backend и frontend.
- `Dockerfile` — инструкция сборки Docker-образа nginx

### 🔧 Дополнительно для Nginx

- `default.conf` — альтернативный конфигурационный файл для расширенной маршрутизации.

</details>

---

## ⚙️ CI/CD и инфраструктура

> Каталоги: корень проекта и `.github/`

- `docker-compose.yml` — локальный запуск сервисов: backend, frontend, nginx.
- `docker-compose.prod.yml` — конфигурация для развёртывания из **Docker Hub**.
- `.github/workflows/docker-ci.yml` — **CI/CD** pipeline: build, test, publish.

### 🔧 Дополнительно для CI/CD

- `.dockerignore` — исключает ненужные файлы из контекста сборки Docker.
- `.gitignore` — исключает временные и служебные файлы из репозитория Git.

---

## 📚 Документация

Организована по языкам:

> Каталог: `/docs/en/` — на английском языке

- `01_overview.md` — Описание проекта
- `02_requirements.md` — Требования
- ...
- `12_contacts.md` — Контакты и ссылки
- `README.md` — Введение
- `SUMMARY.md` — Структура документации для **GitBook**

> Каталог: `docs/ru/` — на русском языке

- `01_overview.ru.md` — Описание проекта
- `02_requirements.ru.md` — Требования
- ...
- `12_contacts.ru.md` — Контакты и ссылки
- `README.ru.md` — Введение
- `SUMMARY.ru.md` — Структура документации для **GitBook**
