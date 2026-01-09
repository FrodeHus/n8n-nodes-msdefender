import {
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IPollFunctions,
	JsonObject,
	NodeApiError,
	NodeConnectionTypes,
} from 'n8n-workflow';

export class MsdefenderXDRTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Microsoft Defender XDR Trigger',
		name: 'msdefenderXdrTrigger',
		icon: 'file:../../icons/ms-defender.svg',
		group: ['trigger'],
		polling: true,
		usableAsTool: true,
		version: 1,
		subtitle: '={{"Trigger: " + $parameter["eventType"]}}',
		description: 'Triggers workflows on Microsoft Defender XDR events',
		defaults: {
			name: 'Microsoft Defender XDR Trigger',
		},
		inputs: [],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'msdefenderxdrOAuth2Api',
				required: true,
				displayOptions: {
					show: {
						authentication: ['oAuth2'],
					},
				},
			},
		],
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
				displayName: 'Event Type',
				name: 'eventType',
				type: 'options',
				options: [
					{
						name: 'Incident Created',
						value: 'incidentCreated',
					},
					{
						name: 'Incident Updated',
						value: 'incidentUpdated',
					},
				],
				default: 'incidentCreated',
				description: 'The type of event to trigger on',
			},
			{
				displayName: 'Lookup Data From Last ...',
				description: 'How far back in time to look for new data',
				name: 'lookupDataFromLast',
				type: 'options',
				allowArbitraryValues: true,
				options: [
					{
						name: '5 Minutes',
						value: 5,
					},
					{
						name: '15 Minutes',
						value: 15,
					},
					{
						name: '30 Minutes',
						value: 30,
					},
					{
						name: '1 Hour',
						value: 60,
					},
					{
						name: 'Custom',
						value: -1,
					},
				],
				default: 5,
			},
			{
				displayName: 'Minutes',
				name: 'minutes',
				type: 'number',
				default: 5,
				typeOptions: {
					minValue: 1,
				},
				displayOptions: {
					show: {
						lookupDataFromLast: [-1],
					},
				},
				description: 'The number of minutes to look back for new data',
			},
		],
	};

	async poll(this: IPollFunctions): Promise<INodeExecutionData[][] | null> {
		const eventType = this.getNodeParameter('eventType') as string;
		const nodeData = this.getWorkflowStaticData('node');
		const lookupDataFromLast = this.getNodeParameter('lookupDataFromLast') as number;
		const minutes = this.getNodeParameter('minutes', 5) as number;

		const baseUrl = 'https://api.security.microsoft.com/';
		let endpoint = '';

		if (eventType === 'incidentCreated') {
			endpoint = 'api/incidents?$filter=createdTime gt ';
		} else if (eventType === 'incidentUpdated') {
			endpoint = 'api/incidents?$filter=lastUpdateTime gt ';
		}
		const lookupTime = new Date(
			Date.now() - (lookupDataFromLast === -1 ? minutes : lookupDataFromLast) * 60000,
		);
		const filterTime = lookupTime.toISOString();
		const url = `${baseUrl}${endpoint}${filterTime}`;
		let events = [];
		try {
			const responseData = await this.helpers.httpRequestWithAuthentication.call(
				this,
				'msdefenderxdrOAuth2Api',
				{
					method: 'GET',
					url,
				},
			);
			events = responseData.value as JsonObject[];
			nodeData.lastPollTime = Date.now();
		} catch (error) {
			throw new NodeApiError(this.getNode(), error as JsonObject);
		}

		if (events.length === 0) {
			return null;
		}

		return [this.helpers.returnJsonArray(events)];
	}
}
