FROM node:14 as BUILDER 
RUN npm install --save bootstrap react-bootstrap
COPY . . 
RUN npm run build

FROM nginx:1.19.10
COPY --from=BUILDER ./build /usr/share/nginx/html
