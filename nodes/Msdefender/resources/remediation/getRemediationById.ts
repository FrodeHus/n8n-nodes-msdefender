import { INodeProperties } from 'n8n-workflow';

const showOnlyForRemediationById = {
	operation: ['getRemediationActivity'],
	resource: ['remediation'],
};

export const getRemediationByIdDescription: INodeProperties[] = [
    {
        displayName: 'Remediation Activity ID',
        name: 'remediationActivityId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForRemediationById,
        },
        description: 'The ID of the remediation activity to retrieve',
        routing: {
            request: {
                method: 'GET',
                url: '=/api/remediationtasks/{{ $parameter.remediationActivityId }}',
            },
        },
    },
];