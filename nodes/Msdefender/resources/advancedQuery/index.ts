import type { INodeProperties } from 'n8n-workflow';
import { advancedQueryRunDescription } from './run';

const showOnlyForAdvancedQuery = {
	resource: ['advancedQuery'],
};

export const advancedQueryDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAdvancedQuery,
		},
		options: [
			{
				name: 'Run',
				value: 'run',
				action: 'Run advanced query',
				description: 'Run advanced query using KQL',
				routing: {
					request: {
						method: 'POST',
						baseURL: 'https://graph.microsoft.com/',
						url: '/v1.0/security/runHuntingQuery',
					},
				},
			},
		],
		default: 'run',
	},
	...advancedQueryRunDescription,
];
