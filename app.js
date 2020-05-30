const Discord = require('discord.js');
const client = new Discord.Client();
const request = require('request');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ip') {
    request('https://api.ipify.org/?format=json', (err, res, body) => {
        msg.reply(JSON.parse(body).ip);
    });
  }
});

client.login(process.env.TOKEN);