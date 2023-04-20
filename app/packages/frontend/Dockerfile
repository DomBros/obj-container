FROM node:16-alpine as build

WORKDIR /home/app
COPY package*.json ./
RUN npm i

COPY ./ ./
RUN npm run build

# production environment
FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /home/app/build ./
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]