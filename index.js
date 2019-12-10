const { Client } = require('discord.js-commando')
const path = require('path')


const client = new Client({
    commandPrefix: 'h',
    owner: '634456486046859315', // can be an array of ids like: owner: ["id", "id"]
    invite: 'https://discord.gg/PxVmuZc',
})




client.registry
.registerDefaultTypes()
.registerGroups([
    ['misc', 'Misc'],
])
.registerDefaultGroups()
.registerDefaultCommands()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}(${client.user.id})`)
    client.user.setActivity('Tutorial bot.')
})

client.on('error', console.error)


client.login('your discord token')
