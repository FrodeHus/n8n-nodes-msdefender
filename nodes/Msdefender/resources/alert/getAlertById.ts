import { INodeProperties } from "n8n-workflow";

const showOnlyForGetAlertById = {
	operation: ['getAlertById'],
	resource: ['defenderAlert'],
};

export const getAlertByIdDescription: INodeProperties[] = [
    {
        displayName: 'Alert ID',
        name: 'alertId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForGetAlertById,
        },
        description: 'The ID of the alert to retrieve',
        routing: {
            request: {
                method: 'GET',
                baseURL: 'https://graph.microsoft.com/',
                url: '=/v1.0/security/alerts_v2/{{ $parameter.alertId }}',
            },
        },
    },
];