import { INodeProperties } from "n8n-workflow";

const showOnlyForSoftwareVersionDistribution = {
    operation: ['getSoftwareVersionDistribution'],
    resource: ['software'],
};

export const getSoftwareDistributionDescription: INodeProperties[] = [
	{
		displayName: 'Software ID',
		name: 'softwareId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSoftwareVersionDistribution,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the software item to retrieve version distribution for',
		placeholder: 'microsoft-_-edge',
		routing: {
			request: {
				method: 'GET',
				url: '=/api/software/{{ $parameter.softwareId }}/distributions',
			},
		},
	},
];