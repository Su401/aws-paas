const path = require('path');

const { Logs } = require('../db');

const logsController = async (req, res, nex) => {
	const {
		company,
		establishment,
		oilEquipmentId,
		oilChangedDate,
		oilChangedUser,
		oilChangedChanged,
		oilChangedObservation,
		iceboxEquipmentId,
		iceboxReadingDate,
		iceboxReadingUser,
		iceboxReadingTemperatureOpen,
		iceboxReadingTemperatureClose,
		iceboxReadingObservation,
		cleaningCounterDate,
		cleaningCounterUser,
		cleaningCounterFloor,
		cleaningCounterCeiling,
		cleaningCounterCounter,
		cleaningCounterIceboxPos,
		cleaningCounterIceboxNeg,
		cleaningCounterShelves,
		cleaningCounterDoors,
		cleaningCounterGarbage,
		cleaningCounterEquipment1,
		cleaningCounterOthers,
		cleaningRoomDate,
		cleaningRoomUser,
		cleaningRoomFloor,
		cleaningRoomCeiling,
		cleaningRoomTables,
		cleaningRoomGarbage,
		cleaningRoomEquipment1,
		cleaningRoomOthers,
		cleaningCopaDate,
		cleaningCopaUser,
		cleaningCopaFloor,
		cleaningCopaCeiling,
		cleaningCopaCounter,
		cleaningCopaShelves,
		cleaningCopaDoors,
		cleaningCopaGarbage,
		cleaningCopaEquipment1,
		cleaningCopaOthers,
		cleaningKitchenDate,
		cleaningKitchenUser,
		cleaningKitchenFloor,
		cleaningKitchenCeiling,
		cleaningKitchenCounter,
		cleaningKitchenIceboxPos,
		cleaningKitchenIceboxNeg,
		cleaningKitchenShelves,
		cleaningKitchenDoors,
		cleaningKitchenGarbage,
		cleaningKitchenEquipment1,
		cleaningKitchenEquipment2,
		cleaningKitchenEquipment3,
		cleaningKitchenEquipment4,
		cleaningKitchenOthers,
	} = req.body;

	const logs = await Logs.create({
		company,
		establishment,
		logs: [
			{
				oil: [
					{
						equipmentId: oilEquipmentId,
						changed: [
							{
								date: oilChangedDate,
								user: oilChangedUser,
								changed: oilChangedChanged,
								observation: oilChangedObservation,
							},
						],
					},
				],
				icebox: [
					{
						equipmentId: iceboxEquipmentId,
						reading: [
							{
								date: iceboxReadingDate,
								user: iceboxReadingUser,
								temp: {
									open: iceboxReadingTemperatureOpen,
									close: iceboxReadingTemperatureClose,
								},
								observation: iceboxReadingObservation,
							},
						],
					},
				],
				cleaning: [
					{
						cleaningCounter: [
							{
								date: cleaningCounterDate,
								user: cleaningCounterUser,
								floor: cleaningCounterFloor,
								ceiling: cleaningCounterCeiling,
								counter: cleaningCounterCounter,
								iceboxPos: cleaningCounterIceboxPos,
								iceboxNeg: cleaningCounterIceboxNeg,
								shelves: cleaningCounterShelves,
								doors: cleaningCounterDoors,
								garbage: cleaningCounterGarbage,
								equipment1: cleaningCounterEquipment1,
								others: cleaningCounterOthers,
							},
						],
						cleaningRoom: [
							{
								date: cleaningRoomDate,
								user: cleaningRoomUser,
								floor: cleaningRoomFloor,
								ceiling: cleaningRoomCeiling,
								tables: cleaningRoomTables,
								garbage: cleaningRoomGarbage,
								equipment1: cleaningRoomEquipment1,
								others: cleaningRoomOthers,
							},
						],
						cleaningCopa: [
							{
								date: cleaningCopaDate,
								user: cleaningCopaUser,
								floor: cleaningCopaFloor,
								ceiling: cleaningCopaCeiling,
								counter: cleaningCopaCounter,
								shelves: cleaningCopaShelves,
								doors: cleaningCopaDoors,
								garbage: cleaningCopaGarbage,
								equipment1: cleaningCopaEquipment1,
								others: cleaningCopaOthers,
							},
						],
						cleaningKitchen: [
							{
								date: cleaningKitchenDate,
								user: cleaningKitchenUser,
								floor: cleaningKitchenFloor,
								ceiling: cleaningKitchenCeiling,
								counter: cleaningKitchenCounter,
								iceboxPos: cleaningKitchenIceboxPos,
								iceboxNeg: cleaningKitchenIceboxNeg,
								shelves: cleaningKitchenShelves,
								doors: cleaningKitchenDoors,
								garbage: cleaningKitchenGarbage,
								equipment1: cleaningKitchenEquipment1,
								equipment2: cleaningKitchenEquipment2,
								equipment3: cleaningKitchenEquipment3,
								equipment4: cleaningKitchenEquipment4,
								others: cleaningKitchenOthers,
							},
						],
					},
				],
			},
		],
	});
	res.json({ logs });
};

module.exports = {
	logsController,
};
