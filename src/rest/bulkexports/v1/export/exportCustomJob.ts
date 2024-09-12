/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
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



/**
 * Options to pass to create a ExportCustomJobInstance
 */
export interface ExportCustomJobListInstanceCreateOptions {
  /** The start day for the custom export specified as a string in the format of yyyy-mm-dd */
  "startDay": string;
  /** The end day for the custom export specified as a string in the format of yyyy-mm-dd. End day is inclusive and must be 2 days earlier than the current UTC day. */
  "endDay": string;
  /** The friendly name specified when creating the job */
  "friendlyName": string;
  /** The optional webhook url called on completion of the job. If this is supplied, `WebhookMethod` must also be supplied. If you set neither webhook nor email, you will have to check your job\\\'s status manually. */
  "webhookUrl"?: string;
  /** This is the method used to call the webhook on completion of the job. If this is supplied, `WebhookUrl` must also be supplied. */
  "webhookMethod"?: string;
  /** The optional email to send the completion notification to. You can set both webhook, and email, or one or the other. If you set neither, the job will run but you will have to query to determine your job\\\'s status. */
  "email"?: string;
}
/**
 * Options to pass to each
 */
export interface ExportCustomJobListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ExportCustomJobInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ExportCustomJobListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ExportCustomJobListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}



export interface ExportCustomJobSolution {
  resourceType: string;
}

export interface ExportCustomJobListInstance {
  _version: V1;
  _solution: ExportCustomJobSolution;
  _uri: string;



  /**
   * Create a ExportCustomJobInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ExportCustomJobInstance
   */
  create(params: ExportCustomJobListInstanceCreateOptions, callback?: (error: Error | null, item?: ExportCustomJobInstance) => any): Promise<ExportCustomJobInstance>;



  /**
   * Streams ExportCustomJobInstance records from the API.
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
   * @param { ExportCustomJobListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: ExportCustomJobInstance, done: (err?: Error) => void) => void): void;
  each(params: ExportCustomJobListInstanceEachOptions, callback?: (item: ExportCustomJobInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of ExportCustomJobInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage>;
  /**
   * Lists ExportCustomJobInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExportCustomJobListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ExportCustomJobInstance[]) => any): Promise<ExportCustomJobInstance[]>;
  list(params: ExportCustomJobListInstanceOptions, callback?: (error: Error | null, items: ExportCustomJobInstance[]) => any): Promise<ExportCustomJobInstance[]>;
  /**
   * Retrieve a single page of ExportCustomJobInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ExportCustomJobListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage>;
  page(params: ExportCustomJobListInstancePageOptions, callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ExportCustomJobListInstance(version: V1, resourceType: string): ExportCustomJobListInstance {
  if (!isValidPathParam(resourceType)) {
    throw new Error('Parameter \'resourceType\' is not valid.');
  }

  const instance = {} as ExportCustomJobListInstance;

  instance._version = version;
  instance._solution = { resourceType,  };
  instance._uri = `/Exports/${resourceType}/Jobs`;

  instance.create = function create(params: ExportCustomJobListInstanceCreateOptions, callback?: (error: Error | null, items: ExportCustomJobInstance) => any): Promise<ExportCustomJobInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["startDay"] === null || params["startDay"] === undefined) {
      throw new Error('Required parameter "params[\'startDay\']" missing.');
    }

    if (params["endDay"] === null || params["endDay"] === undefined) {
      throw new Error('Required parameter "params[\'endDay\']" missing.');
    }

    if (params["friendlyName"] === null || params["friendlyName"] === undefined) {
      throw new Error('Required parameter "params[\'friendlyName\']" missing.');
    }

    let data: any = {};

    
        
    data["StartDay"] = params["startDay"];
    
    data["EndDay"] = params["endDay"];
    
    data["FriendlyName"] = params["friendlyName"];
    if (params["webhookUrl"] !== undefined)
    data["WebhookUrl"] = params["webhookUrl"];
    if (params["webhookMethod"] !== undefined)
    data["WebhookMethod"] = params["webhookMethod"];
    if (params["email"] !== undefined)
    data["Email"] = params["email"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ExportCustomJobInstance(operationVersion, payload, instance._solution.resourceType));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: ExportCustomJobListInstancePageOptions | ((error: Error | null, items: ExportCustomJobPage) => any), callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage> {
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
    
    operationPromise = operationPromise.then(payload => new ExportCustomJobPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: ExportCustomJobPage) => any): Promise<ExportCustomJobPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new ExportCustomJobPage(instance._version, payload, instance._solution));
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

interface ExportCustomJobPayload extends TwilioResponsePayload {
    jobs: ExportCustomJobResource[];
}

interface ExportCustomJobResource {
  friendly_name: string;
  resource_type: string;
  start_day: string;
  end_day: string;
  webhook_url: string;
  webhook_method: string;
  email: string;
  job_sid: string;
  details: any;
  job_queue_position: string;
  estimated_completion_time: string;
}

export class ExportCustomJobInstance {

  constructor(protected _version: V1, payload: ExportCustomJobResource, resourceType: string) {
    this.friendlyName = (payload.friendly_name);
    this.resourceType = (payload.resource_type);
    this.startDay = (payload.start_day);
    this.endDay = (payload.end_day);
    this.webhookUrl = (payload.webhook_url);
    this.webhookMethod = (payload.webhook_method);
    this.email = (payload.email);
    this.jobSid = (payload.job_sid);
    this.details = (payload.details);
    this.jobQueuePosition = (payload.job_queue_position);
    this.estimatedCompletionTime = (payload.estimated_completion_time);

  }

  /**
   * The friendly name specified when creating the job
   */
  friendlyName: string;
  /**
   * The type of communication – Messages, Calls, Conferences, and Participants
   */
  resourceType: string;
  /**
   * The start day for the custom export specified when creating the job
   */
  startDay: string;
  /**
   * The end day for the export specified when creating the job
   */
  endDay: string;
  /**
   * The optional webhook url called on completion of the job. If this is supplied, `WebhookMethod` must also be supplied.
   */
  webhookUrl: string;
  /**
   * This is the method used to call the webhook on completion of the job. If this is supplied, `WebhookUrl` must also be supplied.
   */
  webhookMethod: string;
  /**
   * The optional email to send the completion notification to
   */
  email: string;
  /**
   * The unique job_sid returned when the custom export was created
   */
  jobSid: string;
  /**
   * The details of a job which is an object that contains an array of status grouped by `status` state.  Each `status` object has a `status` string, a count which is the number of days in that `status`, and list of days in that `status`. The day strings are in the format yyyy-MM-dd. As an example, a currently running job may have a status object for COMPLETED and a `status` object for SUBMITTED each with its own count and list of days.
   */
  details: any;
  /**
   * This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease
   */
  jobQueuePosition: string;
  /**
   * this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position
   */
  estimatedCompletionTime: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      friendlyName: this.friendlyName,
      resourceType: this.resourceType,
      startDay: this.startDay,
      endDay: this.endDay,
      webhookUrl: this.webhookUrl,
      webhookMethod: this.webhookMethod,
      email: this.email,
      jobSid: this.jobSid,
      details: this.details,
      jobQueuePosition: this.jobQueuePosition,
      estimatedCompletionTime: this.estimatedCompletionTime,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class ExportCustomJobPage extends Page<V1, ExportCustomJobPayload, ExportCustomJobResource, ExportCustomJobInstance> {
/**
* Initialize the ExportCustomJobPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: ExportCustomJobSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ExportCustomJobInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ExportCustomJobResource): ExportCustomJobInstance {
    return new ExportCustomJobInstance(
    this._version,
    payload,
        this._solution.resourceType,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

