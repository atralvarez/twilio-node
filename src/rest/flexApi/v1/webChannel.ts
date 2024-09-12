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


export type WebChannelChatStatus = 'inactive';




/**
 * Options to pass to update a WebChannelInstance
 */
export interface WebChannelContextUpdateOptions {
  /**  */
  "chatStatus"?: WebChannelChatStatus;
  /** The post-engagement data. */
  "postEngagementData"?: string;
}

/**
 * Options to pass to create a WebChannelInstance
 */
export interface WebChannelListInstanceCreateOptions {
  /** The SID of the Flex Flow. */
  "flexFlowSid": string;
  /** The chat identity. */
  "identity": string;
  /** The chat participant\\\'s friendly name. */
  "customerFriendlyName": string;
  /** The chat channel\\\'s friendly name. */
  "chatFriendlyName": string;
  /** The chat channel\\\'s unique name. */
  "chatUniqueName"?: string;
  /** The pre-engagement data. */
  "preEngagementData"?: string;
}
/**
 * Options to pass to each
 */
export interface WebChannelListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface WebChannelListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface WebChannelListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface WebChannelContext {

  /**
   * Remove a WebChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a WebChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebChannelInstance
   */
  fetch(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>

  /**
   * Update a WebChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebChannelInstance
   */
  update(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
  /**
   * Update a WebChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebChannelInstance
   */
  update(params: WebChannelContextUpdateOptions, callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WebChannelContextSolution {
  "sid": string;
}

export class WebChannelContextImpl implements WebChannelContext {
  protected _solution: WebChannelContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { sid,  };
    this._uri = `/WebChannels/${sid}`;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new WebChannelInstance(operationVersion, payload, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: WebChannelContextUpdateOptions | ((error: Error | null, item?: WebChannelInstance) => any), callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["chatStatus"] !== undefined)
    data["ChatStatus"] = params["chatStatus"];
    if (params["postEngagementData"] !== undefined)
    data["PostEngagementData"] = params["postEngagementData"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new WebChannelInstance(operationVersion, payload, instance._solution.sid));
    

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


interface WebChannelPayload extends TwilioResponsePayload {
    flex_chat_channels: WebChannelResource[];
}

interface WebChannelResource {
  account_sid: string;
  flex_flow_sid: string;
  sid: string;
  url: string;
  date_created: Date;
  date_updated: Date;
}

export class WebChannelInstance {
  protected _solution: WebChannelContextSolution;
  protected _context?: WebChannelContext;

  constructor(protected _version: V1, payload: WebChannelResource, sid?: string) {
    this.accountSid = (payload.account_sid);
    this.flexFlowSid = (payload.flex_flow_sid);
    this.sid = (payload.sid);
    this.url = (payload.url);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { sid: sid || this.sid,  };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the WebChannel resource and owns this Workflow.
   */
  accountSid: string;
  /**
   * The SID of the Flex Flow.
   */
  flexFlowSid: string;
  /**
   * The unique string that we created to identify the WebChannel resource.
   */
  sid: string;
  /**
   * The absolute URL of the WebChannel resource.
   */
  url: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  private get _proxy(): WebChannelContext {
    this._context = this._context || new WebChannelContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a WebChannelInstance
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
   * Fetch a WebChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebChannelInstance
   */
  fetch(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>

    {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WebChannelInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebChannelInstance
   */
  update(callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;
  /**
   * Update a WebChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebChannelInstance
   */
  update(params: WebChannelContextUpdateOptions, callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;

    update(params?: any, callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>
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
      flexFlowSid: this.flexFlowSid,
      sid: this.sid,
      url: this.url,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface WebChannelSolution {
}

export interface WebChannelListInstance {
  _version: V1;
  _solution: WebChannelSolution;
  _uri: string;

  (sid: string, ): WebChannelContext;
  get(sid: string, ): WebChannelContext;








  /**
   * Create a WebChannelInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebChannelInstance
   */
  create(params: WebChannelListInstanceCreateOptions, callback?: (error: Error | null, item?: WebChannelInstance) => any): Promise<WebChannelInstance>;



  /**
   * Streams WebChannelInstance records from the API.
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
   * @param { WebChannelListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void): void;
  each(params: WebChannelListInstanceEachOptions, callback?: (item: WebChannelInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of WebChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage>;
  /**
   * Lists WebChannelInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebChannelListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: WebChannelInstance[]) => any): Promise<WebChannelInstance[]>;
  list(params: WebChannelListInstanceOptions, callback?: (error: Error | null, items: WebChannelInstance[]) => any): Promise<WebChannelInstance[]>;
  /**
   * Retrieve a single page of WebChannelInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WebChannelListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage>;
  page(params: WebChannelListInstancePageOptions, callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WebChannelListInstance(version: V1): WebChannelListInstance {
  const instance = ((sid, ) => instance.get(sid, )) as WebChannelListInstance;

  instance.get = function get(sid, ): WebChannelContext {
    return new WebChannelContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/WebChannels`;

  instance.create = function create(params: WebChannelListInstanceCreateOptions, callback?: (error: Error | null, items: WebChannelInstance) => any): Promise<WebChannelInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["flexFlowSid"] === null || params["flexFlowSid"] === undefined) {
      throw new Error('Required parameter "params[\'flexFlowSid\']" missing.');
    }

    if (params["identity"] === null || params["identity"] === undefined) {
      throw new Error('Required parameter "params[\'identity\']" missing.');
    }

    if (params["customerFriendlyName"] === null || params["customerFriendlyName"] === undefined) {
      throw new Error('Required parameter "params[\'customerFriendlyName\']" missing.');
    }

    if (params["chatFriendlyName"] === null || params["chatFriendlyName"] === undefined) {
      throw new Error('Required parameter "params[\'chatFriendlyName\']" missing.');
    }

    let data: any = {};

    
        
    data["FlexFlowSid"] = params["flexFlowSid"];
    
    data["Identity"] = params["identity"];
    
    data["CustomerFriendlyName"] = params["customerFriendlyName"];
    
    data["ChatFriendlyName"] = params["chatFriendlyName"];
    if (params["chatUniqueName"] !== undefined)
    data["ChatUniqueName"] = params["chatUniqueName"];
    if (params["preEngagementData"] !== undefined)
    data["PreEngagementData"] = params["preEngagementData"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new WebChannelInstance(operationVersion, payload));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: WebChannelListInstancePageOptions | ((error: Error | null, items: WebChannelPage) => any), callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage> {
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
    
    operationPromise = operationPromise.then(payload => new WebChannelPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: WebChannelPage) => any): Promise<WebChannelPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new WebChannelPage(instance._version, payload, instance._solution));
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

export class WebChannelPage extends Page<V1, WebChannelPayload, WebChannelResource, WebChannelInstance> {
/**
* Initialize the WebChannelPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: WebChannelSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of WebChannelInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: WebChannelResource): WebChannelInstance {
    return new WebChannelInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

