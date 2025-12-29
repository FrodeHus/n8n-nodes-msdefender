import { INodeProperties } from "n8n-workflow";

const showOnlyForGetExposedDevicesByRemediation = {
    operation: ['getExposedDevicesByRemediation'],
    resource: ['remediation'],
};

export const getExposedDevicesByRemediationDescription: INodeProperties[] = [
    {
        displayName: 'Remediation Activity ID',
        name: 'remediationActivityId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForGetExposedDevicesByRemediation,
        },
        description: 'The ID of the remediation activity to get exposed devices for',
        routing: {
            request: {
                method: 'GET',
                url: '=/api/remediationtasks/{{ $parameter.remediationActivityId }}/machinereferences',
            },
        },
    },
];