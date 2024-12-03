const TelegramBotHandler = require("./bot/telegramBot");

const TOKEN = "7867517666:AAFedBJJzRKIED0V5eRh-_99kaj0v0Jeo4s"; // Replace with your bot token
const SITE_URL = "https://www.example-shop.com";

const runTelegramBot = () => {
  const telegramBot = new TelegramBotHandler(TOKEN, SITE_URL);
  telegramBot.runBot();
};

// Always start the Telegram bot
console.log("Starting Opioid Bot on Telegram...");
runTelegramBot();