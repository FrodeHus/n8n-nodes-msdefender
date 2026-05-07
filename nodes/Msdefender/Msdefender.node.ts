import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { machineDescription } from './resources/machine';
import { advancedQueryDescription } from './resources/advancedQuery';
import { exposureDescription } from './resources/exposure';
import { machineActionsDescription } from './resources/machineAction';
import { vulnerabilityDescription } from './resources/vulnerability';
import { alertDescription } from './resources/alert';
import { remediationDescription } from './resources/remediation';
import { investigationDescription } from './resources/investigation';
import { indicatorDescription } from './resources/indicator';
import { recommendationDescription } from './resources/recommendation';
import { softwareDescription } from './resources/software';
import { incidentDescription } from './resources/incident';
import { getDeterminationValues } from './resources/incident/helpers';
import { getAlertDeterminationValues } from './resources/alert/helpers';

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
						authentication: ['mdeOAuth2'],
					},
				},
			},
			{
				name: 'msdefenderGraphOAuth2Api',
				required: true,
				displayOptions: {
					show: {
						authentication: ['graphOAuth2'],
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
						name: 'Defender for Endpoint (MDE) API',
						value: 'mdeOAuth2',
					},
					{
						name: 'Microsoft Graph Security API',
						value: 'graphOAuth2',
					},
				],
				default: 'mdeOAuth2',
				description:
				'Select "Defender for Endpoint" for most resources. Select "Microsoft Graph Security API" for Advanced Query, Alert, and Incident operations.',
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
						displayOptions: {
							show: {
								authentication: ['graphOAuth2'],
							},
						},
					},
					{
						name: 'Alert',
						value: 'defenderAlert',
						displayOptions: {
							show: {
								authentication: ['graphOAuth2'],
							},
						},
					},
					{
						name: 'Exposure Score',
						value: 'exposure',
					},
					{
						name: 'Incident',
						value: 'incident',
						displayOptions: {
							show: {
								authentication: ['graphOAuth2'],
							},
						},
					},
					{
						name: 'Indicator',
						value: 'indicator',
					},
					{
						name: 'Investigation',
						value: 'investigation',
					},
					{
						name: 'Machine',
						value: 'machine',
					},
					{
						name: 'Machine Action',
						value: 'machineAction',
					},
					{
						name: 'Recommendation',
						value: 'recommendation',
					},
					{
						name: 'Remediation',
						value: 'remediation',
					},
					{
						name: 'Software',
						value: 'software',
					},
					{
						name: 'Vulnerability',
						value: 'vulnerability',
					},
				],
				default: 'advancedQuery',
			},
			...alertDescription,
			...incidentDescription,
			...machineDescription,
			...advancedQueryDescription,
			...exposureDescription,
			...investigationDescription,
			...machineActionsDescription,
			...vulnerabilityDescription,
			...recommendationDescription,
			...remediationDescription,
			...softwareDescription,
			...indicatorDescription,
		],
	};
	methods = {
		loadOptions: {
			getDeterminationValues,
			getAlertDeterminationValues,
		},
	};
}
