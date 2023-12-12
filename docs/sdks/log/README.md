# Log
(*log*)

### Available Operations

* [logConversation](#logconversation) - Ingests a conversation
* [logConversationThread](#logconversationthread) - Ingests or updates a thread
* [logConversationUpsert](#logconversationupsert) - Ingests or updates conversation

## logConversation

Ingests a conversation

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import {
  ConversationParams,
  Input,
  MessageParams,
  MessageParamsRole,
  MessageParamsType,
  Rating,
} from "Context-API/dist/models/components";
import { LogConversationRequest, LogConversationRequestBody } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const requestBody: LogConversationRequestBody = {
  conversation: {
    messages: [
      {
        input: {},
        metadata: {
          "key": "string",
        },
      },
    ],
    metadata: {
      "key": "string",
    },
  },
};

  const res = await sdk.log.logConversation(requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                  | [operations.LogConversationRequestBody](../../models/operations/logconversationrequestbody.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.LogConversationResponse](../../models/operations/logconversationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## logConversationThread

Ingests or updates a thread

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { Input, MessageParams, MessageParamsRole, MessageParamsType, Rating, ThreadParams } from "Context-API/dist/models/components";
import { LogConversationThreadRequest, LogConversationThreadRequestBody } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const requestBody: LogConversationThreadRequestBody = {
  conversation: {
    messages: [
      {
        input: {},
        metadata: {
          "key": "string",
        },
      },
    ],
    metadata: {
      "key": "string",
    },
  },
};

  const res = await sdk.log.logConversationThread(requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                              | [operations.LogConversationThreadRequestBody](../../models/operations/logconversationthreadrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.LogConversationThreadResponse](../../models/operations/logconversationthreadresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## logConversationUpsert

Ingests or updates conversation

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import {
  ConversationParams,
  Input,
  MessageParams,
  MessageParamsRole,
  MessageParamsType,
  Rating,
} from "Context-API/dist/models/components";
import { LogConversationUpsertRequest, LogConversationUpsertRequestBody } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const requestBody: LogConversationUpsertRequestBody = {
  conversation: {
    messages: [
      {
        input: {},
        metadata: {
          "key": "string",
        },
      },
    ],
    metadata: {
      "key": "string",
    },
  },
};

  const res = await sdk.log.logConversationUpsert(requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `requestBody`                                                                                              | [operations.LogConversationUpsertRequestBody](../../models/operations/logconversationupsertrequestbody.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.LogConversationUpsertResponse](../../models/operations/logconversationupsertresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
