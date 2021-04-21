const client = require('discord-rich-presence')('-- your client id here --'),
      monitor = require('active-window'),
      startTime = Date.now();

setInterval(() => {
  
  try {
    monitor.getActiveWindow(update);
  } catch (error) {
    console.log(error);
  }

}, 5000);

console.log('[+] Started RP Server');

function update (window) {

  const app = window.app.split('", "')[0].slice(1)
        user = process.env['USER'],
        window = window.title;

  client.updatePresence({
    state: window.toString(),
    details: `${user}@${app}`,
    startTimestamp: startTime,
    largeImageKey: 'bspwm',
    smallImageKey: 'somethingelse',
    instance: true
  });

}
