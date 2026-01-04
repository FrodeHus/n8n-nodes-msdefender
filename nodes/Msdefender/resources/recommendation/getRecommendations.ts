import { INodeProperties } from 'n8n-workflow';

const showOnlyForGetRecommendations = {
	operation: ['getAllRecommendations'],
	resource: ['recommendation'],
};

export const getRecommendationsDescription: INodeProperties[] = [
	{
		displayName: 'OData Operators',
		name: 'odataOperators',
		type: 'collection',
		displayOptions: {
			show: {
				...showOnlyForGetRecommendations,
			},
		},
		default: {},
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
					'An OData filter expression that filters elements in the collection. Allowed values: ID, productName, vendor, recommendedVersion, recommendationCategory, subCategory, severityScore, remediationType, recommendedProgram, recommendedVendor, and status.',
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
