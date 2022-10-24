const Discord = require("discord.js")


//wczytywanie configu
const config = require("../config/config.js")
const commands_logs = config.commands_logs
const Username = config.Username
const prefix = config.prefix

module.exports = (client,message,user) => {

    if(message.startsWith(prefix) && user.ircUsername != Username){//sprawdza prefix, && znaczy and

        const args = message.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();//zwraca tylko 1 argument i zmienia na same małe liter
        if(!client.command.has(commandName)) return;//sprawdza czy taka komenda istnieje
        const time = new Date().toLocaleTimeString().slice(0,5)    
        const command = client.command.get(commandName);//pobieramy komende
    
        try {
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