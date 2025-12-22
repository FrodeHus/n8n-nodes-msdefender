import type { INodeProperties } from 'n8n-workflow';

const showOnlyForIsolateDevice = {
	operation: ['isolateDevice'],
	resource: ['device'],
};

export const isolateDeviceDescription: INodeProperties[] = [
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForIsolateDevice,
		},
		description: 'The ID of the device',
		routing: {
			send: {
				type: 'body',
				property: 'deviceId',
			},
		},
	},
];
