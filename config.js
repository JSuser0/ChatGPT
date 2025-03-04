// Server configuration
export const SERVER_PORT = 3000; // Server port
export const DEBUG = false; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = true; // Moderation mode

// Rate limit
export const PRIOD = 15 * 1000; // 15 seconds
export const RATE_LIMIT = 50; // 50 requests per 15 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [];

// OpenAI API Keys
export let OPENAI_KEYS = [
    "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",
];
