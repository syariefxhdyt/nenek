const Discord = require('discord.js);
const client = new Discord.Client();

client.on('ready', () => {
console.log('Ready To Battle!!');
});

client.on('message', async message => {
 if (message.content === "hallo") {
message.channel.send('hallo Juga Lurde'); 
 }
 if (message.content === "Assalamualaikum") {
message.channel.send('Waalaikumsalam Lurde :pray:'); 
 }
  if (message.content === "ajg") {
message.channel.send('Mulut anda Kotor sekali Lurde'); 
 }
   if (message.content === "siang") {
message.channel.send('Siang Juga Lurde'); 
 }
 if (message.content === "malem") {
message.channel.send('Malem Juga Lurde'); 
 }
});

client.login('NjUzNTQxOTgwNjkyODA3Njgx.Xe6PDA.FVpkXJCYWMEwaOYQahaZuKXXAPg')