import { INodeProperties } from 'n8n-workflow';
import { commonOdataProperties } from '../../shared/odataProperties';

const showOnlyForGetAllSoftware = {
	operation: ['getAllSoftware'],
	resource: ['software'],
};

export const getAllSoftwareDescription: INodeProperties[] = [
	{
		...commonOdataProperties,
		displayOptions: {
			show: {
				...showOnlyForGetAllSoftware,
			},
		},
	},
];
