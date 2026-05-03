import { INodeProperties } from 'n8n-workflow';
import { commonOdataProperties } from '../../shared/odataProperties';

const showOnlyForGetAllAlerts = {
	operation: ['listAlerts'],
	resource: ['defenderAlert'],
};

export const getAllAlertsDescription: INodeProperties[] = [
	{
		...commonOdataProperties,
		displayOptions: {
			show: showOnlyForGetAllAlerts,
		},
	},
];
