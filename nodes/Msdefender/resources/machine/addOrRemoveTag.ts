import { INodeProperties } from "n8n-workflow";

const showOnlyForAddOrRemoveTags = {
    operation: ['addOrRemoveTag'],
    resource: ['machine'],
};

export const addOrRemoveTagDescription: INodeProperties[] = [
    {
        displayName: 'Machine ID',
        name: 'machineId',
        type: 'string',
        displayOptions: {
            show: {
                ...showOnlyForAddOrRemoveTags,
            },
        },
        default: '',
        required: true,
        description: 'The ID of the machine to add or remove tags for',
        routing: {
            request: {
                method: 'POST',
                url: '=/api/machines/{{ $parameter.machineId }}/tags',
            },
        },
    },
    {
        displayName: 'Tag',
        name: 'tag',
        type: 'string',
        displayOptions: {
            show: {
                ...showOnlyForAddOrRemoveTags,
            },
        },
        default: '',
        required: true,
        description: 'Tag to add or remove from the machine',
        routing: {
            send: {
                type: 'body',
                property: 'Value',
            },
        },
    },
    {
        displayName: 'Action',
        name: 'action',
        type: 'options',
        displayOptions: {
            show: {
                ...showOnlyForAddOrRemoveTags,
            },
        },
        options: [
            {
                name: 'Add',
                action: 'Add tag to machine',
                value: 'add',
                description: 'Add the tag to the machine',
            },
            {
                name: 'Remove',
                action: 'Remove tag from machine',
                value: 'remove',
                description: 'Remove the tag from the machine',
            },
        ],
        default: 'add',
        description: 'Whether to add or remove the tag from the machine',
        routing: {
            send: {
                type: 'body',
                property: 'Action',
            },
        },
    }
];