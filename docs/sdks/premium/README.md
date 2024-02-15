# Premium
(*premium*)

### Available Operations

* [conversation](#conversation) - Returns conversation details
* [conversationSeries](#conversationseries) - Returns suggested topics details
* [conversations](#conversations) - Returns list of conversations
* [estimatedCost](#estimatedcost) - Returns estimated cost details
* [rating](#rating) - Returns rating details
* [sentiment](#sentiment) - Returns sentiment details
* [suggestedTopicConversations](#suggestedtopicconversations) - Returns statistics of selected topic
* [suggestedTopicStatistics](#suggestedtopicstatistics) - Returns a list of conversations matching given topic
* [suggestedTopics](#suggestedtopics) - Returns suggested topics details
* [volume](#volume) - Returns volume details

## conversation

Returns conversation details

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { ConversationRequest } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const id: string = "<value>";

  const res = await sdk.premium.conversation(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ConversationResponse](../../models/operations/conversationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## conversationSeries

Returns suggested topics details

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { ConversationSeriesRequest } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.premium.conversationSeries();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ConversationSeriesResponse](../../models/operations/conversationseriesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## conversations

Returns list of conversations

### Example Usage

```typescript
import { ContextAPI } from "Context-API";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.premium.conversations({});

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ConversationsRequest](../../models/operations/conversationsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ConversationsResponse](../../models/operations/conversationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## estimatedCost

Returns estimated cost details

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { EstimatedCostRequest } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const endTime: string = "<value>";
const period: string = "<value>";
const startTime: string = "<value>";
const tenantId: string = "<value>";

  const res = await sdk.premium.estimatedCost(endTime, period, startTime, tenantId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `endTime`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br />                        |
| `period`                                                                                                                   | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Period to group data by. Defaults to day. Options are: day, week, month.<br />                                             |
| `startTime`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> |
| `tenantId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Filter by tenant id.<br />                                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.EstimatedCostResponse](../../models/operations/estimatedcostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## rating

Returns rating details

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { RatingRequest } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const endTime: string = "<value>";
const period: string = "<value>";
const startTime: string = "<value>";
const tenantId: string = "<value>";

  const res = await sdk.premium.rating(endTime, period, startTime, tenantId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `endTime`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br />                        |
| `period`                                                                                                                   | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Period to group data by. Defaults to day. Options are: day, week, month.<br />                                             |
| `startTime`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> |
| `tenantId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Filter by tenant id.<br />                                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.RatingResponse](../../models/operations/ratingresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## sentiment

Returns sentiment details

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { SentimentRequest } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const endTime: string = "<value>";
const period: string = "<value>";
const startTime: string = "<value>";
const tenantId: string = "<value>";

  const res = await sdk.premium.sentiment(endTime, period, startTime, tenantId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `endTime`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br />                        |
| `period`                                                                                                                   | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Period to group data by. Defaults to day. Options are: day, week, month.<br />                                             |
| `startTime`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> |
| `tenantId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Filter by tenant id.<br />                                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.SentimentResponse](../../models/operations/sentimentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## suggestedTopicConversations

Returns statistics of selected topic

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { SuggestedTopicConversationsRequest } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const id: string = "<value>";

  const res = await sdk.premium.suggestedTopicConversations(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SuggestedTopicConversationsResponse](../../models/operations/suggestedtopicconversationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## suggestedTopicStatistics

Returns a list of conversations matching given topic

### Example Usage

```typescript
import { ContextAPI } from "Context-API";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const res = await sdk.premium.suggestedTopicStatistics({
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.SuggestedTopicStatisticsRequest](../../models/operations/suggestedtopicstatisticsrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.SuggestedTopicStatisticsResponse](../../models/operations/suggestedtopicstatisticsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## suggestedTopics

Returns suggested topics details

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { SuggestedTopicsRequest } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const page: number = 627639;
const perPage: number = 530793;

  const res = await sdk.premium.suggestedTopics(page, perPage);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `page`                                                       | *number*                                                     | :heavy_minus_sign:                                           | Page number of results to return. Defaults to 1.<br />       |
| `perPage`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Number of results to return per page. Defaults to 20.<br />  |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.SuggestedTopicsResponse](../../models/operations/suggestedtopicsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## volume

Returns volume details

### Example Usage

```typescript
import { ContextAPI } from "Context-API";
import { VolumeRequest } from "Context-API/dist/models/operations";

async function run() {
  const sdk = new ContextAPI({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });
const endTime: string = "<value>";
const period: string = "<value>";
const startTime: string = "<value>";
const tenantId: string = "<value>";

  const res = await sdk.premium.volume(endTime, period, startTime, tenantId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `endTime`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br />                        |
| `period`                                                                                                                   | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Period to group data by. Defaults to day. Options are: day, week, month.<br />                                             |
| `startTime`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> |
| `tenantId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Filter by tenant id.<br />                                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.VolumeResponse](../../models/operations/volumeresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
