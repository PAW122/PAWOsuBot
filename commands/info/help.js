const Banchojs = require("bancho.js")
module.exports = {
    name: "help",

    execute: async (message, args, user, client) => {
        await user.sendMessage(`This is a list of all commands: $hello`);
        return await user.sendMessage(`More on my GitHub: `)
    }
}