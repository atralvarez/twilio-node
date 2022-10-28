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
import Page from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");



type TranscriptionStatus = 'in-progress'|'completed'|'failed';

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
export interface TranscriptionListInstanceEachOptions {
  pageSize?: number;
  callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void;
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
export interface TranscriptionListInstanceOptions {
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
export interface TranscriptionListInstancePageOptions {
  pageSize?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface TranscriptionContext {


  /**
   * Remove a TranscriptionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a TranscriptionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TranscriptionInstance
   */
  fetch(callback?: (error: Error | null, item?: TranscriptionInstance) => any): Promise<TranscriptionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TranscriptionContextSolution {
  'accountSid'?: string;
  'sid'?: string;
}

export class TranscriptionContextImpl implements TranscriptionContext {
  protected _solution: TranscriptionContextSolution;
  protected _uri: string;


  constructor(protected _version: V2010, accountSid: string, sid: string) {
    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Transcriptions/${sid}.json`;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: 'delete' });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<TranscriptionInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new TranscriptionInstance(operationVersion, payload, this._solution.accountSid, this._solution.sid));
    

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

interface TranscriptionPayload extends TranscriptionResource, Page.TwilioResponsePayload {
}

interface TranscriptionResource {
  account_sid?: string | null;
  api_version?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  duration?: string | null;
  price?: number | null;
  price_unit?: string | null;
  recording_sid?: string | null;
  sid?: string | null;
  status?: TranscriptionStatus;
  transcription_text?: string | null;
  type?: string | null;
  uri?: string | null;
}

export class TranscriptionInstance {
  protected _solution: TranscriptionContextSolution;
  protected _context?: TranscriptionContext;

  constructor(protected _version: V2010, payload: TranscriptionPayload, accountSid: string, sid?: string) {
    this.accountSid = payload.account_sid;
    this.apiVersion = payload.api_version;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.duration = payload.duration;
    this.price = payload.price;
    this.priceUnit = payload.price_unit;
    this.recordingSid = payload.recording_sid;
    this.sid = payload.sid;
    this.status = payload.status;
    this.transcriptionText = payload.transcription_text;
    this.type = payload.type;
    this.uri = payload.uri;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The API version used to create the transcription
   */
  apiVersion?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: string | null;
  /**
   * The duration of the transcribed audio in seconds.
   */
  duration?: string | null;
  /**
   * The charge for the transcription
   */
  price?: number | null;
  /**
   * The currency in which price is measured
   */
  priceUnit?: string | null;
  /**
   * The SID that identifies the transcription\'s recording
   */
  recordingSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  status?: TranscriptionStatus;
  /**
   * The text content of the transcription.
   */
  transcriptionText?: string | null;
  /**
   * The transcription type
   */
  type?: string | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;

  private get _proxy(): TranscriptionContext {
    this._context = this._context || new TranscriptionContextImpl(this._version, this._solution.accountSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a TranscriptionInstance
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
   * Fetch a TranscriptionInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed TranscriptionInstance
   */
  fetch(callback?: (error: Error | null, item?: TranscriptionInstance) => any): Promise<TranscriptionInstance>
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
      apiVersion: this.apiVersion, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      duration: this.duration, 
      price: this.price, 
      priceUnit: this.priceUnit, 
      recordingSid: this.recordingSid, 
      sid: this.sid, 
      status: this.status, 
      transcriptionText: this.transcriptionText, 
      type: this.type, 
      uri: this.uri
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface TranscriptionListInstance {
  (sid: string): TranscriptionContext;
  get(sid: string): TranscriptionContext;



  /**
   * Streams TranscriptionInstance records from the API.
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
  each(callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams TranscriptionInstance records from the API.
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
   * @param { TranscriptionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: TranscriptionListInstanceEachOptions, callback?: (item: TranscriptionInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TranscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
  /**
   * Retrieve a single target page of TranscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
  getPage(params?: any, callback?: any): Promise<TranscriptionPage>;
  /**
   * Lists TranscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: TranscriptionInstance[]) => any): Promise<TranscriptionInstance[]>;
  /**
   * Lists TranscriptionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TranscriptionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: TranscriptionListInstanceOptions, callback?: (error: Error | null, items: TranscriptionInstance[]) => any): Promise<TranscriptionInstance[]>;
  list(params?: any, callback?: any): Promise<TranscriptionInstance[]>;
  /**
   * Retrieve a single page of TranscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
  /**
   * Retrieve a single page of TranscriptionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TranscriptionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: TranscriptionListInstancePageOptions, callback?: (error: Error | null, items: TranscriptionPage) => any): Promise<TranscriptionPage>;
  page(params?: any, callback?: any): Promise<TranscriptionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TranscriptionSolution {
  accountSid?: string;
}

interface TranscriptionListInstanceImpl extends TranscriptionListInstance {}
class TranscriptionListInstanceImpl implements TranscriptionListInstance {
  _version?: V2010;
  _solution?: TranscriptionSolution;
  _uri?: string;

}

export function TranscriptionListInstance(version: V2010, accountSid: string): TranscriptionListInstance {
  const instance = ((sid) => instance.get(sid)) as TranscriptionListInstanceImpl;

  instance.get = function get(sid): TranscriptionContext {
    return new TranscriptionContextImpl(version, accountSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Transcriptions.json`;

  instance.page = function page(params?: any, callback?: any): Promise<TranscriptionPage> {
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
    
    operationPromise = operationPromise.then(payload => new TranscriptionPage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<TranscriptionPage> {
    let operationPromise = this._version._domain.twilio.request({method: 'get', uri: targetUrl});

    operationPromise = operationPromise.then(payload => new TranscriptionPage(this._version, payload, this._solution));
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


export class TranscriptionPage extends Page<V2010, TranscriptionPayload, TranscriptionResource, TranscriptionInstance> {
/**
* Initialize the TranscriptionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: TranscriptionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of TranscriptionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: TranscriptionPayload): TranscriptionInstance {
    return new TranscriptionInstance(
    this._version,
    payload,
        this._solution.accountSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

