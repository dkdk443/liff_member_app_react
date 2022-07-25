FROM node:16.15.0-alpine
WORKDIR /var/www/html/liff_member_app_react
RUN apk add bash
RUN apk add curl