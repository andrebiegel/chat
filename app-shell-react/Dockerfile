FROM node:alpine as BUILDER
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=BUILDER ./dist /usr/share/nginx/html
