import {  NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { machineDescription } from './resources/machine';
import { advancedQueryDescription } from './resources/advancedQuery';
import { exposureDescription } from './resources/exposure';

export class Msdefender implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Microsoft Defender API',
		name: 'msdefender',
		icon: {
			light: 'file:../../icons/ms-defender.svg',
			dark: 'file:../../icons/ms-defender.dark.svg',
		},
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Microsoft Defender API',
		defaults: {
			name: 'Microsoft Defender API',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'msdefenderOAuth2Api',
				required: true,
				displayOptions: {
					show: {
						authentication: ['oAuth2'],
					},
				},
			},
		],
		requestDefaults: {
			baseURL: 'https://api.securitycenter.microsoft.com/',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'OAuth2',
						value: 'oAuth2',
					},
				],
				default: 'oAuth2',
			},
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Advanced Query',
						value: 'advancedQuery',
					},
					{
						name: 'Machine',
						value: 'machine',
					},
					{
						name: 'Exposure Score',
						value: 'exposure',
					},
					{
						name: 'Machine Action',
						value: 'machineAction',
					},
				],
				default: 'advancedQuery',
			},
			...machineDescription,
			...advancedQueryDescription,
			...exposureDescription,
		],
	};
}
