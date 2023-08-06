const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildScheduledEventCreate,
    async execute(guildScheduledEventCreate) {
        let event = {
            header: guildScheduledEventCreate.name,
            description: guildScheduledEventCreate.description,
            startTime: guildScheduledEventCreate.scheduledStartTime,
            endTime: guildScheduledEventCreate.scheduledEndTime
        }
        console.log(event);
    }
}