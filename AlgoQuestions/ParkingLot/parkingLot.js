/*
Using HTML, CSS and Javascript(framework of your choice), Design a parking lot
management system. The parking lot has 15 slots, 10 slots can only accommodate
small vehicles and the rest of the 5 can accommodate both small and bigger vehicles.
The parking fee for the first 10 slots is 60 USD (Please use a local currency
equivalent if you prefer to do so) and the parking fee for the last 5 slots is 100 USD. The
maximum parking time is 30 minutes, after which an extra 15 USD is charged for every
extra hour spent in the parking.
Your solution should visually represent a booking mechanism, once a slot is
booked, it should be marked as booked on the booking screen so no other car can
occupy it till it is made free. You should also show the total charge owed to cars that are
exiting a parking slot.
As an addition, You may show a dashboard with the total amount of money
collected over a certain period. (This is not a core requirement, but it is nice to have and
it might require some sort of persistent data structure).
*/

let smallParkingSlots = {
	smallSlot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	parkingFee: 60,
	maxTime: 30,
};

let mixedParkingSlots = {
	mixedSlot: [1, 2, 3, 4, 5],
	parkingFee: 100,
	maxTime: 30,
};
