import { INodeProperties } from "n8n-workflow";
import { getManyIncidentDescription } from "./getMany";
import { getOneIncidentDescription } from "./getOne";
import { updateIncidentDescription } from "./updateIncident";

const showOnlyForIncident = {
    resource: ['incident'],
}

export const incidentDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				...showOnlyForIncident,
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Get a single incident',
				action: 'Get an incident',
				routing: {
					request: {
						method: 'GET',
						baseURL: 'https://graph.microsoft.com/',
						url: '=/v1.0/security/incidents/{{ $parameter.incidentId }}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getMany',
				description: 'Get many incidents',
				action: 'Get many incidents',
				routing: {
					request: {
						method: 'GET',
						baseURL: 'https://graph.microsoft.com/',
						url: '/v1.0/security/incidents',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an incident',
				action: 'Update an incident',
			},
		],
		default: 'getMany',
	},
	...getManyIncidentDescription,
	...getOneIncidentDescription,
	...updateIncidentDescription,
];  