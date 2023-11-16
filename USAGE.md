<!-- Start SDK Example Usage -->
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