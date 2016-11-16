var arDrone = require('ar-drone');
var mission  = autonomy.createMission();

mission.takeoff()
    .zero()
    .altitude(1)
    .forward(2)
    .hover(2)
    .land(2);
mission.run(function(err, result){
    if(err) {
        console.trace("Crap hit the fan!: %s", err.message);
    } else {
        console.log("Mission success!");
        process.exit(0);
    }
});/**
 * Created by nick-dev on 11/5/16.
 */
