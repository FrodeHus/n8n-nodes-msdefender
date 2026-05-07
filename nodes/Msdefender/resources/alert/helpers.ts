import { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';

export async function getAlertDeterminationValues(
	this: ILoadOptionsFunctions,
): Promise<INodePropertyOptions[]> {
	const classification = this.getNodeParameter('updateFields.classification') as string;

	if (classification === 'falsePositive') {
		return [
			{ name: 'Not Malicious', value: 'notMalicious' },
			{ name: 'Not Enough Data To Validate', value: 'notEnoughDataToValidate' },
		];
	} else if (classification === 'truePositive') {
		return [
			{ name: 'APT (Advanced Persistent Threat)', value: 'apt' },
			{ name: 'Compromised Account', value: 'compromisedAccount' },
			{ name: 'Malicious User Activity', value: 'maliciousUserActivity' },
			{ name: 'Malware', value: 'malware' },
			{ name: 'Multi-Staged Attack', value: 'multiStagedAttack' },
			{ name: 'Other', value: 'other' },
			{ name: 'Phishing', value: 'phishing' },
			{ name: 'Unwanted Software', value: 'unwantedSoftware' },
		];
	} else if (classification === 'informationalExpectedActivity') {
		return [
			{ name: 'Confirmed User Activity', value: 'confirmedUserActivity' },
			{ name: 'Line-Of-Business Application', value: 'lineOfBusinessApplication' },
			{ name: 'Other', value: 'other' },
			{ name: 'Security Testing', value: 'securityTesting' },
		];
	}

	return [];
}
