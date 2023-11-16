/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class Pagination extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "current_page" })
    currentPage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "next_page" })
    nextPage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "page_count" })
    pageCount: number;

    @SpeakeasyMetadata()
    @Expose({ name: "per_page" })
    perPage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "previous_page" })
    previousPage: number;

    @SpeakeasyMetadata()
    @Expose({ name: "total_records" })
    totalRecords: number;
}
