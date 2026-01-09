import type { Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class MsdefenderxdrOAuth2Api implements ICredentialType {
	name = 'msdefenderxdrOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Microsoft Defender XDR OAuth2 API';
	icon: Icon = {
		light: 'file:../icons/ms-defender.svg',
		dark: 'file:../icons/ms-defender.dark.svg',
	};
	// Link to your community node's README
	documentationUrl =
		'https://github.com/FrodeHus/n8n-nodes-msdefender?tab=readme-ov-file#credentials';
	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			baseURL: 'https://api.security.microsoft.com',
			url: '/api/incidents?$top=1',
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
			default: 'https://api.security.microsoft.com/.default',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
