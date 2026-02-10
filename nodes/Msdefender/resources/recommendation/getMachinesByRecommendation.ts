import { INodeProperties } from "n8n-workflow";

const showOnlyForMachinesByRecommendation = {
    operation: ['getMachinesByRecommendation'],
    resource: ['recommendation'],
};

export const getMachinesByRecommendationDescription: INodeProperties[] = [
	{
		displayName: 'Recommendation ID',
		name: 'recommendationId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForMachinesByRecommendation,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the recommendation to get linked machines for',
		routing: {
			request: {
				method: 'GET',
				url: '=/api/recommendations/{{ $parameter.recommendationId }}/machineReferences',
			},
		},
	},
];