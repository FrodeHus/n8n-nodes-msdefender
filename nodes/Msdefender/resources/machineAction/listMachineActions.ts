import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties } from "n8n-workflow";

const showOnlyForListMachineActions = {
    operation: ['listMachineActions'],
    resource: ['machineAction'],
};

export const listMachineActionsDescription: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		default: '',
		placeholder: "cveId eq 'CVE-2025-12345'",
		description:
			'The filter expression - supports: ID, atus, machineId, type, requestor, and creationDateTimeUtc',
		displayOptions: {
			show: showOnlyForListMachineActions,
		},
		routing: {
			send: {
				type: 'query',
				property: '$filter',
				preSend: [
					async function (
						this: IExecuteSingleFunctions,
						requestOptions: IHttpRequestOptions,
					): Promise<IHttpRequestOptions> {
						if (requestOptions.qs && this.getNodeParameter('filter', '') === '')
							delete requestOptions.qs['$filter'];
						return requestOptions;
					},
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		displayOptions: {
			show: {
				...showOnlyForListMachineActions,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 1000,
		},
		description: 'Max number of results to return',
		routing: {
			send: {
				type: 'query',
				property: '$top',
			},
			output: {
				maxResults: '={{$value}}',
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForListMachineActions,
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: {
				paginate: '={{ $value }}',
				type: 'query',
				property: '$top',
				value: '={{parameter.limit}}',
			},
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue: `={{ !!($response.body['@odata.nextLink']) }}`,
						request: {
							url: `={{ $request.url }}`,
						},
					},
				},
			},
		},
	},
	{
		displayName: 'Skip',
		name: 'skip',
		type: 'number',
		displayOptions: {
			show: {
				...showOnlyForListMachineActions,
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 0,
			maxValue: 1000,
		},
		default: 0,
		description: 'Number of results to skip',
		routing: {
			send: {
				type: 'query',
				property: '$skip',
			},
		},
	},
];