/**
 * New node file
 */

var Kp = 0;
var Ki = 0;
var Kd = 0;

// Error = target_pos – current_pos	// calculate error
// P = Error * Kp					// error times proportional constant gives P
// I = I + Error					// integral stores the accumulated error
// I = I * Ki						// calculates the integral value
// D = Error – Previos_error		// stores change in error to derivate
// Correction = P + I + D

// 00001 =  4
// 00011 =  3
// 00010 =  2
// 00110 =  1
// 00100 =  0
// 01100 = -1
// 01000 = -2
// 11000 = -3
// 10000 = -4
// 00000 = +-5

var curPos = 00000; // <== This is where GPIO will read sensor values.

switch (curPos) {
case 00001:
	correction(4);
	break;
case 00011:
	correction(3);
	break;
case 00010:
	correction(2);
	break;
case 00110:
	correction(1);
	break;
case 00100:
	correction(0);
	break;
case 01100:
	correction(-1);
	break;
case 01000:
	correction(-2);
	break;
case 11000:
	correction(-3);
	break;
case 10000:
	correction(-4);
	break;
case 00000:
	correction(5);
	break;
}

function correction(error) {
	prop = error * Kp;
	integ = integ + error;
	integ = integ * Ki;
	deriv = error - prev;
	
	return prop + integ + deriv; 
}