import { INodeProperties } from "n8n-workflow";

const showOnlyForGetAllInvestigations = {
	operation: ['getAllInvestigations'],
	resource: ['investigation'],
};

export const getAllInvestigationsDescription: INodeProperties[] = [
    {
        displayName: 'Filter',
        name: 'filter',
        type: 'string',
        displayOptions: {
            show: {
                ...showOnlyForGetAllInvestigations,
            },
        },
        default: '',
        description: 'OData filter to apply to the investigations list',
        routing: {
            send: {
                type: 'query',
                property: '$filter',
            },
        },
    },
];