const { SlashCommandBuilder } = require("discord.js");

module_exports = {
    data = new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!"),
    async execute(interaction) {
        await interaction.reply("Pong!");
    },

};