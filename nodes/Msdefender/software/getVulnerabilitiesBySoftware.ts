import { INodeProperties } from "n8n-workflow";

const showOnlyForVulnerabilitiesBySoftware = {
    operation: ['getVulnerabilitiesBySoftware'],
    resource: ['software'],
};

export const getVulnerabilitiesBySoftwareDescription: INodeProperties[] = [
	{
		displayName: 'Software ID',
		name: 'softwareId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForVulnerabilitiesBySoftware,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the software to get linked vulnerabilities for',
		placeholder: 'microsoft-_-edge',
		routing: {
			request: {
				method: 'GET',
				url: '=/api/software/{{ $parameter.softwareId }}/vulnerabilities',
			},
		},
	},
];