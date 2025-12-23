import { INodeProperties } from "n8n-workflow";
import { getAllAlertsDescription } from './getAll';

const showOnlyForAlerts = {
    resource: ['alert'],
};

export const alertDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				...showOnlyForAlerts,
			},
		},
		options: [
			{
				name: 'List Alerts',
				action: 'List security alerts',
				value: 'listAlerts',
				description: 'List security alerts',
				routing: {
					request: {
						method: 'GET',
						url: '/api/alerts',
					},
				},
			},
		],
		default: 'listAlerts',
		...getAllAlertsDescription,
	},
];  
