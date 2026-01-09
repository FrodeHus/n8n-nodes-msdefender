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
				url: '=/api/alerts/{{ $parameter.alertId }}',
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
				typeOptions: {
					format: 'email',
				},
				description: 'The user assigned to the alert',
				routing: {
					send: {
						type: 'body',
						property: 'AssignedTo',
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
						value: 'FalsePositive',
					},
					{
						name: 'True Positive',
						value: 'TruePositive',
					},
					{
						name: 'Benign Positive',
						value: 'InformationalExpectedActivity',
					},
				],
				default: 'FalsePositive',
				description: 'The new classification of the alert',
				routing: {
					send: {
						type: 'body',
						property: 'Classification',
					},
				},
			},
			{
				displayName: 'Comment',
				name: 'comment',
				type: 'string',
				default: '',
				description: 'Comments regarding the alert update',
				routing: {
					send: {
						type: 'body',
						property: 'Comment',
					},
				},
			},
			{
				displayName: 'Determination Name or ID',
				name: 'determination',
				type: 'options',
				typeOptions: {
					loadOptionsDependsOn: ['updateFields.classification'],
					loadOptionsMethod: 'getDeterminationValues',
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
				name: 'Status',
				type: 'options',
				options: [
					{
						name: 'New',
						value: 'New',
					},
					{
						name: 'In Progress',
						value: 'InProgress',
					},
					{
						name: 'Resolved',
						value: 'Resolved',
					},
				],
				default: 'New',
				description: 'The new status of the alert',
				routing: {
					send: {
						type: 'body',
						property: 'Status',
					},
				},
			},
		],
	},
];
