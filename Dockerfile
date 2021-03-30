FROM node:latest

WORKDIR /usr/app

COPY frontend /usr/app/frontend
COPY backend /usr/app/backend

RUN pwd
# RUN "ls /usr/app"
RUN cd frontend
RUN npm install
RUN npm install react-scripts
RUN npm run build
RUN cd ..
RUN cp -r frontend/build/* backend/static

CMD [ "node", "backend/server.js" ]