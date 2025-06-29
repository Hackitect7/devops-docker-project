# Dockerfile to build a custom Nginx image
# We use the official lightweight nginx image based on Alpine Linux — small and fast

FROM nginx:alpine  # Base image with Nginx and Alpine Linux to keep the image size minimal

# Copy our custom Nginx configuration file into the container,
# replacing the default config with one tailored to our app’s needs
COPY nginx.conf /etc/nginx/nginx.conf

# The container will use the default CMD provided by the nginx:alpine image,
# which automatically starts the Nginx server using the provided configuration
