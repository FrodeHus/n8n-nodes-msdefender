import { INodeProperties } from "n8n-workflow";

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
				displayName: '$filter',
				name: 'filter',
				type: 'string',
				default: '',
				description:
					'An OData filter expression that filters elements in the collection. Allowed values: id, productName, vendor, recommendedVersion, recommendationCategory, subCategory, severityScore, remediationType, recommendedProgram, recommendedVendor, and status',
			},
			{
				displayName: '$top',
				name: 'top',
				type: 'number',
				typeOptions: {
					minValue: 1,
					maxValue: 100,
				},
				default: 50,
				description: 'Specifies the maximum number of items to return from the collection.',
			},
			{
				displayName: '$skip',
				name: 'skip',
				type: 'number',
				default: 0,
				description: 'Specifies the number of items to skip in the collection.',
			},
		],
	},
];