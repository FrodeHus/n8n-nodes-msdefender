import type { INodeProperties } from 'n8n-workflow';
import { getAllMachineDescription } from './getAll';
import { listSoftwareMachineDescription } from './listSoftware';
import { getSecurityRecommendationsDescription } from './getSecurityRecommendations';
import { addOrRemoveTagDescription } from './addOrRemoveTag';
import { findByTagDescription } from './findByTag';

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
				name: 'Add Or Remove Tag',
				value: 'addOrRemoveTag',
				action: 'Add or remove tag on a machine',
				description: 'Adds or removes a tag from a specified machine ID',
			},
			{
				name: 'Find By Tag',
				value: 'findByTag',
				action: 'Find machines by tag',
				description: 'Retrieves a list of machines associated with a specific tag',
			},
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
	...addOrRemoveTagDescription,
	...findByTagDescription,
	...getAllMachineDescription,
	...getSecurityRecommendationsDescription,
	...listSoftwareMachineDescription,
];
