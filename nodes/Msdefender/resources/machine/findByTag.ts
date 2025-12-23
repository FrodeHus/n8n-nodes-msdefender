import { INodeProperties } from "n8n-workflow";

const showOnlyForFindByTag = {
    operation: ['findByTag'],
    resource: ['machine'],
};

export const findByTagDescription: INodeProperties[] = [
	{
		displayName: 'Tag Name',
		name: 'tagName',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForFindByTag,
			},
		},
		default: '',
		required: true,
		description: 'The name of the tag to find machines by',
		routing: {
			request: {
				method: 'GET',
				url: '=/api/machines/findByTag/?tag={{ $parameter.tagName }}',
			},
		},
	},
	{
		displayName: 'Use StartsWith Filter',
		name: 'useStartsWithFilter',
		type: 'boolean',
		displayOptions: {
			show: {
				...showOnlyForFindByTag,
			},
		},
		default: false,
		description: 'Whether to use a startsWith filter for the tag name',
		routing: {
			send: {
				type: 'query',
				property: 'useStartsWithFilter',
			},
		},
	},
];