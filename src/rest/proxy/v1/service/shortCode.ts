/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Proxy
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { PhoneNumberCapabilities } from "../../../../interfaces";





/**
 * Options to pass to update a ShortCodeInstance
 */
export interface ShortCodeContextUpdateOptions {
  /** Whether the short code should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information. */
  "isReserved"?: boolean;
}

/**
 * Options to pass to create a ShortCodeInstance
 */
export interface ShortCodeListInstanceCreateOptions {
  /** The SID of a Twilio [ShortCode](https://www.twilio.com/en-us/messaging/channels/sms/short-codes) resource that represents the short code you would like to assign to your Proxy Service. */
  "sid": string;
}
/**
 * Options to pass to each
 */
export interface ShortCodeListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ShortCodeListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ShortCodeListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface ShortCodeContext {

  /**
   * Remove a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ShortCodeInstance
   */
  fetch(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>

  /**
   * Update a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ShortCodeInstance
   */
  update(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
  /**
   * Update a ShortCodeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ShortCodeInstance
   */
  update(params: ShortCodeContextUpdateOptions, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ShortCodeContextSolution {
  "serviceSid": string;
  "sid": string;
}

export class ShortCodeContextImpl implements ShortCodeContext {
  protected _solution: ShortCodeContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error('Parameter \'serviceSid\' is not valid.');
    }

    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { serviceSid, sid,  };
    this._uri = `/Services/${serviceSid}/ShortCodes/${sid}`;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new ShortCodeInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: ShortCodeContextUpdateOptions | ((error: Error | null, item?: ShortCodeInstance) => any), callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["isReserved"] !== undefined)
    data["IsReserved"] = serialize.bool(params["isReserved"]);

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ShortCodeInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
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


interface ShortCodePayload extends TwilioResponsePayload {
    short_codes: ShortCodeResource[];
}

interface ShortCodeResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  date_created: Date;
  date_updated: Date;
  short_code: string;
  iso_country: string;
  capabilities: PhoneNumberCapabilities;
  url: string;
  is_reserved: boolean;
}

export class ShortCodeInstance {
  protected _solution: ShortCodeContextSolution;
  protected _context?: ShortCodeContext;

  constructor(protected _version: V1, payload: ShortCodeResource, serviceSid: string, sid?: string) {
    this.sid = (payload.sid);
    this.accountSid = (payload.account_sid);
    this.serviceSid = (payload.service_sid);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.shortCode = (payload.short_code);
    this.isoCountry = (payload.iso_country);
    this.capabilities = (payload.capabilities);
    this.url = (payload.url);
    this.isReserved = (payload.is_reserved);

    this._solution = { serviceSid, sid: sid || this.sid,  };
  }

  /**
   * The unique string that we created to identify the ShortCode resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource.
   */
  accountSid: string;
  /**
   * The SID of the ShortCode resource\'s parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
   */
  serviceSid: string;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
   */
  dateCreated: Date;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
   */
  dateUpdated: Date;
  /**
   * The short code\'s number.
   */
  shortCode: string;
  /**
   * The ISO Country Code for the short code.
   */
  isoCountry: string;
  capabilities: PhoneNumberCapabilities;
  /**
   * The absolute URL of the ShortCode resource.
   */
  url: string;
  /**
   * Whether the short code should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
   */
  isReserved: boolean;

  private get _proxy(): ShortCodeContext {
    this._context = this._context || new ShortCodeContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

    {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ShortCodeInstance
   */
  fetch(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>

    {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ShortCodeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ShortCodeInstance
   */
  update(callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;
  /**
   * Update a ShortCodeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ShortCodeInstance
   */
  update(params: ShortCodeContextUpdateOptions, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;

    update(params?: any, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>
    {
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
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      shortCode: this.shortCode,
      isoCountry: this.isoCountry,
      capabilities: this.capabilities,
      url: this.url,
      isReserved: this.isReserved,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface ShortCodeSolution {
  serviceSid: string;
}

export interface ShortCodeListInstance {
  _version: V1;
  _solution: ShortCodeSolution;
  _uri: string;

  (sid: string, ): ShortCodeContext;
  get(sid: string, ): ShortCodeContext;








  /**
   * Create a ShortCodeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ShortCodeInstance
   */
  create(params: ShortCodeListInstanceCreateOptions, callback?: (error: Error | null, item?: ShortCodeInstance) => any): Promise<ShortCodeInstance>;



  /**
   * Streams ShortCodeInstance records from the API.
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
   * @param { ShortCodeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void): void;
  each(params: ShortCodeListInstanceEachOptions, callback?: (item: ShortCodeInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of ShortCodeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
  /**
   * Lists ShortCodeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ShortCodeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ShortCodeInstance[]) => any): Promise<ShortCodeInstance[]>;
  list(params: ShortCodeListInstanceOptions, callback?: (error: Error | null, items: ShortCodeInstance[]) => any): Promise<ShortCodeInstance[]>;
  /**
   * Retrieve a single page of ShortCodeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ShortCodeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;
  page(params: ShortCodeListInstancePageOptions, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ShortCodeListInstance(version: V1, serviceSid: string): ShortCodeListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error('Parameter \'serviceSid\' is not valid.');
  }

  const instance = ((sid, ) => instance.get(sid, )) as ShortCodeListInstance;

  instance.get = function get(sid, ): ShortCodeContext {
    return new ShortCodeContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid,  };
  instance._uri = `/Services/${serviceSid}/ShortCodes`;

  instance.create = function create(params: ShortCodeListInstanceCreateOptions, callback?: (error: Error | null, items: ShortCodeInstance) => any): Promise<ShortCodeInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["sid"] === null || params["sid"] === undefined) {
      throw new Error('Required parameter "params[\'sid\']" missing.');
    }

    let data: any = {};

    
        
    data["Sid"] = params["sid"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ShortCodeInstance(operationVersion, payload, instance._solution.serviceSid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: ShortCodeListInstancePageOptions | ((error: Error | null, items: ShortCodePage) => any), callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    
    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: instance._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ShortCodePage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: ShortCodePage) => any): Promise<ShortCodePage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new ShortCodePage(instance._version, payload, instance._solution));
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

export class ShortCodePage extends Page<V1, ShortCodePayload, ShortCodeResource, ShortCodeInstance> {
/**
* Initialize the ShortCodePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: ShortCodeSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ShortCodeInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ShortCodeResource): ShortCodeInstance {
    return new ShortCodeInstance(
    this._version,
    payload,
        this._solution.serviceSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

