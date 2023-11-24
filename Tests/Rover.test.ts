import { Rover } from "../classes/Rover";
import { Orientation } from "../enums/Orientation";
import { Map } from "../classes/Map";

describe("Rover", () => {
	let map: Map;
	let rover: Rover;

	beforeEach(() => {
		map = { x: 4, y: 4, getSize: () => ({ x: 4, y: 4 }) };
		rover = new Rover(Orientation.South, { x: 0, y: 0 }, map);
	});

	test("should move front", () => {
		console.log(rover.getPosition());
		rover.Avancer();
		expect(rover.getPosition()).toEqual({ x: 0, y: 1 });
	});
	test("should move forward", () => {
		console.log(rover.getPosition());
		rover.Reculer();
		expect(rover.getPosition()).toEqual({ x: 0, y: map.y - 1 });
	});
	test("should rotate right", () => {
		rover.TournerADroite();
		expect(rover.getOrientation()).toEqual("WEST");
	});
	test("should rotate left", () => {
		rover.TournerAGauche();
		expect(rover.getOrientation()).toEqual("EAST");
	});
});
