const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();

module.exports = (client) => {


    client.command = new Discord.Collection();

    const komendyFolders = fs.readdirSync(__dirname +`/../commands`)//dla komend

    
    for (const folder of komendyFolders) {
        const commandsFile = fs.readdirSync(__dirname +`/../commands/${folder}`).filter(file => file.endsWith(".js"));
    
        for(const file of commandsFile) {
            const command = require(__dirname +`/../commands/${folder}/${file}`);
            client.command.set(command.name, command);
            console.log(command)
        }
    }

}
