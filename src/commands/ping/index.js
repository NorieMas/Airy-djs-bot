import {SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder()
 .setName('Ping')
 .setDescription('ping command')


 export const action = async (ctx) => {
    ctx.reply('Pong!')
 }