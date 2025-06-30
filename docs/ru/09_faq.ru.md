# ❓ ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ И СОВЕТЫ

## 1. Почему мои образы не отображаются в Docker Hub?

Проверьте, что:

- 🔐 В `Settings > Secrets` на **GitHub** добавлены переменные `DOCKER_USERNAME` и `DOCKER_PASSWORD` (или `DOCKER_TOKEN`)
- ✅ В CI-пайплайне выполняется `sudo docker login` перед `docker push`
- 📤 Вы пушите в правильный репозиторий: `USERNAME/imagename`

## 2. Нужно ли указывать все файлы при git add?

Нет. Достаточно одной команды:

```bash
git add .
```

Это добавит все изменения в текущей директории и вложенных папках.

## 3. Образы Docker занимают много места?

Да. Очистите ненужные образы, контейнеры и кеш:

```bash
sudo docker system prune -a
```

⚠️ Будьте внимательны: команда удалит все неиспользуемые ресурсы.

## 4. Как обновить образы на сервере?

Скачайте свежую версию образа:

```bash
sudo docker pull USERNAME/flask-api:latest
```

Перезапустите контейнеры:

```bash
sudo docker compose down && docker compose up -d
```

## 5. Как убедиться, что образы действительно обновились?

Проверьте хэш образа:

```bash
sudo docker images | grep flask-api
```

Или откройте `docker-compose.yml` и убедитесь, что используется image: с правильным тегом.

## 6. Что делать, если docker-compose не найден?

- Убедитесь, что используете Docker v20+ (в нём `docker compose` встроен)
- В старых системах: установите `docker-compose` отдельно или используйте `docker compose` (без дефиса)

## 7. Почему контейнер быстро завершает работу?

Проверьте логи:

```bash
sudo docker logs <container_name>
```

Возможные причины:

- ❌ Ошибки в коде (например, в `app.py`)
- ⚠️ Отсутствие переменных окружения
- 🚫 Порт уже занят

## 8. Как остановить и удалить все контейнеры?

```bash
sudo docker stop $(docker ps -q)
sudo docker rm $(docker ps -aq)
```

💡 Или одной командой:

```bash
sudo docker container prune -f
```

### 9. Как проверить, что Nginx правильно проксирует запросы?

Посмотрите логи Nginx:

```bash
sudo docker logs nginx
```

Убедитесь, что в `default.conf`:

- Прописаны правильные пути (location `/api`, location `/`)
- Прокси-порт соответствует порту backend/frontend (<http://backend:5000>, <http://frontend:3000>)
