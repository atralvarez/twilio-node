/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
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
import { WorkflowCumulativeStatisticsListInstance } from "./workflow/workflowCumulativeStatistics";
import { WorkflowRealTimeStatisticsListInstance } from "./workflow/workflowRealTimeStatistics";
import { WorkflowStatisticsListInstance } from "./workflow/workflowStatistics";

/**
 * Options to pass to update a WorkflowInstance
 */
export interface WorkflowContextUpdateOptions {
  /** A descriptive string that you create to describe the Workflow resource. For example, `Inbound Call Workflow` or `2014 Outbound Campaign`. */
  friendlyName?: string;
  /** The URL from your application that will process task assignment events. See [Handling Task Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for more details. */
  assignmentCallbackUrl?: string;
  /** The URL that we should call when a call to the `assignment_callback_url` fails. */
  fallbackAssignmentCallbackUrl?: string;
  /** A JSON string that contains the rules to apply to the Workflow. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information. */
  configuration?: string;
  /** How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`. */
  taskReservationTimeout?: number;
  /** Whether or not to re-evaluate Tasks. The default is `false`, which means Tasks in the Workflow will not be processed through the assignment loop again. */
  reEvaluateTasks?: string;
}

/**
 * Options to pass to create a WorkflowInstance
 */
export interface WorkflowListInstanceCreateOptions {
  /** A descriptive string that you create to describe the Workflow resource. For example, `Inbound Call Workflow` or `2014 Outbound Campaign`. */
  friendlyName: string;
  /** A JSON string that contains the rules to apply to the Workflow. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information. */
  configuration: string;
  /** The URL from your application that will process task assignment events. See [Handling Task Assignment Callback](https://www.twilio.com/docs/taskrouter/handle-assignment-callbacks) for more details. */
  assignmentCallbackUrl?: string;
  /** The URL that we should call when a call to the `assignment_callback_url` fails. */
  fallbackAssignmentCallbackUrl?: string;
  /** How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`. */
  taskReservationTimeout?: number;
}
/**
 * Options to pass to each
 */
export interface WorkflowListInstanceEachOptions {
  /** The `friendly_name` of the Workflow resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface WorkflowListInstanceOptions {
  /** The `friendly_name` of the Workflow resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface WorkflowListInstancePageOptions {
  /** The `friendly_name` of the Workflow resources to read. */
  friendlyName?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface WorkflowContext {
  cumulativeStatistics: WorkflowCumulativeStatisticsListInstance;
  realTimeStatistics: WorkflowRealTimeStatisticsListInstance;
  statistics: WorkflowStatisticsListInstance;

  /**
   * Remove a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance>;

  /**
   * Update a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowInstance
   */
  update(
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance>;
  /**
   * Update a WorkflowInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowInstance
   */
  update(
    params: WorkflowContextUpdateOptions,
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkflowContextSolution {
  workspaceSid: string;
  sid: string;
}

export class WorkflowContextImpl implements WorkflowContext {
  protected _solution: WorkflowContextSolution;
  protected _uri: string;

  protected _cumulativeStatistics?: WorkflowCumulativeStatisticsListInstance;
  protected _realTimeStatistics?: WorkflowRealTimeStatisticsListInstance;
  protected _statistics?: WorkflowStatisticsListInstance;

  constructor(protected _version: V1, workspaceSid: string, sid: string) {
    if (!isValidPathParam(workspaceSid)) {
      throw new Error("Parameter 'workspaceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { workspaceSid, sid };
    this._uri = `/Workspaces/${workspaceSid}/Workflows/${sid}`;
  }

  get cumulativeStatistics(): WorkflowCumulativeStatisticsListInstance {
    this._cumulativeStatistics =
      this._cumulativeStatistics ||
      WorkflowCumulativeStatisticsListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._cumulativeStatistics;
  }

  get realTimeStatistics(): WorkflowRealTimeStatisticsListInstance {
    this._realTimeStatistics =
      this._realTimeStatistics ||
      WorkflowRealTimeStatisticsListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._realTimeStatistics;
  }

  get statistics(): WorkflowStatisticsListInstance {
    this._statistics =
      this._statistics ||
      WorkflowStatisticsListInstance(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._statistics;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance> {
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
        new WorkflowInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | WorkflowContextUpdateOptions
      | ((error: Error | null, item?: WorkflowInstance) => any),
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["assignmentCallbackUrl"] !== undefined)
      data["AssignmentCallbackUrl"] = params["assignmentCallbackUrl"];
    if (params["fallbackAssignmentCallbackUrl"] !== undefined)
      data["FallbackAssignmentCallbackUrl"] =
        params["fallbackAssignmentCallbackUrl"];
    if (params["configuration"] !== undefined)
      data["Configuration"] = params["configuration"];
    if (params["taskReservationTimeout"] !== undefined)
      data["TaskReservationTimeout"] = params["taskReservationTimeout"];
    if (params["reEvaluateTasks"] !== undefined)
      data["ReEvaluateTasks"] = params["reEvaluateTasks"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkflowInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid,
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

interface WorkflowPayload extends TwilioResponsePayload {
  workflows: WorkflowResource[];
}

interface WorkflowResource {
  account_sid: string;
  assignment_callback_url: string;
  configuration: string;
  date_created: Date;
  date_updated: Date;
  document_content_type: string;
  fallback_assignment_callback_url: string;
  friendly_name: string;
  sid: string;
  task_reservation_timeout: number;
  workspace_sid: string;
  url: string;
  links: Record<string, string>;
}

export class WorkflowInstance {
  protected _solution: WorkflowContextSolution;
  protected _context?: WorkflowContext;

  constructor(
    protected _version: V1,
    payload: WorkflowResource,
    workspaceSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.assignmentCallbackUrl = payload.assignment_callback_url;
    this.configuration = payload.configuration;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.documentContentType = payload.document_content_type;
    this.fallbackAssignmentCallbackUrl =
      payload.fallback_assignment_callback_url;
    this.friendlyName = payload.friendly_name;
    this.sid = payload.sid;
    this.taskReservationTimeout = deserialize.integer(
      payload.task_reservation_timeout
    );
    this.workspaceSid = payload.workspace_sid;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { workspaceSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
   */
  accountSid: string;
  /**
   * The URL that we call when a task managed by the Workflow is assigned to a Worker. See Assignment Callback URL for more information.
   */
  assignmentCallbackUrl: string;
  /**
   * A JSON string that contains the Workflow\'s configuration. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
   */
  configuration: string;
  /**
   * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The MIME type of the document.
   */
  documentContentType: string;
  /**
   * The URL that we call when a call to the `assignment_callback_url` fails.
   */
  fallbackAssignmentCallbackUrl: string;
  /**
   * The string that you assigned to describe the Workflow resource. For example, `Customer Support` or `2014 Election Campaign`.
   */
  friendlyName: string;
  /**
   * The unique string that we created to identify the Workflow resource.
   */
  sid: string;
  /**
   * How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
   */
  taskReservationTimeout: number;
  /**
   * The SID of the Workspace that contains the Workflow.
   */
  workspaceSid: string;
  /**
   * The absolute URL of the Workflow resource.
   */
  url: string;
  /**
   * The URLs of related resources.
   */
  links: Record<string, string>;

  private get _proxy(): WorkflowContext {
    this._context =
      this._context ||
      new WorkflowContextImpl(
        this._version,
        this._solution.workspaceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowInstance
   */
  fetch(
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowInstance
   */
  update(
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance>;
  /**
   * Update a WorkflowInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowInstance
   */
  update(
    params: WorkflowContextUpdateOptions,
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the cumulativeStatistics.
   */
  cumulativeStatistics(): WorkflowCumulativeStatisticsListInstance {
    return this._proxy.cumulativeStatistics;
  }

  /**
   * Access the realTimeStatistics.
   */
  realTimeStatistics(): WorkflowRealTimeStatisticsListInstance {
    return this._proxy.realTimeStatistics;
  }

  /**
   * Access the statistics.
   */
  statistics(): WorkflowStatisticsListInstance {
    return this._proxy.statistics;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      assignmentCallbackUrl: this.assignmentCallbackUrl,
      configuration: this.configuration,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      documentContentType: this.documentContentType,
      fallbackAssignmentCallbackUrl: this.fallbackAssignmentCallbackUrl,
      friendlyName: this.friendlyName,
      sid: this.sid,
      taskReservationTimeout: this.taskReservationTimeout,
      workspaceSid: this.workspaceSid,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface WorkflowSolution {
  workspaceSid: string;
}

export interface WorkflowListInstance {
  _version: V1;
  _solution: WorkflowSolution;
  _uri: string;

  (sid: string): WorkflowContext;
  get(sid: string): WorkflowContext;

  /**
   * Create a WorkflowInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WorkflowInstance
   */
  create(
    params: WorkflowListInstanceCreateOptions,
    callback?: (error: Error | null, item?: WorkflowInstance) => any
  ): Promise<WorkflowInstance>;

  /**
   * Streams WorkflowInstance records from the API.
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
   * @param { WorkflowListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: WorkflowListInstanceEachOptions,
    callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of WorkflowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: WorkflowPage) => any
  ): Promise<WorkflowPage>;
  /**
   * Lists WorkflowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkflowListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: WorkflowInstance[]) => any
  ): Promise<WorkflowInstance[]>;
  list(
    params: WorkflowListInstanceOptions,
    callback?: (error: Error | null, items: WorkflowInstance[]) => any
  ): Promise<WorkflowInstance[]>;
  /**
   * Retrieve a single page of WorkflowInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkflowListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: WorkflowPage) => any
  ): Promise<WorkflowPage>;
  page(
    params: WorkflowListInstancePageOptions,
    callback?: (error: Error | null, items: WorkflowPage) => any
  ): Promise<WorkflowPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WorkflowListInstance(
  version: V1,
  workspaceSid: string
): WorkflowListInstance {
  if (!isValidPathParam(workspaceSid)) {
    throw new Error("Parameter 'workspaceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as WorkflowListInstance;

  instance.get = function get(sid): WorkflowContext {
    return new WorkflowContextImpl(version, workspaceSid, sid);
  };

  instance._version = version;
  instance._solution = { workspaceSid };
  instance._uri = `/Workspaces/${workspaceSid}/Workflows`;

  instance.create = function create(
    params: WorkflowListInstanceCreateOptions,
    callback?: (error: Error | null, items: WorkflowInstance) => any
  ): Promise<WorkflowInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["friendlyName"] === null ||
      params["friendlyName"] === undefined
    ) {
      throw new Error("Required parameter \"params['friendlyName']\" missing.");
    }

    if (
      params["configuration"] === null ||
      params["configuration"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['configuration']\" missing."
      );
    }

    let data: any = {};

    data["FriendlyName"] = params["friendlyName"];

    data["Configuration"] = params["configuration"];
    if (params["assignmentCallbackUrl"] !== undefined)
      data["AssignmentCallbackUrl"] = params["assignmentCallbackUrl"];
    if (params["fallbackAssignmentCallbackUrl"] !== undefined)
      data["FallbackAssignmentCallbackUrl"] =
        params["fallbackAssignmentCallbackUrl"];
    if (params["taskReservationTimeout"] !== undefined)
      data["TaskReservationTimeout"] = params["taskReservationTimeout"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new WorkflowInstance(
          operationVersion,
          payload,
          instance._solution.workspaceSid
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
      | WorkflowListInstancePageOptions
      | ((error: Error | null, items: WorkflowPage) => any),
    callback?: (error: Error | null, items: WorkflowPage) => any
  ): Promise<WorkflowPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
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
        new WorkflowPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: WorkflowPage) => any
  ): Promise<WorkflowPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new WorkflowPage(instance._version, payload, instance._solution)
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

export class WorkflowPage extends Page<
  V1,
  WorkflowPayload,
  WorkflowResource,
  WorkflowInstance
> {
  /**
   * Initialize the WorkflowPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: WorkflowSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of WorkflowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkflowResource): WorkflowInstance {
    return new WorkflowInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
