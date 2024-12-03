class BotResponses {
    constructor(siteUrl) {
        this.siteUrl = siteUrl;

        this.generalResponses = {
            hello: "Hello! How can I assist you today?",
            hi: "Hi there! How can I assist you?",
            "good morning": "Good morning! How can I help you?",
            "good afternoon": "Good afternoon! How can I assist?",
            "good evening": "Good evening! What can I do for you?",
            "how are you": "I'm just a bot, but I'm here to assist you!",
            "what is your name":
                "My name is Opioid Bot, and my purpose is to assist you with shop-related queries and basic interactions.",
            "thank you": "You're welcome! Let me know if you need further assistance.",
            bye: "Goodbye! Have a great day!",
        };

        this.productAvailability = {
            lsd: true,
            heroin: true,
            cocaine: true,
            meth: true,
            methamphetamine: true,
            marijuana: true,
            fentanyl: true,
            mdma: true,
            k2: true,
            spice: true,
            opium: true,
            craccocaine: true,
            ketamine: true,
        };
        
    }

    getGeneralResponse(userInput) {
        return this.generalResponses[userInput.toLowerCase()] || null;
    }

    checkItemAvailabilityFromMessage(message) {
        const normalizedMessage = message.toLowerCase();

        // Find the first product keyword in the message
        for (const item in this.productAvailability) {
            if (normalizedMessage.includes(item)) {
                if (this.productAvailability[item]) {
                    return `Yes, we have ${item}. Please visit our site for more details: ${this.siteUrl}`;
                } else {
                    return `Sorry, ${item} is currently unavailable.`;
                }
            }
        }

        return `I'm not sure about the products you're asking for. Please check our site for more details: ${this.siteUrl}`;
    }

}

module.exports = BotResponses;