import type { INodeProperties } from 'n8n-workflow';
import { commonOdataProperties } from '../../shared/odataProperties';

const showOnlyForGetAllMachine = {
	operation: ['getAllMachines'],
	resource: ['machine'],
};

export const getAllMachineDescription: INodeProperties[] = [
	{
		...commonOdataProperties,
		displayOptions: {
			show: showOnlyForGetAllMachine,
		},
	},
];
