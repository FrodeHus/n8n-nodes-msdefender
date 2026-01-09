import { INodeProperties } from "n8n-workflow";
import { commonOdataProperties } from "../../shared/odataProperties";

const showOnlyForIncidentGetMany = {
    resource: ['incident'],
    operation: ['getMany'],
}

export const getManyIncidentDescription: INodeProperties[] = [
    {
        ...commonOdataProperties,
        displayOptions: {
            show: {
                ...showOnlyForIncidentGetMany,
            },
        },
    },
];