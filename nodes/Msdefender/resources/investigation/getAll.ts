import { IExecuteSingleFunctions, IHttpRequestOptions, INodeProperties } from 'n8n-workflow';

const showOnlyForGetAllInvestigations = {
	operation: ['getAllInvestigations'],
	resource: ['investigation'],
};

export const getAllInvestigationsDescription: INodeProperties[] = [
	{
		displayName: 'Filter',
		name: 'filter',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForGetAllInvestigations,
			},
		},
		default: '',
		description: 'OData filter to apply to the investigations list',
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
];
