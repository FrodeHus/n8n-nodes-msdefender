import { INodeProperties } from 'n8n-workflow';
import { getNextODataLink } from './utils';

export const commonOdataProperties: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['machine'],
				operation: ['getAll', 'listSoftware'],
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
						continue: `={{ !!(${getNextODataLink.toString()})($value) }}`,
						request: {
							url: `={{ (${getNextODataLink.toString()})($value) }}`,
						},
					},
				},
			},
		},
	},
];
