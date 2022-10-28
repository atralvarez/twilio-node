/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Studio
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



type FlowRevisionStatus = 'draft'|'published';

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
export interface FlowRevisionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: FlowRevisionInstance, done: (err?: Error) => void) => void;
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
export interface FlowRevisionListInstanceOptions {
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
export interface FlowRevisionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface FlowRevisionContext {


  /**
   * Fetch a FlowRevisionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowRevisionInstance
   */
  fetch(callback?: (error: Error | null, item?: FlowRevisionInstance) => any): Promise<FlowRevisionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowRevisionContextSolution {
  'sid'?: string;
  'revision'?: string;
}

export class FlowRevisionContextImpl implements FlowRevisionContext {
  protected _solution: FlowRevisionContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, sid: string, revision: string) {
    this._solution = { sid, revision };
    this._uri = `/Flows/${sid}/Revisions/${revision}`;
  }

  fetch(callback?: any): Promise<FlowRevisionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new FlowRevisionInstance(operationVersion, payload, this._solution.sid, this._solution.revision));
    

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

interface FlowRevisionPayload extends FlowRevisionResource, Page.TwilioResponsePayload {
}

interface FlowRevisionResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  definition?: any | null;
  status?: FlowRevisionStatus;
  revision?: number | null;
  commit_message?: string | null;
  valid?: boolean | null;
  errors?: Array<any> | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class FlowRevisionInstance {
  protected _solution: FlowRevisionContextSolution;
  protected _context?: FlowRevisionContext;

  constructor(protected _version: V2, payload: FlowRevisionPayload, sid: string, revision?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.definition = payload.definition;
    this.status = payload.status;
    this.revision = deserialize.integer(payload.revision);
    this.commitMessage = payload.commit_message;
    this.valid = payload.valid;
    this.errors = payload.errors;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid, revision: revision || this.revision };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the Flow
   */
  friendlyName?: string | null;
  /**
   * JSON representation of flow definition
   */
  definition?: any | null;
  status?: FlowRevisionStatus;
  /**
   * The latest revision number of the Flow\'s definition
   */
  revision?: number | null;
  /**
   * Description of change made in the revision
   */
  commitMessage?: string | null;
  /**
   * Boolean if the flow definition is valid
   */
  valid?: boolean | null;
  /**
   * List of error in the flow definition
   */
  errors?: Array<any> | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the resource
   */
  url?: string | null;

  private get _proxy(): FlowRevisionContext {
    this._context = this._context || new FlowRevisionContextImpl(this._version, this._solution.sid, this._solution.revision);
    return this._context;
  }

  /**
   * Fetch a FlowRevisionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FlowRevisionInstance
   */
  fetch(callback?: (error: Error | null, item?: FlowRevisionInstance) => any): Promise<FlowRevisionInstance>
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
      friendlyName: this.friendlyName, 
      definition: this.definition, 
      status: this.status, 
      revision: this.revision, 
      commitMessage: this.commitMessage, 
      valid: this.valid, 
      errors: this.errors, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface FlowRevisionListInstance {
  (revision: string): FlowRevisionContext;
  get(revision: string): FlowRevisionContext;



  /**
   * Streams FlowRevisionInstance records from the API.
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
  each(callback?: (item: FlowRevisionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FlowRevisionInstance records from the API.
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
   * @param { FlowRevisionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: FlowRevisionListInstanceEachOptions, callback?: (item: FlowRevisionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FlowRevisionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FlowRevisionPage) => any): Promise<FlowRevisionPage>;
  /**
   * Retrieve a single target page of FlowRevisionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FlowRevisionPage) => any): Promise<FlowRevisionPage>;
  getPage(params?: any, callback?: any): Promise<FlowRevisionPage>;
  /**
   * Lists FlowRevisionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FlowRevisionInstance[]) => any): Promise<FlowRevisionInstance[]>;
  /**
   * Lists FlowRevisionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlowRevisionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: FlowRevisionListInstanceOptions, callback?: (error: Error | null, items: FlowRevisionInstance[]) => any): Promise<FlowRevisionInstance[]>;
  list(params?: any, callback?: any): Promise<FlowRevisionInstance[]>;
  /**
   * Retrieve a single page of FlowRevisionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FlowRevisionPage) => any): Promise<FlowRevisionPage>;
  /**
   * Retrieve a single page of FlowRevisionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FlowRevisionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: FlowRevisionListInstancePageOptions, callback?: (error: Error | null, items: FlowRevisionPage) => any): Promise<FlowRevisionPage>;
  page(params?: any, callback?: any): Promise<FlowRevisionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FlowRevisionSolution {
  sid?: string;
}

interface FlowRevisionListInstanceImpl extends FlowRevisionListInstance {}
class FlowRevisionListInstanceImpl implements FlowRevisionListInstance {
  _version?: V2;
  _solution?: FlowRevisionSolution;
  _uri?: string;

}

export function FlowRevisionListInstance(version: V2, sid: string): FlowRevisionListInstance {
  const instance = ((revision) => instance.get(revision)) as FlowRevisionListInstanceImpl;

  instance.get = function get(revision): FlowRevisionContext {
    return new FlowRevisionContextImpl(version, sid, revision);
  }

  instance._version = version;
  instance._solution = { sid };
  instance._uri = `/Flows/${sid}/Revisions`;

  instance.page = function page(params?: any, callback?: any): Promise<FlowRevisionPage> {
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
    
    operationPromise = operationPromise.then(payload => new FlowRevisionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<FlowRevisionPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new FlowRevisionPage(this._version, payload, this._solution));
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


export class FlowRevisionPage extends Page<V2, FlowRevisionPayload, FlowRevisionResource, FlowRevisionInstance> {
/**
* Initialize the FlowRevisionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2, response: Response<string>, solution: FlowRevisionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of FlowRevisionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: FlowRevisionPayload): FlowRevisionInstance {
    return new FlowRevisionInstance(
    this._version,
    payload,
        this._solution.sid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

