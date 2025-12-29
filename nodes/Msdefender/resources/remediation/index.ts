import type { INodeProperties } from 'n8n-workflow';
import { getAllRemediationTasksDescription } from './getAllRemediationTasks';
import { getRemediationByIdDescription } from './getRemediationById';
import { getExposedDevicesByRemediationDescription } from './getExposedDevicesByRemediation';


const showOnlyForRemediation = {
    resource: ['remediation'],
};

export const remediationDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForRemediation,
        },
        options: [
            {
                name: 'Get Remediation Activities',
                value: 'getRemediationActivities',
                action: 'Get remediation activities',
                description: 'Get all remediation activities',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/api/remediationtasks/',
                    },
                },
            },
            {
                name: 'Get Remediation Activity',
                value: 'getRemediationActivity',
                action: 'Get a remediation activity',
                description: 'Get a specific remediation activity by ID',
            },
            {
                name: 'Get Exposed Devices by Remediation',
                value: 'getExposedDevicesByRemediation',
                action: 'Get exposed devices by remediation activity',
                description: 'Get devices exposed in a specific remediation activity by ID',
            }
        ],
        default: 'getRemediationActivities',
        ...getAllRemediationTasksDescription,
        ...getRemediationByIdDescription,
        ...getExposedDevicesByRemediationDescription,
    },
];