import { INodeProperties } from "n8n-workflow";
import { getAllSoftwareDescription } from "./getAllSoftware";
import { getSoftwareByIdDescription } from "./getSoftwareById";
import { getSoftwareDistributionDescription } from "./getSoftwareDistribution";
import { getMachinesBySoftwareDescription } from "./getMachinesBySoftware";
import { getVulnerabilitiesBySoftwareDescription } from "./getVulnerabilitiesBySoftware";
import { getMissingKbsDescription } from "./getMissingKbs";

const showOnlyForSoftware = {
    resource: ['software'],
};

export const softwareDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				...showOnlyForSoftware,
			},
		},
		options: [
			{
				name: 'Get All Software',
				action: 'Get all software',
				value: 'getAllSoftware',
				description: 'Retrieves the organization software inventory',
				routing: {
					request: {
						method: 'GET',
						url: '/api/software',
					},
				},
			},
			{
				name: 'Get Machines By Software',
				action: 'Get machines by software',
				value: 'getMachinesBySoftware',
				description: 'Retrieves machines that have a specific software installed',
			},
			{
				name: 'Get Missing KBs By Software',
				action: 'Get missing kbs by software',
				value: 'getMissingKBsBySoftware',
				description: 'Retrieves missing KBs (security updates) for a specific software item',
			},
			{
				name: 'Get Software By ID',
				action: 'Get software by ID',
				value: 'getSoftwareById',
				description: 'Retrieves a specific software item by ID',
			},
			{
				name: 'Get Software Version Distribution',
				action: 'Get software version distribution',
				value: 'getSoftwareVersionDistribution',
				description: 'Retrieves the version distribution for a specific software item',
			},
			{
				name: 'Get Vulnerabilities By Software',
				action: 'Get vulnerabilities by software',
				value: 'getVulnerabilitiesBySoftware',
				description: 'Retrieves vulnerabilities associated with a specific software item',
			},
		],
		default: 'getAllSoftware',
	},
	...getAllSoftwareDescription,
	...getSoftwareByIdDescription,
	...getSoftwareDistributionDescription,
	...getMachinesBySoftwareDescription,
	...getVulnerabilitiesBySoftwareDescription,
	...getMissingKbsDescription,
];