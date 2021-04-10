FROM node:12.18-alpine
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
