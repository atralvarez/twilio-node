/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Chat
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";


export type UserBindingBindingType = 'gcm'|'apn'|'fcm';



/**
 * Options to pass to each
 */
export interface UserBindingListInstanceEachOptions {
  /** The push technology used by the User Binding resources to read. Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info. */
  "bindingType"?: Array<UserBindingBindingType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface UserBindingListInstanceOptions {
  /** The push technology used by the User Binding resources to read. Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info. */
  "bindingType"?: Array<UserBindingBindingType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface UserBindingListInstancePageOptions {
  /** The push technology used by the User Binding resources to read. Can be: `apn`, `gcm`, or `fcm`.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info. */
  "bindingType"?: Array<UserBindingBindingType>;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface UserBindingContext {

  /**
   * Remove a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserBindingInstance
   */
  fetch(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<UserBindingInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserBindingContextSolution {
  "serviceSid": string;
  "userSid": string;
  "sid": string;
}

export class UserBindingContextImpl implements UserBindingContext {
  protected _solution: UserBindingContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, serviceSid: string, userSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error('Parameter \'serviceSid\' is not valid.');
    }

    if (!isValidPathParam(userSid)) {
      throw new Error('Parameter \'userSid\' is not valid.');
    }

    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { serviceSid, userSid, sid,  };
    this._uri = `/Services/${serviceSid}/Users/${userSid}/Bindings/${sid}`;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<UserBindingInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new UserBindingInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.userSid, instance._solution.sid));
    

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


interface UserBindingPayload extends TwilioResponsePayload {
    bindings: UserBindingResource[];
}

interface UserBindingResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  date_created: Date;
  date_updated: Date;
  endpoint: string;
  identity: string;
  user_sid: string;
  credential_sid: string;
  binding_type: UserBindingBindingType;
  message_types: Array<string>;
  url: string;
}

export class UserBindingInstance {
  protected _solution: UserBindingContextSolution;
  protected _context?: UserBindingContext;

  constructor(protected _version: V2, payload: UserBindingResource, serviceSid: string, userSid: string, sid?: string) {
    this.sid = (payload.sid);
    this.accountSid = (payload.account_sid);
    this.serviceSid = (payload.service_sid);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.endpoint = (payload.endpoint);
    this.identity = (payload.identity);
    this.userSid = (payload.user_sid);
    this.credentialSid = (payload.credential_sid);
    this.bindingType = (payload.binding_type);
    this.messageTypes = (payload.message_types);
    this.url = (payload.url);

    this._solution = { serviceSid, userSid, sid: sid || this.sid,  };
  }

  /**
   * The unique string that we created to identify the User Binding resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the User Binding resource.
   */
  accountSid: string;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the User Binding resource is associated with.
   */
  serviceSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The unique endpoint identifier for the User Binding. The format of the value depends on the `binding_type`.
   */
  endpoint: string;
  /**
   * The application-defined string that uniquely identifies the resource\'s [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/chat/rest/service-resource). See [access tokens](https://www.twilio.com/docs/chat/create-tokens) for more info.
   */
  identity: string;
  /**
   * The SID of the [User](https://www.twilio.com/docs/chat/rest/user-resource) with the User Binding resource.  See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
   */
  userSid: string;
  /**
   * The SID of the [Credential](https://www.twilio.com/docs/chat/rest/credential-resource) for the binding. See [push notification configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more info.
   */
  credentialSid: string;
  bindingType: UserBindingBindingType;
  /**
   * The [Programmable Chat message types](https://www.twilio.com/docs/chat/push-notification-configuration#push-types) the binding is subscribed to.
   */
  messageTypes: Array<string>;
  /**
   * The absolute URL of the User Binding resource.
   */
  url: string;

  private get _proxy(): UserBindingContext {
    this._context = this._context || new UserBindingContextImpl(this._version, this._solution.serviceSid, this._solution.userSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a UserBindingInstance
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
   * Fetch a UserBindingInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserBindingInstance
   */
  fetch(callback?: (error: Error | null, item?: UserBindingInstance) => any): Promise<UserBindingInstance>

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
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      endpoint: this.endpoint,
      identity: this.identity,
      userSid: this.userSid,
      credentialSid: this.credentialSid,
      bindingType: this.bindingType,
      messageTypes: this.messageTypes,
      url: this.url,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface UserBindingSolution {
  serviceSid: string;
  userSid: string;
}

export interface UserBindingListInstance {
  _version: V2;
  _solution: UserBindingSolution;
  _uri: string;

  (sid: string, ): UserBindingContext;
  get(sid: string, ): UserBindingContext;







  /**
   * Streams UserBindingInstance records from the API.
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
   * @param { UserBindingListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void): void;
  each(params: UserBindingListInstanceEachOptions, callback?: (item: UserBindingInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of UserBindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
  /**
   * Lists UserBindingInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserBindingListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: UserBindingInstance[]) => any): Promise<UserBindingInstance[]>;
  list(params: UserBindingListInstanceOptions, callback?: (error: Error | null, items: UserBindingInstance[]) => any): Promise<UserBindingInstance[]>;
  /**
   * Retrieve a single page of UserBindingInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserBindingListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;
  page(params: UserBindingListInstancePageOptions, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UserBindingListInstance(version: V2, serviceSid: string, userSid: string): UserBindingListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error('Parameter \'serviceSid\' is not valid.');
  }

  if (!isValidPathParam(userSid)) {
    throw new Error('Parameter \'userSid\' is not valid.');
  }

  const instance = ((sid, ) => instance.get(sid, )) as UserBindingListInstance;

  instance.get = function get(sid, ): UserBindingContext {
    return new UserBindingContextImpl(version, serviceSid, userSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, userSid,  };
  instance._uri = `/Services/${serviceSid}/Users/${userSid}/Bindings`;

  instance.page = function page(params?: UserBindingListInstancePageOptions | ((error: Error | null, items: UserBindingPage) => any), callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["bindingType"] !== undefined)
    data["BindingType"] = serialize.map(params["bindingType"], (e: UserBindingBindingType) => (e));
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    
    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: instance._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new UserBindingPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: UserBindingPage) => any): Promise<UserBindingPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new UserBindingPage(instance._version, payload, instance._solution));
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

export class UserBindingPage extends Page<V2, UserBindingPayload, UserBindingResource, UserBindingInstance> {
/**
* Initialize the UserBindingPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2, response: Response<string>, solution: UserBindingSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of UserBindingInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: UserBindingResource): UserBindingInstance {
    return new UserBindingInstance(
    this._version,
    payload,
        this._solution.serviceSid,
        this._solution.userSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

