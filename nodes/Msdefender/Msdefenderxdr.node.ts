import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { incidentDescription } from './resources/incident';
import { getDeterminationValues } from './resources/incident/helpers';

export class MsdefenderXdr implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Microsoft Defender XDR',
		name: 'msdefenderXdr',
		icon: {
			light: 'file:../../icons/ms-defender.svg',
			dark: 'file:../../icons/ms-defender.dark.svg',
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Microsoft Defender XDR API',
		defaults: {
			name: 'Microsoft Defender XDR',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'msdefenderxdrOAuth2Api', required: true }],
		requestDefaults: {
			baseURL: 'https://api.security.microsoft.com/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Incident',
						value: 'incident',
					},
				],
				default: 'incident',
			},
			...incidentDescription,
		],
	};
	methods = {
		loadOptions: {
			getDeterminationValues,
		},
	};
}
