/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../../../base/Page";
import Response from "../../../../../../../../http/response";
import V2010 from "../../../../../../V2010";
const deserialize = require("../../../../../../../../base/deserialize");
const serialize = require("../../../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../../../base/utility";





/**
 * Options to pass to create a AuthCallsIpAccessControlListMappingInstance
 */
export interface AuthCallsIpAccessControlListMappingListInstanceCreateOptions {
  /** The SID of the IpAccessControlList resource to map to the SIP domain. */
  "ipAccessControlListSid": string;
}
/**
 * Options to pass to each
 */
export interface AuthCallsIpAccessControlListMappingListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AuthCallsIpAccessControlListMappingInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AuthCallsIpAccessControlListMappingListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AuthCallsIpAccessControlListMappingListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface AuthCallsIpAccessControlListMappingContext {

  /**
   * Remove a AuthCallsIpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a AuthCallsIpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthCallsIpAccessControlListMappingInstance
   */
  fetch(callback?: (error: Error | null, item?: AuthCallsIpAccessControlListMappingInstance) => any): Promise<AuthCallsIpAccessControlListMappingInstance>



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthCallsIpAccessControlListMappingContextSolution {
  "accountSid": string;
  "domainSid": string;
  "sid": string;
}

export class AuthCallsIpAccessControlListMappingContextImpl implements AuthCallsIpAccessControlListMappingContext {
  protected _solution: AuthCallsIpAccessControlListMappingContextSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, domainSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error('Parameter \'accountSid\' is not valid.');
    }

    if (!isValidPathParam(domainSid)) {
      throw new Error('Parameter \'domainSid\' is not valid.');
    }

    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { accountSid, domainSid, sid,  };
    this._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings/${sid}.json`;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: AuthCallsIpAccessControlListMappingInstance) => any): Promise<AuthCallsIpAccessControlListMappingInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new AuthCallsIpAccessControlListMappingInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.domainSid, instance._solution.sid));
    

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


interface AuthCallsIpAccessControlListMappingPayload extends TwilioResponsePayload {
    contents: AuthCallsIpAccessControlListMappingResource[];
}

interface AuthCallsIpAccessControlListMappingResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sid: string;
}

export class AuthCallsIpAccessControlListMappingInstance {
  protected _solution: AuthCallsIpAccessControlListMappingContextSolution;
  protected _context?: AuthCallsIpAccessControlListMappingContext;

  constructor(protected _version: V2010, payload: AuthCallsIpAccessControlListMappingResource, accountSid: string, domainSid: string, sid?: string) {
    this.accountSid = (payload.account_sid);
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = (payload.friendly_name);
    this.sid = (payload.sid);

    this._solution = { accountSid, domainSid, sid: sid || this.sid,  };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IpAccessControlListMapping resource.
   */
  accountSid: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The unique string that that we created to identify the IpAccessControlListMapping resource.
   */
  sid: string;

  private get _proxy(): AuthCallsIpAccessControlListMappingContext {
    this._context = this._context || new AuthCallsIpAccessControlListMappingContextImpl(this._version, this._solution.accountSid, this._solution.domainSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AuthCallsIpAccessControlListMappingInstance
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
   * Fetch a AuthCallsIpAccessControlListMappingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthCallsIpAccessControlListMappingInstance
   */
  fetch(callback?: (error: Error | null, item?: AuthCallsIpAccessControlListMappingInstance) => any): Promise<AuthCallsIpAccessControlListMappingInstance>

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
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      sid: this.sid,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface AuthCallsIpAccessControlListMappingSolution {
  accountSid: string;
  domainSid: string;
}

export interface AuthCallsIpAccessControlListMappingListInstance {
  _version: V2010;
  _solution: AuthCallsIpAccessControlListMappingSolution;
  _uri: string;

  (sid: string, ): AuthCallsIpAccessControlListMappingContext;
  get(sid: string, ): AuthCallsIpAccessControlListMappingContext;






  /**
   * Create a AuthCallsIpAccessControlListMappingInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthCallsIpAccessControlListMappingInstance
   */
  create(params: AuthCallsIpAccessControlListMappingListInstanceCreateOptions, callback?: (error: Error | null, item?: AuthCallsIpAccessControlListMappingInstance) => any): Promise<AuthCallsIpAccessControlListMappingInstance>;



  /**
   * Streams AuthCallsIpAccessControlListMappingInstance records from the API.
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
   * @param { AuthCallsIpAccessControlListMappingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: AuthCallsIpAccessControlListMappingInstance, done: (err?: Error) => void) => void): void;
  each(params: AuthCallsIpAccessControlListMappingListInstanceEachOptions, callback?: (item: AuthCallsIpAccessControlListMappingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of AuthCallsIpAccessControlListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingPage) => any): Promise<AuthCallsIpAccessControlListMappingPage>;
  /**
   * Lists AuthCallsIpAccessControlListMappingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthCallsIpAccessControlListMappingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingInstance[]) => any): Promise<AuthCallsIpAccessControlListMappingInstance[]>;
  list(params: AuthCallsIpAccessControlListMappingListInstanceOptions, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingInstance[]) => any): Promise<AuthCallsIpAccessControlListMappingInstance[]>;
  /**
   * Retrieve a single page of AuthCallsIpAccessControlListMappingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthCallsIpAccessControlListMappingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingPage) => any): Promise<AuthCallsIpAccessControlListMappingPage>;
  page(params: AuthCallsIpAccessControlListMappingListInstancePageOptions, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingPage) => any): Promise<AuthCallsIpAccessControlListMappingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AuthCallsIpAccessControlListMappingListInstance(version: V2010, accountSid: string, domainSid: string): AuthCallsIpAccessControlListMappingListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error('Parameter \'accountSid\' is not valid.');
  }

  if (!isValidPathParam(domainSid)) {
    throw new Error('Parameter \'domainSid\' is not valid.');
  }

  const instance = ((sid, ) => instance.get(sid, )) as AuthCallsIpAccessControlListMappingListInstance;

  instance.get = function get(sid, ): AuthCallsIpAccessControlListMappingContext {
    return new AuthCallsIpAccessControlListMappingContextImpl(version, accountSid, domainSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid, domainSid,  };
  instance._uri = `/Accounts/${accountSid}/SIP/Domains/${domainSid}/Auth/Calls/IpAccessControlListMappings.json`;

  instance.create = function create(params: AuthCallsIpAccessControlListMappingListInstanceCreateOptions, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingInstance) => any): Promise<AuthCallsIpAccessControlListMappingInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["ipAccessControlListSid"] === null || params["ipAccessControlListSid"] === undefined) {
      throw new Error('Required parameter "params[\'ipAccessControlListSid\']" missing.');
    }

    let data: any = {};

    
        
    data["IpAccessControlListSid"] = params["ipAccessControlListSid"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new AuthCallsIpAccessControlListMappingInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.domainSid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: AuthCallsIpAccessControlListMappingListInstancePageOptions | ((error: Error | null, items: AuthCallsIpAccessControlListMappingPage) => any), callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingPage) => any): Promise<AuthCallsIpAccessControlListMappingPage> {
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
    
    operationPromise = operationPromise.then(payload => new AuthCallsIpAccessControlListMappingPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: AuthCallsIpAccessControlListMappingPage) => any): Promise<AuthCallsIpAccessControlListMappingPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new AuthCallsIpAccessControlListMappingPage(instance._version, payload, instance._solution));
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

export class AuthCallsIpAccessControlListMappingPage extends Page<V2010, AuthCallsIpAccessControlListMappingPayload, AuthCallsIpAccessControlListMappingResource, AuthCallsIpAccessControlListMappingInstance> {
/**
* Initialize the AuthCallsIpAccessControlListMappingPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: AuthCallsIpAccessControlListMappingSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of AuthCallsIpAccessControlListMappingInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: AuthCallsIpAccessControlListMappingResource): AuthCallsIpAccessControlListMappingInstance {
    return new AuthCallsIpAccessControlListMappingInstance(
    this._version,
    payload,
        this._solution.accountSid,
        this._solution.domainSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

