import { INodeProperties } from "n8n-workflow";

const showOnlyForIncidentGetOne = {
    resource: ['incident'],
    operation: ['get'],
}

export const getOneIncidentDescription: INodeProperties[] = [
    {
        displayName: 'Incident ID',
        name: 'incidentId',
        type: 'string',
        required: true,
        default: '',
        description: 'The ID of the incident to retrieve',
        displayOptions: {
            show: {
                ...showOnlyForIncidentGetOne,
            },
        },
    },
];