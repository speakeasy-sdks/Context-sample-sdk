/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class SentimentRequest extends SpeakeasyBase {
    /**
     * Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_time" })
    endTime?: string;

    /**
     * Period to group data by. Defaults to day. Options are: day, week, month.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
    period?: string;

    /**
     * Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_time" })
    startTime?: string;

    /**
     * Filter by tenant id.<br />
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tenant_id" })
    tenantId?: string;
}

/**
 * conversation
 */
export class SentimentResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "end_time" })
    endTime: string;

    @SpeakeasyMetadata()
    @Expose({ name: "period" })
    period: string;

    @SpeakeasyMetadata({ elemType: components.Series })
    @Expose({ name: "series" })
    @Type(() => components.Series)
    series: components.Series[];

    @SpeakeasyMetadata()
    @Expose({ name: "start_time" })
    startTime: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;
}

export class SentimentResponse extends SpeakeasyBase {
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
    object?: SentimentResponseBody;
}