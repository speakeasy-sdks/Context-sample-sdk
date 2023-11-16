# Context-API

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/Context-sample-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/Context-sample-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README
<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/Context-sample-sdk
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/Context-sample-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
### Example

```typescript
import { ContextAPI } from "Context-API";
import { ConversationRequest } from "Context-API/dist/models/operations";

(async () => {
    const sdk = new ContextAPI({
        bearer: "",
    });
    const id: string = "string";

    const res = await sdk.premium.conversation(id);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [premium](docs/sdks/premium/README.md)

* [conversation](docs/sdks/premium/README.md#conversation) - Returns conversation details
* [conversationSeries](docs/sdks/premium/README.md#conversationseries) - Returns suggested topics details
* [conversations](docs/sdks/premium/README.md#conversations) - Returns list of conversations
* [estimatedCost](docs/sdks/premium/README.md#estimatedcost) - Returns estimated cost details
* [rating](docs/sdks/premium/README.md#rating) - Returns rating details
* [sentiment](docs/sdks/premium/README.md#sentiment) - Returns sentiment details
* [suggestedTopicConversations](docs/sdks/premium/README.md#suggestedtopicconversations) - Returns statistics of selected topic
* [suggestedTopicStatistics](docs/sdks/premium/README.md#suggestedtopicstatistics) - Returns a list of conversations matching given topic
* [suggestedTopics](docs/sdks/premium/README.md#suggestedtopics) - Returns suggested topics details
* [volume](docs/sdks/premium/README.md#volume) - Returns volume details

### [log](docs/sdks/log/README.md)

* [logConversation](docs/sdks/log/README.md#logconversation) - Ingests a conversation
* [logConversationThread](docs/sdks/log/README.md#logconversationthread) - Ingests or updates a thread
* [logConversationUpsert](docs/sdks/log/README.md#logconversationupsert) - Ingests or updates conversation
<!-- End SDK Available Operations -->

<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { ContextAPI } from "Context-API";
import { ConversationRequest } from "Context-API/dist/models/operations";

(async () => {
    const sdk = new ContextAPI({
        bearer: "",
    });
    const id: string = "string";

    let res;
    try {
        res = await sdk.premium.conversation(id);
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->

<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.context.ai` | None |

#### Example

```typescript
import { ContextAPI } from "Context-API";
import { ConversationRequest } from "Context-API/dist/models/operations";

(async () => {
    const sdk = new ContextAPI({
        serverIdx: 0,
        bearer: "",
    });
    const id: string = "string";

    const res = await sdk.premium.conversation(id);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ContextAPI } from "Context-API";
import { ConversationRequest } from "Context-API/dist/models/operations";

(async () => {
    const sdk = new ContextAPI({
        serverURL: "https://api.context.ai",
        bearer: "",
    });
    const id: string = "string";

    const res = await sdk.premium.conversation(id);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Server Selection -->

<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from Context-API import ContextAPI;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new ContextAPI({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->

<!-- Start Authentication -->

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `bearer`    | http        | HTTP Bearer |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { ContextAPI } from "Context-API";
import { ConversationRequest } from "Context-API/dist/models/operations";

(async () => {
    const sdk = new ContextAPI({
        bearer: "",
    });
    const id: string = "string";

    const res = await sdk.premium.conversation(id);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)