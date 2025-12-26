import type { INodeProperties } from 'n8n-workflow';

const showOnlyForIsolateDevice = {
	operation: ['isolate'],
	resource: ['machineAction'],
};

export const isolateDeviceDescription: INodeProperties[] = [
	{
		displayName: 'Machine ID',
		name: 'machineId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForIsolateDevice,
		},
		description: 'The ID of the device to isolate',
		routing: {
			request: {
				method: 'POST',
				url: '=/api/machines/{{ $parameter.machineId }}/isolate',
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForIsolateDevice,
		},
		description: 'Comments regarding the isolation action',
		routing: {
			send: {
				type: 'body',
				property: 'Comment',
			},
		},
	},
	{
		displayName: 'Isolation Type',
		name: 'isolationType',
		type: 'options',
		displayOptions: {
			show: showOnlyForIsolateDevice,
		},
		options: [
			{
				name: 'Full',
				value: 'Full',
				description: 'Full isolation. Works for managed devices.',
			},
			{
				name: 'Selective',
				value: 'Selective',
				description:
					'Restrict only limited set of applications from accessing the network on managed devices',
			},
			{
				name: 'UnManagedDevice',
				value: 'UnManagedDevice',
				description: 'The isolation targets unmanaged devices only',
			},
		],
		default: 'Full',
		description: 'The type of isolation to apply to the device',
		routing: {
			send: {
				type: 'body',
				property: 'IsolationType',
			},
		},
	},
];
