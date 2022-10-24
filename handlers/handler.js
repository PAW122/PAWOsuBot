const Discord = require('discord.js');//wymaga discord.js
const fs = require('fs');//wymaga fs
require('dotenv').config();

module.exports = (client) => {


    client.command = new Discord.Collection();

    const komendyFolders = fs.readdirSync(__dirname +`/../commands`)//dla komend
    //command handler
    
    for (const folder of komendyFolders) {//command handler dla komend
        const commandsFile = fs.readdirSync(__dirname +`/../commands/${folder}`).filter(file => file.endsWith(".js"));
    
        for(const file of commandsFile) {
            const command = require(__dirname +`/../commands/${folder}/${file}`);
            client.command.set(command.name, command);//język polski
            console.log(command)
        }
    }

}