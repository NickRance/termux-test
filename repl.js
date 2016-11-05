var autonomy = require('ardrone-autonomy');
var mission  = autonomy.createMission();

mission.takeoff()
       .zero()       // Sets the current state as the reference
       .altitude(2)  // Climb to altitude = 1 meter
       .forward(2)   
       .right(2)     
       .backward(2) 
       .left(2)
       .hover(1000)  // Hover in place for 1 second
       .land();
mission.go (x: 2, y: 3, z: 1, yaw: 65)
