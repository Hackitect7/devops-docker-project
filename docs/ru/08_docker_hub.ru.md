# 🐳 УПРАВЛЕНИЕ ОБРАЗАМИ И DOCKER HUB

## Публикация образов

Все образы проекта автоматически публикуются в ваш аккаунт на **Docker Hub**, если настроен **CI/CD** через **GitHub Actions**.

📌 Каждый сервис имеет собственное имя и тег:

- `USERNAME/flask-api:latest` — backend
- `USERNAME/node-frontend:latest` — frontend
- `USERNAME/nginx-proxy:latest` — nginx

Теги можно задать вручную в `sudo docker build` или в **GitHub Actions**. По умолчанию — `latest`.

## 📥 Загрузка образов с Docker Hub

Если вы хотите загрузить образ вручную:

```bash
sudo docker pull USERNAME/flask-api:latest
```

## 🗑 Удаление образов с локальной машины

Чтобы освободить место и удалить ненужные образы:

```bash
sudo docker rmi USERNAME/flask-api
```

💡 Можно добавить флаг `-f` для принудительного удаления.

## 👀Просмотр образов

Откройте <https://hub.docker.com/u/USERNAME>, чтобы увидеть:

- все доступные образы;
- теги;
- дату последнего обновления.

## 🛠 Ручная сборка и загрузка (если нет CI)

Можно собрать и отправить образ вручную:

```bash
sudo docker build -t USERNAME/flask-api:latest .
sudo docker login
sudo docker push USERNAME/flask-api:latest
```

## 🧪 Ошибки при push/pull

Если видите ошибки:

- 🔐 Убедитесь, что выполнили `sudo docker login`
- ✅ Убедитесь, что у вас есть права на репозиторий на **Docker Hub**
- ⚠️ Проверьте имя образа и тег: должно быть `USERNAME/imagename[:tag]`
