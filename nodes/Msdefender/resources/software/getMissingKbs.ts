import { INodeProperties } from "n8n-workflow";

const showOnlyForMissingKBs = {
    operation: ['getMissingKBsBySoftware'],
    resource: ['software'],
};

export const getMissingKbsDescription: INodeProperties[] = [
	{
		displayName: 'Software ID',
		name: 'softwareId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForMissingKBs,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the software to get missing KBs for',
		placeholder: 'microsoft-_-teams',
		routing: {
			request: {
				method: 'GET',
				url: '=/api/software/{{ $parameter.softwareId }}/getmissingkbs',
			},
		},
	},
];