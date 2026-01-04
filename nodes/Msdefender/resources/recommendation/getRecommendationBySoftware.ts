import { INodeProperties } from "n8n-workflow";

const showOnlyForRecommendationBySoftware = {
    operation: ['getRecommendationBySoftware'],
    resource: ['recommendation'],
};

export const getRecommendationBySoftwareDescription: INodeProperties[] = [
    {
        displayName: 'Recommendation ID',
        name: 'recommendationId',
        type: 'string',
        displayOptions: {
            show: {     
            ...showOnlyForRecommendationBySoftware,
            },
        },
        default: '',
        required: true,
        description: 'The ID of the recommendation to get the software for',
        routing: {
            request: {
                method: 'GET',
                url: '=/api/recommendations/{{ $parameter.recommendationId }}/software',
            },
        },
    },
];