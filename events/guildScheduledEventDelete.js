const { Events } = require('discord.js');
const axios = require('axios').default;

module.exports = {
    name: Events.GuildScheduledEventDelete,
    async execute(guildScheduledEventDelete) {
        axios.delete('http://localhost:8080/event/deleteSingle/'+guildScheduledEventDelete.id)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
