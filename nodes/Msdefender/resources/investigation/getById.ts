import { INodeProperties } from "n8n-workflow";

const showOnlyForGetByInvestigationId = {
	operation: ['getInvestigationById'],
	resource: ['investigation'],
};

export const getByIdDescription: INodeProperties[] = [
    {
        displayName: 'Investigation ID',
        name: 'investigationId',
        type: 'string',
        placeholder: '12345678-1234-1234-1234-123456789012',    
        displayOptions: {
            show: {
                ...showOnlyForGetByInvestigationId,
            },
        },
        default: '',
        required: true,
        description: 'The ID of the investigation to retrieve',
        routing: {
            request: {
                method: 'GET',
                url: '=/api/investigations/{{ $parameter.investigationId }}',
            },
        },
    },
];
