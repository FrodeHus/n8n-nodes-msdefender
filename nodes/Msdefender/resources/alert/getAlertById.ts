import { INodeProperties } from "n8n-workflow";

const showOnlyForGetAlertById = {
    operation: ['getAlertById'],
    resource: ['alert'],
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
                url: '=/api/alerts/{{ $parameter.alertId }}',
            },
        },
    },
];