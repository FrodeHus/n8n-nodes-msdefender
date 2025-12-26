import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRemoveFromIsolation = {
    operation: ['removeFromIsolation'],
    resource: ['machineAction'],
};

export const removeFromIsolationDescription: INodeProperties[] = [
	{
		displayName: 'Machine ID',
		name: 'machineId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForRemoveFromIsolation,
		},
		description: 'The ID of the device',

		routing: {
			request: {
				method: 'POST',
				url: '=/api/machines/{{ $parameter.machineId }}/unisolate',
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForRemoveFromIsolation,
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
