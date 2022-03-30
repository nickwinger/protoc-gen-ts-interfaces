// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v0.0.2-alpha.2 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/repository_track_commit.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, Timestamp, proto3, protoInt64} from "@bufbuild/protobuf";

/**
 * RepositoryTrackCommit is the existance of a RepositoryCommit on a RepositoryTrack. Currently its only purpose is
 * for querying whether a RepositoryCommit is on a RepositoryTrack and determining it's sequence id.
 *
 * We reserve field number '3' for id, but RepositoryTrackCommits have no id.
 * string id = 1;
 *
 * @generated from message buf.alpha.registry.v1alpha1.RepositoryTrackCommit
 */
export class RepositoryTrackCommit extends Message<RepositoryTrackCommit> {

    /**
     * immutable
     *
     * @generated from field: google.protobuf.Timestamp create_time = 2;
     */
    createTime?: Timestamp;

    /**
     * immutable
     *
     * @generated from field: string repository_track_id = 4;
     */
    repositoryTrackId = "";

    /**
     * immutable
     *
     * @generated from field: string repository_commit_id = 5;
     */
    repositoryCommitId = "";

    /**
     * unique for repository_track, immutable
     *
     * @generated from field: int64 sequence_id = 6;
     */
    sequenceId = protoInt64.zero;

    constructor(data?: PartialMessage<RepositoryTrackCommit>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.RepositoryTrackCommit";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 2, name: "create_time", kind: "message", T: Timestamp},
        {no: 4, name: "repository_track_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 5, name: "repository_commit_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 6, name: "sequence_id", kind: "scalar", T: 3 /* ScalarType.INT64 */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RepositoryTrackCommit {
        return new RepositoryTrackCommit().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RepositoryTrackCommit {
        return new RepositoryTrackCommit().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RepositoryTrackCommit {
        return new RepositoryTrackCommit().fromJsonString(jsonString, options);
    }

    static equals(a: RepositoryTrackCommit | PlainMessage<RepositoryTrackCommit> | undefined, b: RepositoryTrackCommit | PlainMessage<RepositoryTrackCommit> | undefined): boolean {
        return proto3.util.equals(RepositoryTrackCommit, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GetRepositoryTrackCommitByRepositoryCommitRequest
 */
export class GetRepositoryTrackCommitByRepositoryCommitRequest extends Message<GetRepositoryTrackCommitByRepositoryCommitRequest> {

    /**
     * @generated from field: string repository_track_id = 1;
     */
    repositoryTrackId = "";

    /**
     * @generated from field: string repository_commit_id = 2;
     */
    repositoryCommitId = "";

    constructor(data?: PartialMessage<GetRepositoryTrackCommitByRepositoryCommitRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GetRepositoryTrackCommitByRepositoryCommitRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repository_track_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "repository_commit_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRepositoryTrackCommitByRepositoryCommitRequest {
        return new GetRepositoryTrackCommitByRepositoryCommitRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRepositoryTrackCommitByRepositoryCommitRequest {
        return new GetRepositoryTrackCommitByRepositoryCommitRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRepositoryTrackCommitByRepositoryCommitRequest {
        return new GetRepositoryTrackCommitByRepositoryCommitRequest().fromJsonString(jsonString, options);
    }

    static equals(a: GetRepositoryTrackCommitByRepositoryCommitRequest | PlainMessage<GetRepositoryTrackCommitByRepositoryCommitRequest> | undefined, b: GetRepositoryTrackCommitByRepositoryCommitRequest | PlainMessage<GetRepositoryTrackCommitByRepositoryCommitRequest> | undefined): boolean {
        return proto3.util.equals(GetRepositoryTrackCommitByRepositoryCommitRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GetRepositoryTrackCommitByRepositoryCommitResponse
 */
export class GetRepositoryTrackCommitByRepositoryCommitResponse extends Message<GetRepositoryTrackCommitByRepositoryCommitResponse> {

    /**
     * @generated from field: buf.alpha.registry.v1alpha1.RepositoryTrackCommit repository_track_commit = 1;
     */
    repositoryTrackCommit?: RepositoryTrackCommit;

    constructor(data?: PartialMessage<GetRepositoryTrackCommitByRepositoryCommitResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GetRepositoryTrackCommitByRepositoryCommitResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repository_track_commit", kind: "message", T: RepositoryTrackCommit},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRepositoryTrackCommitByRepositoryCommitResponse {
        return new GetRepositoryTrackCommitByRepositoryCommitResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRepositoryTrackCommitByRepositoryCommitResponse {
        return new GetRepositoryTrackCommitByRepositoryCommitResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRepositoryTrackCommitByRepositoryCommitResponse {
        return new GetRepositoryTrackCommitByRepositoryCommitResponse().fromJsonString(jsonString, options);
    }

    static equals(a: GetRepositoryTrackCommitByRepositoryCommitResponse | PlainMessage<GetRepositoryTrackCommitByRepositoryCommitResponse> | undefined, b: GetRepositoryTrackCommitByRepositoryCommitResponse | PlainMessage<GetRepositoryTrackCommitByRepositoryCommitResponse> | undefined): boolean {
        return proto3.util.equals(GetRepositoryTrackCommitByRepositoryCommitResponse, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryTrackCommitsByRepositoryTrackRequest
 */
export class ListRepositoryTrackCommitsByRepositoryTrackRequest extends Message<ListRepositoryTrackCommitsByRepositoryTrackRequest> {

    /**
     * @generated from field: string repository_track_id = 1;
     */
    repositoryTrackId = "";

    /**
     * @generated from field: uint32 page_size = 2;
     */
    pageSize = 0;

    /**
     * @generated from field: string page_token = 3;
     */
    pageToken = "";

    /**
     * @generated from field: bool reverse = 4;
     */
    reverse = false;

    constructor(data?: PartialMessage<ListRepositoryTrackCommitsByRepositoryTrackRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.ListRepositoryTrackCommitsByRepositoryTrackRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repository_track_id", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */},
        {no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "reverse", kind: "scalar", T: 8 /* ScalarType.BOOL */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRepositoryTrackCommitsByRepositoryTrackRequest {
        return new ListRepositoryTrackCommitsByRepositoryTrackRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRepositoryTrackCommitsByRepositoryTrackRequest {
        return new ListRepositoryTrackCommitsByRepositoryTrackRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRepositoryTrackCommitsByRepositoryTrackRequest {
        return new ListRepositoryTrackCommitsByRepositoryTrackRequest().fromJsonString(jsonString, options);
    }

    static equals(a: ListRepositoryTrackCommitsByRepositoryTrackRequest | PlainMessage<ListRepositoryTrackCommitsByRepositoryTrackRequest> | undefined, b: ListRepositoryTrackCommitsByRepositoryTrackRequest | PlainMessage<ListRepositoryTrackCommitsByRepositoryTrackRequest> | undefined): boolean {
        return proto3.util.equals(ListRepositoryTrackCommitsByRepositoryTrackRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryTrackCommitsByRepositoryTrackResponse
 */
export class ListRepositoryTrackCommitsByRepositoryTrackResponse extends Message<ListRepositoryTrackCommitsByRepositoryTrackResponse> {

    /**
     * @generated from field: repeated buf.alpha.registry.v1alpha1.RepositoryTrackCommit repository_track_commits = 1;
     */
    repositoryTrackCommits: RepositoryTrackCommit[] = [];

    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken = "";

    constructor(data?: PartialMessage<ListRepositoryTrackCommitsByRepositoryTrackResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.ListRepositoryTrackCommitsByRepositoryTrackResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repository_track_commits", kind: "message", T: RepositoryTrackCommit, repeated: true},
        {no: 2, name: "next_page_token", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRepositoryTrackCommitsByRepositoryTrackResponse {
        return new ListRepositoryTrackCommitsByRepositoryTrackResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRepositoryTrackCommitsByRepositoryTrackResponse {
        return new ListRepositoryTrackCommitsByRepositoryTrackResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRepositoryTrackCommitsByRepositoryTrackResponse {
        return new ListRepositoryTrackCommitsByRepositoryTrackResponse().fromJsonString(jsonString, options);
    }

    static equals(a: ListRepositoryTrackCommitsByRepositoryTrackResponse | PlainMessage<ListRepositoryTrackCommitsByRepositoryTrackResponse> | undefined, b: ListRepositoryTrackCommitsByRepositoryTrackResponse | PlainMessage<ListRepositoryTrackCommitsByRepositoryTrackResponse> | undefined): boolean {
        return proto3.util.equals(ListRepositoryTrackCommitsByRepositoryTrackResponse, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GetRepositoryTrackCommitByReferenceRequest
 */
export class GetRepositoryTrackCommitByReferenceRequest extends Message<GetRepositoryTrackCommitByReferenceRequest> {

    /**
     * @generated from field: string repository_owner = 1;
     */
    repositoryOwner = "";

    /**
     * @generated from field: string repository_name = 2;
     */
    repositoryName = "";

    /**
     * @generated from field: string track = 3;
     */
    track = "";

    /**
     * @generated from field: string reference = 4;
     */
    reference = "";

    constructor(data?: PartialMessage<GetRepositoryTrackCommitByReferenceRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GetRepositoryTrackCommitByReferenceRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repository_owner", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 2, name: "repository_name", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 3, name: "track", kind: "scalar", T: 9 /* ScalarType.STRING */},
        {no: 4, name: "reference", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRepositoryTrackCommitByReferenceRequest {
        return new GetRepositoryTrackCommitByReferenceRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRepositoryTrackCommitByReferenceRequest {
        return new GetRepositoryTrackCommitByReferenceRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRepositoryTrackCommitByReferenceRequest {
        return new GetRepositoryTrackCommitByReferenceRequest().fromJsonString(jsonString, options);
    }

    static equals(a: GetRepositoryTrackCommitByReferenceRequest | PlainMessage<GetRepositoryTrackCommitByReferenceRequest> | undefined, b: GetRepositoryTrackCommitByReferenceRequest | PlainMessage<GetRepositoryTrackCommitByReferenceRequest> | undefined): boolean {
        return proto3.util.equals(GetRepositoryTrackCommitByReferenceRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GetRepositoryTrackCommitByReferenceResponse
 */
export class GetRepositoryTrackCommitByReferenceResponse extends Message<GetRepositoryTrackCommitByReferenceResponse> {

    /**
     * @generated from field: buf.alpha.registry.v1alpha1.RepositoryTrackCommit repository_track_commit = 1;
     */
    repositoryTrackCommit?: RepositoryTrackCommit;

    constructor(data?: PartialMessage<GetRepositoryTrackCommitByReferenceResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GetRepositoryTrackCommitByReferenceResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "repository_track_commit", kind: "message", T: RepositoryTrackCommit},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRepositoryTrackCommitByReferenceResponse {
        return new GetRepositoryTrackCommitByReferenceResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRepositoryTrackCommitByReferenceResponse {
        return new GetRepositoryTrackCommitByReferenceResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRepositoryTrackCommitByReferenceResponse {
        return new GetRepositoryTrackCommitByReferenceResponse().fromJsonString(jsonString, options);
    }

    static equals(a: GetRepositoryTrackCommitByReferenceResponse | PlainMessage<GetRepositoryTrackCommitByReferenceResponse> | undefined, b: GetRepositoryTrackCommitByReferenceResponse | PlainMessage<GetRepositoryTrackCommitByReferenceResponse> | undefined): boolean {
        return proto3.util.equals(GetRepositoryTrackCommitByReferenceResponse, a, b);
    }

}


