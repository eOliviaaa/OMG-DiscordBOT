const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildScheduledEventCreate,
    async execute(guildScheduledEventCreate) {
        let event = {
            header: guildScheduledEventCreate.name,
            description: guildScheduledEventCreate.description,
            startTime: new Date(guildScheduledEventCreate.scheduledStartTimestamp).toISOString(),
            endTime: new Date(guildScheduledEventCreate.scheduledEndTimestamp).toISOString(),
            location: guildScheduledEventCreate.entityMetadata.location
        }
        console.log(event);
    }
}