import { INodeProperties } from "n8n-workflow";

const showOnlyForVulnerabilitiesByRecommendation = {
    operation: ['getVulnerabilitiesByRecommendation'],
    resource: ['recommendation'],
};

export const getVulnerabilitiesByRecommendationDescription: INodeProperties[] = [
    {
        displayName: 'Recommendation ID',
        name: 'recommendationId',
        type: 'string',
        displayOptions: {
            show: {
                ...showOnlyForVulnerabilitiesByRecommendation,
            },
        },
        default: '',
        required: true,
        description: 'The ID of the recommendation to get linked vulnerabilities for',
        routing: {
            request: {
                method: 'GET',
                url: '=/api/recommendations/{{ $parameter.recommendationId }}/vulnerabilities',
            },
        },
    },
];