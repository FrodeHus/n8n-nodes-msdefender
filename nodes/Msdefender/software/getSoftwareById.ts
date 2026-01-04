import { INodeProperties } from "n8n-workflow";

const showOnlyForSoftwareById = {
    operation: ['getSoftwareById'],
    resource: ['software'],
};

export const getSoftwareByIdDescription: INodeProperties[] = [
	{
		displayName: 'Software ID',
		name: 'softwareId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForSoftwareById,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the software item to retrieve',
		placeholder: 'microsoft-_-edge',
		routing: {
			request: {
				method: 'GET',
				url: '=/api/software/{{ $parameter.softwareId }}',
			},
		},
	},
];