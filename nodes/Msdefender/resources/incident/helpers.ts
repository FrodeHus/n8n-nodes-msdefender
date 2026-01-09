import { ILoadOptionsFunctions, INodePropertyOptions } from "n8n-workflow";

export async function getDeterminationValues(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
    const classification = this.getNodeParameter('updateFields.classification') as string;
    if (classification === 'FalsePositive') {
        return [
            {
                name: 'Clean',
                value: 'Clean',
            },
            {
                name: 'Not Enough Data To Validate',
                value: 'NoEnoughDataToValidate',
            },
        ];
    } else if (classification === 'TruePositive') {
        return [
            {
                name: 'Compromised Account',
                value: 'CompromisedAccount',
            },
            {
                name: 'Malicious User Activity',
                value: 'MaliciousUserActivity',
            },
            {
                name: 'Malware',
                value: 'Malware',
            },
            {
                name: 'Multi Staged Attack',
                value: 'MultiStagedAttack',
            },
            {
                name: 'Other',
                value: 'Other',
            },
            {
                name: 'Phishing',
                value: 'Phishing',
            },
            {
                name: 'Unwanted Software',
                value: 'UnwantedSoftware',
            },
        ];
    } else if (classification === 'InformationalExpectedActivity') {
        return [
            {
                name: 'Confirmed Activity',
                value: 'ConfirmedActivity',
            },
            {
                name: 'Line-Of-Business Application',
                value: 'LineOfBusinessApplication',
            },
            {
                name: 'Other',
                value: 'Other',
            },
            {
                name: 'Security Testing',
                value: 'SecurityTesting',
            },
        ];
    }
    return [];
}