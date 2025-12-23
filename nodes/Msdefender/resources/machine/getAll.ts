import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAllMachine = {
	operation: ['getAll'],
	resource: ['machine'],
};

export const getAllMachineDescription: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		displayOptions: {
			show: {
				...showOnlyForGetAllMachine,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: '$top',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
	},
];
