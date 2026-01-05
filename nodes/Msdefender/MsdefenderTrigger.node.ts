import {  INodeExecutionData, INodeType, INodeTypeDescription, IPollFunctions, NodeConnectionTypes } from "n8n-workflow";

export class MsdefenderTrigger implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Microsoft Defender Trigger',
		name: 'msdefenderTrigger',
		icon: 'file:../../icons/ms-defender.svg',
		group: ['trigger'],
        version: 1,        
        subtitle: '={{"Trigger: " + $parameter["eventType"]}}',
		description: 'Triggers workflows on Microsoft Defender events',
		defaults: {
			name: 'Microsoft Defender Trigger',
		},
		inputs: [],
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
						name: 'Alert Created',
						value: 'alertCreated',
					},
					{
						name: 'Alert Updated',
						value: 'alertUpdated',
					},
				],
				default: 'alertCreated',
				description: 'The type of event to trigger on',
			},
			{
				displayName: 'Polling Interval',
				name: 'pollingInterval',
				type: 'number',
				default: 60,
				description: 'Interval in seconds to poll for new events',
			},
		],
	};

	async poll(this: IPollFunctions): Promise<INodeExecutionData[][] | null> {
		const eventType = this.getNodeParameter('eventType') as string;
		const pollingInterval = this.getNodeParameter('pollingInterval') as number;

		var baseUrl = 'https://api.securitycenter.microsoft.com/';
		var endpoint = '';

		if (eventType === 'alertCreated') {
			endpoint = 'api/alerts?$filter=alertCreationTime gt ';
		} else if (eventType === 'alertUpdated') {
			endpoint = 'api/alerts?$filter=lastUpdateTime gt ';
		}
		const lastPollTime =
			(this.getWorkflowStaticData('node').lastPollTime as Date) ||
			new Date(Date.now() - pollingInterval * 1000);
		const filterTime = lastPollTime.toISOString();
		const url = `${baseUrl}${endpoint}${filterTime}`;
        
		const responseData = await this.helpers.httpRequestWithAuthentication.call(
			this,
			'msdefenderOAuth2Api',
			{
				method: 'GET',
				url,
			},
		);

		this.getWorkflowStaticData('node').lastPollTime = new Date();
		const alerts = responseData.value as Array<any>;
		if (alerts.length === 0) {
			return null;
		}

		return [this.helpers.returnJsonArray(alerts)];
	}
};