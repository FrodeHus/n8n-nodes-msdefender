import { INodeProperties } from 'n8n-workflow';
import { commonOdataProperties } from '../../shared/odataProperties';

const showOnlyForGetRecommendations = {
	operation: ['getAllRecommendations'],
	resource: ['recommendation'],
};

export const getRecommendationsDescription: INodeProperties[] = [
	{
		...commonOdataProperties,
		displayOptions: {
			show: {
				...showOnlyForGetRecommendations,
			},
		},
	},
];
