import { INodeProperties } from 'n8n-workflow';
import { submitIndicatorDescription } from './submitIndicator';
import { deleteIndicatorDescription } from './delete';

const showOnlyForIndicator = {
	resource: ['indicator'],
};

export const indicatorDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				...showOnlyForIndicator,
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAllIndicators',
				action: 'Get all indicators',
				description: 'Retrieve all indicators',
				routing: {
					request: {
						method: 'GET',
						url: '/api/indicators',
					},
				},
			},
			{
				name: 'Submit Indicator',
				value: 'submitIndicator',
				action: 'Submit a new indicator',
				description: 'Create a new indicator in Microsoft Defender',
				routing: {
					request: {
						method: 'POST',
						url: '/api/indicators',
					},
				},
			},
			{
				name: 'Delete Indicator',
				value: 'deleteIndicator',
				action: 'Delete an indicator',
				description: 'Remove an existing indicator from Microsoft Defender',
			},
		],
		default: 'getAllIndicators',
	},
	...submitIndicatorDescription,
	...deleteIndicatorDescription,
];
