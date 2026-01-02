import { LoggerProxy as Logger } from 'n8n-workflow';

export function getNextODataLink(body: unknown): string | undefined {
	try {
		Logger.debug('Extracting OData nextLink from response');

		if (body && typeof body === 'object') {
			const obj = body as Record<string, unknown>;

			const keys = ['@odata.nextLink', 'odata.nextLink', 'nextLink', 'NextLink'] as const;
			for (const key of keys) {
				const candidate = obj[key];
				if (typeof candidate === 'string' && candidate.trim().length > 0) {
					Logger.debug(`OData nextLink: ${candidate}`);
					return candidate;
				}
			}
		}
	} catch (error) {
		Logger.error('Error while extracting OData nextLink', { error });
	} finally {
		Logger.debug('Finished processing OData nextLink extraction');
	}
	return undefined;
}
