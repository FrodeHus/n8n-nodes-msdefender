import { INodeProperties } from 'n8n-workflow';

const showOnlyForGetAllRemediationTasks = {
	operation: ['remediationActivities'],
	resource: ['remediation'],
};

export const getAllRemediationTasksDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: showOnlyForGetAllRemediationTasks,
		},
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		displayOptions: {
			show: {
				...showOnlyForGetAllRemediationTasks,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,

			maxValue: 1000,
		},
		description: 'Max number of results to return',
	},
];
