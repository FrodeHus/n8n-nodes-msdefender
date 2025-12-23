import { IDataObject } from "n8n-workflow";

export function getNextODataLink(odataResult: IDataObject): string | undefined {
    const odataLink = odataResult['@odata.nextLink'] as string | undefined;
    return odataLink;
}