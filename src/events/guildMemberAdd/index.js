import { Events } from 'discord.js'

export const event = {
    name: Events.GuildMemberAdd,
}

export const action = (member) => {
    const noticeChannel = member.guild.channels.cache.get(process.env.WELCOME_CHANNEL_ID);
    if (noticeChannel) {
        noticeChannel.send(`歡迎 <@${member.id}> 來到，糖果屋社群！`);
    } else {
        console.log('找不到歡迎頻道');
    }
}