import { INodeProperties } from "n8n-workflow";

export const commonOdataProperties: INodeProperties[] = [
    {
        displayName: 'OData Filter',
        name: 'odataFilter',
        type: 'string',
        default: '',
        description: 'OData filter query to filter the results returned. See <a href="https://docs.microsoft.com/en-us/graph/query-parameters#filter-parameter" target="_blank">Microsoft Graph documentation</a> for more information.',
        routing: {
            send: {
                type: 'query',
                property: '$filter',
            },
        },      
    }
];