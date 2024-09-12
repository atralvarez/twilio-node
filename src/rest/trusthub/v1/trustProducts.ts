/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
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
import { TrustProductsChannelEndpointAssignmentListInstance } from "./trustProducts/trustProductsChannelEndpointAssignment";
import { TrustProductsEntityAssignmentsListInstance } from "./trustProducts/trustProductsEntityAssignments";
import { TrustProductsEvaluationsListInstance } from "./trustProducts/trustProductsEvaluations";


export type TrustProductsStatus = 'draft'|'pending-review'|'in-review'|'twilio-rejected'|'twilio-approved';




/**
 * Options to pass to update a TrustProductsInstance
 */
export interface TrustProductsContextUpdateOptions {
  /**  */
  "status"?: TrustProductsStatus;
  /** The URL we call to inform your application of status changes. */
  "statusCallback"?: string;
  /** The string that you assigned to describe the resource. */
  "friendlyName"?: string;
  /** The email address that will receive updates when the Trust Product resource changes status. */
  "email"?: string;
}

/**
 * Options to pass to create a TrustProductsInstance
 */
export interface TrustProductsListInstanceCreateOptions {
  /** The string that you assigned to describe the resource. */
  "friendlyName": string;
  /** The email address that will receive updates when the Trust Product resource changes status. */
  "email": string;
  /** The unique string of a policy that is associated to the Trust Product resource. */
  "policySid": string;
  /** The URL we call to inform your application of status changes. */
  "statusCallback"?: string;
}
/**
 * Options to pass to each
 */
export interface TrustProductsListInstanceEachOptions {
  /** The verification status of the Trust Product resource. */
  "status"?: TrustProductsStatus;
  /** The string that you assigned to describe the resource. */
  "friendlyName"?: string;
  /** The unique string of a policy that is associated to the Trust Product resource. */
  "policySid"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TrustProductsListInstanceOptions {
  /** The verification status of the Trust Product resource. */
  "status"?: TrustProductsStatus;
  /** The string that you assigned to describe the resource. */
  "friendlyName"?: string;
  /** The unique string of a policy that is associated to the Trust Product resource. */
  "policySid"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TrustProductsListInstancePageOptions {
  /** The verification status of the Trust Product resource. */
  "status"?: TrustProductsStatus;
  /** The string that you assigned to describe the resource. */
  "friendlyName"?: string;
  /** The unique string of a policy that is associated to the Trust Product resource. */
  "policySid"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface TrustProductsContext {
  trustProductsChannelEndpointAssignment: TrustProductsChannelEndpointAssignmentListInstance;
  trustProductsEntityAssignments: TrustProductsEntityAssignmentsListInstance;
  trustProductsEvaluations: TrustProductsEvaluationsListInstance;

  /**
   * Remove a TrustProductsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a TrustProductsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsInstance
   */
  fetch(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>

  /**
   * Update a TrustProductsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsInstance
   */
  update(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
  /**
   * Update a TrustProductsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsInstance
   */
  update(params: TrustProductsContextUpdateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrustProductsContextSolution {
  "sid": string;
}

export class TrustProductsContextImpl implements TrustProductsContext {
  protected _solution: TrustProductsContextSolution;
  protected _uri: string;

  protected _trustProductsChannelEndpointAssignment?: TrustProductsChannelEndpointAssignmentListInstance;
  protected _trustProductsEntityAssignments?: TrustProductsEntityAssignmentsListInstance;
  protected _trustProductsEvaluations?: TrustProductsEvaluationsListInstance;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { sid,  };
    this._uri = `/TrustProducts/${sid}`;
  }

  get trustProductsChannelEndpointAssignment(): TrustProductsChannelEndpointAssignmentListInstance {
    this._trustProductsChannelEndpointAssignment = this._trustProductsChannelEndpointAssignment || TrustProductsChannelEndpointAssignmentListInstance(this._version, this._solution.sid);
    return this._trustProductsChannelEndpointAssignment;
  }

  get trustProductsEntityAssignments(): TrustProductsEntityAssignmentsListInstance {
    this._trustProductsEntityAssignments = this._trustProductsEntityAssignments || TrustProductsEntityAssignmentsListInstance(this._version, this._solution.sid);
    return this._trustProductsEntityAssignments;
  }

  get trustProductsEvaluations(): TrustProductsEvaluationsListInstance {
    this._trustProductsEvaluations = this._trustProductsEvaluations || TrustProductsEvaluationsListInstance(this._version, this._solution.sid);
    return this._trustProductsEvaluations;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new TrustProductsInstance(operationVersion, payload, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: TrustProductsContextUpdateOptions | ((error: Error | null, item?: TrustProductsInstance) => any), callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["status"] !== undefined)
    data["Status"] = params["status"];
    if (params["statusCallback"] !== undefined)
    data["StatusCallback"] = params["statusCallback"];
    if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["email"] !== undefined)
    data["Email"] = params["email"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsInstance(operationVersion, payload, instance._solution.sid));
    

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


interface TrustProductsPayload extends TwilioResponsePayload {
    results: TrustProductsResource[];
}

interface TrustProductsResource {
  sid: string;
  account_sid: string;
  policy_sid: string;
  friendly_name: string;
  status: TrustProductsStatus;
  valid_until: Date;
  email: string;
  status_callback: string;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
  errors: Array<any>;
}

export class TrustProductsInstance {
  protected _solution: TrustProductsContextSolution;
  protected _context?: TrustProductsContext;

  constructor(protected _version: V1, payload: TrustProductsResource, sid?: string) {
    this.sid = (payload.sid);
    this.accountSid = (payload.account_sid);
    this.policySid = (payload.policy_sid);
    this.friendlyName = (payload.friendly_name);
    this.status = (payload.status);
    this.validUntil = deserialize.iso8601DateTime(payload.valid_until);
    this.email = (payload.email);
    this.statusCallback = (payload.status_callback);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = (payload.url);
    this.links = (payload.links);
    this.errors = (payload.errors);

    this._solution = { sid: sid || this.sid,  };
  }

  /**
   * The unique string that we created to identify the Trust Product resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Trust Product resource.
   */
  accountSid: string;
  /**
   * The unique string of the policy that is associated with the Trust Product resource.
   */
  policySid: string;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  status: TrustProductsStatus;
  /**
   * The date and time in GMT in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format until which the resource will be valid.
   */
  validUntil: Date;
  /**
   * The email address that will receive updates when the Trust Product resource changes status.
   */
  email: string;
  /**
   * The URL we call to inform your application of status changes.
   */
  statusCallback: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the Trust Product resource.
   */
  url: string;
  /**
   * The URLs of the Assigned Items of the Trust Product resource.
   */
  links: Record<string, string>;
  /**
   * The error codes associated with the rejection of the Trust Product.
   */
  errors: Array<any>;

  private get _proxy(): TrustProductsContext {
    this._context = this._context || new TrustProductsContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a TrustProductsInstance
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
   * Fetch a TrustProductsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsInstance
   */
  fetch(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>

    {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TrustProductsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsInstance
   */
  update(callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;
  /**
   * Update a TrustProductsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsInstance
   */
  update(params: TrustProductsContextUpdateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;

    update(params?: any, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>
    {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the trustProductsChannelEndpointAssignment.
   */
  trustProductsChannelEndpointAssignment(): TrustProductsChannelEndpointAssignmentListInstance {
    return this._proxy.trustProductsChannelEndpointAssignment;
  }

  /**
   * Access the trustProductsEntityAssignments.
   */
  trustProductsEntityAssignments(): TrustProductsEntityAssignmentsListInstance {
    return this._proxy.trustProductsEntityAssignments;
  }

  /**
   * Access the trustProductsEvaluations.
   */
  trustProductsEvaluations(): TrustProductsEvaluationsListInstance {
    return this._proxy.trustProductsEvaluations;
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
      policySid: this.policySid,
      friendlyName: this.friendlyName,
      status: this.status,
      validUntil: this.validUntil,
      email: this.email,
      statusCallback: this.statusCallback,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
      errors: this.errors,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface TrustProductsSolution {
}

export interface TrustProductsListInstance {
  _version: V1;
  _solution: TrustProductsSolution;
  _uri: string;

  (sid: string, ): TrustProductsContext;
  get(sid: string, ): TrustProductsContext;








  /**
   * Create a TrustProductsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsInstance
   */
  create(params: TrustProductsListInstanceCreateOptions, callback?: (error: Error | null, item?: TrustProductsInstance) => any): Promise<TrustProductsInstance>;



  /**
   * Streams TrustProductsInstance records from the API.
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
   * @param { TrustProductsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void): void;
  each(params: TrustProductsListInstanceEachOptions, callback?: (item: TrustProductsInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of TrustProductsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
  /**
   * Lists TrustProductsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TrustProductsInstance[]) => any): Promise<TrustProductsInstance[]>;
  list(params: TrustProductsListInstanceOptions, callback?: (error: Error | null, items: TrustProductsInstance[]) => any): Promise<TrustProductsInstance[]>;
  /**
   * Retrieve a single page of TrustProductsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;
  page(params: TrustProductsListInstancePageOptions, callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TrustProductsListInstance(version: V1): TrustProductsListInstance {
  const instance = ((sid, ) => instance.get(sid, )) as TrustProductsListInstance;

  instance.get = function get(sid, ): TrustProductsContext {
    return new TrustProductsContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/TrustProducts`;

  instance.create = function create(params: TrustProductsListInstanceCreateOptions, callback?: (error: Error | null, items: TrustProductsInstance) => any): Promise<TrustProductsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["friendlyName"] === null || params["friendlyName"] === undefined) {
      throw new Error('Required parameter "params[\'friendlyName\']" missing.');
    }

    if (params["email"] === null || params["email"] === undefined) {
      throw new Error('Required parameter "params[\'email\']" missing.');
    }

    if (params["policySid"] === null || params["policySid"] === undefined) {
      throw new Error('Required parameter "params[\'policySid\']" missing.');
    }

    let data: any = {};

    
        
    data["FriendlyName"] = params["friendlyName"];
    
    data["Email"] = params["email"];
    
    data["PolicySid"] = params["policySid"];
    if (params["statusCallback"] !== undefined)
    data["StatusCallback"] = params["statusCallback"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsInstance(operationVersion, payload));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: TrustProductsListInstancePageOptions | ((error: Error | null, items: TrustProductsPage) => any), callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["status"] !== undefined)
    data["Status"] = params["status"];
    if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["policySid"] !== undefined)
    data["PolicySid"] = params["policySid"];
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    
    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: instance._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new TrustProductsPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: TrustProductsPage) => any): Promise<TrustProductsPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new TrustProductsPage(instance._version, payload, instance._solution));
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

export class TrustProductsPage extends Page<V1, TrustProductsPayload, TrustProductsResource, TrustProductsInstance> {
/**
* Initialize the TrustProductsPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: TrustProductsSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of TrustProductsInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: TrustProductsResource): TrustProductsInstance {
    return new TrustProductsInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

