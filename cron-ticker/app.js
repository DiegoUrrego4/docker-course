const cron = require('node-cron');

let times = 0;

cron.schedule('1-59/5 * * * * *', () => {
    times++;
    console.log('Tick cada múltiplo de 5: ', times);
});

console.log('Inicio de la app')