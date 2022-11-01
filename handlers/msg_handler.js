const Discord = require("discord.js")


//wczytywanie configu
const config = require("../config/config.js")
const commands_logs = config.commands_logs
const Username = config.Username
const prefix = config.prefix

module.exports = (client,message,user) => {

    if(message.startsWith(prefix) && user.ircUsername != Username){//check is message start wits prefix

        const args = message.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();//return first word and change to small leathers
        if(!client.command.has(commandName)) return;//check is command with this name existing
        const time = new Date().toLocaleTimeString().slice(0,5)    
        const command = client.command.get(commandName);//get command
    
        try {
            //execute command
            command.execute(message,args,user,client);
            if(commands_logs == true){
                const data = `${time} ${user.ircUsername} use ${commandName}, execute: "✅"`
                console.log(data)
            }
        } catch(error) {
            if(commands_logs == true){
                const data = `${time} ${user.ircUsername} use ${commandName}, execute: "❌"`
                console.log(data)
            }
                console.error(error);
                return_err()
        }
}else{
    return 
}

async function return_err() {
    try{
    return await user.sendMessage(`Error occured`);
    }catch(err){
        console.log(err)
    }
}
}
