import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAdvancedQueryRun = {
	operation: ['run'],
	resource: ['advancedQuery'],
};

export const advancedQueryRunDescription: INodeProperties[] = [
	{
		displayName: 'KQL Query',
		name: 'kqlQuery',
		required: true,
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForAdvancedQueryRun
			},
		},
		default: 'DeviceInfo | take 5',
		routing: {
			send: {
				type: 'body',
				property: 'Query',
			}
		},
		description: 'KQL query to run',
	}
];
