import { INodeProperties } from 'n8n-workflow';

export const commonOdataProperties: INodeProperties = {
	displayName: 'OData Operators',
	name: 'odataOperators',
	type: 'collection',
	default: {},
	placeholder: 'Add OData Operator',
	options: [
		{
			displayName: 'Filter',
			name: 'filter',
			type: 'string',
			default: '',
			description:
				'An OData filter expression that filters elements in the collection. Available fields: ID, name, description, cvssV3, publishedOn, severity, and updatedOn.',
			routing: {
				send: {
					type: 'query',
					property: '$filter',
				},
			},
		},
		{
			displayName: 'Top',
			name: 'top',
			type: 'string',
			default: '',
			description:
				'An OData top expression that limits the number of elements in the collection. See Microsoft documentation for supported syntax.',
			routing: {
				send: {
					type: 'query',
					property: '$top',
				},
			},
		},
		{
			displayName: 'Skip',
			name: 'skip',
			type: 'string',
			default: '',
			description:
				'An OData skip expression that skips a number of elements in the collection. See Microsoft documentation for supported syntax.',
			routing: {
				send: {
					type: 'query',
					property: '$skip',
				},
			},
		},
	],
};
