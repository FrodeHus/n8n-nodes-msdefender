import type { Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class MsdefenderGraphOAuth2Api implements ICredentialType {
	name = 'msdefenderGraphOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Microsoft Defender Graph OAuth2 API';
	icon: Icon = {
		light: 'file:../icons/ms-defender.svg',
		dark: 'file:../icons/ms-defender.dark.svg',
	};

	documentationUrl =
		'https://learn.microsoft.com/en-us/graph/permissions-reference#threathuntingreadall';

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			baseURL: 'https://graph.microsoft.com',
			url: '/v1.0/security/alerts_v2?$top=1',
		},
	};

	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: 'https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: 'https://graph.microsoft.com/.default',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
