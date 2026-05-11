# Stage 1: Build the React application
FROM node:22-alpine AS build
WORKDIR /app
COPY src/assets assets
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 9080
CMD ["nginx", "-g", "daemon off;"]
