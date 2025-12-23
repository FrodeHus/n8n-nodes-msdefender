import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAllMachine = {
	operation: ['getAllMachines'],
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
		displayOptions: {
			show: {
				...showOnlyForGetAllMachine,
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
				type: 'query',
				property: '$top',
				value: '={{parameter.limit}}',
			},
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue: `={{ !!($response.body['@odata.nextLink']) }}`,
						request: {
							url: `={{ $request.url }}`,
						},
					},
				},
			},
		},
	},
];
