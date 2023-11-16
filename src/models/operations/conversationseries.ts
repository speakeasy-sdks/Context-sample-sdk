/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ConversationSeriesRequest extends SpeakeasyBase {}

/**
 * conversation
 */
export class ConversationSeriesResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "available" })
    available: string[];
}

export class ConversationSeriesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * conversation
     */
    @SpeakeasyMetadata()
    object?: ConversationSeriesResponseBody;
}
