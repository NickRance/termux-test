var arDrone = require('ar-drone');
var mission  = autonomy.createMission();

mission.takeoff()
	.go(x: 2, y: 1, z: 2, yaw: 65);
