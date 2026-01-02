import { INodeProperties } from "n8n-workflow";

const showOnlyForStartInvestigation = {
    operation: ['startInvestigation'],
    resource: ['investigation'],
};

export const startInvestigationDescription: INodeProperties[] = [
	{
		displayName: 'Machine ID',
		name: 'machineId',
		type: 'string',
		placeholder: '1c6d11def7bdd18cf7242fafff3ddecbe60e720d',
		displayOptions: {
			show: {
				...showOnlyForStartInvestigation,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the machine to start the investigation on',
		routing: {
			request: {
				method: 'POST',
				url: '=/api/machines/{{ $parameter.machineId }}/startInvestigation',
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		placeholder: 'Investigating suspicious activity',
		displayOptions: {
			show: {
				...showOnlyForStartInvestigation,
			},
		},
		default: '',
		required: true,
		description: 'An optional comment for the investigation',
		routing: {
			send: {
				type: 'body',
				property: 'Comment',
			},
		},
	},
];