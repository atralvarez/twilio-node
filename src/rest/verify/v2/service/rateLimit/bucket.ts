/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to update a BucketInstance
 */
export interface BucketContextUpdateOptions {
  /** Maximum number of requests permitted in during the interval. */
  max?: number;
  /** Number of seconds that the rate limit will be enforced over. */
  interval?: number;
}

/**
 * Options to pass to create a BucketInstance
 */
export interface BucketListInstanceCreateOptions {
  /** Maximum number of requests permitted in during the interval. */
  max: number;
  /** Number of seconds that the rate limit will be enforced over. */
  interval: number;
}
/**
 * Options to pass to each
 */
export interface BucketListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: BucketInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface BucketListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface BucketListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface BucketContext {
  /**
   * Remove a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;

  /**
   * Update a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  update(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;
  /**
   * Update a BucketInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  update(
    params: BucketContextUpdateOptions,
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface BucketContextSolution {
  serviceSid: string;
  rateLimitSid: string;
  sid: string;
}

export class BucketContextImpl implements BucketContext {
  protected _solution: BucketContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2,
    serviceSid: string,
    rateLimitSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(rateLimitSid)) {
      throw new Error("Parameter 'rateLimitSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, rateLimitSid, sid };
    this._uri = `/Services/${serviceSid}/RateLimits/${rateLimitSid}/Buckets/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BucketInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.rateLimitSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | BucketContextUpdateOptions
      | ((error: Error | null, item?: BucketInstance) => any),
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["max"] !== undefined) data["Max"] = params["max"];
    if (params["interval"] !== undefined) data["Interval"] = params["interval"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BucketInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.rateLimitSid,
          instance._solution.sid
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

interface BucketPayload extends TwilioResponsePayload {
  buckets: BucketResource[];
}

interface BucketResource {
  sid: string;
  rate_limit_sid: string;
  service_sid: string;
  account_sid: string;
  max: number;
  interval: number;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class BucketInstance {
  protected _solution: BucketContextSolution;
  protected _context?: BucketContext;

  constructor(
    protected _version: V2,
    payload: BucketResource,
    serviceSid: string,
    rateLimitSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.rateLimitSid = payload.rate_limit_sid;
    this.serviceSid = payload.service_sid;
    this.accountSid = payload.account_sid;
    this.max = deserialize.integer(payload.max);
    this.interval = deserialize.integer(payload.interval);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, rateLimitSid, sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this Bucket.
   */
  sid: string;
  /**
   * The Twilio-provided string that uniquely identifies the Rate Limit resource.
   */
  rateLimitSid: string;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
   */
  serviceSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Rate Limit resource.
   */
  accountSid: string;
  /**
   * Maximum number of requests permitted in during the interval.
   */
  max: number;
  /**
   * Number of seconds that the rate limit will be enforced over.
   */
  interval: number;
  /**
   * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The URL of this resource.
   */
  url: string;

  private get _proxy(): BucketContext {
    this._context =
      this._context ||
      new BucketContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.rateLimitSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  fetch(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a BucketInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  update(
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;
  /**
   * Update a BucketInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  update(
    params: BucketContextUpdateOptions,
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      rateLimitSid: this.rateLimitSid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      max: this.max,
      interval: this.interval,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface BucketSolution {
  serviceSid: string;
  rateLimitSid: string;
}

export interface BucketListInstance {
  _version: V2;
  _solution: BucketSolution;
  _uri: string;

  (sid: string): BucketContext;
  get(sid: string): BucketContext;

  /**
   * Create a BucketInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BucketInstance
   */
  create(
    params: BucketListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BucketInstance) => any
  ): Promise<BucketInstance>;

  /**
   * Streams BucketInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BucketListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: BucketInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: BucketListInstanceEachOptions,
    callback?: (item: BucketInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of BucketInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BucketPage) => any
  ): Promise<BucketPage>;
  /**
   * Lists BucketInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BucketListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: BucketInstance[]) => any
  ): Promise<BucketInstance[]>;
  list(
    params: BucketListInstanceOptions,
    callback?: (error: Error | null, items: BucketInstance[]) => any
  ): Promise<BucketInstance[]>;
  /**
   * Retrieve a single page of BucketInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { BucketListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: BucketPage) => any
  ): Promise<BucketPage>;
  page(
    params: BucketListInstancePageOptions,
    callback?: (error: Error | null, items: BucketPage) => any
  ): Promise<BucketPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BucketListInstance(
  version: V2,
  serviceSid: string,
  rateLimitSid: string
): BucketListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(rateLimitSid)) {
    throw new Error("Parameter 'rateLimitSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as BucketListInstance;

  instance.get = function get(sid): BucketContext {
    return new BucketContextImpl(version, serviceSid, rateLimitSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, rateLimitSid };
  instance._uri = `/Services/${serviceSid}/RateLimits/${rateLimitSid}/Buckets`;

  instance.create = function create(
    params: BucketListInstanceCreateOptions,
    callback?: (error: Error | null, items: BucketInstance) => any
  ): Promise<BucketInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["max"] === null || params["max"] === undefined) {
      throw new Error("Required parameter \"params['max']\" missing.");
    }

    if (params["interval"] === null || params["interval"] === undefined) {
      throw new Error("Required parameter \"params['interval']\" missing.");
    }

    let data: any = {};

    data["Max"] = params["max"];

    data["Interval"] = params["interval"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BucketInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.rateLimitSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | BucketListInstancePageOptions
      | ((error: Error | null, items: BucketPage) => any),
    callback?: (error: Error | null, items: BucketPage) => any
  ): Promise<BucketPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new BucketPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: BucketPage) => any
  ): Promise<BucketPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new BucketPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
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

export class BucketPage extends Page<
  V2,
  BucketPayload,
  BucketResource,
  BucketInstance
> {
  /**
   * Initialize the BucketPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: BucketSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of BucketInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: BucketResource): BucketInstance {
    return new BucketInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.rateLimitSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
