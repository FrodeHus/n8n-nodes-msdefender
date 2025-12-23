import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRemoveFromIsolation = {
    operation: ['removeFromIsolation'],
    resource: ['machineAction'],
};

export const removeFromIsolationDescription: INodeProperties[] = [
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForRemoveFromIsolation,
		},
		description: 'The ID of the device',
		options: [
			{
				displayName: 'Machine ID',
				name: 'machineId',
				type: 'string',
				default: '',
				required: true,
				description: 'The ID of the machine to isolate',
			},
		],
		routing: {
			request: {
				method: 'POST',
				url: '=/api/machines/{{ $parameter.machineId }}/unisolate',
			},
		},
	},
];
