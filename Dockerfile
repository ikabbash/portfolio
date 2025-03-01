FROM node:23.9-alpine3.21 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.27.4-alpine3.21
RUN rm -rf /usr/share/nginx/html/*  
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# To make the image more secure (depends on the deployment)
# RUN chmod -R 755 /usr/share/nginx/html && \
#     chown -R nginx:nginx /usr/share/nginx/html
# USER nginx
# CMD ["nginx", "-g", "daemon off;"]