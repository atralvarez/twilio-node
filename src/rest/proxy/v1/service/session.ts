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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { InteractionListInstance } from "./session/interaction";
import { ParticipantListInstance } from "./session/participant";


export type SessionMode = 'message-only'|'voice-only'|'voice-and-message';

export type SessionStatus = 'open'|'in-progress'|'closed'|'failed'|'unknown';




/**
 * Options to pass to update a SessionInstance
 */
export interface SessionContextUpdateOptions {
  /** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value. */
  "dateExpiry"?: Date;
  /** The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session\\\'s last Interaction. */
  "ttl"?: number;
  /**  */
  "status"?: SessionStatus;
}

/**
 * Options to pass to create a SessionInstance
 */
export interface SessionListInstanceCreateOptions {
  /** An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. **This value should not have PII.** */
  "uniqueName"?: string;
  /** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value. */
  "dateExpiry"?: Date;
  /** The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session\\\'s last Interaction. */
  "ttl"?: number;
  /**  */
  "mode"?: SessionMode;
  /**  */
  "status"?: SessionStatus;
  /** The Participant objects to include in the new session. */
  "participants"?: Array<any>;
}
/**
 * Options to pass to each
 */
export interface SessionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SessionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SessionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SessionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface SessionContext {
  interactions: InteractionListInstance;
  participants: ParticipantListInstance;

  /**
   * Remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>

  /**
   * Fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  fetch(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>

  /**
   * Update a SessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  update(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * Update a SessionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  update(params: SessionContextUpdateOptions, callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;



  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SessionContextSolution {
  "serviceSid": string;
  "sid": string;
}

export class SessionContextImpl implements SessionContext {
  protected _solution: SessionContextSolution;
  protected _uri: string;

  protected _interactions?: InteractionListInstance;
  protected _participants?: ParticipantListInstance;

  constructor(protected _version: V1, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error('Parameter \'serviceSid\' is not valid.');
    }

    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { serviceSid, sid,  };
    this._uri = `/Services/${serviceSid}/Sessions/${sid}`;
  }

  get interactions(): InteractionListInstance {
    this._interactions = this._interactions || InteractionListInstance(this._version, this._solution.serviceSid, this._solution.sid);
    return this._interactions;
  }

  get participants(): ParticipantListInstance {
    this._participants = this._participants || ParticipantListInstance(this._version, this._solution.serviceSid, this._solution.sid);
    return this._participants;
  }

  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.remove({ uri: instance._uri, method: "delete" });
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new SessionInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: SessionContextUpdateOptions | ((error: Error | null, item?: SessionInstance) => any), callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["dateExpiry"] !== undefined)
    data["DateExpiry"] = serialize.iso8601DateTime(params["dateExpiry"]);
    if (params["ttl"] !== undefined)
    data["Ttl"] = params["ttl"];
    if (params["status"] !== undefined)
    data["Status"] = params["status"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new SessionInstance(operationVersion, payload, instance._solution.serviceSid, instance._solution.sid));
    

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


interface SessionPayload extends TwilioResponsePayload {
    sessions: SessionResource[];
}

interface SessionResource {
  sid: string;
  service_sid: string;
  account_sid: string;
  date_started: Date;
  date_ended: Date;
  date_last_interaction: Date;
  date_expiry: Date;
  unique_name: string;
  status: SessionStatus;
  closed_reason: string;
  ttl: number;
  mode: SessionMode;
  date_created: Date;
  date_updated: Date;
  url: string;
  links: Record<string, string>;
}

export class SessionInstance {
  protected _solution: SessionContextSolution;
  protected _context?: SessionContext;

  constructor(protected _version: V1, payload: SessionResource, serviceSid: string, sid?: string) {
    this.sid = (payload.sid);
    this.serviceSid = (payload.service_sid);
    this.accountSid = (payload.account_sid);
    this.dateStarted = deserialize.iso8601DateTime(payload.date_started);
    this.dateEnded = deserialize.iso8601DateTime(payload.date_ended);
    this.dateLastInteraction = deserialize.iso8601DateTime(payload.date_last_interaction);
    this.dateExpiry = deserialize.iso8601DateTime(payload.date_expiry);
    this.uniqueName = (payload.unique_name);
    this.status = (payload.status);
    this.closedReason = (payload.closed_reason);
    this.ttl = deserialize.integer(payload.ttl);
    this.mode = (payload.mode);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = (payload.url);
    this.links = (payload.links);

    this._solution = { serviceSid, sid: sid || this.sid,  };
  }

  /**
   * The unique string that we created to identify the Session resource.
   */
  sid: string;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/proxy/api/service) the session is associated with.
   */
  serviceSid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Session resource.
   */
  accountSid: string;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session started.
   */
  dateStarted: Date;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session ended.
   */
  dateEnded: Date;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session last had an interaction.
   */
  dateLastInteraction: Date;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If this is value is present, it overrides the `ttl` value.
   */
  dateExpiry: Date;
  /**
   * An application-defined string that uniquely identifies the resource. This value must be 191 characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not have PII.**
   */
  uniqueName: string;
  status: SessionStatus;
  /**
   * The reason the Session ended.
   */
  closedReason: string;
  /**
   * The time, in seconds, when the session will expire. The time is measured from the last Session create or the Session\'s last Interaction.
   */
  ttl: number;
  mode: SessionMode;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
   */
  dateCreated: Date;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the Session resource.
   */
  url: string;
  /**
   * The URLs of resources related to the Session.
   */
  links: Record<string, string>;

  private get _proxy(): SessionContext {
    this._context = this._context || new SessionContextImpl(this._version, this._solution.serviceSid, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a SessionInstance
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
   * Fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  fetch(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>

    {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a SessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  update(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * Update a SessionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  update(params: SessionContextUpdateOptions, callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;

    update(params?: any, callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>
    {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the interactions.
   */
  interactions(): InteractionListInstance {
    return this._proxy.interactions;
  }

  /**
   * Access the participants.
   */
  participants(): ParticipantListInstance {
    return this._proxy.participants;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      serviceSid: this.serviceSid,
      accountSid: this.accountSid,
      dateStarted: this.dateStarted,
      dateEnded: this.dateEnded,
      dateLastInteraction: this.dateLastInteraction,
      dateExpiry: this.dateExpiry,
      uniqueName: this.uniqueName,
      status: this.status,
      closedReason: this.closedReason,
      ttl: this.ttl,
      mode: this.mode,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      links: this.links,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface SessionSolution {
  serviceSid: string;
}

export interface SessionListInstance {
  _version: V1;
  _solution: SessionSolution;
  _uri: string;

  (sid: string, ): SessionContext;
  get(sid: string, ): SessionContext;








  /**
   * Create a SessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  create(callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * Create a SessionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  create(params: SessionListInstanceCreateOptions, callback?: (error: Error | null, item?: SessionInstance) => any): Promise<SessionInstance>;



  /**
   * Streams SessionInstance records from the API.
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
   * @param { SessionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
  each(params: SessionListInstanceEachOptions, callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SessionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
  list(params: SessionListInstanceOptions, callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SessionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  page(params: SessionListInstancePageOptions, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SessionListInstance(version: V1, serviceSid: string): SessionListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error('Parameter \'serviceSid\' is not valid.');
  }

  const instance = ((sid, ) => instance.get(sid, )) as SessionListInstance;

  instance.get = function get(sid, ): SessionContext {
    return new SessionContextImpl(version, serviceSid, sid);
  }

  instance._version = version;
  instance._solution = { serviceSid,  };
  instance._uri = `/Services/${serviceSid}/Sessions`;

  instance.create = function create(params?: SessionListInstanceCreateOptions | ((error: Error | null, items: SessionInstance) => any), callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["uniqueName"] !== undefined)
    data["UniqueName"] = params["uniqueName"];
    if (params["dateExpiry"] !== undefined)
    data["DateExpiry"] = serialize.iso8601DateTime(params["dateExpiry"]);
    if (params["ttl"] !== undefined)
    data["Ttl"] = params["ttl"];
    if (params["mode"] !== undefined)
    data["Mode"] = params["mode"];
    if (params["status"] !== undefined)
    data["Status"] = params["status"];
    if (params["participants"] !== undefined)
    data["Participants"] = serialize.map(params["participants"], (e: any) => serialize.object(e));

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new SessionInstance(operationVersion, payload, instance._solution.serviceSid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: SessionListInstancePageOptions | ((error: Error | null, items: SessionPage) => any), callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage> {
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
    
    operationPromise = operationPromise.then(payload => new SessionPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new SessionPage(instance._version, payload, instance._solution));
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

export class SessionPage extends Page<V1, SessionPayload, SessionResource, SessionInstance> {
/**
* Initialize the SessionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: SessionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SessionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SessionResource): SessionInstance {
    return new SessionInstance(
    this._version,
    payload,
        this._solution.serviceSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

