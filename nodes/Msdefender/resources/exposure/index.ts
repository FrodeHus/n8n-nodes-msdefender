import type { INodeProperties } from 'n8n-workflow';

const showOnlyForExposure = {
    resource: ['exposure'],
};

export const exposureDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: showOnlyForExposure,
        },
        options: [
            {
                name: 'Current Exposure Score',
                value: 'currentExposureScore',
                action: 'Get current exposure score',
                description: 'Get the exposure score',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/api/exposureScore',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getByMachineGroups',
                action: 'Get many exposure scores',
                description: 'Retrieve exposure scores by machine groups',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/api/exposureScore/ByMachineGroups',
                    },
                },
            }
        ],
        default: 'currentExposureScore',
    },
];
