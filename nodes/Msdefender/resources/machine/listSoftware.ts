import type { INodeProperties } from 'n8n-workflow';

const showOnlyForListSoftwareMachine = {
	operation: ['listSoftware'],
	resource: ['machine'],
};

export const listSoftwareMachineDescription: INodeProperties[] = [
	{
		displayName: 'Machine ID',
		name: 'machineId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForListSoftwareMachine,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the machine to list software for',
		routing: {
			request: {
				method: 'GET',
				url: '=/api/machines/{{ $parameter.machineId }}/software',
			},
		},
	},
];
