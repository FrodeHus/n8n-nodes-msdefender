import { INodeProperties } from 'n8n-workflow';
import { commonOdataProperties } from '../../shared/odataProperties';

const showOnlyForGetAllInvestigations = {
	operation: ['getAllInvestigations'],
	resource: ['investigation'],
};

export const getAllInvestigationsDescription: INodeProperties[] = [
	{
		...commonOdataProperties,
		displayOptions: {
			show: showOnlyForGetAllInvestigations,
		},
	},
];
