/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export type BulkHostedNumberOrderRequestStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "PROCESSED";

/**
 * Options to pass to fetch a BulkHostedNumberOrderInstance
 */
export interface BulkHostedNumberOrderContextFetchOptions {
  /** Order status can be used for filtering on Hosted Number Order status values. To see a complete list of order statuses, please check \'https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/hosted-number-order-resource#status-values\'. */
  orderStatus?: string;
}

/**
 * Options to pass to create a BulkHostedNumberOrderInstance
 */
export interface BulkHostedNumberOrderListInstanceCreateOptions {
  /**  */
  body?: object;
}

export interface BulkHostedNumberOrderContext {
  /**
   * Fetch a BulkHostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BulkHostedNumberOrderInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance>;
  /**
   * Fetch a BulkHostedNumberOrderInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BulkHostedNumberOrderInstance
   */
  fetch(
    params: BulkHostedNumberOrderContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BulkHostedNumberOrderContextSolution {
  bulkHostingSid: string;
}

export class BulkHostedNumberOrderContextImpl
  implements BulkHostedNumberOrderContext
{
  protected _solution: BulkHostedNumberOrderContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, bulkHostingSid: string) {
    if (!isValidPathParam(bulkHostingSid)) {
      throw new Error("Parameter 'bulkHostingSid' is not valid.");
    }

    this._solution = { bulkHostingSid };
    this._uri = `/HostedNumber/Orders/Bulk/${bulkHostingSid}`;
  }

  fetch(
    params?:
      | BulkHostedNumberOrderContextFetchOptions
      | ((error: Error | null, item?: BulkHostedNumberOrderInstance) => any),
    callback?: (
      error: Error | null,
      item?: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["orderStatus"] !== undefined)
      data["OrderStatus"] = params["orderStatus"];

    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BulkHostedNumberOrderInstance(
          operationVersion,
          payload,
          instance._solution.bulkHostingSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface BulkHostedNumberOrderPayload extends BulkHostedNumberOrderResource {}

interface BulkHostedNumberOrderResource {
  bulk_hosting_sid: string;
  request_status: BulkHostedNumberOrderRequestStatus;
  friendly_name: string;
  notification_email: string;
  date_created: Date;
  date_completed: Date;
  url: string;
  total_count: number;
  results: Array<any>;
}

export class BulkHostedNumberOrderInstance {
  protected _solution: BulkHostedNumberOrderContextSolution;
  protected _context?: BulkHostedNumberOrderContext;

  constructor(
    protected _version: V2,
    payload: BulkHostedNumberOrderResource,
    bulkHostingSid?: string
  ) {
    this.bulkHostingSid = payload.bulk_hosting_sid;
    this.requestStatus = payload.request_status;
    this.friendlyName = payload.friendly_name;
    this.notificationEmail = payload.notification_email;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateCompleted = deserialize.iso8601DateTime(payload.date_completed);
    this.url = payload.url;
    this.totalCount = deserialize.integer(payload.total_count);
    this.results = payload.results;

    this._solution = { bulkHostingSid: bulkHostingSid || this.bulkHostingSid };
  }

  /**
   * A 34 character string that uniquely identifies this BulkHostedNumberOrder.
   */
  bulkHostingSid: string;
  requestStatus: BulkHostedNumberOrderRequestStatus;
  /**
   * A 128 character string that is a human-readable text that describes this resource.
   */
  friendlyName: string;
  /**
   * Email address used for send notifications about this Bulk hosted number request.
   */
  notificationEmail: string;
  /**
   * The date this resource was created, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date that this resource was completed, given as [GMT RFC 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCompleted: Date;
  /**
   * The URL of this BulkHostedNumberOrder resource.
   */
  url: string;
  /**
   * The total count of phone numbers in this Bulk hosting request.
   */
  totalCount: number;
  /**
   * Contains a list of all the individual hosting orders and their information, for this Bulk request. Each result object is grouped by its order status. To see a complete list of order status, please check \'https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/hosted-number-order-resource#status-values\'.
   */
  results: Array<any>;

  private get _proxy(): BulkHostedNumberOrderContext {
    this._context =
      this._context ||
      new BulkHostedNumberOrderContextImpl(
        this._version,
        this._solution.bulkHostingSid
      );
    return this._context;
  }

  /**
   * Fetch a BulkHostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BulkHostedNumberOrderInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance>;
  /**
   * Fetch a BulkHostedNumberOrderInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BulkHostedNumberOrderInstance
   */
  fetch(
    params: BulkHostedNumberOrderContextFetchOptions,
    callback?: (
      error: Error | null,
      item?: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance>;

  fetch(
    params?: any,
    callback?: (
      error: Error | null,
      item?: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      bulkHostingSid: this.bulkHostingSid,
      requestStatus: this.requestStatus,
      friendlyName: this.friendlyName,
      notificationEmail: this.notificationEmail,
      dateCreated: this.dateCreated,
      dateCompleted: this.dateCompleted,
      url: this.url,
      totalCount: this.totalCount,
      results: this.results,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BulkHostedNumberOrderSolution {}

export interface BulkHostedNumberOrderListInstance {
  _version: V2;
  _solution: BulkHostedNumberOrderSolution;
  _uri: string;

  (bulkHostingSid: string): BulkHostedNumberOrderContext;
  get(bulkHostingSid: string): BulkHostedNumberOrderContext;

  /**
   * Create a BulkHostedNumberOrderInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BulkHostedNumberOrderInstance
   */
  create(
    callback?: (
      error: Error | null,
      item?: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance>;
  /**
   * Create a BulkHostedNumberOrderInstance
   *
   * @param params - Body for request
   * @param headers - header params for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BulkHostedNumberOrderInstance
   */
  create(
    params: object,
    headers?: any,
    callback?: (
      error: Error | null,
      item?: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BulkHostedNumberOrderListInstance(
  version: V2
): BulkHostedNumberOrderListInstance {
  const instance = ((bulkHostingSid) =>
    instance.get(bulkHostingSid)) as BulkHostedNumberOrderListInstance;

  instance.get = function get(bulkHostingSid): BulkHostedNumberOrderContext {
    return new BulkHostedNumberOrderContextImpl(version, bulkHostingSid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/HostedNumber/Orders/Bulk`;

  instance.create = function create(
    params?:
      | object
      | ((error: Error | null, items: BulkHostedNumberOrderInstance) => any),
    headers?: any,
    callback?: (
      error: Error | null,
      items: BulkHostedNumberOrderInstance
    ) => any
  ): Promise<BulkHostedNumberOrderInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    data = params;

    if (headers === null || headers === undefined) {
      headers = {};
    }

    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new BulkHostedNumberOrderInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}
