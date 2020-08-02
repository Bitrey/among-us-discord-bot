const { MessageEmbed } = require("discord.js");

const changeMute = (message, toBeMuted) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!message.member.voice.channel)
                reject("You're not connected to any voice channel!");

            const { name } = message.member.voice.channel;
            let isUserInChannel = false;

            for (member of message.member.voice.channel.members) {
                member[1].user.id === message.author.id
                    ? (isUserInChannel = true)
                    : null;
            }
            if (!isUserInChannel) reject(`You're not connected to "${name}"!`);

            for (member of message.member.voice.channel.members) {
                await member[1].voice.setDeaf(toBeMuted);
            }

            resolve();
        } catch (err) {
            reject(err);
        }
    });
};

const startGame = message => {
    changeMute(message, true)
        .then(() => message.channel.send("Shhhhhhh!"))
        .catch(err => message.channel.send("Something went wrong: " + err));
};

const startDiscussion = message => {
    changeMute(message, false)
        .then(() => message.channel.send("Discussion time started!"))
        .catch(err => message.channel.send("Something went wrong: " + err));
};

const endDiscussion = message => {
    changeMute(message, true)
        .then(() => message.channel.send("Discussion time stopped!"))
        .catch(err => message.channel.send("Something went wrong: " + err));
};

const endGame = message => {
    changeMute(message, false)
        .then(() => message.channel.send("Game ended! GG"))
        .catch(err => message.channel.send("Something went wrong: " + err));
};

const printHelp = (message, prefix) => {
    const commandFields = [];

    for (const [key, command] of Object.entries(commands)) {
        commandFields.push({
            name: (prefix || "") + command.names[0],
            value: command.description
        });
    }

    const helpEmbed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Among Us Bot")
        .setURL("https://github.com/Bitrey/among-us-discord-bot")
        .setDescription("Among Us Bot command list")
        .addFields(commandFields);

    message.channel.send(helpEmbed);
};

const commands = {
    start: {
        names: ["start", "start-game", "startgame"],
        description: "Start the Among Us game",
        execute: startGame
    },
    startDiscussion: {
        names: ["discussion", "start-discussion", "startdiscussion"],
        description: "Start the discussion time",
        execute: startDiscussion
    },
    endDiscussion: {
        names: ["end-discussion", "endiscussion", "enddiscussion"],
        description: "End the discussion time",
        execute: endDiscussion
    },
    endGame: {
        names: ["end", "end-game", "endgame"],
        description: "End the game",
        execute: endGame
    },
    changePrefix: {
        names: ["change-prefix"],
        description: "Change the bot prefix"
    },
    printHelp: {
        names: ["help"],
        description: "Print all commands and their description",
        execute: printHelp
    }
};

module.exports = commands;
