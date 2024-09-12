/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Sync
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";





/**
 * Options to pass to update a SyncMapPermissionInstance
 */
export interface SyncMapPermissionContextUpdateOptions {
  /** Whether the identity can read the Sync Map and its Items. Default value is `false`. */
  "read": boolean;
  /** Whether the identity can create, update, and delete Items in the Sync Map. Default value is `false`. */
  "write": boolean;
  /** Whether the identity can delete the Sync Map. Default value is `false`. */
  "manage": boolean;
}
/**
 * Options to pass to each
 */
export interface SyncMapPermissionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SyncMapPermissionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SyncMapPermissionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface SyncMapPermissionContext {

  /**
   * Remove a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapPermissionInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>

  /**
   * Update a SyncMapPermissionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapPermissionInstance
   */
  update(params: SyncMapPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapPermissionContextSolution {
  "serviceSid": string;
  "mapSid": string;
  "identity": string;
}

export class SyncMapPermissionContextImpl implements SyncMapPermissionContext {
  protected _solution: SyncMapPermissionContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, mapSid: string, identity: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error('Parameter \'serviceSid\' is not valid.');
    }

    if (!isValidPathParam(mapSid)) {
      throw new Error('Parameter \'mapSid\' is not valid.');
    }

    if (!isValidPathParam(identity)) {
      throw new Error('Parameter \'identity\' is not valid.');
    }

    this._solution = { serviceSid, mapSid, identity,  };
    this._uri = `/Services/${serviceSid}/Maps/${mapSid}/Permissions/${identity}`;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new SyncMapPermissionInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.mapSid, instance._solution.identity));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params: SyncMapPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance> {
      if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["read"] === null || params["read"] === undefined) {
      throw new Error('Required parameter "params[\'read\']" missing.');
    }

    if (params["write"] === null || params["write"] === undefined) {
      throw new Error('Required parameter "params[\'write\']" missing.');
    }

    if (params["manage"] === null || params["manage"] === undefined) {
      throw new Error('Required parameter "params[\'manage\']" missing.');
    }

    let data: any = {};

    
        
    data["Read"] = serialize.bool(params["read"]);
    
    data["Write"] = serialize.bool(params["write"]);
    
    data["Manage"] = serialize.bool(params["manage"]);

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new SyncMapPermissionInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.mapSid, instance._solution.identity));
    

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


interface SyncMapPermissionPayload extends TwilioResponsePayload {
    permissions: SyncMapPermissionResource[];
}

interface SyncMapPermissionResource {
  account_sid: string;
  service_sid: string;
  map_sid: string;
  identity: string;
  read: boolean;
  write: boolean;
  manage: boolean;
  url: string;
}

export class SyncMapPermissionInstance {
  protected _solution: SyncMapPermissionContextSolution;
  protected _context?: SyncMapPermissionContext;

  constructor(protected _version: V1, payload: SyncMapPermissionResource, serviceSid: string, mapSid: string, identity?: string) {
    this.accountSid = (payload.account_sid);
    this.serviceSid = (payload.service_sid);
    this.mapSid = (payload.map_sid);
    this.identity = (payload.identity);
    this.read = (payload.read);
    this.write = (payload.write);
    this.manage = (payload.manage);
    this.url = (payload.url);

    this._solution = { serviceSid, mapSid, identity: identity || this.identity,  };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map Permission resource.
   */
  accountSid: string;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is associated with.
   */
  serviceSid: string;
  /**
   * The SID of the Sync Map to which the Permission applies.
   */
  mapSid: string;
  /**
   * The application-defined string that uniquely identifies the resource\'s User within the Service to an FPA token.
   */
  identity: string;
  /**
   * Whether the identity can read the Sync Map and its Items.
   */
  read: boolean;
  /**
   * Whether the identity can create, update, and delete Items in the Sync Map.
   */
  write: boolean;
  /**
   * Whether the identity can delete the Sync Map.
   */
  manage: boolean;
  /**
   * The absolute URL of the Sync Map Permission resource.
   */
  url: string;

  private get _proxy(): SyncMapPermissionContext {
    this._context = this._context || new SyncMapPermissionContextImpl(this._version, this._solution.serviceSid, this._solution.mapSid, this._solution.identity);
    return this._context;
  }

  /**
   * Remove a SyncMapPermissionInstance
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
   * Fetch a SyncMapPermissionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapPermissionInstance
   */
  fetch(callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>

    {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SyncMapPermissionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapPermissionInstance
   */
  update(params: SyncMapPermissionContextUpdateOptions, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>;

    update(params?: any, callback?: (error: Error | null, item?: SyncMapPermissionInstance) => any): Promise<SyncMapPermissionInstance>
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
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      mapSid: this.mapSid,
      identity: this.identity,
      read: this.read,
      write: this.write,
      manage: this.manage,
      url: this.url,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface SyncMapPermissionSolution {
  serviceSid: string;
  mapSid: string;
}

export interface SyncMapPermissionListInstance {
  _version: V1;
  _solution: SyncMapPermissionSolution;
  _uri: string;

  (identity: string, ): SyncMapPermissionContext;
  get(identity: string, ): SyncMapPermissionContext;









  /**
   * Streams SyncMapPermissionInstance records from the API.
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
   * @param { SyncMapPermissionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): void;
  each(params: SyncMapPermissionListInstanceEachOptions, callback?: (item: SyncMapPermissionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of SyncMapPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
  /**
   * Lists SyncMapPermissionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapPermissionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any): Promise<SyncMapPermissionInstance[]>;
  list(params: SyncMapPermissionListInstanceOptions, callback?: (error: Error | null, items: SyncMapPermissionInstance[]) => any): Promise<SyncMapPermissionInstance[]>;
  /**
   * Retrieve a single page of SyncMapPermissionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapPermissionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;
  page(params: SyncMapPermissionListInstancePageOptions, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SyncMapPermissionListInstance(version: V1, serviceSid: string, mapSid: string): SyncMapPermissionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error('Parameter \'serviceSid\' is not valid.');
  }

  if (!isValidPathParam(mapSid)) {
    throw new Error('Parameter \'mapSid\' is not valid.');
  }

  const instance = ((identity, ) => instance.get(identity, )) as SyncMapPermissionListInstance;

  instance.get = function get(identity, ): SyncMapPermissionContext {
    return new SyncMapPermissionContextImpl(version, serviceSid, mapSid, identity);
  }

  instance._version = version;
  instance._solution = { serviceSid, mapSid,  };
  instance._uri = `/Services/${serviceSid}/Maps/${mapSid}/Permissions`;

  instance.page = function page(params?: SyncMapPermissionListInstancePageOptions | ((error: Error | null, items: SyncMapPermissionPage) => any), callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage> {
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
    
    operationPromise = operationPromise.then(payload => new SyncMapPermissionPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: SyncMapPermissionPage) => any): Promise<SyncMapPermissionPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new SyncMapPermissionPage(instance._version, payload, instance._solution));
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

export class SyncMapPermissionPage extends Page<V1, SyncMapPermissionPayload, SyncMapPermissionResource, SyncMapPermissionInstance> {
/**
* Initialize the SyncMapPermissionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: SyncMapPermissionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SyncMapPermissionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SyncMapPermissionResource): SyncMapPermissionInstance {
    return new SyncMapPermissionInstance(
    this._version,
    payload,
        this._solution.serviceSid,
        this._solution.mapSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

