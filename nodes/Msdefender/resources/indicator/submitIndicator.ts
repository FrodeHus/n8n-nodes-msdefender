import { INodeProperties } from 'n8n-workflow';

const showOnlyForSubmitIndicator = {
	operation: ['submitIndicator'],
	resource: ['indicator'],
};

export const submitIndicatorDescription: INodeProperties[] = [
	{
		name: 'Title',
		displayName: 'Title',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSubmitIndicator,
			},
		},
		default: '',
		required: true,
		description: 'The title of the indicator to submit',
		routing: {
			send: {
				type: 'body',
				property: 'title',
			},
		},
	},
	{
		displayName: 'Indicator Type',
		name: 'indicatorType',
		type: 'options',
		displayOptions: {
			show: {
				...showOnlyForSubmitIndicator,
			},
		},
		options: [
			{
				name: 'File Sha1',
				value: 'FileSha1',
			},
			{
				name: 'IP Address',
				value: 'IpAddress',
			},
			{
				name: 'URL',
				value: 'Url',
			},
			{
				name: 'File ShaMd5',
				value: 'FileShaMd5',
			},
			{
				name: 'File Sha256',
				value: 'FileSha256',
			},
			{
				name: 'DomainName',
				value: 'DomainName',
			},
			{
				name: 'Certificate Thumb Print',
				value: 'CertificateThumbPrint',
			},
		],
		default: 'fileSha1',
		required: true,
		description: 'The type of the indicator to submit',
		routing: {
			send: {
				type: 'body',
				property: 'indicatorType',
			},
		},
	},
	{
		displayName: 'Indicator Value',
		name: 'indicatorValue',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSubmitIndicator,
			},
		},
		default: '',
		required: true,
		description: 'The value of the indicator to submit',
		routing: {
			send: {
				type: 'body',
				property: 'indicatorValue',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSubmitIndicator,
			},
		},
		default: '',
		required: true,
		description: 'An optional description for the indicator',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		displayOptions: {
			show: {
				...showOnlyForSubmitIndicator,
			},
		},
		options: [
			{
				name: 'Audit',
				value: 'Audit',
			},
			{
				name: 'Alert',
				value: 'Alert',
			},
			{
				name: 'Alert And Block',
				value: 'AlertAndBlock',
			},
			{
				name: 'Allow',
				value: 'Allow',
			},
			{
				name: 'Block',
				value: 'Block',
			},
			{
				name: 'Block And Remediate',
				value: 'BlockAndRemediate',
			},
			{
				name: 'Warn',
				value: 'Warn',
			},
		],
		default: 'Block',
		required: true,
		description: 'The action to take for the indicator',
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
	},
	{
		displayName: 'Optional Parameters',
		name: 'optionalParameters',
		type: 'collection',
		placeholder: 'Add Optional Parameters',
		displayOptions: {
			show: {
				...showOnlyForSubmitIndicator,
			},
		},
		default: {},
		options: [
			{
				displayName: 'Severity',
				name: 'severity',
				type: 'options',
				default: 'Medium',
				description: 'Severity level for the indicator',
				options: [
					{
						name: 'Informational',
						value: 'Informational',
					},
					{
						name: 'Low',
						value: 'Low',
					},
					{
						name: 'Medium',
						value: 'Medium',
					},
					{
						name: 'High',
						value: 'High',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'severity',
					},
				},
			},
			{
				displayName: 'Expiration Date',
				name: 'expirationDate',
				type: 'dateTime',
				default: '',
				description: 'The expiration date of the indicator',
				routing: {
					send: {
						type: 'body',
						property: 'expirationTime',
					},
				},
			},
		],
	},
];
