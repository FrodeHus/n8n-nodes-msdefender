import { INodeProperties } from 'n8n-workflow';

const showOnlyForUpdateAlert = {
	operation: ['updateAlert'],
	resource: ['defenderAlert'],
};

export const updateAlertDescription: INodeProperties[] = [
	{
		displayName: 'Alert ID',
		name: 'alertId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateAlert,
		},
		description: 'The ID of the alert to update',
		routing: {
			request: {
				method: 'PATCH',
				baseURL: 'https://graph.microsoft.com/',
				url: '=/v1.0/security/alerts_v2/{{ $parameter.alertId }}',
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: showOnlyForUpdateAlert,
		},
		options: [
			{
				displayName: 'Assigned To',
				name: 'assignedTo',
				type: 'string',
				default: '',
				placeholder: 'someone@somewhere.com',
				description: 'The user assigned to the alert',
				routing: {
					send: {
						type: 'body',
						property: 'assignedTo',
					},
				},
			},
			{
				displayName: 'Classification',
				name: 'classification',
				type: 'options',
				options: [
					{
						name: 'False Positive',
						value: 'falsePositive',
					},
					{
						name: 'True Positive',
						value: 'truePositive',
					},
					{
						name: 'Informational / Expected Activity',
						value: 'informationalExpectedActivity',
					},
				],
				default: 'falsePositive',
				description: 'The new classification of the alert',
				routing: {
					send: {
						type: 'body',
						property: 'classification',
					},
				},
			},
			{
				displayName: 'Determination Name or ID',
				name: 'determination',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: ['updateFields.classification'],
					loadOptionsMethod: 'getAlertDeterminationValues',
				},
				routing: {
					send: {
						type: 'body',
						property: 'determination',
					},
				},
				default: '',
				description:
					'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'New',
						value: 'new',
					},
					{
						name: 'In Progress',
						value: 'inProgress',
					},
					{
						name: 'Resolved',
						value: 'resolved',
					},
				],
				default: 'new',
				description: 'The new status of the alert',
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},
			},
		],
	},
];
