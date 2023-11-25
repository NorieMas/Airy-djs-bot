import { Events } from 'discord.js'

export const event = {
    name: Events.GuildMemberRemove,
}

export const action = (member) => {
    const noticeChannel = member.guild.channels.cache.get(process.env.LEAVE_CHANNEL_ID);
    if (noticeChannel) {
        noticeChannel.send(`再會 <@${member.id}> 退出，糖果屋社群！`);
    } else {
        console.log('找不到離開頻道');
    }
}