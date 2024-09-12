/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Intelligence
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";


export type ServiceHttpMethod = 'GET'|'POST'|'NULL';




/**
 * Options to pass to update a ServiceInstance
 */
export interface ServiceContextUpdateOptions {
  /** The If-Match HTTP request header */
  "ifMatch"?: string;
  /** Instructs the Speech Recognition service to automatically transcribe all recordings made on the account. */
  "autoTranscribe"?: boolean;
  /** Data logging allows Twilio to improve the quality of the speech recognition & language understanding services through using customer data to refine, fine tune and evaluate machine learning models. Note: Data logging cannot be activated via API, only via www.twilio.com, as it requires additional consent. */
  "dataLogging"?: boolean;
  /** A human readable description of this resource, up to 64 characters. */
  "friendlyName"?: string;
  /** Provides a unique and addressable name to be assigned to this Service, assigned by the developer, to be optionally used in addition to SID. */
  "uniqueName"?: string;
  /** Instructs the Speech Recognition service to automatically redact PII from all transcripts made on this service. */
  "autoRedaction"?: boolean;
  /** Instructs the Speech Recognition service to automatically redact PII from all transcripts media made on this service. The auto_redaction flag must be enabled, results in error otherwise. */
  "mediaRedaction"?: boolean;
  /** The URL Twilio will request when executing the Webhook. */
  "webhookUrl"?: string;
  /**  */
  "webhookHttpMethod"?: ServiceHttpMethod;
}

/**
 * Options to pass to create a ServiceInstance
 */
export interface ServiceListInstanceCreateOptions {
  /** Provides a unique and addressable name to be assigned to this Service, assigned by the developer, to be optionally used in addition to SID. */
  "uniqueName": string;
  /** Instructs the Speech Recognition service to automatically transcribe all recordings made on the account. */
  "autoTranscribe"?: boolean;
  /** Data logging allows Twilio to improve the quality of the speech recognition & language understanding services through using customer data to refine, fine tune and evaluate machine learning models. Note: Data logging cannot be activated via API, only via www.twilio.com, as it requires additional consent. */
  "dataLogging"?: boolean;
  /** A human readable description of this resource, up to 64 characters. */
  "friendlyName"?: string;
  /** The language code set during Service creation determines the Transcription language for all call recordings processed by that Service. The default is en-US if no language code is set. A Service can only support one language code, and it cannot be updated once it\\\'s set. */
  "languageCode"?: string;
  /** Instructs the Speech Recognition service to automatically redact PII from all transcripts made on this service. */
  "autoRedaction"?: boolean;
  /** Instructs the Speech Recognition service to automatically redact PII from all transcripts media made on this service. The auto_redaction flag must be enabled, results in error otherwise. */
  "mediaRedaction"?: boolean;
  /** The URL Twilio will request when executing the Webhook. */
  "webhookUrl"?: string;
  /**  */
  "webhookHttpMethod"?: ServiceHttpMethod;
}
/**
 * Options to pass to each
 */
export interface ServiceListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ServiceInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ServiceListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ServiceListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface ServiceContext {

  /**
   * Remove a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>

  /**
   * Update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ServiceContextSolution {
  "sid": string;
}

export class ServiceContextImpl implements ServiceContext {
  protected _solution: ServiceContextSolution;
  protected _uri: string;


  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { sid,  };
    this._uri = `/Services/${sid}`;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: ServiceContextUpdateOptions | ((error: Error | null, item?: ServiceInstance) => any), callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["autoTranscribe"] !== undefined)
    data["AutoTranscribe"] = serialize.bool(params["autoTranscribe"]);
    if (params["dataLogging"] !== undefined)
    data["DataLogging"] = serialize.bool(params["dataLogging"]);
    if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["uniqueName"] !== undefined)
    data["UniqueName"] = params["uniqueName"];
    if (params["autoRedaction"] !== undefined)
    data["AutoRedaction"] = serialize.bool(params["autoRedaction"]);
    if (params["mediaRedaction"] !== undefined)
    data["MediaRedaction"] = serialize.bool(params["mediaRedaction"]);
    if (params["webhookUrl"] !== undefined)
    data["WebhookUrl"] = params["webhookUrl"];
    if (params["webhookHttpMethod"] !== undefined)
    data["WebhookHttpMethod"] = params["webhookHttpMethod"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"
    if (params["ifMatch"] !== undefined) headers["If-Match"] = params["ifMatch"];

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload, instance._solution.sid));
    

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


interface ServicePayload extends TwilioResponsePayload {
    services: ServiceResource[];
}

interface ServiceResource {
  account_sid: string;
  auto_redaction: boolean;
  media_redaction: boolean;
  auto_transcribe: boolean;
  data_logging: boolean;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  language_code: string;
  sid: string;
  unique_name: string;
  url: string;
  webhook_url: string;
  webhook_http_method: ServiceHttpMethod;
  read_only_attached_operator_sids: Array<string>;
  version: number;
}

export class ServiceInstance {
  protected _solution: ServiceContextSolution;
  protected _context?: ServiceContext;

  constructor(protected _version: V2, payload: ServiceResource, sid?: string) {
    this.accountSid = (payload.account_sid);
    this.autoRedaction = (payload.auto_redaction);
    this.mediaRedaction = (payload.media_redaction);
    this.autoTranscribe = (payload.auto_transcribe);
    this.dataLogging = (payload.data_logging);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.friendlyName = (payload.friendly_name);
    this.languageCode = (payload.language_code);
    this.sid = (payload.sid);
    this.uniqueName = (payload.unique_name);
    this.url = (payload.url);
    this.webhookUrl = (payload.webhook_url);
    this.webhookHttpMethod = (payload.webhook_http_method);
    this.readOnlyAttachedOperatorSids = (payload.read_only_attached_operator_sids);
    this.version = deserialize.integer(payload.version);

    this._solution = { sid: sid || this.sid,  };
  }

  /**
   * The unique SID identifier of the Account the Service belongs to.
   */
  accountSid: string;
  /**
   * Instructs the Speech Recognition service to automatically redact PII from all transcripts made on this service.
   */
  autoRedaction: boolean;
  /**
   * Instructs the Speech Recognition service to automatically redact PII from all transcripts media made on this service. The auto_redaction flag must be enabled, results in error otherwise.
   */
  mediaRedaction: boolean;
  /**
   * Instructs the Speech Recognition service to automatically transcribe all recordings made on the account.
   */
  autoTranscribe: boolean;
  /**
   * Data logging allows Twilio to improve the quality of the speech recognition & language understanding services through using customer data to refine, fine tune and evaluate machine learning models. Note: Data logging cannot be activated via API, only via www.twilio.com, as it requires additional consent.
   */
  dataLogging: boolean;
  /**
   * The date that this Service was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The date that this Service was updated, given in ISO 8601 format.
   */
  dateUpdated: Date;
  /**
   * A human readable description of this resource, up to 64 characters.
   */
  friendlyName: string;
  /**
   * The language code set during Service creation determines the Transcription language for all call recordings processed by that Service. The default is en-US if no language code is set. A Service can only support one language code, and it cannot be updated once it\'s set.
   */
  languageCode: string;
  /**
   * A 34 character string that uniquely identifies this Service.
   */
  sid: string;
  /**
   * Provides a unique and addressable name to be assigned to this Service, assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName: string;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * The URL Twilio will request when executing the Webhook.
   */
  webhookUrl: string;
  webhookHttpMethod: ServiceHttpMethod;
  /**
   * Operator sids attached to this service, read only
   */
  readOnlyAttachedOperatorSids: Array<string>;
  /**
   * The version number of this Service.
   */
  version: number;

  private get _proxy(): ServiceContext {
    this._context = this._context || new ServiceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a ServiceInstance
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
   * Fetch a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  fetch(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>

    {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ServiceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  update(callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;
  /**
   * Update a ServiceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  update(params: ServiceContextUpdateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;

    update(params?: any, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>
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
      autoRedaction: this.autoRedaction,
      mediaRedaction: this.mediaRedaction,
      autoTranscribe: this.autoTranscribe,
      dataLogging: this.dataLogging,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      languageCode: this.languageCode,
      sid: this.sid,
      uniqueName: this.uniqueName,
      url: this.url,
      webhookUrl: this.webhookUrl,
      webhookHttpMethod: this.webhookHttpMethod,
      readOnlyAttachedOperatorSids: this.readOnlyAttachedOperatorSids,
      version: this.version,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface ServiceSolution {
}

export interface ServiceListInstance {
  _version: V2;
  _solution: ServiceSolution;
  _uri: string;

  (sid: string, ): ServiceContext;
  get(sid: string, ): ServiceContext;








  /**
   * Create a ServiceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ServiceInstance
   */
  create(params: ServiceListInstanceCreateOptions, callback?: (error: Error | null, item?: ServiceInstance) => any): Promise<ServiceInstance>;



  /**
   * Streams ServiceInstance records from the API.
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
   * @param { ServiceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  each(params: ServiceListInstanceEachOptions, callback?: (item: ServiceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  /**
   * Lists ServiceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  list(params: ServiceListInstanceOptions, callback?: (error: Error | null, items: ServiceInstance[]) => any): Promise<ServiceInstance[]>;
  /**
   * Retrieve a single page of ServiceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ServiceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;
  page(params: ServiceListInstancePageOptions, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ServiceListInstance(version: V2): ServiceListInstance {
  const instance = ((sid, ) => instance.get(sid, )) as ServiceListInstance;

  instance.get = function get(sid, ): ServiceContext {
    return new ServiceContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Services`;

  instance.create = function create(params: ServiceListInstanceCreateOptions, callback?: (error: Error | null, items: ServiceInstance) => any): Promise<ServiceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["uniqueName"] === null || params["uniqueName"] === undefined) {
      throw new Error('Required parameter "params[\'uniqueName\']" missing.');
    }

    let data: any = {};

    
        
    data["UniqueName"] = params["uniqueName"];
    if (params["autoTranscribe"] !== undefined)
    data["AutoTranscribe"] = serialize.bool(params["autoTranscribe"]);
    if (params["dataLogging"] !== undefined)
    data["DataLogging"] = serialize.bool(params["dataLogging"]);
    if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["languageCode"] !== undefined)
    data["LanguageCode"] = params["languageCode"];
    if (params["autoRedaction"] !== undefined)
    data["AutoRedaction"] = serialize.bool(params["autoRedaction"]);
    if (params["mediaRedaction"] !== undefined)
    data["MediaRedaction"] = serialize.bool(params["mediaRedaction"]);
    if (params["webhookUrl"] !== undefined)
    data["WebhookUrl"] = params["webhookUrl"];
    if (params["webhookHttpMethod"] !== undefined)
    data["WebhookHttpMethod"] = params["webhookHttpMethod"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ServiceInstance(operationVersion, payload));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: ServiceListInstancePageOptions | ((error: Error | null, items: ServicePage) => any), callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage> {
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
    
    operationPromise = operationPromise.then(payload => new ServicePage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: ServicePage) => any): Promise<ServicePage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new ServicePage(instance._version, payload, instance._solution));
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

export class ServicePage extends Page<V2, ServicePayload, ServiceResource, ServiceInstance> {
/**
* Initialize the ServicePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2, response: Response<string>, solution: ServiceSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ServiceInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ServiceResource): ServiceInstance {
    return new ServiceInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

