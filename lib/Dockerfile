FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/kaveesha-sithum/Dark-Nero-Bot- /root/kaveesha-sithum
WORKDIR /root/kaveesha-sithum/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]

