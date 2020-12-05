module.exports.run = async (client, message) => {
    const em = require('discord.js').MessageEmbed,
        config = require('../../config/config.json');
    message.channel.send(
        new em()
            .setTitle('v4 Development Progress')
            .addField('Implemented Features', 'v4ban, v4kick, v4gif (generic, cat, dog), upcoming, changelog, v3avatar, v3invite, v4say')
            .addField('Planned Features', 'nick, purge, nekos (local db), mute, warn, softban, promote, demote, v3commands, v4help, welcomer, v4ping, music, cleanchangelog, osu')
            .setFooter(`Astolfo ${config.version}`),
    );

};