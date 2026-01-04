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
        displayOptions: {
            show: {
                ...showOnlyForSoftware,
            },
        },
        options: [
            {
                name: 'Get All Software',
                value: 'getAllSoftware',
                description: 'Retrieves the organization software inventory.',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/api/software',
                    },
                },
            },
            {
                name: 'Get Software By ID',
                value: 'getSoftwareById',
                description: 'Retrieves a specific software item by ID.',                
            },
            {
                name: 'Get Software Version Distribution',
                value: 'getSoftwareVersionDistribution',
                description: 'Retrieves the version distribution for a specific software item.',
            },
            {
                name: 'Get Machines By Software',
                value: 'getMachinesBySoftware',
                description: 'Retrieves machines that have a specific software installed.',
            },
            {
                name: 'Get Vulnerabilities By Software',
                value: 'getVulnerabilitiesBySoftware',
                description: 'Retrieves vulnerabilities associated with a specific software item.',
            },
            {
                name: 'Get Missing KBs By Software',
                value: 'getMissingKBsBySoftware',
                description: 'Retrieves missing KBs (security updates) for a specific software item.',
            }
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