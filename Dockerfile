FROM node:13.3.0 AS compile-image

RUN npm install


COPY . ./
RUN ng build --oat --prod

FROM nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /dist/userRegistrationWeb /usr/share/nginx/html