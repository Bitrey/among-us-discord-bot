const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

const commandList = require("./commands");

let prefix = "?";

client.once("ready", () => {
    console.log(`Among Us bot logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    checkCommand(message);
});

const checkCommand = message => {
    const typedCommand = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/)
        .shift()
        .toLowerCase();

    commandListLoop: for (prop in commandList) {
        const command = commandList[prop];
        for (commandName of command.names) {
            if (typedCommand.startsWith(commandName)) {
                // Change prefix feature
                if (typedCommand === "change-prefix")
                    return changePrefix(message);

                command.execute(message, prefix);
                break commandListLoop;
            }
        }
    }
};

const changePrefix = message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const newPrefix = args[1];

    if (!newPrefix) {
        message.channel.send("Please type the new prefix!");
    } else if (prefix === newPrefix) {
        message.channel.send("coglione è lo stesso di prima");
    } else {
        message.channel.send(
            `Prefix changed from "${prefix}" to "${newPrefix}"`
        );
        prefix = newPrefix;
    }
};

client.login(process.env.TOKEN, () => {
    console.log("Among Us bot logged in!");
});
