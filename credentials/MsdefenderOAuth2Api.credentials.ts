import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class MsdefenderOAuth2Api implements ICredentialType {
	name = 'msdefenderOAuth2Api';

	extends = ['oAuth2Api'];

	displayName = 'Microsoft Defender OAuth2 API';
	icon: Icon = {
		light: 'file:../icons/ms-defender.svg',
		dark: 'file:../icons/ms-defender.dark.svg',
	};

	// Link to your community node's README
	documentationUrl =
		'https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-client-creds-grant-flow';

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
			default: 'https://api.securitycenter.microsoft.com/.default',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
