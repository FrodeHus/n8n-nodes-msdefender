import { INodeProperties } from "n8n-workflow";

const showOnlyForRecommendationById = {
    operation: ['getRecommendationById'],
    resource: ['recommendation'],
};

export const getRecommendationByIdDescription: INodeProperties[] = [
    {
        displayName: 'Recommendation ID',
        name: 'recommendationId',
        type: 'string',
        displayOptions: {
            show: {
                ...showOnlyForRecommendationById,
            },
        },
        default: '',
        required: true,
        description: 'The ID of the recommendation to retrieve',
        routing: {
            request: {
                method: 'GET',
                url: '=/api/recommendations/{{ $parameter.recommendationId }}',
            },
        },
    },
];