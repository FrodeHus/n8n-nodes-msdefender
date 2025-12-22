import type { INodeProperties } from 'n8n-workflow';
import { isolateDeviceDescription } from './isolateDevice';

const showOnlyForDevices = {
	resource: ['device'],
};

export const userDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForDevices,
		},
		options: [
			{
				name: 'Isolate Device',
				value: 'isolateDevice',
				action: 'Isolate a device',
				description: 'Isolate a device from the network',
				routing: {
					request: {
						method: 'POST',
						url: '/api/machines/isolate',
					},
				},
			},
		],
		default: 'isolateDevice',
	},
	...isolateDeviceDescription,
];
