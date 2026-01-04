import { INodeProperties } from "n8n-workflow";

const showOnlyForMachinesBySoftware = {
    operation: ['getMachinesBySoftware'],
    resource: ['software'],
};

export const getMachinesBySoftwareDescription: INodeProperties[] = [
	{
		displayName: 'Software ID',
		name: 'softwareId',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForMachinesBySoftware,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the software item to get linked machines for',
		placeholder: 'microsoft-_-edge',
		routing: {
			request: {
				method: 'GET',
				url: '=/api/software/{{ $parameter.softwareId }}/machineReferences',
			},
		},
	},
];