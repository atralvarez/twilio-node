/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import DeployedDevices from "../../DeployedDevices";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";





/**
 * Options to pass to update a DeploymentInstance
 */
export interface DeploymentContextUpdateOptions {
  /** Provides a human readable descriptive text for this Deployment, up to 64 characters long */
  "friendlyName"?: string;
  /** Provides the unique string identifier of the Twilio Sync service instance that will be linked to and accessible by this Deployment. */
  "syncServiceSid"?: string;
}

/**
 * Options to pass to create a DeploymentInstance
 */
export interface DeploymentListInstanceCreateOptions {
  /** Provides a human readable descriptive text for this Deployment, up to 256 characters long. */
  "friendlyName"?: string;
  /** Provides the unique string identifier of the Twilio Sync service instance that will be linked to and accessible by this Deployment. */
  "syncServiceSid"?: string;
}
/**
 * Options to pass to each
 */
export interface DeploymentListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface DeploymentListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DeploymentListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface DeploymentContext {

  /**
   * Remove a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>

  /**
   * Update a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  update(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
  /**
   * Update a DeploymentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  update(params: DeploymentContextUpdateOptions, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeploymentContextSolution {
  "fleetSid": string;
  "sid": string;
}

export class DeploymentContextImpl implements DeploymentContext {
  protected _solution: DeploymentContextSolution;
  protected _uri: string;


  constructor(protected _version: DeployedDevices, fleetSid: string, sid: string) {
    if (!isValidPathParam(fleetSid)) {
      throw new Error('Parameter \'fleetSid\' is not valid.');
    }

    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { fleetSid, sid,  };
    this._uri = `/Fleets/${fleetSid}/Deployments/${sid}`;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new DeploymentInstance(operationVersion, payload, instance._solution.fleetSid, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: DeploymentContextUpdateOptions | ((error: Error | null, item?: DeploymentInstance) => any), callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["syncServiceSid"] !== undefined)
    data["SyncServiceSid"] = params["syncServiceSid"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new DeploymentInstance(operationVersion, payload, instance._solution.fleetSid, instance._solution.sid));
    

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


interface DeploymentPayload extends TwilioResponsePayload {
    deployments: DeploymentResource[];
}

interface DeploymentResource {
  sid: string;
  url: string;
  friendly_name: string;
  fleet_sid: string;
  account_sid: string;
  sync_service_sid: string;
  date_created: Date;
  date_updated: Date;
}

export class DeploymentInstance {
  protected _solution: DeploymentContextSolution;
  protected _context?: DeploymentContext;

  constructor(protected _version: DeployedDevices, payload: DeploymentResource, fleetSid: string, sid?: string) {
    this.sid = (payload.sid);
    this.url = (payload.url);
    this.friendlyName = (payload.friendly_name);
    this.fleetSid = (payload.fleet_sid);
    this.accountSid = (payload.account_sid);
    this.syncServiceSid = (payload.sync_service_sid);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { fleetSid, sid: sid || this.sid,  };
  }

  /**
   * Contains a 34 character string that uniquely identifies this Deployment resource.
   */
  sid: string;
  /**
   * Contains an absolute URL for this Deployment resource.
   */
  url: string;
  /**
   * Contains a human readable descriptive text for this Deployment, up to 64 characters long
   */
  friendlyName: string;
  /**
   * Specifies the unique string identifier of the Fleet that the given Deployment belongs to.
   */
  fleetSid: string;
  /**
   * Specifies the unique string identifier of the Account responsible for this Deployment.
   */
  accountSid: string;
  /**
   * Specifies the unique string identifier of the Twilio Sync service instance linked to and accessible by this Deployment.
   */
  syncServiceSid: string;
  /**
   * Specifies the date this Deployment was created, given in UTC ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * Specifies the date this Deployment was last updated, given in UTC ISO 8601 format.
   */
  dateUpdated: Date;

  private get _proxy(): DeploymentContext {
    this._context = this._context || new DeploymentContextImpl(this._version, this._solution.fleetSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a DeploymentInstance
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
   * Fetch a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>

    {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  update(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
  /**
   * Update a DeploymentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  update(params: DeploymentContextUpdateOptions, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;

    update(params?: any, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>
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
      url: this.url,
      friendlyName: this.friendlyName,
      fleetSid: this.fleetSid,
      accountSid: this.accountSid,
      syncServiceSid: this.syncServiceSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface DeploymentSolution {
  fleetSid: string;
}

export interface DeploymentListInstance {
  _version: DeployedDevices;
  _solution: DeploymentSolution;
  _uri: string;

  (sid: string, ): DeploymentContext;
  get(sid: string, ): DeploymentContext;








  /**
   * Create a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  create(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
  /**
   * Create a DeploymentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  create(params: DeploymentListInstanceCreateOptions, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;



  /**
   * Streams DeploymentInstance records from the API.
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
   * @param { DeploymentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
  each(params: DeploymentListInstanceEachOptions, callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
  /**
   * Lists DeploymentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeploymentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
  list(params: DeploymentListInstanceOptions, callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
  /**
   * Retrieve a single page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeploymentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
  page(params: DeploymentListInstancePageOptions, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DeploymentListInstance(version: DeployedDevices, fleetSid: string): DeploymentListInstance {
  if (!isValidPathParam(fleetSid)) {
    throw new Error('Parameter \'fleetSid\' is not valid.');
  }

  const instance = ((sid, ) => instance.get(sid, )) as DeploymentListInstance;

  instance.get = function get(sid, ): DeploymentContext {
    return new DeploymentContextImpl(version, fleetSid, sid);
  }

  instance._version = version;
  instance._solution = { fleetSid,  };
  instance._uri = `/Fleets/${fleetSid}/Deployments`;

  instance.create = function create(params?: DeploymentListInstanceCreateOptions | ((error: Error | null, items: DeploymentInstance) => any), callback?: (error: Error | null, items: DeploymentInstance) => any): Promise<DeploymentInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["syncServiceSid"] !== undefined)
    data["SyncServiceSid"] = params["syncServiceSid"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new DeploymentInstance(operationVersion, payload, instance._solution.fleetSid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: DeploymentListInstancePageOptions | ((error: Error | null, items: DeploymentPage) => any), callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage> {
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
    
    operationPromise = operationPromise.then(payload => new DeploymentPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new DeploymentPage(instance._version, payload, instance._solution));
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

export class DeploymentPage extends Page<DeployedDevices, DeploymentPayload, DeploymentResource, DeploymentInstance> {
/**
* Initialize the DeploymentPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: DeployedDevices, response: Response<string>, solution: DeploymentSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of DeploymentInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: DeploymentResource): DeploymentInstance {
    return new DeploymentInstance(
    this._version,
    payload,
        this._solution.fleetSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

