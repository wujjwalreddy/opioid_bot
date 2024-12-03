const { Telegraf } = require("telegraf");
const OpioidBot = require("./main");

class TelegramBotHandler {
  constructor(token, siteUrl) {
    this.token = token;
    this.botLogic = new OpioidBot(siteUrl);
    this.bot = new Telegraf(token);

    this.initializeHandlers();
  }

  initializeHandlers() {
    // Start Command
    this.bot.start((ctx) =>
      ctx.reply(
        "Hello! I'm Opioid Bot. I'm here to assist you with shop-related queries. Ask me about products, discounts, or anything else!"
      )
    );

    // Message Handler
    this.bot.on("text", (ctx) => {
      const userMessage = ctx.message.text;
      const response = this.botLogic.respond(userMessage);
      ctx.reply(response);
    });
  }

  runBot() {
    console.log("Telegram Bot is running...");
    this.bot.launch();
  }
}

module.exports = TelegramBotHandler;