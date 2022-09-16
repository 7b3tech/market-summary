FROM node:16.17.0-buster-slim

RUN apt update && apt upgrade -y
RUN apt-get install libnss3 libxss1 libasound2 libatk-bridge2.0-0 libgtk-3-0 libgbm-dev -y

USER node

WORKDIR /home/node/app


#jCOPY package*.json ./ 
#RUN npm install

CMD ["/home/node/app/start.sh"]
