# Stage 0, based on Node.js, to build and compile vue.js
FROM node:19-alpine3.16 as node
WORKDIR /app
COPY package*.json /app/
RUN npm install --legacy-peer-deps
COPY ./ /app/
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.14.0-alpine
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
