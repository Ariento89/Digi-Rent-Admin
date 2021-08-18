# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM tiangolo/node-frontend:10 as build-stage
ARG API_URL
ENV REACT_APP_API_URL=${API_URL}
WORKDIR /src/admin
COPY package*.json yarn.lock /src/admin/
RUN yarn install --network-timeout 1000000
COPY . /src/admin
RUN yarn build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:mainline-alpine
COPY --from=build-stage /src/admin/build/ /var/www/admin
# Copy the default nginx.conf provided by tiangolo/node-frontend
# COPY --from=build-stage /src/fannaqua-web/nginx.conf /etc/nginx/conf.d/nginx.conf
