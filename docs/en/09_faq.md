# ❓ FREQUENTLY ASKED QUESTIONS AND TIPS

## 1. Why aren't my images showing up in Docker Hub?

Check that:

- 🔐 `DOCKER_USERNAME` and `DOCKER_PASSWORD` (or `DOCKER_TOKEN`) variables are added to `Settings > Secrets` on **GitHub**
- ✅ `sudo docker login` is run before `docker push` in the CI pipeline
- 📤 You are pushing to the right repository: `USERNAME/imagename`

## 2. Do I need to specify all files when git add?

No. One command is enough:

```bash
git add .
```

This will add all changes in the current directory and subfolders.

## 3. Do Docker images take up a lot of space?

Yes. Clean up unnecessary images, containers, and cache:

```bash
sudo docker system prune -a
```

⚠️ Be careful: the command will remove all unused resources.

## 4. How to update images on the server?

Download the latest version of the image:

```bash
sudo docker pull USERNAME/flask-api:latest
```

Restart containers:

```bash
sudo docker compose down && docker compose up -d
```

## 5. How to verify that the images were actually updated?

Check the image hash:

```bash
sudo docker images | grep flask-api
```

Or open `docker-compose.yml` and make sure that the image: with the correct tag is used.

## 6. What to do if docker-compose is not found?

- Make sure you are using Docker v20+ (it has `docker compose` built-in)
- On older systems: install `docker-compose` separately or use `docker compose` (without the hyphen)

## 7. Why does a container exit quickly?

Check the logs:

```bash
sudo docker logs <container_name>
```

Possible causes:

- ❌ Code errors (e.g. in `app.py`)
- ⚠️ Missing environment variables
- 🚫 Port already taken

## 8. How to stop and remove all containers?

```bash
sudo docker stop $(docker ps -q)
sudo docker rm $(docker ps -aq)
```

💡 Or with one command:

```bash
sudo docker container prune -f
```

### 9. How to check that Nginx is proxying requests correctly?

Check Nginx logs:

```bash
sudo docker logs nginx
```

Make sure that in `default.conf`:

- The correct paths are specified (location `/api`, location `/`)
- The proxy port matches the backend/frontend port (<http://backend:5000>, <http://frontend:3000>)
