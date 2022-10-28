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
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");



type CredentialPushService = 'gcm'|'apn'|'fcm';


/**
 * Options to pass to update a CredentialInstance
 *
 * @property { string } [friendlyName] A descriptive string that you create to describe the resource. It can be up to 64 characters long.
 * @property { string } [certificate] [APN only] The URL encoded representation of the certificate. For example,  &#x60;-----BEGIN CERTIFICATE----- MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNV.....A&#x3D;&#x3D; -----END CERTIFICATE-----&#x60;
 * @property { string } [privateKey] [APN only] The URL encoded representation of the private key. For example, &#x60;-----BEGIN RSA PRIVATE KEY----- MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fGgvCI1l9s+cmBY3WIz+cUDqmxiieR. -----END RSA PRIVATE KEY-----&#x60;
 * @property { boolean } [sandbox] [APN only] Whether to send the credential to sandbox APNs. Can be &#x60;true&#x60; to send to sandbox APNs or &#x60;false&#x60; to send to production.
 * @property { string } [apiKey] [GCM only] The API key for the project that was obtained from the Google Developer console for your GCM Service application credential.
 * @property { string } [secret] [FCM only] The **Server key** of your project from the Firebase console, found under Settings / Cloud messaging.
 */
export interface CredentialContextUpdateOptions {
  'friendlyName'?: string;
  'certificate'?: string;
  'privateKey'?: string;
  'sandbox'?: boolean;
  'apiKey'?: string;
  'secret'?: string;
}

/**
 * Options to pass to create a CredentialInstance
 *
 * @property { CredentialPushService } type 
 * @property { string } [friendlyName] A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
 * @property { string } [certificate] [APN only] The URL encoded representation of the certificate. For example,  &#x60;-----BEGIN CERTIFICATE----- MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNV.....A&#x3D;&#x3D; -----END CERTIFICATE-----&#x60;
 * @property { string } [privateKey] [APN only] The URL encoded representation of the private key. For example, &#x60;-----BEGIN RSA PRIVATE KEY----- MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fGgvCI1l9s+cmBY3WIz+cUDqmxiieR. -----END RSA PRIVATE KEY-----&#x60;
 * @property { boolean } [sandbox] [APN only] Whether to send the credential to sandbox APNs. Can be &#x60;true&#x60; to send to sandbox APNs or &#x60;false&#x60; to send to production.
 * @property { string } [apiKey] [GCM only] The API key for the project that was obtained from the Google Developer console for your GCM Service application credential.
 * @property { string } [secret] [FCM only] The **Server key** of your project from the Firebase console, found under Settings / Cloud messaging.
 */
export interface CredentialListInstanceCreateOptions {
  'type': CredentialPushService;
  'friendlyName'?: string;
  'certificate'?: string;
  'privateKey'?: string;
  'sandbox'?: boolean;
  'apiKey'?: string;
  'secret'?: string;
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
export interface CredentialListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: CredentialInstance, done: (err?: Error) => void) => void;
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
export interface CredentialListInstanceOptions {
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
export interface CredentialListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface CredentialContext {


  /**
   * Remove a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  fetch(callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>


  /**
   * Update a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  update(callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
  /**
   * Update a CredentialInstance
   *
   * @param { CredentialContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  update(params: CredentialContextUpdateOptions, callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
  update(params?: any, callback?: any): Promise<CredentialInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialContextSolution {
  'sid'?: string;
}

export class CredentialContextImpl implements CredentialContext {
  protected _solution: CredentialContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Credentials/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<CredentialInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new CredentialInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<CredentialInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params['friendlyName'] !== undefined) data['FriendlyName'] = params['friendlyName'];
    if (params['certificate'] !== undefined) data['Certificate'] = params['certificate'];
    if (params['privateKey'] !== undefined) data['PrivateKey'] = params['privateKey'];
    if (params['sandbox'] !== undefined) data['Sandbox'] = serialize.bool(params['sandbox']);
    if (params['apiKey'] !== undefined) data['ApiKey'] = params['apiKey'];
    if (params['secret'] !== undefined) data['Secret'] = params['secret'];

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new CredentialInstance(operationVersion, payload, this._solution.sid));
    

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

interface CredentialPayload extends CredentialResource, Page.TwilioResponsePayload {
}

interface CredentialResource {
  sid?: string | null;
  account_sid?: string | null;
  friendly_name?: string | null;
  type?: CredentialPushService;
  sandbox?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class CredentialInstance {
  protected _solution: CredentialContextSolution;
  protected _context?: CredentialContext;

  constructor(protected _version: V1, payload: CredentialPayload, sid?: string) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.friendlyName = payload.friendly_name;
    this.type = payload.type;
    this.sandbox = payload.sandbox;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
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
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  type?: CredentialPushService;
  /**
   * [APN only] Whether to send the credential to sandbox APNs
   */
  sandbox?: string | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Credential resource
   */
  url?: string | null;

  private get _proxy(): CredentialContext {
    this._context = this._context || new CredentialContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  fetch(callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a CredentialInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  update(callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
  /**
   * Update a CredentialInstance
   *
   * @param { CredentialContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  update(params: CredentialContextUpdateOptions, callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
  update(params?: any, callback?: any): Promise<CredentialInstance>
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
      friendlyName: this.friendlyName, 
      type: this.type, 
      sandbox: this.sandbox, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface CredentialListInstance {
  (sid: string): CredentialContext;
  get(sid: string): CredentialContext;


  /**
   * Create a CredentialInstance
   *
   * @param { CredentialListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed CredentialInstance
   */
  create(params: CredentialListInstanceCreateOptions, callback?: (error: Error | null, item?: CredentialInstance) => any): Promise<CredentialInstance>;
  create(params: any, callback?: any): Promise<CredentialInstance>



  /**
   * Streams CredentialInstance records from the API.
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
  each(callback?: (item: CredentialInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CredentialInstance records from the API.
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
   * @param { CredentialListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: CredentialListInstanceEachOptions, callback?: (item: CredentialInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  getPage(params?: any, callback?: any): Promise<CredentialPage>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CredentialInstance[]) => any): Promise<CredentialInstance[]>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: CredentialListInstanceOptions, callback?: (error: Error | null, items: CredentialInstance[]) => any): Promise<CredentialInstance[]>;
  list(params?: any, callback?: any): Promise<CredentialInstance[]>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CredentialListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: CredentialListInstancePageOptions, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  page(params?: any, callback?: any): Promise<CredentialPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CredentialSolution {
}

interface CredentialListInstanceImpl extends CredentialListInstance {}
class CredentialListInstanceImpl implements CredentialListInstance {
  _version?: V1;
  _solution?: CredentialSolution;
  _uri?: string;

}

export function CredentialListInstance(version: V1): CredentialListInstance {
  const instance = ((sid) => instance.get(sid)) as CredentialListInstanceImpl;

  instance.get = function get(sid): CredentialContext {
    return new CredentialContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Credentials`;

  instance.create = function create(params: any, callback?: any): Promise<CredentialInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params['type'] === null || params['type'] === undefined) {
      throw new Error('Required parameter "params[\'type\']" missing.');
    }

    const data: any = {};

    data['Type'] = params['type'];
    if (params['friendlyName'] !== undefined) data['FriendlyName'] = params['friendlyName'];
    if (params['certificate'] !== undefined) data['Certificate'] = params['certificate'];
    if (params['privateKey'] !== undefined) data['PrivateKey'] = params['privateKey'];
    if (params['sandbox'] !== undefined) data['Sandbox'] = serialize.bool(params['sandbox']);
    if (params['apiKey'] !== undefined) data['ApiKey'] = params['apiKey'];
    if (params['secret'] !== undefined) data['Secret'] = params['secret'];

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new CredentialInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<CredentialPage> {
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
    
    operationPromise = operationPromise.then(payload => new CredentialPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<CredentialPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new CredentialPage(this._version, payload, this._solution));
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


export class CredentialPage extends Page<V1, CredentialPayload, CredentialResource, CredentialInstance> {
/**
* Initialize the CredentialPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: CredentialSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of CredentialInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: CredentialPayload): CredentialInstance {
    return new CredentialInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

