import type { INodeProperties } from 'n8n-workflow';
import { getAllMachineDescription } from './getAll';
import { listSoftwareMachineDescription } from './listSoftware';

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
			},
			{
				name: 'List Software',
				value: 'listSoftware',
				action: 'List software on a machine',
				description: 'Retrieves a collection of installed software related to a given machine ID',
				options: [
					{
						displayName: 'Machine ID',
						name: 'machineId',
						type: 'string',
						default: '',
						required: true,
						description: 'The ID of the machine to list software for',
					},
				],
				routing: {
					request: {
						method: 'GET',
						url: '/api/machines/{{ $value }}/software',
					},
				},
			},
		],
		default: 'getAll',
	},
	...getAllMachineDescription,
	...listSoftwareMachineDescription,
];
