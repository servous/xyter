// Dependencies
import { Client } from "discord.js";
import logger from "@logger";

// Helpers
import updatePresence from "@helpers/updatePresence";
import deployCommands from "@handlers/deployCommands";
import devMode from "@handlers/devMode";

export default {
  once: true,
  async execute(client: Client) {
    logger.info("Ready!");

    await updatePresence(client);
    await devMode(client);
    await deployCommands(client);

    client.guilds?.cache.forEach((guild) => {
      logger.silly(
        `${client.user?.tag} (${client.user?.id}) is in guild: ${guild.name} (${guild.id}) with member count of ${guild.memberCount}`
      );
    });
  },
};
