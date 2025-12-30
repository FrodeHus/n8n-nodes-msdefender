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
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		displayOptions: {
			show: showOnlyForGetAllAlerts,
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
