/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Proxy
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../../base/Page";
import Response from "../../../../../../http/response";
import V1 from "../../../../V1";
const deserialize = require("../../../../../../base/deserialize");
const serialize = require("../../../../../../base/serialize");
import { isValidPathParam } from "../../../../../../base/utility";


export type MessageInteractionResourceStatus = 'accepted'|'answered'|'busy'|'canceled'|'completed'|'deleted'|'delivered'|'delivery-unknown'|'failed'|'in-progress'|'initiated'|'no-answer'|'queued'|'received'|'receiving'|'ringing'|'scheduled'|'sending'|'sent'|'undelivered'|'unknown';

export type MessageInteractionType = 'message'|'voice'|'unknown';



/**
 * Options to pass to create a MessageInteractionInstance
 */
export interface MessageInteractionListInstanceCreateOptions {
  /** The message to send to the participant */
  "body"?: string;
  /** Reserved. Not currently supported. */
  "mediaUrl"?: Array<string>;
}
/**
 * Options to pass to each
 */
export interface MessageInteractionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface MessageInteractionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface MessageInteractionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface MessageInteractionContext {

  /**
   * Fetch a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInteractionInstance
   */
  fetch(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MessageInteractionContextSolution {
  "serviceSid": string;
  "sessionSid": string;
  "participantSid": string;
  "sid": string;
}

export class MessageInteractionContextImpl implements MessageInteractionContext {
  protected _solution: MessageInteractionContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, serviceSid: string, sessionSid: string, participantSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error('Parameter \'serviceSid\' is not valid.');
    }

    if (!isValidPathParam(sessionSid)) {
      throw new Error('Parameter \'sessionSid\' is not valid.');
    }

    if (!isValidPathParam(participantSid)) {
      throw new Error('Parameter \'participantSid\' is not valid.');
    }

    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { serviceSid, sessionSid, participantSid, sid,  };
    this._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Participants/${participantSid}/MessageInteractions/${sid}`;
  }

  fetch(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new MessageInteractionInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sessionSid, instance._solution.participantSid, instance._solution.sid));
    

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


interface MessageInteractionPayload extends TwilioResponsePayload {
    interactions: MessageInteractionResource[];
}

interface MessageInteractionResource {
  sid: string;
  session_sid: string;
  service_sid: string;
  account_sid: string;
  data: string;
  type: MessageInteractionType;
  participant_sid: string;
  inbound_participant_sid: string;
  inbound_resource_sid: string;
  inbound_resource_status: MessageInteractionResourceStatus;
  inbound_resource_type: string;
  inbound_resource_url: string;
  outbound_participant_sid: string;
  outbound_resource_sid: string;
  outbound_resource_status: MessageInteractionResourceStatus;
  outbound_resource_type: string;
  outbound_resource_url: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class MessageInteractionInstance {
  protected _solution: MessageInteractionContextSolution;
  protected _context?: MessageInteractionContext;

  constructor(protected _version: V1, payload: MessageInteractionResource, serviceSid: string, sessionSid: string, participantSid: string, sid?: string) {
    this.sid = (payload.sid);
    this.sessionSid = (payload.session_sid);
    this.serviceSid = (payload.service_sid);
    this.accountSid = (payload.account_sid);
    this.data = (payload.data);
    this.type = (payload.type);
    this.participantSid = (payload.participant_sid);
    this.inboundParticipantSid = (payload.inbound_participant_sid);
    this.inboundResourceSid = (payload.inbound_resource_sid);
    this.inboundResourceStatus = (payload.inbound_resource_status);
    this.inboundResourceType = (payload.inbound_resource_type);
    this.inboundResourceUrl = (payload.inbound_resource_url);
    this.outboundParticipantSid = (payload.outbound_participant_sid);
    this.outboundResourceSid = (payload.outbound_resource_sid);
    this.outboundResourceStatus = (payload.outbound_resource_status);
    this.outboundResourceType = (payload.outbound_resource_type);
    this.outboundResourceUrl = (payload.outbound_resource_url);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = (payload.url);

    this._solution = { serviceSid, sessionSid, participantSid, sid: sid || this.sid,  };
  }

  /**
   * The unique string that we created to identify the MessageInteraction resource.
   */
  sid: string;
  /**
   * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource.
   */
  sessionSid: string;
  /**
   * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
   */
  serviceSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MessageInteraction resource.
   */
  accountSid: string;
  /**
   * A JSON string that includes the message body sent to the participant. (e.g. `{\"body\": \"hello\"}`)
   */
  data: string;
  type: MessageInteractionType;
  /**
   * The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
   */
  participantSid: string;
  /**
   * Always empty for created Message Interactions.
   */
  inboundParticipantSid: string;
  /**
   * Always empty for created Message Interactions.
   */
  inboundResourceSid: string;
  inboundResourceStatus: MessageInteractionResourceStatus;
  /**
   * Always empty for created Message Interactions.
   */
  inboundResourceType: string;
  /**
   * Always empty for created Message Interactions.
   */
  inboundResourceUrl: string;
  /**
   * The SID of the outbound [Participant](https://www.twilio.com/docs/proxy/api/participant) resource.
   */
  outboundParticipantSid: string;
  /**
   * The SID of the outbound [Message](https://www.twilio.com/docs/sms/api/message-resource) resource.
   */
  outboundResourceSid: string;
  outboundResourceStatus: MessageInteractionResourceStatus;
  /**
   * The outbound resource type. This value is always `Message`.
   */
  outboundResourceType: string;
  /**
   * The URL of the Twilio message resource.
   */
  outboundResourceUrl: string;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
   */
  dateCreated: Date;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the MessageInteraction resource.
   */
  url: string;

  private get _proxy(): MessageInteractionContext {
    this._context = this._context || new MessageInteractionContextImpl(this._version, this._solution.serviceSid, this._solution.sessionSid, this._solution.participantSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInteractionInstance
   */
  fetch(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>

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
      sessionSid: this.sessionSid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      data: this.data,
      type: this.type,
      participantSid: this.participantSid,
      inboundParticipantSid: this.inboundParticipantSid,
      inboundResourceSid: this.inboundResourceSid,
      inboundResourceStatus: this.inboundResourceStatus,
      inboundResourceType: this.inboundResourceType,
      inboundResourceUrl: this.inboundResourceUrl,
      outboundParticipantSid: this.outboundParticipantSid,
      outboundResourceSid: this.outboundResourceSid,
      outboundResourceStatus: this.outboundResourceStatus,
      outboundResourceType: this.outboundResourceType,
      outboundResourceUrl: this.outboundResourceUrl,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface MessageInteractionSolution {
  serviceSid: string;
  sessionSid: string;
  participantSid: string;
}

export interface MessageInteractionListInstance {
  _version: V1;
  _solution: MessageInteractionSolution;
  _uri: string;

  (sid: string, ): MessageInteractionContext;
  get(sid: string, ): MessageInteractionContext;




  /**
   * Create a MessageInteractionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInteractionInstance
   */
  create(callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;
  /**
   * Create a MessageInteractionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MessageInteractionInstance
   */
  create(params: MessageInteractionListInstanceCreateOptions, callback?: (error: Error | null, item?: MessageInteractionInstance) => any): Promise<MessageInteractionInstance>;



  /**
   * Streams MessageInteractionInstance records from the API.
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
   * @param { MessageInteractionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): void;
  each(params: MessageInteractionListInstanceEachOptions, callback?: (item: MessageInteractionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of MessageInteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  /**
   * Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageInteractionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: MessageInteractionInstance[]) => any): Promise<MessageInteractionInstance[]>;
  list(params: MessageInteractionListInstanceOptions, callback?: (error: Error | null, items: MessageInteractionInstance[]) => any): Promise<MessageInteractionInstance[]>;
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageInteractionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;
  page(params: MessageInteractionListInstancePageOptions, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function MessageInteractionListInstance(version: V1, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error('Parameter \'serviceSid\' is not valid.');
  }

  if (!isValidPathParam(sessionSid)) {
    throw new Error('Parameter \'sessionSid\' is not valid.');
  }

  if (!isValidPathParam(participantSid)) {
    throw new Error('Parameter \'participantSid\' is not valid.');
  }

  const instance = ((sid, ) => instance.get(sid, )) as MessageInteractionListInstance;

  instance.get = function get(sid, ): MessageInteractionContext {
    return new MessageInteractionContextImpl(version, serviceSid, sessionSid, participantSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid, sessionSid, participantSid,  };
  instance._uri = `/Services/${serviceSid}/Sessions/${sessionSid}/Participants/${participantSid}/MessageInteractions`;

  instance.create = function create(params?: MessageInteractionListInstanceCreateOptions | ((error: Error | null, items: MessageInteractionInstance) => any), callback?: (error: Error | null, items: MessageInteractionInstance) => any): Promise<MessageInteractionInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["body"] !== undefined)
    data["Body"] = params["body"];
    if (params["mediaUrl"] !== undefined)
    data["MediaUrl"] = serialize.map(params["mediaUrl"], (e: string) => (e));

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new MessageInteractionInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sessionSid, instance._solution.participantSid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: MessageInteractionListInstancePageOptions | ((error: Error | null, items: MessageInteractionPage) => any), callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage> {
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
    
    operationPromise = operationPromise.then(payload => new MessageInteractionPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: MessageInteractionPage) => any): Promise<MessageInteractionPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new MessageInteractionPage(instance._version, payload, instance._solution));
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

export class MessageInteractionPage extends Page<V1, MessageInteractionPayload, MessageInteractionResource, MessageInteractionInstance> {
/**
* Initialize the MessageInteractionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: MessageInteractionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of MessageInteractionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: MessageInteractionResource): MessageInteractionInstance {
    return new MessageInteractionInstance(
    this._version,
    payload,
        this._solution.serviceSid,
        this._solution.sessionSid,
        this._solution.participantSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

