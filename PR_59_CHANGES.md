# PR #59: Graph API Migration - UI and Documentation Updates

## Summary
This PR addresses feedback from the Graph API migration by tightening the node UI and clarifying application permission requirements in the documentation.

## Changes Made

### 1. UI Constraints for Graph-Only Resources
**File**: `nodes/Msdefender/Msdefender.node.ts`

Added `displayOptions` conditions to restrict Advanced Query and Alert resources to Microsoft Graph authentication only:

```typescript
{
  name: 'Advanced Query',
  value: 'advancedQuery',
  displayOptions: {
    show: {
      authentication: ['graphOAuth2'],
    },
  },
},
{
  name: 'Alert',
  value: 'defenderAlert',
  displayOptions: {
    show: {
      authentication: ['graphOAuth2'],
    },
  },
},
```

**Effect**: These resources now only appear in the UI when "Microsoft Graph Security API" authentication is selected, preventing users from accidentally choosing them with MDE authentication.

### 2. Documentation Updates
**File**: `README.md`

#### Credentials Section
- Clarified that there are two separate credentials in the package
- Updated section 3 to document Microsoft Graph permissions specifically:
  - `ThreatHunting.Read.All` for Advanced Query
  - `SecurityAlert.Read.All`/`SecurityAlert.ReadWrite.All` for alerts
  - `SecurityIncident.Read.All`/`SecurityIncident.ReadWrite.All` for incidents
- Added explicit guidance that Graph credential test requires `SecurityAlert.Read.All`

#### Operations Section  
- Added note to Advanced Query: "Requires Microsoft Graph Security API authentication."
- Added note to Alert: "Requires Microsoft Graph Security API authentication."

#### Credential Split Documentation
- Documented that Microsoft Defender OAuth2 API is for: machines, vulnerabilities, recommendations, remediation, software, indicators, and exposure score
- Documented that Microsoft Defender Graph OAuth2 API is for: Advanced Query, alerts, incidents, and both triggers
- Added explicit instruction: "In the main Microsoft Defender node, switch **Authentication** to **Microsoft Graph Security API** when working with **Advanced Query** or **Alert** operations."

### 3. Authentication Description
Updated the authentication field description in the node to mention both Graph-backed resources:
- **Before**: "Select "Defender for Endpoint" for most resources. Select "Microsoft Graph Security API" for Advanced Query (hunting)."
- **After**: "Select "Defender for Endpoint" for most resources. Select "Microsoft Graph Security API" for Advanced Query and Alert operations."

## Verification

✅ **Scope Verification**: Confirmed that only Advanced Query and Alert use Microsoft Graph API in the main Defender node. All other resources (Machine, Vulnerability, Software, Remediation, Investigation, Indicator, Recommendation, Exposure Score, Machine Action) use the legacy Defender for Endpoint API.

✅ **Build**: TypeScript compilation successful
✅ **Lint**: All lint checks passing
✅ **Git**: All changes committed and pushed to fork/feat/migrate-to-graph-api

## Related Issues
Addresses maintainer feedback on PR #59 regarding Graph API migration permission documentation.
