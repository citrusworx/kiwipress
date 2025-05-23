FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

# RUN yarn build
# RUN yarn global add serve

EXPOSE 3000

CMD ["npx", "vite", "--host", "0.0.0.0", "--port", "3000"]