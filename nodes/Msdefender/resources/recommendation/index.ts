import { INodeProperties } from "n8n-workflow";
import { getVulnerabilitiesByRecommendationDescription } from "./getVulnerabilitiesByRecommendation";
import { getRecommendationByIdDescription } from "./getRecommendationById";
import { getRecommendationBySoftwareDescription } from "./getRecommendationBySoftware";
import { getRecommendationsDescription } from "./getRecommendations";
import { getMachinesByRecommendationDescription } from "./getMachinesByRecommendation";

const showOnlyForRecommendation = {
    resource: ['recommendation'],
};

export const recommendationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				...showOnlyForRecommendation,
			},
		},
		options: [
			{
				name: 'Get Recommendations',
				action: 'Get recommendations',
				value: 'getAllRecommendations',
				description: 'Get all recommendations',
				routing: {
					request: {
						method: 'GET',
						url: '/api/recommendations/',
					},
				},
			},
			{
				name: 'Get Recommendation by ID',
				action: 'Get a recommendation by ID',
				value: 'getRecommendationById',
				description: 'Get a specific recommendation by ID',
			},
			{
				name: 'Get Recommendation By Software',
				action: 'Get recommendation by software',
				value: 'getRecommendationBySoftware',
				description: 'Retrieves a security recommendation related to a specific software',
            },
            {
                name: 'Get Machines By Recommendation',
                action: 'Get machines by recommendation',
                value: 'getMachinesByRecommendation',
                description: 'Get machines linked to a specific recommendation by ID',
            },
			{
				name: 'Get Vulnerabilities by Recommendation',
				value: 'getVulnerabilitiesByRecommendation',
				action: 'Get vulnerabilities by recommendation',
				description: 'Get vulnerabilities linked to a specific recommendation by ID',
			},
		],
		default: 'getAllRecommendations',
    },
    ...getRecommendationsDescription,
    ...getMachinesByRecommendationDescription,
	...getVulnerabilitiesByRecommendationDescription,
    ...getRecommendationByIdDescription,
    ...getRecommendationBySoftwareDescription,
];