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
				...showOnlyForAdvancedQueryRun,
			},
		},
		default: 'DeviceInfo | take 5',
		routing: {
			send: {
				type: 'body',
				property: 'Query',
			},
		},
		description: 'KQL query to run',
	},
	{
		displayName: 'Timespan',
		name: 'timespan',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForAdvancedQueryRun,
			},
		},
		default: 'P30D',
		routing: {
			send: {
				type: 'body',
				property: 'Timespan',
			},
		},
		description:
			'ISO 8601 duration for the query time range (e.g. P30D for 30 days, P7D for 7 days). Maximum is P30D.',
	},
];
