import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAllMachine = {
	operation: ['getAllMachines'],
	resource: ['machine'],
};

export const getAllMachineDescription: INodeProperties[] = [
	{
		displayName: 'OData Operators',
		name: 'odataOperators',
		type: 'collection',
		displayOptions: {
			show: showOnlyForGetAllMachine,
		},
		default: {},
		placeholder: 'Add OData Operator',
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				description: 'An OData filter expression that filters elements in the collection. Available fields: computerDnsName, ID, version, deviceValue, aadDeviceId, machineTags, lastSeen,exposureLevel, onboardingStatus, lastIpAddress, healthStatus, osPlatform, riskScore and rbacGroupId.',
				routing: {
					send: {
						type: 'query',
						property: '$filter',
					},
				},
			},
			{
				displayName: 'Top',
				name: 'top',
				type: 'string',
				default: '',
				description:
					'An OData top expression that limits the number of elements in the collection. See Microsoft documentation for supported syntax.',
				routing: {
					send: {
						type: 'query',
						property: '$top',
					},
				},
			},
			{
				displayName: 'Skip',
				name: 'skip',
				type: 'string',
				default: '',
				description:
					'An OData skip expression that skips a number of elements in the collection. See Microsoft documentation for supported syntax.',
				routing: {
					send: {
						type: 'query',
						property: '$skip',
					},
				},
			},
		],
	},
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
	{
		displayName: 'Skip',
		name: 'skip',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForGetAllMachine,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 0,
			maxValue: 1000,
		},
		default: 0,
		description: 'Number of results to skip',
		routing: {
			send: {
				type: 'query',
				property: '$skip',
			},
		},
	},
];
