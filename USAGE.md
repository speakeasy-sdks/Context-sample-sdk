<!-- Start SDK Example Usage [usage] -->
```typescript
import { ContextAPI } from "Context-API";
import { ConversationRequest } from "Context-API/dist/models/operations";

async function run() {
    const sdk = new ContextAPI({
        bearer: "<YOUR_BEARER_TOKEN_HERE>",
    });
    const id: string = "string";

    const res = await sdk.premium.conversation(id);

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->