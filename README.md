# n8n-nodes-msdefender 

[![CI](https://github.com/FrodeHus/n8n-nodes-msdefender/actions/workflows/ci.yml/badge.svg)](https://github.com/FrodeHus/n8n-nodes-msdefender/actions/workflows/ci.yml)


This is an n8n community node. It lets you use Microsoft Defender in your n8n workflows.

Microsoft Defender is a comprehensive security solution that helps protect your devices and data from threats.
This node allows you to interact with the Microsoft Defender API to perform various security operations, such as managing devices, retrieving threat intelligence, and more.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Version history](#version-history)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Advanced Query: Run advanced queries against Microsoft Defender.
- Machine: Manage and retrieve information about devices.
  - Add Or Remove Tag For Machine
  - Find By Tag
  - Get Many: Retrieve many machines.
  - Get Security Recommendations For Machine
  - List Installed Software For Machine
- Exposure
  - Get Current Exposure Score
  - Get Exposure Score By Machine Groups.
- Machine Actions
  - Isolate Machine
  - Release Machine from Isolation
  - List Machine Actions
  - Offboard Machine
  - Cancel Machine Action
  - Run Antivirus Scan
- Vulnerability
  - Get All Vulnerabilities
  - Get Machines By CVE
  - Get By Machine And Software

## Credentials

To use this node, you need to set up an Entra ID (Azure AD) application and obtain the necessary credentials to access the Microsoft Defender API.

1. Register an application in the [Azure Portal](https://portal.azure.com/).
2. Assign the required API permissions to the application for Microsoft Defender.
    - Application permissions: `AdvancedQuery.Read.All`, `Machine.Read.All`, `Score.Read.All`, `Machine.Isolate`
3. Grant admin consent for the permissions.
4. Generate a client secret for the application.
5. Note down the Application (client) ID, Directory (tenant) ID, and client secret.

![Entra ID App Permissions](/images/app-permissions.png)

When configuring the Microsoft Defender node in n8n, use the following credentials:
- **Client ID**: The Application (client) ID from your Azure AD application.
- **Client Secret**: The client secret generated for your Azure AD application.
- **Access Token URL**: https://login.microsoftonline.com/<your-tenant-id>/oauth2/v2.0/token



## Compatibility

This node is compatible with latest n8n versions.

## Usage

[Try it out](https://docs.n8n.io/try-it-out/)

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## Version history

- 0.1.0 Initial release with Advanced Query and Machine operations.
