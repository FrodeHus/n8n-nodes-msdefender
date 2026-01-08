import { INodeProperties } from 'n8n-workflow';
import { commonOdataProperties } from '../../shared/odataProperties';

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
		...commonOdataProperties,
		displayOptions: {
			show: showOnlyForGetAllAlerts,
		},
	},
];
