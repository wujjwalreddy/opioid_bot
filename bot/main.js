const BotResponses = require("./responses");

class OpioidBot {
  constructor(siteUrl) {
    this.responses = new BotResponses(siteUrl);
  }

  respond(userInput) {
    const normalizedInput = userInput.toLowerCase();
  
    // General Responses
    const generalResponse = this.responses.getGeneralResponse(normalizedInput);
    if (generalResponse) return generalResponse;
  
    // Check for product availability keywords
    const productResponse = this.responses.checkItemAvailabilityFromMessage(userInput);
    if (productResponse) return productResponse;
  
    // Dynamic Queries
    if (normalizedInput === "any discounts today") {
      return "Yes! We have exciting offers. Visit our site for details: <site>";
    }
  
    if (normalizedInput === "tell me a joke") {
      return "Why don’t skeletons fight each other? Because they don’t have the guts!";
    }
  
    // Default Response
    return "I'm sorry, I didn't understand that. Could you please rephrase or ask about our products?";
  }
  
}

module.exports = OpioidBot;