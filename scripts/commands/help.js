module.exports = {
    config: {
        name: "help",
        version: "0.0.1",
        permssion: 0,
        credits: "Ex 卝 বয়ফ্রেন্ডヅ",
        prefix: true,
        description: "information ",
        category: "information ",
        usages: "help",
        cooldowns: 0,
        envConfig: {
            cooldownTime: 1200000
        }
    },
    async execute(api, event, args, commands) {
        const { threadID, messageID } = event;

        let helpMessage = `📜 | ${global.convertToGothic('Command List')}\n\n`;

        let commandList = Array.from(commands.keys()).map((name, index) => {
            return `${index + 1}. ${global.convertToGothic(name)}`;
        }).join('\n');

        helpMessage += commandList + `\n\n`;
        helpMessage += `Total Commands: [ ${commands.size} ]\n`;
        helpMessage += `Prefix: [ ${global.convertToGothic(global.config.prefix)} ]\n`;
        helpMessage += `Created By: ${global.convertToGothic(global.owner || 'Unknown')}\n`;

        await api.sendMessage(helpMessage, threadID, messageID);
    },
};
