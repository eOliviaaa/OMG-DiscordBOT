const { Events } = require('discord.js');
const axios = require('axios').default;

module.exports = {
    name: Events.GuildScheduledEventCreate,
    async execute(guildScheduledEventCreate) {
        axios.post('http://172.20.64.1:8080/event/create', {
            header: guildScheduledEventCreate.name,
            description: guildScheduledEventCreate.description,
            startTime: new Date(guildScheduledEventCreate.scheduledStartTimestamp).toISOString(),
            endTime: new Date(guildScheduledEventCreate.scheduledEndTimestamp).toISOString(),
            location: guildScheduledEventCreate.entityMetadata.location
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
