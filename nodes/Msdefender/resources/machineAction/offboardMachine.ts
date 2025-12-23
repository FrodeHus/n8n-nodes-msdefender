import { INodeProperties } from "n8n-workflow";

const showOnlyForOffboardMachine = {
    operation: ['offboardMachine'],
    resource: ['machineAction'],
};

export const offboardMachineDescription: INodeProperties[] = [
    {
        displayName: 'Machine ID',
        name: 'machineId',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                ...showOnlyForOffboardMachine,
            },
        },
        description: 'The ID of the machine to offboard',
        routing: {
            request: {
                method: 'POST',
                url: '=/api/machines/{{ $parameter.machineId }}/offboard',
            },
        },
    },
];