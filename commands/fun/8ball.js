var fortunes = [
    "**Yes**",
    "**No**",
    "**Maybe**",
    "**I don't know**",
    "**Probably**",
    "**I guess**",
    "**I'm not sure**",
    "**Surely**"
];

const Banchojs = require("bancho.js")
module.exports = {
    name: "8ball",

    execute: async (message, args, user, client) => {
        if(args[0] == "help") {
            return await user.sendMessage('$8abll send readom respond');
        }
        return await user.sendMessage(fortunes[Math.floor(Math.random() * 8)]);
    }
}