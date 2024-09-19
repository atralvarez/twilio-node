/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Serverless
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to create a DeploymentInstance
 */
export interface DeploymentListInstanceCreateOptions {
  /** The SID of the Build for the Deployment. */
  buildSid?: string;
  /** Whether the Deployment is a plugin. */
  isPlugin?: boolean;
}
/**
 * Options to pass to each
 */
export interface DeploymentListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface DeploymentListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface DeploymentListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface DeploymentContext {
  /**
   * Fetch a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DeploymentContextSolution {
  serviceSid: string;
  environmentSid: string;
  sid: string;
}

export class DeploymentContextImpl implements DeploymentContext {
  protected _solution: DeploymentContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    serviceSid: string,
    environmentSid: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(environmentSid)) {
      throw new Error("Parameter 'environmentSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, environmentSid, sid };
    this._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Deployments/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeploymentInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.environmentSid,
          instance._solution.sid
        )
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

interface DeploymentPayload extends TwilioResponsePayload {
  deployments: DeploymentResource[];
}

interface DeploymentResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  environment_sid: string;
  build_sid: string;
  date_created: Date;
  date_updated: Date;
  url: string;
}

export class DeploymentInstance {
  protected _solution: DeploymentContextSolution;
  protected _context?: DeploymentContext;

  constructor(
    protected _version: V1,
    payload: DeploymentResource,
    serviceSid: string,
    environmentSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.environmentSid = payload.environment_sid;
    this.buildSid = payload.build_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { serviceSid, environmentSid, sid: sid || this.sid };
  }

  /**
   * The unique string that we created to identify the Deployment resource.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Deployment resource.
   */
  accountSid: string;
  /**
   * The SID of the Service that the Deployment resource is associated with.
   */
  serviceSid: string;
  /**
   * The SID of the Environment for the Deployment.
   */
  environmentSid: string;
  /**
   * The SID of the Build for the deployment.
   */
  buildSid: string;
  /**
   * The date and time in GMT when the Deployment resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Deployment resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The absolute URL of the Deployment resource.
   */
  url: string;

  private get _proxy(): DeploymentContext {
    this._context =
      this._context ||
      new DeploymentContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.environmentSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance> {
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
      environmentSid: this.environmentSid,
      buildSid: this.buildSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DeploymentSolution {
  serviceSid: string;
  environmentSid: string;
}

export interface DeploymentListInstance {
  _version: V1;
  _solution: DeploymentSolution;
  _uri: string;

  (sid: string): DeploymentContext;
  get(sid: string): DeploymentContext;

  /**
   * Create a DeploymentInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  create(
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance>;
  /**
   * Create a DeploymentInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DeploymentInstance
   */
  create(
    params: DeploymentListInstanceCreateOptions,
    callback?: (error: Error | null, item?: DeploymentInstance) => any
  ): Promise<DeploymentInstance>;

  /**
   * Streams DeploymentInstance records from the API.
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
   * @param { DeploymentListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: DeploymentListInstanceEachOptions,
    callback?: (item: DeploymentInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: DeploymentPage) => any
  ): Promise<DeploymentPage>;
  /**
   * Lists DeploymentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeploymentListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: DeploymentInstance[]) => any
  ): Promise<DeploymentInstance[]>;
  list(
    params: DeploymentListInstanceOptions,
    callback?: (error: Error | null, items: DeploymentInstance[]) => any
  ): Promise<DeploymentInstance[]>;
  /**
   * Retrieve a single page of DeploymentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { DeploymentListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: DeploymentPage) => any
  ): Promise<DeploymentPage>;
  page(
    params: DeploymentListInstancePageOptions,
    callback?: (error: Error | null, items: DeploymentPage) => any
  ): Promise<DeploymentPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DeploymentListInstance(
  version: V1,
  serviceSid: string,
  environmentSid: string
): DeploymentListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(environmentSid)) {
    throw new Error("Parameter 'environmentSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as DeploymentListInstance;

  instance.get = function get(sid): DeploymentContext {
    return new DeploymentContextImpl(version, serviceSid, environmentSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, environmentSid };
  instance._uri = `/Services/${serviceSid}/Environments/${environmentSid}/Deployments`;

  instance.create = function create(
    params?:
      | DeploymentListInstanceCreateOptions
      | ((error: Error | null, items: DeploymentInstance) => any),
    callback?: (error: Error | null, items: DeploymentInstance) => any
  ): Promise<DeploymentInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["buildSid"] !== undefined) data["BuildSid"] = params["buildSid"];
    if (params["isPlugin"] !== undefined)
      data["IsPlugin"] = serialize.bool(params["isPlugin"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeploymentInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.environmentSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | DeploymentListInstancePageOptions
      | ((error: Error | null, items: DeploymentPage) => any),
    callback?: (error: Error | null, items: DeploymentPage) => any
  ): Promise<DeploymentPage> {
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

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DeploymentPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: DeploymentPage) => any
  ): Promise<DeploymentPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new DeploymentPage(instance._version, payload, instance._solution)
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

export class DeploymentPage extends Page<
  V1,
  DeploymentPayload,
  DeploymentResource,
  DeploymentInstance
> {
  /**
   * Initialize the DeploymentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: DeploymentSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of DeploymentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DeploymentResource): DeploymentInstance {
    return new DeploymentInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.environmentSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
