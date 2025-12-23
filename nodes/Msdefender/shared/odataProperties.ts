import { INodeProperties } from 'n8n-workflow';
import { getNextODataLink } from './utils';

const showOnlyForOdataOperations = {
	operation: ['getAllMachines', 'listSoftware', 'getAllVulnerabilities'],
	resource: ['machine', 'vulnerability'],
};

export const commonOdataProperties: INodeProperties[] = [
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		displayOptions: {
			show: {
				...showOnlyForOdataOperations,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: '$top',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				...showOnlyForOdataOperations,
			},
		},
		default: true,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{$value}}',
				type: 'query',
				property: '$top',
				value: '100',
			},
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue: `={{ !!(${getNextODataLink.toString()})($response.body) }}`,
						request: {
							url: `={{ (${getNextODataLink.toString()})($response.body) ?? $request.url }}`,
						},
					},
				},
			},
		},
	},
	{
		displayName: 'Skip',
		name: 'skip',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForOdataOperations,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		default: 50,
		description: 'Number of results to skip',
		routing: {
			send: {
				type: 'query',
				property: '$skip',
			},
		},
	},
];
