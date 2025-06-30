# 🚀 LAUNCHING AND TESTING THE PROJECT

## 📦 Launching locally via Docker Compose

For local development and testing, build and run all services with the command:

```bash
sudo docker compose up --build
```

🔍 What will happen:

- Images for the backend and frontend will be built from the local `Dockerfile`
- 3 containers will be started: flask-api, node-frontend and nginx-proxy
- nginx will route requests between the frontend and backend

💡 Make sure you run the command from the root directory of the project, where `docker-compose.yml` is located.

## ✅ Checking the operation

After starting the services, check that everything works:

<http://localhost/api> — Returns JSON from Flask backend: {"message": "Hello from Flask"}
<http://localhost:3000> — Node.js frontend directly (via port)
<http://localhost> — Access to the frontend via nginx proxy (port 80)

## 🛑 Stopping containers

To gracefully stop and remove all containers, run:

```bash
sudo docker compose down
```

📌 This command:

- Will stop all services
- Will remove containers (but not images and volumes)

## 🧼 Complete cleanup (optional)

If you want to completely clean everything, including images, use:

```bash
sudo docker compose down --rmi all
```

## 🛠 Troubleshooting

If some service does not start:

- Check logs with `sudo docker compose logs` or `sudo docker logs <container_name>`
- Make sure you do not have conflicting ports on 80, 3000 or 5000
- Make sure you have an up-to-date version of Docker and enough resources (especially on Windows/Mac)
