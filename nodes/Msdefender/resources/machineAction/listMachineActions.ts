import { INodeProperties } from 'n8n-workflow';

const showOnlyForListMachineActions = {
	operation: ['listMachineActions'],
	resource: ['machineAction'],
};

export const listMachineActionsDescription: INodeProperties[] = [
	{
		displayName: 'OData Operators',
		name: 'odataOperators',
		type: 'collection',
		displayOptions: {
			show: showOnlyForListMachineActions,
		},
		default: {},
		placeholder: 'Add OData Operator',
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				description:
					'An OData filter expression that filters elements in the collection. Available fields: ID, status, machineId, type, requestor, and creationDateTimeUtc.',
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
];
