/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");




/**
 * Options to pass to create a DeploymentInstance
 *
 * @property { string } [buildSid] The SID of the Build for the Deployment.
 */
export interface DeploymentListInstanceCreateOptions {
  'buildSid'?: string;
}
/**
 * Options to pass to each
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface DeploymentListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface DeploymentListInstanceOptions {
  pageSize?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface DeploymentListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface DeploymentContext {


  /**
   * Fetch a DeploymentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeploymentContextSolution {
  'serviceSid'?: string;
  'environmentSid'?: string;
  'sid'?: string;
}

export class DeploymentContextImpl implements DeploymentContext {
  protected _solution: DeploymentContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, environmentSid: string, sid: string) {
    this._solution = { serviceSid, environmentSid, sid };
    this._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Deployments/${sid}`;
  }

  fetch(callback?: any): Promise<DeploymentInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new DeploymentInstance(operationVersion, payload, this._solution.serviceSid, this._solution.environmentSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface DeploymentPayload extends DeploymentResource, Page.TwilioResponsePayload {
}

interface DeploymentResource {
  sid?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  environment_sid?: string | null;
  build_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class DeploymentInstance {
  protected _solution: DeploymentContextSolution;
  protected _context?: DeploymentContext;

  constructor(protected _version: V1, payload: DeploymentPayload, serviceSid: string, environmentSid: string, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.environmentSid = payload.environment_sid;
    this.buildSid = payload.build_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, environmentSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the Deployment resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the Deployment resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Service that the Deployment resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The SID of the Environment for the Deployment
   */
  environmentSid?: string | null;
  /**
   * The SID of the Build for the deployment
   */
  buildSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the Deployment resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the Deployment resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Deployment resource
   */
  url?: string | null;

  private get _proxy(): DeploymentContext {
    this._context = this._context || new DeploymentContextImpl(this._version, this._solution.serviceSid, this._solution.environmentSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a DeploymentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  fetch(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>
     {
    return this._proxy.fetch(callback);
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
      environmentSid: this.environmentSid, 
      buildSid: this.buildSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface DeploymentListInstance {
  (sid: string): DeploymentContext;
  get(sid: string): DeploymentContext;


  /**
   * Create a DeploymentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  create(callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
  /**
   * Create a DeploymentInstance
   *
   * @param { DeploymentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DeploymentInstance
   */
  create(params: DeploymentListInstanceCreateOptions, callback?: (error: Error | null, item?: DeploymentInstance) => any): Promise<DeploymentInstance>;
  create(params?: any, callback?: any): Promise<DeploymentInstance>



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
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
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
  each(params?: DeploymentListInstanceEachOptions, callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
  /**
   * Retrieve a single target page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
  getPage(params?: any, callback?: any): Promise<DeploymentPage>;
  /**
   * Lists DeploymentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
  /**
   * Lists DeploymentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeploymentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: DeploymentListInstanceOptions, callback?: (error: Error | null, items: DeploymentInstance[]) => any): Promise<DeploymentInstance[]>;
  list(params?: any, callback?: any): Promise<DeploymentInstance[]>;
  /**
   * Retrieve a single page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
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
  page(params: DeploymentListInstancePageOptions, callback?: (error: Error | null, items: DeploymentPage) => any): Promise<DeploymentPage>;
  page(params?: any, callback?: any): Promise<DeploymentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeploymentSolution {
  serviceSid?: string;
  environmentSid?: string;
}

interface DeploymentListInstanceImpl extends DeploymentListInstance {}
class DeploymentListInstanceImpl implements DeploymentListInstance {
  _version?: V1;
  _solution?: DeploymentSolution;
  _uri?: string;

}

export function DeploymentListInstance(version: V1, serviceSid: string, environmentSid: string): DeploymentListInstance {
  const instance = ((sid) => instance.get(sid)) as DeploymentListInstanceImpl;

  instance.get = function get(sid): DeploymentContext {
    return new DeploymentContextImpl(version, serviceSid, environmentSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, environmentSid };
  instance._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Deployments`;

  instance.create = function create(params?: any, callback?: any): Promise<DeploymentInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params['buildSid'] !== undefined) data['BuildSid'] = params['buildSid'];

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new DeploymentInstance(operationVersion, payload, this._solution.serviceSid, this._solution.environmentSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<DeploymentPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params['pageSize'] !== undefined) data['PageSize'] = params['pageSize'];
    if (params.page !== undefined) data['Page'] = params.pageNumber;
    if (params.pageToken !== undefined) data['PageToken'] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new DeploymentPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<DeploymentPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new DeploymentPage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }


  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export class DeploymentPage extends Page<V1, DeploymentPayload, DeploymentResource, DeploymentInstance> {
/**
* Initialize the DeploymentPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: DeploymentSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of DeploymentInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: DeploymentPayload): DeploymentInstance {
    return new DeploymentInstance(
    this._version,
    payload,
        this._solution.serviceSid,
        this._solution.environmentSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

