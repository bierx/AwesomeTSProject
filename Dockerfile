FROM node:12 as dependencies

RUN mkdir /app
WORKDIR /app

COPY . ./

RUN npm ci

# FROM dependencies as builder
# WORKDIR /app

# COPY . ./

# RUN npm run ios


FROM node:12
WORKDIR /app

COPY --from=dependencies /app/. ./

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]