import { INodeProperties } from 'n8n-workflow';

const showOnlyForCancelMachineAction = {
	operation: ['cancelMachineAction'],
	resource: ['machineAction'],
};

export const cancelMachineActionDescription: INodeProperties[] = [
	{
		displayName: 'Machine ID',
		name: 'machineId',
		type: 'string',
        default: '',
        required: true,
		displayOptions: {
			show: {
				...showOnlyForCancelMachineAction,
			},
		},
		routing: {
			request: {
				url: '=/api/machineactions/{{ parameters.machineId }}/cancel',
			},
		},
	},
];
