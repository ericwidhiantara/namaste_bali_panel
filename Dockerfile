FROM node:19-alpine
ENV NODE_ENV production
WORKDIR /app
COPY ./build ./static package*.json ./
RUN npm ci --omit dev
EXPOSE 3001
ENV PORT=3001
ENTRYPOINT ["node", "index.js"]
