/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Wireless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";


export type UsageRecordGranularity = 'hourly'|'daily'|'all';

/**
 * Options to pass to each
 */
export interface UsageRecordListInstanceEachOptions {
  /** Only include usage that has occurred on or before this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). */
  "end"?: Date;
  /** Only include usage that has occurred on or after this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). */
  "start"?: Date;
  /** How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. A value of `all` returns one Usage Record that describes the usage for the entire period. */
  "granularity"?: UsageRecordGranularity;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface UsageRecordListInstanceOptions {
  /** Only include usage that has occurred on or before this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). */
  "end"?: Date;
  /** Only include usage that has occurred on or after this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). */
  "start"?: Date;
  /** How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. A value of `all` returns one Usage Record that describes the usage for the entire period. */
  "granularity"?: UsageRecordGranularity;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface UsageRecordListInstancePageOptions {
  /** Only include usage that has occurred on or before this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). */
  "end"?: Date;
  /** Only include usage that has occurred on or after this date. Format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). */
  "start"?: Date;
  /** How to summarize the usage by time. Can be: `daily`, `hourly`, or `all`. A value of `all` returns one Usage Record that describes the usage for the entire period. */
  "granularity"?: UsageRecordGranularity;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}



export interface UsageRecordSolution {
}

export interface UsageRecordListInstance {
  _version: V1;
  _solution: UsageRecordSolution;
  _uri: string;




  /**
   * Streams UsageRecordInstance records from the API.
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
   * @param { UsageRecordListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void): void;
  each(params: UsageRecordListInstanceEachOptions, callback?: (item: UsageRecordInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
  /**
   * Lists UsageRecordInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UsageRecordListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: UsageRecordInstance[]) => any): Promise<UsageRecordInstance[]>;
  list(params: UsageRecordListInstanceOptions, callback?: (error: Error | null, items: UsageRecordInstance[]) => any): Promise<UsageRecordInstance[]>;
  /**
   * Retrieve a single page of UsageRecordInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UsageRecordListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;
  page(params: UsageRecordListInstancePageOptions, callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UsageRecordListInstance(version: V1): UsageRecordListInstance {
  const instance = {} as UsageRecordListInstance;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/UsageRecords`;

  instance.page = function page(params?: UsageRecordListInstancePageOptions | ((error: Error | null, items: UsageRecordPage) => any), callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["end"] !== undefined)
    data["End"] = serialize.iso8601DateTime(params["end"]);
    if (params["start"] !== undefined)
    data["Start"] = serialize.iso8601DateTime(params["start"]);
    if (params["granularity"] !== undefined)
    data["Granularity"] = params["granularity"];
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    
    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: instance._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new UsageRecordPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: UsageRecordPage) => any): Promise<UsageRecordPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new UsageRecordPage(instance._version, payload, instance._solution));
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  }


  instance.toJSON = function toJSON() {
    return instance._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(instance.toJSON(), options);
  }

  return instance;
}

interface UsageRecordPayload extends TwilioResponsePayload {
    usage_records: UsageRecordResource[];
}

interface UsageRecordResource {
  account_sid: string;
  period: any;
  commands: any;
  data: any;
}

export class UsageRecordInstance {

  constructor(protected _version: V1, payload: UsageRecordResource) {
    this.accountSid = (payload.account_sid);
    this.period = (payload.period);
    this.commands = (payload.commands);
    this.data = (payload.data);

  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AccountUsageRecord resource.
   */
  accountSid: string;
  /**
   * The time period for which usage is reported. Contains `start` and `end` properties that describe the period using GMT date-time values specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
   */
  period: any;
  /**
   * An object that describes the aggregated Commands usage for all SIMs during the specified period. See [Commands Usage Object](https://www.twilio.com/docs/iot/wireless/api/account-usagerecord-resource#commands-usage-object).
   */
  commands: any;
  /**
   * An object that describes the aggregated Data usage for all SIMs over the period. See [Data Usage Object](https://www.twilio.com/docs/iot/wireless/api/account-usagerecord-resource#data-usage-object).
   */
  data: any;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      period: this.period,
      commands: this.commands,
      data: this.data,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class UsageRecordPage extends Page<V1, UsageRecordPayload, UsageRecordResource, UsageRecordInstance> {
/**
* Initialize the UsageRecordPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: UsageRecordSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of UsageRecordInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: UsageRecordResource): UsageRecordInstance {
    return new UsageRecordInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

