import { INodeProperties } from "n8n-workflow";
import { getAllAlertsDescription } from './getAll';
import { updateAlertDescription } from './updateAlert';
import { getAlertByIdDescription } from './getAlertById';

const showOnlyForAlerts = {
	resource: ['defenderAlert'],
};

export const alertDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAlerts,
		},
		options: [
			{
				name: 'Get Alert',
				action: 'Get a security alert',
				value: 'getAlertById',
				description: 'Get a security alert by ID',
			},
			{
				name: 'List Alerts',
				action: 'List security alerts',
				value: 'listAlerts',
				description: 'List security alerts',
				routing: {
					request: {
						method: 'GET',
						baseURL: 'https://graph.microsoft.com/',
						url: '/v1.0/security/alerts_v2',
					},
				},
			},
			{
				name: 'Update Alert',
				action: 'Update a security alert',
				value: 'updateAlert',
				description: 'Update the status or classification of a security alert',
			},
		],
		default: 'listAlerts',
	},
	...getAllAlertsDescription,
	...getAlertByIdDescription,
	...updateAlertDescription,
];  
