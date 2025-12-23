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
				name: 'Get Alert',
				action: 'Get a security alert',
				value: 'getAlert',
				description: 'Get a security alert by ID',
				options: [
					{
						displayName: 'Alert ID',
						name: 'alertId',
						type: 'string',
						default: '',
						required: true,
						description: 'The ID of the alert to retrieve',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/api/alerts/{{ $parameter.alertId }}',
					},
				},
			},
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
