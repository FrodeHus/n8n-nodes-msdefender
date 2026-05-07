# n8n-nodes-msdefender

[![CI](https://github.com/FrodeHus/n8n-nodes-msdefender/actions/workflows/ci.yml/badge.svg)](https://github.com/FrodeHus/n8n-nodes-msdefender/actions/workflows/ci.yml)

This is an n8n community node. It lets you use Microsoft Defender in your n8n workflows.

Microsoft Defender is a comprehensive security solution that helps protect your devices and data from threats.
This node allows you to interact with the Microsoft Defender API to perform various security operations, such as managing devices, retrieving threat intelligence, and more.

For a some background, visit [I made a n8n node for Microsoft Defender](https://www.frodehus.dev/i-made-a-n8n-node-for-microsoft-defender/).

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

### Defender for Endpoint

- Advanced Query: Run advanced queries against Microsoft Defender. Requires Microsoft Graph Security API authentication.
- Alert: Manage and retrieve information about security alerts. Requires Microsoft Graph Security API authentication.
  - Get Many: Retrieve many alerts.
  - Get By ID: Retrieve a specific alert by its ID.
  - Update Alert: Update the properties of a specific alert.
- Incident: Manage and retrieve information about security incidents. Requires Microsoft Graph Security API authentication.
  - Get Many: Retrieve many incidents.
  - Get By ID: Retrieve a specific incident by its ID.
  - Update Incident: Update the properties of a specific incident.
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

### Defender XDR

- Incident: Manage and retrieve information about security incidents.
  - Get Many: Retrieve many incidents.
  - Get By ID: Retrieve a specific incident by its ID.
  - Update Incident: Update the properties of a specific incident.

## Triggers

Both triggers use the Microsoft Graph Security API (Microsoft Defender Graph OAuth2 API credential).

- Microsoft Defender for Endpoint Trigger
  - Polling trigger for alerts created or updated
- Microsoft Defender XDR Trigger
  - Polling trigger for incidents created or updated

## Credentials

To use this node, you need to set up an Entra ID (Azure AD) application and obtain the necessary credentials to access the Microsoft Defender API.

1. Register an application in the [Azure Portal](https://portal.azure.com/).
2. Assign the required API application permissions to the application for Microsoft Defender for Endpoint (WindowsDefenderATP) if you plan to use the legacy Defender for Endpoint API credential.
    - `AdvancedQuery.Read.All`
    - `Machine.ReadWrite.All`
    - `Score.Read.All`
    - `Machine.Isolate`
    - `Vulnerability.Read.All`
    - `SecurityRecommendation.Read.All`
    - `Machine.Scan`
    - `Machine.Offboard`
3. Assign the required API application permissions under **Microsoft Graph** if you plan to use the Microsoft Graph Security API credential.
  - `ThreatHunting.Read.All` for Advanced Query.
  - `SecurityAlert.Read.All` for reading alerts, using the Microsoft Defender trigger, and passing the built-in Microsoft Defender Graph OAuth2 API credential test.
  - `SecurityAlert.ReadWrite.All` if you also want to update alerts.
  - `SecurityIncident.Read.All` for reading incidents and using the Microsoft Defender XDR trigger.
  - `SecurityIncident.ReadWrite.All` if you also want to update incidents.
4. Grant admin consent for the permissions.
5. Generate a client secret for the application.
6. Note down the Application (client) ID, Directory (tenant) ID, and client secret.


When configuring the Microsoft Defender node in n8n, use the following credentials:

- **Client ID**: The Application (client) ID from your Azure AD application.
- **Client Secret**: The client secret generated for your Azure AD application.
- **Access Token URL**: `https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token`

There are two separate credentials in this package:

- **Microsoft Defender OAuth2 API**: Uses `https://api.securitycenter.microsoft.com/.default` for Defender for Endpoint resources such as machines, vulnerabilities, recommendations, remediation, software, indicators, and exposure score.
- **Microsoft Defender Graph OAuth2 API**: Uses `https://graph.microsoft.com/.default` for Microsoft Graph Security API resources such as Advanced Query, alerts, incidents, and both triggers.

In the main Microsoft Defender node, switch **Authentication** to **Microsoft Graph Security API** when working with **Advanced Query**, **Alert**, or **Incident** operations. The Microsoft Defender XDR node and both trigger nodes always use the Microsoft Defender Graph OAuth2 API credential.

You can re-use the same Azure AD application for both credentials, just ensure it has the necessary permissions assigned for each API.

If you added permissions to your Azure AD application, remember to re-grant admin consent and update the credentials in n8n.

## Compatibility

Tested with recent n8n 2.x releases. Older versions may work, but are not guaranteed.

## Usage

[Try it out](https://docs.n8n.io/try-it-out/)

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Microsoft Defender for Endpoint API documentation](https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/apis-intro?view=o365-worldwide)
- [Microsoft Defender XDR API documentation](https://learn.microsoft.com/en-us/microsoft-365/security/defender/api-overview?view=o365-worldwide)

## Version history

[Changelog](./CHANGELOG.md)
