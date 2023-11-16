/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class ConversationsRequest extends SpeakeasyBase {
    /**
     * Limits returned conversations to those that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" })
    endTime?: string;

    /**
     * Page number of results to return. Defaults to 1.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * Number of results to return per page. Defaults to 20.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
    perPage?: number;

    /**
     * Limits returned conversations to those that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" })
    startTime?: string;

    /**
     * Filter by tenant id.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
    tenantId?: number;
}

/**
 * conversations
 */
export class ConversationsResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: components.Conversation })
    @Expose({ name: "conversations" })
    @Type(() => components.Conversation)
    conversations: components.Conversation[];

    @SpeakeasyMetadata()
    @Expose({ name: "pagination" })
    @Type(() => components.Pagination)
    pagination: components.Pagination;
}

export class ConversationsResponse extends SpeakeasyBase {
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
     * conversations
     */
    @SpeakeasyMetadata()
    object?: ConversationsResponseBody;
}
