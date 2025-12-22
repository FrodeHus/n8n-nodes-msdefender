import type { INodeProperties } from 'n8n-workflow';
import { isolateDeviceDescription } from './isolateDevice';

const showOnlyForMachineActions = {
    resource: ['machineAction'],
};

export const machineActionsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMachineActions,
		},
		options: [
			{
				name: 'Isolate Device',
				value: 'isolate',
				action: 'Isolate a device',
				description: 'Isolate a device from the network',
				options: [
					{
						displayName: 'Device ID',
						name: 'deviceId',
						type: 'string',
						default: '',
						required: true,
						description: 'The ID of the device to isolate',
					},
				],
				routing: {
					request: {
						method: 'POST',
						url: '/api/machines/{{$value}}/isolate',
					},
				},
			},
		],
		default: 'isolate',
	},
	...isolateDeviceDescription,
];
