import type { INodeProperties } from 'n8n-workflow';
import { getAllRemediationTasksDescription } from './getAllRemediationTasks';
import { getRemediationByIdDescription } from './getRemediationById';
import { getExposedDevicesByRemediationDescription } from './getExposedDevicesByRemediation';

const showOnlyForRemediation = {
	resource: ['remediation'],
};

export const remediationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForRemediation,
		},
		options: [
			{
				name: 'Get Remediation Activities',
				action: 'Get remediation activities',
				value: 'remediationActivities',
				description: 'Get all remediation activities',
				routing: {
					request: {
						method: 'GET',
						url: '/api/remediationtasks/',
					},
				},
			},
			{
				name: 'Get Remediation Activity',
				action: 'Get a remediation activity',
				value: 'remediationActivityId',
				description: 'Get a specific remediation activity by ID',
			},
			{
				name: 'Get Exposed Devices by Remediation',
				action: 'Get exposed devices by remediation activity',
				value: 'getExposedDevicesByRemediation',
				description: 'Get devices exposed in a specific remediation activity by ID',
			},
		],
		default: 'remediationActivities',
	},
	...getAllRemediationTasksDescription,
	...getRemediationByIdDescription,
	...getExposedDevicesByRemediationDescription,
];
