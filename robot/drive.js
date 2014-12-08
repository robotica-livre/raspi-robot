/**
 * Robot Drive prototype
 * 
 * The objective of it is encapsulate robot
 * drive behavior.
 */
var RaspiRobot = require("raspirobot").RaspiRobot, // Import the library
    drive = new RaspiRobot();

function Drive(left, right) {
	drive.setup();
}

Drive.prototype.forward = function() {
	drive.setMotor("left", 1, 1);
	drive.setMotor("right", 1, 1);
};

Drive.prototype.backward = function() {
	drive.setMotor("left", 0, 0);
	drive.setMotor("right", 0, 0);
};

Drive.prototype.turnLeft = function() {
	drive.setMotor("left", 0);
	drive.setMotor("right", 1, 1);
};

Drive.prototype.turnRight = function() {
	drive.setMotor("left", 1, 1);
	drive.setMotor("right", 0);
};