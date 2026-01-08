import { INodeProperties } from 'n8n-workflow';
import { commonOdataProperties } from '../../shared/odataProperties';

const showOnlyForListMachineActions = {
	operation: ['listMachineActions'],
	resource: ['machineAction'],
};

export const listMachineActionsDescription: INodeProperties[] = [
	{
		...commonOdataProperties,
		displayOptions: {
			show: showOnlyForListMachineActions,
		},
	},
];
