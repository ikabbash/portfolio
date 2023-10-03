FROM node:alpine AS build

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . .

# comment the lines below the commented CMD and
# uncomment the CMD if you want to use the dev environment
# CMD ["npm", "run", "dev"]

RUN npm run build

FROM nginx:1.20.2

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html