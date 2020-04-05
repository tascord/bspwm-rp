const client = require('discord-rich-presence')('-- your client id here --');
const monitor = require('active-window');
const startTime = Date.now();

setInterval(() => {
  
  try { monitor.getActiveWindow(update); } 
  catch (err) { console.log(err); }


}, 5000);

console.log('[+] Started RP Server');

function update(window) {

  var app = window.app.split('", "')[0].slice(1);

  var user = process.env['USER'];
  var window = window.title;

  client.updatePresence({
    state: `${window}`,
    details: `${user}@${app}`,
    startTimestamp: startTime,
    largeImageKey: 'bspwm',
    smallImageKey: 'somethingelse',
    instance: true,
  });

}