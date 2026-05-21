require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {

    if (message.author.bot) return;

    const msg = message.content.toLowerCase();

    // HOW TO BUY
    if (
        msg.includes('how buy') ||
        msg.includes('how to buy') ||
        msg.includes('tutorial') ||
        msg.includes('guide') ||
        msg.includes('beginner')
    ) {
        return message.reply(`
📦 Beginner Guide:
https://discord.com/channels/1502688064558862577/1505585041919709194

🎥 Video Guide:
https://discord.com/channels/1502688064558862577/1505569196283793438
`);
    }

    // SPREADSHEET
    if (
        msg.includes('spreadsheet') ||
        msg.includes('finds') ||
        msg.includes('best finds')
    ) {
        return message.reply(`
📋 PrimeFinds Spreadsheet:
https://discord.com/channels/1502688064558862577/1502693537836433590
`);
    }

    // USFANS
    if (
        msg.includes('usfans') ||
        msg.includes('agent')
    ) {
        return message.reply(`
🔥 USFans Affiliate:
https://discord.com/channels/1502688064558862577/1503447074568540340

⭐ Code:
X73SYW
`);
    }

    // YUPOO
    if (msg.includes('yupoo')) {
        return message.reply(`
📸 Yupoo Links:
https://discord.com/channels/1502688064558862577/1502691559047565503
`);
    }

    // REDDIT
    if (msg.includes('reddit')) {
        return message.reply(`
📱 Reddit Links:
https://discord.com/channels/1502688064558862577/1503455962323750962
`);
    }

    // QC
    if (
        msg.includes('qc') ||
        msg.includes('quality')
    ) {
        return message.reply(`
👀 QC / Quality Check:
https://discord.com/channels/1502688064558862577/1502694395944767639
`);
    }

    // COUPONS
    if (
        msg.includes('coupon') ||
        msg.includes('discount')
    ) {
        return message.reply(`
🎟️ Coupon Codes:
https://discord.com/channels/1502688064558862577/1502768326999539874
`);
    }

    // SHIPPING
    if (msg.includes('shipping')) {
        return message.reply(`
✈️ Shipping Guide:
https://discord.com/channels/1502688064558862577/1502690438874923018
`);
    }

    // TRACKING
    if (
        msg.includes('tracking') ||
        msg.includes('track')
    ) {
        return message.reply(`
📦 Tracking Info:
https://discord.com/channels/1502688064558862577/1502709844468039700

🚚 Best Shipping Lines:
https://discord.com/channels/1502688064558862577/1502690521947045958
`);
    }

    // ESTIMATION TOOL
    if (
        msg.includes('declare') ||
        msg.includes('estimation') ||
        msg.includes('tax')
    ) {
        return message.reply(`
🧮 Estimation Tool:
https://discord.com/channels/1502688064558862577/1502719625257816264
`);
    }

    // W2C CHANNELS
    if (
        msg.includes('w2c') ||
        msg === 'link'
    ) {
        return message.reply(`
👕 Clothes:
https://discord.com/channels/1502688064558862577/1502810065155915796

👜 Bags:
https://discord.com/channels/1502688064558862577/1502810219929931776

⌚ Accessories:
https://discord.com/channels/1502688064558862577/1502810506338242691

👟 Shoes:
https://discord.com/channels/1502688064558862577/1502810637653508337
`);
    }

});

client.login(process.env.TOKEN);