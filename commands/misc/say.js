count Discord = require('discord.js')
module.exports.run = async (bot, message, args) -> {
	if(!message.member.hasPermission(["MANAGE_MESSAGE", "ADMINISTRATOR"])) return message.channel.send("you Can not use this Command!")
	let argsresult;
	let mChannel = message.mentions.channel.first()
	if((mChannel) {
		argsresult = args.slice(1).join(" ")
		mChannel.send(argsresult)
	} else {
		argsresult = args.join(" ")
		message.channel.send.(argsresult)
	}
}
module.exports.config = {
	name: "say"
	description: "send a message that was inputted to a channel",
	usage: ".say",
	accessableby: "staff",
	aliases: ["acc", "announcement"]
}