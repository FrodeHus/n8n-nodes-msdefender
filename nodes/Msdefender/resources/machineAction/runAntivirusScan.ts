import { INodeProperties } from "n8n-workflow";

const showOnlyForAntiVirusScan = {
    operation: ['runAntivirusScan'],
    resource: ['machineAction'],
};

export const runAntivirusScanDescription: INodeProperties[] = [
	{
		displayName: 'Machine ID',
		name: 'machineId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForAntiVirusScan,
		},
		description: 'The ID of the device to run the antivirus scan on',
		routing: {
			request: {
				method: 'POST',
				url: '=/api/machines/{{ $parameter.machineId }}/runAntivirusScan',
			},
		},
	},
	{
		displayName: 'Scan Type',
		name: 'scanType',
		type: 'options',
		options: [
			{
				name: 'Quick',
				value: 'Quick',
				description: 'Perform a quick scan',
			},
			{
				name: 'Full',
				value: 'Full',
				description: 'Perform a full system scan',
			},
		],
		default: 'Quick',
		required: true,
		displayOptions: {
			show: showOnlyForAntiVirusScan,
		},
		description: 'The type of antivirus scan to perform',
		routing: {
			send: {
				type: 'body',
				property: 'ScanType',
			},
		},
	},
	{
		displayName: 'Comment',
		name: 'comment',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForAntiVirusScan,
		},
		description: 'Comment associated with the action',
		routing: {
			send: {
				type: 'body',
				property: 'Comment',
			},
		},
	},
];