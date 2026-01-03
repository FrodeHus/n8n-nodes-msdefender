import { INodeProperties } from 'n8n-workflow';

const showOnlyDeleteIndicator = {
	operation: ['deleteIndicator'],
	resource: ['indicator'],
};

export const deleteIndicatorDescription: INodeProperties[] = [
	{
		displayName: 'Indicator ID',
		name: 'indicatorId',
		type: 'string',
		placeholder: '12345678-1234-1234-1234-123456789012',
		displayOptions: {
			show: {
				...showOnlyDeleteIndicator,
			},
		},
		default: '',
		required: true,
		description: 'The ID of the indicator to delete',

		routing: {
			request: {
				method: 'DELETE',
				url: '=/api/indicators/{{ $parameter.indicatorId }}',
			},
		},
	},
];
