import { INodeProperties } from 'n8n-workflow';

const showOnlyForIncidentUpdate = {
	resource: ['incident'],
	operation: ['update'],
};

export const updateIncidentDescription: INodeProperties[] = [
	{
		displayName: 'Incident ID',
		name: 'incidentId',
		type: 'number',
		required: true,
		default: '',
		description: 'The ID of the incident to update',
		displayOptions: {
			show: {
				...showOnlyForIncidentUpdate,
			},
		},
		routing: {
			request: {
				method: 'PATCH',
				url: '=/api/incidents/{{ $parameter.incidentId }}',
			},
		},
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		options: [
			{
				displayName: 'Assigned To',
				name: 'assignedTo',
				type: 'string',
				default: '',
				description: 'The user the incident is assigned to',
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
						value: 'FalsePositive',
					},
					{
						name: 'True Positive',
						value: 'TruePositive',
					},
					{
						name: 'Informational Expected Activity',
						value: 'InformationalExpectedActivity',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'classification',
					},
				},
				default: 'FalsePositive',
				description: 'The new classification of the incident',
			},
			{
				displayName: 'Comment',
				name: 'comment',
				type: 'string',
				default: '',
				description: 'Comment to add to the incident',
				routing: {
					send: {
						type: 'body',
						property: 'comment',
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
				name: 'status',
				type: 'options',
				options: [
					{
						name: 'Active',
						value: 'Active',
					},
					{
						name: 'In Progress',
						value: 'InProgress',
					},
					{
						name: 'Resolved',
						value: 'Resolved',
					},
					{
						name: 'Redirected',
						value: 'Redirected',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},

				default: 'Active',
				description: 'The new status of the incident',
			},
		],
		displayOptions: {
			show: {
				...showOnlyForIncidentUpdate,
			},
		},
	},
];
