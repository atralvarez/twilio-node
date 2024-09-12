/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
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
import { PluginVersionsListInstance } from "./plugin/pluginVersions";



/**
 * Options to pass to fetch a PluginInstance
 */
export interface PluginContextFetchOptions {
  /** The Flex-Metadata HTTP request header */
  "flexMetadata"?: string;
}

/**
 * Options to pass to update a PluginInstance
 */
export interface PluginContextUpdateOptions {
  /** The Flex-Metadata HTTP request header */
  "flexMetadata"?: string;
  /** The Flex Plugin\\\'s friendly name. */
  "friendlyName"?: string;
  /** A descriptive string that you update to describe the plugin resource. It can be up to 500 characters long */
  "description"?: string;
}

/**
 * Options to pass to create a PluginInstance
 */
export interface PluginListInstanceCreateOptions {
  /** The Flex Plugin\\\'s unique name. */
  "uniqueName": string;
  /** The Flex-Metadata HTTP request header */
  "flexMetadata"?: string;
  /** The Flex Plugin\\\'s friendly name. */
  "friendlyName"?: string;
  /** A descriptive string that you create to describe the plugin resource. It can be up to 500 characters long */
  "description"?: string;
}
/**
 * Options to pass to each
 */
export interface PluginListInstanceEachOptions {
  /** The Flex-Metadata HTTP request header */
  "flexMetadata"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: PluginInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface PluginListInstanceOptions {
  /** The Flex-Metadata HTTP request header */
  "flexMetadata"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface PluginListInstancePageOptions {
  /** The Flex-Metadata HTTP request header */
  "flexMetadata"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface PluginContext {
  pluginVersions: PluginVersionsListInstance;

  /**
   * Fetch a PluginInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  fetch(callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
  /**
   * Fetch a PluginInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  fetch(params: PluginContextFetchOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;

  /**
   * Update a PluginInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  update(callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
  /**
   * Update a PluginInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  update(params: PluginContextUpdateOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PluginContextSolution {
  "sid": string;
}

export class PluginContextImpl implements PluginContext {
  protected _solution: PluginContextSolution;
  protected _uri: string;

  protected _pluginVersions?: PluginVersionsListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { sid,  };
    this._uri = `/PluginService/Plugins/${sid}`;
  }

  get pluginVersions(): PluginVersionsListInstance {
    this._pluginVersions = this._pluginVersions || PluginVersionsListInstance(this._version, this._solution.sid);
    return this._pluginVersions;
  }

  fetch(params?: PluginContextFetchOptions | ((error: Error | null, item?: PluginInstance) => any), callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
    
    

    const headers: any = {};
    if (params["flexMetadata"] !== undefined) headers["Flex-Metadata"] = params["flexMetadata"];

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new PluginInstance(operationVersion, payload, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: PluginContextUpdateOptions | ((error: Error | null, item?: PluginInstance) => any), callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["description"] !== undefined)
    data["Description"] = params["description"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"
    if (params["flexMetadata"] !== undefined) headers["Flex-Metadata"] = params["flexMetadata"];

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new PluginInstance(operationVersion, payload, instance._solution.sid));
    

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


interface PluginPayload extends TwilioResponsePayload {
    plugins: PluginResource[];
}

interface PluginResource {
  sid: string;
  account_sid: string;
  unique_name: string;
  friendly_name: string;
  description: string;
  archived: boolean;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class PluginInstance {
  protected _solution: PluginContextSolution;
  protected _context?: PluginContext;

  constructor(protected _version: V1, payload: PluginResource, sid?: string) {
    this.sid = (payload.sid);
    this.accountSid = (payload.account_sid);
    this.uniqueName = (payload.unique_name);
    this.friendlyName = (payload.friendly_name);
    this.description = (payload.description);
    this.archived = (payload.archived);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = (payload.url);
    this.links = (payload.links);

    this._solution = { sid: sid || this.sid,  };
  }

  /**
   * The unique string that we created to identify the Flex Plugin resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Plugin resource and owns this resource.
   */
  accountSid: string;
  /**
   * The name that uniquely identifies this Flex Plugin resource.
   */
  uniqueName: string;
  /**
   * The friendly name this Flex Plugin resource.
   */
  friendlyName: string;
  /**
   * A descriptive string that you create to describe the plugin resource. It can be up to 500 characters long
   */
  description: string;
  /**
   * Whether the Flex Plugin is archived. The default value is false.
   */
  archived: boolean;
  /**
   * The date and time in GMT-7 when the Flex Plugin was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT-7 when the Flex Plugin was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the Flex Plugin resource.
   */
  url: string;
  links: Record<string, string>;

  private get _proxy(): PluginContext {
    this._context = this._context || new PluginContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a PluginInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  fetch(callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
  /**
   * Fetch a PluginInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  fetch(params: PluginContextFetchOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;

    fetch(params?: any, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>
    {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Update a PluginInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  update(callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;
  /**
   * Update a PluginInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  update(params: PluginContextUpdateOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;

    update(params?: any, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>
    {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the pluginVersions.
   */
  pluginVersions(): PluginVersionsListInstance {
    return this._proxy.pluginVersions;
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
      uniqueName: this.uniqueName,
      friendlyName: this.friendlyName,
      description: this.description,
      archived: this.archived,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface PluginSolution {
}

export interface PluginListInstance {
  _version: V1;
  _solution: PluginSolution;
  _uri: string;

  (sid: string, ): PluginContext;
  get(sid: string, ): PluginContext;






  /**
   * Create a PluginInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PluginInstance
   */
  create(params: PluginListInstanceCreateOptions, callback?: (error: Error | null, item?: PluginInstance) => any): Promise<PluginInstance>;



  /**
   * Streams PluginInstance records from the API.
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
   * @param { PluginListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: PluginInstance, done: (err?: Error) => void) => void): void;
  each(params: PluginListInstanceEachOptions, callback?: (item: PluginInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of PluginInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: PluginPage) => any): Promise<PluginPage>;
  /**
   * Lists PluginInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PluginListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: PluginInstance[]) => any): Promise<PluginInstance[]>;
  list(params: PluginListInstanceOptions, callback?: (error: Error | null, items: PluginInstance[]) => any): Promise<PluginInstance[]>;
  /**
   * Retrieve a single page of PluginInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { PluginListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: PluginPage) => any): Promise<PluginPage>;
  page(params: PluginListInstancePageOptions, callback?: (error: Error | null, items: PluginPage) => any): Promise<PluginPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PluginListInstance(version: V1): PluginListInstance {
  const instance = ((sid, ) => instance.get(sid, )) as PluginListInstance;

  instance.get = function get(sid, ): PluginContext {
    return new PluginContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/PluginService/Plugins`;

  instance.create = function create(params: PluginListInstanceCreateOptions, callback?: (error: Error | null, items: PluginInstance) => any): Promise<PluginInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error('Required parameter "params[\'uniqueName\']" missing.');
    }

    let data: any = {};

    
        
    data["UniqueName"] = params["uniqueName"];
    if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["description"] !== undefined)
    data["Description"] = params["description"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"
    if (params["flexMetadata"] !== undefined) headers["Flex-Metadata"] = params["flexMetadata"];

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new PluginInstance(operationVersion, payload));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: PluginListInstancePageOptions | ((error: Error | null, items: PluginPage) => any), callback?: (error: Error | null, items: PluginPage) => any): Promise<PluginPage> {
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
    if (params["flexMetadata"] !== undefined) headers["Flex-Metadata"] = params["flexMetadata"];

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: instance._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new PluginPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: PluginPage) => any): Promise<PluginPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new PluginPage(instance._version, payload, instance._solution));
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

export class PluginPage extends Page<V1, PluginPayload, PluginResource, PluginInstance> {
/**
* Initialize the PluginPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: PluginSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of PluginInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: PluginResource): PluginInstance {
    return new PluginInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

