/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Assistants
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
import { MessageListInstance } from "./session/message";

/**
 * Options to pass to each
 */
export interface SessionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
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
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SessionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SessionContext {
  messages: MessageListInstance;

  /**
   * Fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SessionContextSolution {
  id: string;
}

export class SessionContextImpl implements SessionContext {
  protected _solution: SessionContextSolution;
  protected _uri: string;

  protected _messages?: MessageListInstance;

  constructor(protected _version: V1, id: string) {
    if (!isValidPathParam(id)) {
      throw new Error("Parameter 'id' is not valid.");
    }

    this._solution = { id };
    this._uri = `/Sessions/${id}`;
  }

  get messages(): MessageListInstance {
    this._messages =
      this._messages || MessageListInstance(this._version, this._solution.id);
    return this._messages;
  }

  fetch(
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SessionInstance(operationVersion, payload, instance._solution.id)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
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
  id: string;
  account_sid: string;
  assistant_id: string;
  verified: boolean;
  identity: string;
  date_created: Date;
  date_updated: Date;
}

export class SessionInstance {
  protected _solution: SessionContextSolution;
  protected _context?: SessionContext;

  constructor(protected _version: V1, payload: SessionResource, id?: string) {
    this.id = payload.id;
    this.accountSid = payload.account_sid;
    this.assistantId = payload.assistant_id;
    this.verified = payload.verified;
    this.identity = payload.identity;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);

    this._solution = { id: id || this.id };
  }

  /**
   * The Session ID.
   */
  id: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Session resource.
   */
  accountSid: string;
  /**
   * The Assistant ID.
   */
  assistantId: string;
  /**
   * True if the session is verified.
   */
  verified: boolean;
  /**
   * The unique identity of user for the session.
   */
  identity: string;
  /**
   * The date and time in GMT when the Session was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Session was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  private get _proxy(): SessionContext {
    this._context =
      this._context || new SessionContextImpl(this._version, this._solution.id);
    return this._context;
  }

  /**
   * Fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SessionInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SessionInstance) => any
  ): Promise<SessionInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the messages.
   */
  messages(): MessageListInstance {
    return this._proxy.messages;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      id: this.id,
      accountSid: this.accountSid,
      assistantId: this.assistantId,
      verified: this.verified,
      identity: this.identity,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SessionSolution {}

export interface SessionListInstance {
  _version: V1;
  _solution: SessionSolution;
  _uri: string;

  (id: string): SessionContext;
  get(id: string): SessionContext;

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
  each(
    callback?: (item: SessionInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: SessionListInstanceEachOptions,
    callback?: (item: SessionInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage>;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SessionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SessionInstance[]) => any
  ): Promise<SessionInstance[]>;
  list(
    params: SessionListInstanceOptions,
    callback?: (error: Error | null, items: SessionInstance[]) => any
  ): Promise<SessionInstance[]>;
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
  page(
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage>;
  page(
    params: SessionListInstancePageOptions,
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SessionListInstance(version: V1): SessionListInstance {
  const instance = ((id) => instance.get(id)) as SessionListInstance;

  instance.get = function get(id): SessionContext {
    return new SessionContextImpl(version, id);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Sessions`;

  instance.page = function page(
    params?:
      | SessionListInstancePageOptions
      | ((error: Error | null, items: SessionPage) => any),
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SessionPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SessionPage) => any
  ): Promise<SessionPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SessionPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class SessionPage extends Page<
  V1,
  SessionPayload,
  SessionResource,
  SessionInstance
> {
  /**
   * Initialize the SessionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: SessionSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SessionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SessionResource): SessionInstance {
    return new SessionInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
