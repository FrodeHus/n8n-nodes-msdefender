import { INodeProperties } from 'n8n-workflow';
import { getAllInvestigationsDescription } from './getAll';
import { getByIdDescription } from './getById';
import { startInvestigationDescription } from './startInvestigation';

const showOnlyForInvestigation = {
	resource: ['investigation'],
};

export const investigationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForInvestigation,
		},
		options: [
			{
				name: 'Get All Investigations',
				value: 'getAllInvestigations',
				action: 'Get all investigations',
				description: 'Retrieve all investigations',
				routing: {
					request: {
						method: 'GET',
						url: '/api/investigations',
					},
				},
			},
			{
				name: 'Get Investigation By ID',
				value: 'getInvestigationById',
				action: 'Get an investigation by ID',
				description: 'Retrieve a specific investigation by its ID',				
				routing: {
					request: {
						method: 'GET',
						url: '=/api/investigations/{{ $parameter.investigationId }}',
					},
				},
            },
            {
                name: 'Start Investigation',
                value: 'startInvestigation',
                action: 'Start an investigation on a machine',
                description: 'Initiate an investigation on a specified machine',                        
            }
		],
		default: 'getAllInvestigations',
	},
    ...getAllInvestigationsDescription,
    ...getByIdDescription,
    ...startInvestigationDescription,
];
