import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlDatamasking implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure SQL Datamasking',
                name: 'N8nDevAzureSqlDatamasking',
                icon: { light: 'file:./azure-sql-datamasking.png', dark: 'file:./azure-sql-datamasking.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Manages Azure SQL Database data masking policies and rules CRUD operations.',
                defaults: { name: 'Azure SQL Datamasking' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureSqlDatamaskingApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
