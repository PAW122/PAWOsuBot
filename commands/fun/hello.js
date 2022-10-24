const Banchojs = require("bancho.js")
module.exports = {
    name: "hello",

    execute: async (message, args, user, client) => {
        return await user.sendMessage(`hello ${user.ircUsername}`)
    }
}