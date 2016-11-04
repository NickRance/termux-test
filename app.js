var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff(function(){
    console.log("Taking Off");
});


client
    .after(5000, function() {
        console.log("Rotating Clockwise");
        this.clockwise(0.5);
    })
    .after(3000, function() {
        this.stop();
        this.land();
        console.log("Drone landed");
    });