const logger = require(`${__basedir}/handlers/logger`);

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    await logger.info(`Ready! Logged in as ${client.user.tag}`);
  },
};