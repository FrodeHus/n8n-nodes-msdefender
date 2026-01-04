# n8n-nodes-msdefender

[![CI](https://github.com/FrodeHus/n8n-nodes-msdefender/actions/workflows/ci.yml/badge.svg)](https://github.com/FrodeHus/n8n-nodes-msdefender/actions/workflows/ci.yml)

This is an n8n community node. It lets you use Microsoft Defender in your n8n workflows.

Microsoft Defender is a comprehensive security solution that helps protect your devices and data from threats.
This node allows you to interact with the Microsoft Defender API to perform various security operations, such as managing devices, retrieving threat intelligence, and more.

For a some background, visit [I made a n9n node for Microsoft Defender](https://www.frodehus.dev/i-made-a-n8n-node-for-microsoft-defender/).

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
- Alert: Manage and retrieve information about security alerts.
  - Get Many: Retrieve many alerts.
  - Get By ID: Retrieve a specific alert by its ID.
  - Update Alert: Update the properties of a specific alert.
- Remediation: Manage and retrieve information about remediation activities.
  - Get Remediation Activities: Retrieve all remediation activities.
  - Get Remediation Activity: Retrieve a specific remediation activity by ID.
  - Get Devices By Remediation Activity: Retrieve devices exposed in a specific remediation activity by ID
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
- Investigation
  - Get All Investigations
  - Get Investigation By ID
  - Start Investigation on Machine
- Indicator
  - Get All Indicators
  - Submit Indicator
  - Delete Indicator
- Recommendation
  - Get Security Recommendations
  - Get Security Recommendation By ID
  - Get Machines By Security Recommendation
  - Get Vulnerabilities By Security Recommendation
  - Get Recommendations By Software
- Software
  - Get All Software
  - Get Software By ID
  - Get Software Version Distribution
  - Get Machines By Software
  - Get Vulnerabilities By Software
  - Get Missing KBs By Software

## Credentials

To use this node, you need to set up an Entra ID (Azure AD) application and obtain the necessary credentials to access the Microsoft Defender API.

1. Register an application in the [Azure Portal](https://portal.azure.com/).
2. Assign the required API permissions to the application for Microsoft Defender.
    - Application permissions: `AdvancedQuery.Read.All`, `Machine.ReadWrite.All`, `Score.Read.All`, `Machine.Isolate`, `Vulnerability.Read.All`, `SecurityRecommendation.Read.All`, `Machine.Scan`, `Machine.Offboard`
3. Grant admin consent for the permissions.
4. Generate a client secret for the application.
5. Note down the Application (client) ID, Directory (tenant) ID, and client secret.

![Entra ID App Permissions](/images/app-permissions.png)

When configuring the Microsoft Defender node in n8n, use the following credentials:

- **Client ID**: The Application (client) ID from your Azure AD application.
- **Client Secret**: The client secret generated for your Azure AD application.
- **Access Token URL**: `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token`



## Compatibility

This node is compatible with latest n8n versions.

## Usage

[Try it out](https://docs.n8n.io/try-it-out/)

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

## Version history

- 1.6.0 (2026-01-04): Added Software resource (get all software, get by ID, get version distribution, get machines by software, get vulnerabilities by software, get missing KBs by software).
- 1.5.0 (2026-01-04): Added Recommendation resource (get security recommendations).
- 1.4.0 (2026-01-03): Added threat intelligence indicator operations (list indicators, submit indicator, delete indicator).
- 1.3.0 (2026-01-03): Added Investigation resource (list investigations, get by ID, start investigation on machine).
  Also added Indicator resource (list indicators, submit indicator, delete indicator).
- 1.2.1 (2026-01-02): Credential test added; CI and npm-publish workflow updates; OData `getNextODataLink()` refactor.
- 1.2.0 (2025-12-30): Added Alert operations (`getAlertById`, `updateAlert`), Remediation resources, and pre-send cleanup.
- 1.1.0 (2025-12-29): Added missing CVE lookup and remediation task operations.
- 1.0.2 (2025-12-26): Fixed parameter issues, improved tagging, introduced Alerts resource.
- 1.0.0 (2025-12-23): Initial release with Advanced Query, Machine, Machine Actions, and Vulnerability operations.
