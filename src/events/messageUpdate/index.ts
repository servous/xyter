// Dependencies
import { Message } from "discord.js";
import logger from "@logger";

// Modules
import counter from "./modules/counter";

import audits from "./audits";

export default {
  async execute(oldMessage: Message, newMessage: Message) {
    const { author, guild } = newMessage;

    await audits.execute(oldMessage, newMessage);

    logger?.silly(
      `Message update event fired by ${author.tag} (${author.id}) in guild: ${guild?.name} (${guild?.id})`
    );

    if (author?.bot) return logger?.silly(`Message update event fired by bot`);

    await counter(newMessage);
  },
};
