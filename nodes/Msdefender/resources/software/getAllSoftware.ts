import { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAllSoftware = {
	operation: ['getAllSoftware'],
	resource: ['software'],
};

export const getAllSoftwareDescription: INodeProperties[] = [
	{
		displayName: 'OData Operators',
		name: 'odataOperators',
		type: 'collection',
		displayOptions: {
			show: {
				...showOnlyForGetAllSoftware,
			},
		},
		default: {},
		description: 'OData operators to filter the software results',
		placeholder: 'Add OData Operators',
		options: [
			{
				displayName: 'Filter',
				name: 'filter',
				type: 'string',
				default: '',
				routing: {
					request: {
						qs: {
							$filter: '={{$value}}',
						},
					},
				},
				description:
					'An OData filter expression that filters elements in the collection. Allowed values: ID, name and vendor.',
			},
			{
				displayName: 'Top',
				name: '$top',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 50,
				description: 'Specifies the maximum number of items to return from the collection',
				routing: {
					request: {
						qs: {
							$top: '={{$value}}',
						},
					},
				},
			},
			{
				displayName: 'Skip',
				name: '$skip',
				type: 'number',
				default: 0,
				description: 'Specifies the number of items to skip in the collection',
				routing: {
					request: {
						qs: {
							$skip: '={{$value}}',
						},
					},
				},
			},
		],
	},
];
