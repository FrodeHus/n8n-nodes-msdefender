import { INodeProperties } from 'n8n-workflow';

const showOnlyForCancelMachineAction = {
	operation: ['cancelMachineAction'],
	resource: ['machineAction'],
};

export const cancelMachineActionDescription: INodeProperties[] = [
	{
		displayName: 'Machine Action ID',
		name: 'machineActionId',
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
				method: 'POST',
				url: '=/api/machineactions/{{ $parameter.machineActionId }}/cancel',
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForCancelMachineAction,
		},
		description: 'Comments regarding the isolation action',
		routing: {
			send: {
				type: 'body',
				property: 'Comment',
			},
		},
	},
];
