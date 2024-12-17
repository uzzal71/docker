FROM nginx:stable-alpine

# Copy React build files into Nginx html directory
COPY ../frontend/build /usr/share/nginx/html

# Copy Nginx configuration
COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
