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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { DocumentPermissionListInstance } from "./document/documentPermission";




/**
 * Options to pass to update a DocumentInstance
 *
 * @property { string } [ifMatch] The If-Match HTTP request header
 * @property { any } [data] A JSON string that represents an arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Document expires and is deleted (time-to-live).
 */
export interface DocumentContextUpdateOptions {
  'ifMatch'?: string;
  'data'?: any;
  'ttl'?: number;
}

/**
 * Options to pass to create a DocumentInstance
 *
 * @property { string } [uniqueName] An application-defined string that uniquely identifies the Sync Document
 * @property { any } [data] A JSON string that represents an arbitrary, schema-less object that the Sync Document stores. Can be up to 16 KiB in length.
 * @property { number } [ttl] How long, [in seconds](https://www.twilio.com/docs/sync/limits#sync-payload-limits), before the Sync Document expires and is deleted (the Sync Document\\\&#39;s time-to-live).
 */
export interface DocumentListInstanceCreateOptions {
  'uniqueName'?: string;
  'data'?: any;
  'ttl'?: number;
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
export interface DocumentListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: DocumentInstance, done: (err?: Error) => void) => void;
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
export interface DocumentListInstanceOptions {
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
export interface DocumentListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface DocumentContext {

  documentPermissions: DocumentPermissionListInstance;

  /**
   * Remove a DocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a DocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentInstance
   */
  fetch(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>


  /**
   * Update a DocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentInstance
   */
  update(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
  /**
   * Update a DocumentInstance
   *
   * @param { DocumentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentInstance
   */
  update(params: DocumentContextUpdateOptions, callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
  update(params?: any, callback?: any): Promise<DocumentInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DocumentContextSolution {
  'serviceSid'?: string;
  'sid'?: string;
}

export class DocumentContextImpl implements DocumentContext {
  protected _solution: DocumentContextSolution;
  protected _uri: string;

  protected _documentPermissions?: DocumentPermissionListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Documents/${sid}`;
  }

  get documentPermissions(): DocumentPermissionListInstance {
    this._documentPermissions = this._documentPermissions || DocumentPermissionListInstance(this._version, this._solution.serviceSid, this._solution.sid);
    return this._documentPermissions;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<DocumentInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new DocumentInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<DocumentInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params['data'] !== undefined) data['Data'] = params['data'];
    if (params['ttl'] !== undefined) data['Ttl'] = params['ttl'];

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (params['ifMatch'] !== undefined) headers['If-Match'] = params['ifMatch'];

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new DocumentInstance(operationVersion, payload, this._solution.serviceSid, this._solution.sid));
    

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

interface DocumentPayload extends DocumentResource, Page.TwilioResponsePayload {
}

interface DocumentResource {
  sid?: string | null;
  unique_name?: string | null;
  account_sid?: string | null;
  service_sid?: string | null;
  url?: string | null;
  links?: object | null;
  revision?: string | null;
  data?: any | null;
  date_expires?: Date | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  created_by?: string | null;
}

export class DocumentInstance {
  protected _solution: DocumentContextSolution;
  protected _context?: DocumentContext;

  constructor(protected _version: V1, payload: DocumentPayload, serviceSid: string, sid?: string) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.revision = payload.revision;
    this.data = payload.data;
    this.dateExpires = deserialize.iso8601DateTime(payload.date_expires);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Sync Service that the resource is associated with
   */
  serviceSid?: string | null;
  /**
   * The absolute URL of the Document resource
   */
  url?: string | null;
  /**
   * The URLs of resources related to the Sync Document
   */
  links?: object | null;
  /**
   * The current revision of the Sync Document, represented by a string identifier
   */
  revision?: string | null;
  /**
   * An arbitrary, schema-less object that the Sync Document stores
   */
  data?: any | null;
  /**
   * The ISO 8601 date and time in GMT when the Sync Document expires
   */
  dateExpires?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The identity of the Sync Document\'s creator
   */
  createdBy?: string | null;

  private get _proxy(): DocumentContext {
    this._context = this._context || new DocumentContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a DocumentInstance
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
   * Fetch a DocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentInstance
   */
  fetch(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentInstance
   */
  update(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
  /**
   * Update a DocumentInstance
   *
   * @param { DocumentContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentInstance
   */
  update(params: DocumentContextUpdateOptions, callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
  update(params?: any, callback?: any): Promise<DocumentInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the documentPermissions.
   */
  documentPermissions(): DocumentPermissionListInstance {
    return this._proxy.documentPermissions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid, 
      uniqueName: this.uniqueName, 
      accountSid: this.accountSid, 
      serviceSid: this.serviceSid, 
      url: this.url, 
      links: this.links, 
      revision: this.revision, 
      data: this.data, 
      dateExpires: this.dateExpires, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      createdBy: this.createdBy
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface DocumentListInstance {
  (sid: string): DocumentContext;
  get(sid: string): DocumentContext;


  /**
   * Create a DocumentInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentInstance
   */
  create(callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
  /**
   * Create a DocumentInstance
   *
   * @param { DocumentListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed DocumentInstance
   */
  create(params: DocumentListInstanceCreateOptions, callback?: (error: Error | null, item?: DocumentInstance) => any): Promise<DocumentInstance>;
  create(params?: any, callback?: any): Promise<DocumentInstance>



  /**
   * Streams DocumentInstance records from the API.
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
  each(callback?: (item: DocumentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams DocumentInstance records from the API.
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
   * @param { DocumentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: DocumentListInstanceEachOptions, callback?: (item: DocumentInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of DocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
  /**
   * Retrieve a single target page of DocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
  getPage(params?: any, callback?: any): Promise<DocumentPage>;
  /**
   * Lists DocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: DocumentInstance[]) => any): Promise<DocumentInstance[]>;
  /**
   * Lists DocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DocumentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: DocumentListInstanceOptions, callback?: (error: Error | null, items: DocumentInstance[]) => any): Promise<DocumentInstance[]>;
  list(params?: any, callback?: any): Promise<DocumentInstance[]>;
  /**
   * Retrieve a single page of DocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
  /**
   * Retrieve a single page of DocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DocumentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: DocumentListInstancePageOptions, callback?: (error: Error | null, items: DocumentPage) => any): Promise<DocumentPage>;
  page(params?: any, callback?: any): Promise<DocumentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DocumentSolution {
  serviceSid?: string;
}

interface DocumentListInstanceImpl extends DocumentListInstance {}
class DocumentListInstanceImpl implements DocumentListInstance {
  _version?: V1;
  _solution?: DocumentSolution;
  _uri?: string;

}

export function DocumentListInstance(version: V1, serviceSid: string): DocumentListInstance {
  const instance = ((sid) => instance.get(sid)) as DocumentListInstanceImpl;

  instance.get = function get(sid): DocumentContext {
    return new DocumentContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Documents`;

  instance.create = function create(params?: any, callback?: any): Promise<DocumentInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};

    if (params['uniqueName'] !== undefined) data['UniqueName'] = params['uniqueName'];
    if (params['data'] !== undefined) data['Data'] = params['data'];
    if (params['ttl'] !== undefined) data['Ttl'] = params['ttl'];

    const headers: any = {};
    headers['Content-Type'] = 'application/x-www-form-urlencoded'

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: 'post', data, headers });
    
    operationPromise = operationPromise.then(payload => new DocumentInstance(operationVersion, payload, this._solution.serviceSid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<DocumentPage> {
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
    
    operationPromise = operationPromise.then(payload => new DocumentPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<DocumentPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new DocumentPage(this._version, payload, this._solution));
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


export class DocumentPage extends Page<V1, DocumentPayload, DocumentResource, DocumentInstance> {
/**
* Initialize the DocumentPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: DocumentSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of DocumentInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: DocumentPayload): DocumentInstance {
    return new DocumentInstance(
    this._version,
    payload,
        this._solution.serviceSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

