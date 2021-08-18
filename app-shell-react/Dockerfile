FROM node:14 as BUILDER 
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.19.10
COPY --from=BUILDER ./build /usr/share/nginx/html
