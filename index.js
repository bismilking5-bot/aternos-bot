const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Aternos Bot is online 24/7!');
});
app.listen(process.env.PORT || 3000);

const botOptions = {
    host: 'Bismil99106-vpfP.aternos.me', 
    port: 25626,
    username: 'AternosBot_247',
    version: '1.21.1'
};

function createBot() {
    const bot = mineflayer.createBot(botOptions);

    bot.on('spawn', () => {
        console.log('Success: Bot server me enter ho chuka hai!');
    });

    bot.on('time', () => {
        if (bot.time.age % 120 === 0) {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }
    });

    bot.on('end', () => {
        console.log('Bot disconnect ho gaya, fir se try kar raha hai...');
        setTimeout(createBot, 15000); 
    });

    bot.on('error', (err) => console.log('Error:', err));
}

createBot();
