import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties } from 'n8n-workflow';

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
		displayName: 'Assigned To',
		name: 'assignedTo',
		type: 'string',
		default: '',
		placeholder: 'someone@somewhere.com',
		typeOptions: {
			format: 'email',
		},
		displayOptions: {
			show: showOnlyForUpdateAlert,
		},
		description: 'The user assigned to the alert',
		routing: {
			send: {
				type: 'body',
				property: 'AssignedTo',
				preSend: [
					async function (
						this: IExecuteSingleFunctions,
						requestOptions: IHttpRequestOptions,
					): Promise<IHttpRequestOptions> {
						if (requestOptions.body && this.getNodeParameter('assignedTo', '') === '')
							delete requestOptions.body['AssignedTo'];
						return requestOptions;
					},
				],
			},
		},
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
		required: true,
		displayOptions: {
			show: showOnlyForUpdateAlert,
		},
		description: 'The new status of the alert',
		routing: {
			send: {
				type: 'body',
				property: 'Status',
				preSend: [
					async function (
						this: IExecuteSingleFunctions,
						requestOptions: IHttpRequestOptions,
					): Promise<IHttpRequestOptions> {
						if (requestOptions.body && this.getNodeParameter('Status', '') === '')
							delete requestOptions.body['Status'];
						return requestOptions;
					},
				],
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
		displayOptions: {
			show: showOnlyForUpdateAlert,
		},
		description: 'The new classification of the alert',
		routing: {
			send: {
				type: 'body',
				property: 'Classification',
				preSend: [
					async function (
						this: IExecuteSingleFunctions,
						requestOptions: IHttpRequestOptions,
					): Promise<IHttpRequestOptions> {
						if (requestOptions.body && this.getNodeParameter('Classification', '') === '')
							delete requestOptions.body['Classification'];
						return requestOptions;
					},
				],
			},
		},
	},
	{
		displayName: 'Determination',
		name: 'Determination',
		type: 'options',
		options: [
			{
				name: 'Compromised Account',
				value: 'CompromisedUser',
				displayOptions: {
					show: {
						classification: ['TruePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Confirmed Activity',
				value: 'ConfirmedActivity',
				displayOptions: {
					show: {
						classification: ['InformationalExpectedActivity'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Malware',
				value: 'Malware',
				displayOptions: {
					show: {
						classification: ['TruePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Malicious User Activity',
				value: 'MaliciousUserActivity',
				displayOptions: {
					show: {
						classification: ['TruePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Multistage Attack',
				value: 'MultiStagedAttack',
				displayOptions: {
					show: {
						classification: ['TruePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Not Malicious',
				value: 'NotMalicious',
				displayOptions: {
					show: {
						classification: ['FalsePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Not Enough Data To Validate',
				value: 'InsufficientData',
				displayOptions: {
					show: {
						classification: ['FalsePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Line-of-Business Application',
				value: 'LineOfBusinessApplication',
				displayOptions: {
					show: {
						classification: ['InformationalExpectedActivity'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Other',
				value: 'Other',
				displayOptions: {
					show: {
						classification: ['InformationalExpectedActivity', 'TruePositive', 'FalsePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Phishing',
				value: 'Phishing',
				displayOptions: {
					show: {
						classification: ['TruePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Security Testing',
				value: 'SecurityTesting',
				displayOptions: {
					show: {
						classification: ['InformationalExpectedActivity'],
						...showOnlyForUpdateAlert,
					},
				},
			},
			{
				name: 'Unwanted Software',
				value: 'UnwantedSoftware',
				displayOptions: {
					show: {
						classification: ['TruePositive'],
						...showOnlyForUpdateAlert,
					},
				},
			},
		],
		default: 'Malware',
		displayOptions: {
			show: showOnlyForUpdateAlert,
		},
		description: 'The new determination of the alert',
		routing: {
			send: {
				type: 'body',
				property: 'Determination',
				preSend: [
					async function (
						this: IExecuteSingleFunctions,
						requestOptions: IHttpRequestOptions,
					): Promise<IHttpRequestOptions> {
						if (requestOptions.body && this.getNodeParameter('Determination', '') === '')
							delete requestOptions.body['Determination'];
						return requestOptions;
					},
				],
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForUpdateAlert,
		},
		description: 'Comments regarding the alert update',
		routing: {
			send: {
				type: 'body',
				property: 'Comment',
			},
		},
	},
];
