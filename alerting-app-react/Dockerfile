FROM node:14.17-alpine  as BUILDER 
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=BUILDER ./dist /usr/share/nginx/html
