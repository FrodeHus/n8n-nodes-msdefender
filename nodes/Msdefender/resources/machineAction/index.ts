import type { INodeProperties } from 'n8n-workflow';
import { isolateDeviceDescription } from './isolateDevice';
import { runAntivirusScanDescription } from './runAntivirusScan';
import { removeFromIsolationDescription } from './releaseFromIsolation';
import { listMachineActionsDescription } from './listMachineActions';
import { cancelMachineActionDescription } from './cancelMachineAction';
import { offboardMachineDescription } from './offboardMachine';

const showOnlyForMachineActions = {
	resource: ['machineAction'],
};

export const machineActionsDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMachineActions,
		},
		options: [
			{
				name: 'Cancel Machine Action',
				value: 'cancelMachineAction',
				action: 'Cancel machine action',
				description: "Cancel an already launched machine action that isn't yet in final state",
			},
			{
				name: 'Isolate Machine',
				value: 'isolate',
				action: 'Isolate a machine',
				description: 'Isolate a machine from the network',
			},
			{
				name: 'List Machine Actions',
				value: 'listMachineActions',
				action: 'List actions for a machine',
				description: 'List actions for a machine',
				routing: {
					request: {
						method: 'GET',
						url: '/api/machineactions',
					},
				},
			},
			{
				name: 'Offboard Machine',
				value: 'offboardMachine',
				action: 'Offboard a machine',
				description: 'Offboard a machine from Microsoft Defender for Endpoint',
			},
			{
				name: 'Remove From Isolation',
				value: 'removeFromIsolation',
				action: 'Remove a machine from isolation',
				description: 'Remove a machine from isolation',
			},
			{
				name: 'Run Antivirus Scan',
				value: 'runAntivirusScan',
				action: 'Run an antivirus scan on a machine',
				description: 'Run an antivirus scan on a machine',
			},
		],
		default: 'isolate',
	},
	...cancelMachineActionDescription,
	...isolateDeviceDescription,
	...listMachineActionsDescription,
	...offboardMachineDescription,
	...removeFromIsolationDescription,
	...runAntivirusScanDescription,
];
