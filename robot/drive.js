/**
 * Robot Drive prototype
 * 
 * The objective of it is encapsulate robot
 * drive behavior.
 * 
 * TODO: Need to find a way to implement PWM to control the motors.
 * One possible way is implement a native wiringPi class and convert to
 * a Node.js library.
 * 
 * References:
 * * http://www.embarcados.com.br/gerando-pwm-com-raspberry-pi/
 * * http://syskall.com/how-to-write-your-own-native-nodejs-extension/index.html/
 * 
 */
var gpio = require("pi-gpio");

function Drive(left, right) {
	this.setup();
}

Drive.prototype.setup = function(left, right) {
	this.left = left;
	gpio.open(left);
	gpio.setDirection(left, "output");
	
	this.right = right;
	gpio.open(right);
	gpio.setDirection(right, "output");
}

Drive.prototype.forward = function() {
	this.write(this.left, 1);
	this.write(this.right, 1);
};

Drive.prototype.backward = function() {
	this.write(this.left, 0);
	this.write(this.right, 0);
};

Drive.prototype.turnLeft = function() {
	this.write(this.left, 0);
	this.write(this.right, 1);
};

Drive.prototype.turnRight = function() {
	this.write(this.left, 1);
	this.write(this.right, 0);
};