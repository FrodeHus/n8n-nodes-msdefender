import { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAllAlerts = {
	operation: ['listAlerts'],
	resource: ['defenderAlert'],
};

export const getAllAlertsDescription: INodeProperties[] = [
	{
		displayName: 'Expand Evidence Details',
		name: 'expandEvidenceDetails',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForGetAllAlerts,
		},
		default: false,
		description: 'Whether to expand evidence details in the alert response',
		routing: {
			send: {
				type: 'query',
				property: '$expand',
				value: 'evidence',
			},
		},
	},
	{
		displayName: 'OData Operators',
		name: 'odataOperators',
		type: 'collection',
		displayOptions: {
			show: showOnlyForGetAllAlerts,
		},
		default: {},
		placeholder: 'Add OData Operator',
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				description: 'An OData filter expression that filters elements in the collection. Available fields: alertCreationTime, lastUpdateTime, incidentId, InvestigationId, ID, asssignedTo, detectionSource, lastEventTime, status, severity and category.',
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
