const { prefix } = require('../config.json');
module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases: ['commands'],
    usage: 'test',
    cooldown: 5,
    execute(message, args) {
        if(!args.length) {
            message.channel.send(`Pong! ${Date.now() - message.createdTimestamp}ms`)
        }
    },
};