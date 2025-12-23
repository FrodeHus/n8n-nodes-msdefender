import type { INodeProperties } from 'n8n-workflow';
import { getNextODataLink } from '../../shared/utils';
import { commonOdataProperties } from '../../shared/odataProperties';

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
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				...showOnlyForGetAllMachine,
			},
		},
		description: 'Whether to return all results or only up to the limit specified',
		routing: {
			send: {
				paginate: '={{$value}}',
				type: 'query',
				property: '$top',
				value: '100',
			},
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue: `={{ !!(${getNextODataLink.toString()})($value) }}`,
						request: {
							url: `={{ (${getNextODataLink.toString()})($value) }}`,
						},
					},
				},
			},
		},
	},
	...commonOdataProperties,
];
