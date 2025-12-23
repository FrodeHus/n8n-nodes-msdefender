import { INodeProperties } from "n8n-workflow";

const showOnlyForGetSecurityRecommendations = {
    operation: ['getSecurityRecommendations'],
    resource: ['machine'],
};

export const getSecurityRecommendationsDescription: INodeProperties[] = [
    {
        displayName: 'Machine ID',
        name: 'machineId',
        type: 'string',
        displayOptions: {
            show: {     
                ...showOnlyForGetSecurityRecommendations,
            },
        },
        default: '',
        required: true,
        description: 'The ID of the machine to get security recommendations for',
        routing: {
            request: {
                method: 'GET',
                url: '=/api/machines/{{ $parameter.machineId }}/recommendations',
            },
        },
    },
];