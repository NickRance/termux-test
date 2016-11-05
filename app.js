var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();
client.stop();
client.animate('flipLeft',1000);
client.land(function(){
    process.exit(1);
});
