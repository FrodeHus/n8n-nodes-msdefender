import type { INodeProperties } from 'n8n-workflow';
import { getAllMachineDescription } from './getAll';
import { listSoftwareMachineDescription } from './listSoftware';
import { getSecurityRecommendationsDescription } from './getSecurityRecommendations';

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
				value: 'getAllMachines',
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
				name: 'Get Security Recommendations',
				value: 'getSecurityRecommendations',
				action: 'Get security recommendations for a machine',
				description: 'Retrieves security recommendations for a specified machine ID',
			},
			{
				name: 'List Software',
				value: 'listSoftware',
				action: 'List software on a machine',
				description: 'Retrieves a collection of installed software related to a given machine ID',
			},
		],
		default: 'getAllMachines',
	},
	...getAllMachineDescription,
	...getSecurityRecommendationsDescription,
	...listSoftwareMachineDescription,
];
