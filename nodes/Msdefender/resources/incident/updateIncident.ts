import { INodeProperties } from 'n8n-workflow';

const showOnlyForIncidentUpdate = {
	resource: ['incident'],
	operation: ['update'],
};

export const updateIncidentDescription: INodeProperties[] = [
	{
		displayName: 'Incident ID',
		name: 'incidentId',
		type: 'string',
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
				baseURL: 'https://graph.microsoft.com/',
				url: '=/v1.0/security/incidents/{{ $parameter.incidentId }}',
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
				routing: {
					send: {
						type: 'body',
						property: 'classification',
					},
				},
				default: 'falsePositive',
				description: 'The new classification of the incident',
			},
			{
				displayName: 'Comment',
				name: 'comment',
				type: 'string',
				default: '',
				description: 'Resolution comment explaining the outcome of the incident',
				routing: {
					send: {
						type: 'body',
						property: 'resolvingComment',
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
						value: 'active',
					},
					{
						name: 'Awaiting Action',
						value: 'awaitingAction',
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
				routing: {
					send: {
						type: 'body',
						property: 'status',
					},
				},

				default: 'active',
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
