const Banchojs = require("bancho.js")

const config = require("./config/config")
const Username = config.Username
const Password = config.Password
const prefix = config.prefix

const handler = require("./handlers/handler")
const msg_handler = require("./handlers/msg_handler")

const client = new Banchojs.BanchoClient({
    username: Username,
    password: Password
});

handler(client)

const startOsuBot = async () => {
    try {
        await client.connect();
        console.log("Osu bot conected")

        //client on message
        client.on("PM", async ({ message, user }) => {
            msg_handler(client, message, user)
        })
    } catch (err) {
        console.log(err)
    }
}

startOsuBot();