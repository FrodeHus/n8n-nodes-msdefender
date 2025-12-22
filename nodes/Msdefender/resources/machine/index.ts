import type { INodeProperties } from 'n8n-workflow';
import { isolateDeviceDescription } from './isolateDevice';

const showOnlyForMachines = {
	resource: ['machine'],
};

export const machineDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMachines,
		},
		options: [
			{
				name: 'Isolate Machine',
				value: 'isolateMachine',
				action: 'Isolate a machine',
				description: 'Isolate a machine from the network',
				routing: {
					request: {
						method: 'POST',
						url: '/api/machines/isolate',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many machines',
				description: 'Retrieve many machines',
				routing: {
					request: {
						method: 'GET',
						url: '/api/machines',
					},
				},
			}
		],
		default: 'isolateMachine',
	},
	...isolateDeviceDescription,
];
