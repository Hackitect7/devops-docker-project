# 🐳 IMAGE MANAGEMENT AND DOCKER HUB

## Publishing images

All project images are automatically published to your **Docker Hub** account if **CI/CD** is configured via **GitHub Actions**.

📌 Each service has its own name and tag:

- `USERNAME/flask-api:latest` — backend
- `USERNAME/node-frontend:latest` — frontend
- `USERNAME/nginx-proxy:latest` — nginx

Tags can be set manually in `sudo docker build` or in **GitHub Actions**. By default — `latest`.

## 📥 Downloading images from Docker Hub

If you want to download an image manually:

```bash
sudo docker pull USERNAME/flask-api:latest
```

## 🗑 Removing images from your local machine

To free up space and remove unnecessary images:

```bash
sudo docker rmi USERNAME/flask-api
```

💡 You can add the `-f` flag to force removal.

## 👀Viewing images

Open <https://hub.docker.com/u/USERNAME> to see:

- all available images;
- tags;
- last update date.

## 🛠 Manual build and upload (if there is no CI)

You can build and push the image manually:

```bash
sudo docker build -t USERNAME/flask-api:latest .
sudo docker login
sudo docker push USERNAME/flask-api:latest
```

## 🧪 Errors when pushing/pull

If you see errors:

- 🔐 Make sure you have run `sudo docker login`
- ✅ Make sure you have permissions to the repository on **Docker Hub**
- ⚠️ Check the image name and tag: should be `USERNAME/imagename[:tag]`
