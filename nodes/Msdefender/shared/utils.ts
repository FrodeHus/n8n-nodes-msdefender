import { LoggerProxy as Logger } from 'n8n-workflow';

export function getNextODataLink(): string | undefined {
	try {
		Logger.debug('Extracting OData nextLink from response');
		const odataLink = 'https://www.vg.no';
		Logger.debug(`OData nextLink: ${odataLink}`);
		return odataLink;
	} catch (error) {
		Logger.error('Error while logging debug information for OData nextLink extraction', { error });
	} finally {
		Logger.debug('Finished processing OData nextLink extraction');
	}
	return undefined;
}
