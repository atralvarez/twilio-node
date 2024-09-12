/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
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
 * Options to pass to each
 */
export interface SchemaVersionListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SchemaVersionListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SchemaVersionListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface SchemaVersionContext {

  /**
   * Fetch a SchemaVersionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SchemaVersionInstance
   */
  fetch(callback?: (error: Error | null, item?: SchemaVersionInstance) => any): Promise<SchemaVersionInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SchemaVersionContextSolution {
  "id": string;
  "schemaVersion": number;
}

export class SchemaVersionContextImpl implements SchemaVersionContext {
  protected _solution: SchemaVersionContextSolution;
  protected _uri: string;


  constructor(protected _version: V1, id: string, schemaVersion: number) {
    if (!isValidPathParam(id)) {
      throw new Error('Parameter \'id\' is not valid.');
    }

    if (!isValidPathParam(schemaVersion)) {
      throw new Error('Parameter \'schemaVersion\' is not valid.');
    }

    this._solution = { id, schemaVersion,  };
    this._uri = `/Schemas/${id}/Versions/${schemaVersion}`;
  }

  fetch(callback?: (error: Error | null, item?: SchemaVersionInstance) => any): Promise<SchemaVersionInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new SchemaVersionInstance(operationVersion, payload, instance._solution.id, instance._solution.schemaVersion));
    

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


interface SchemaVersionPayload extends TwilioResponsePayload {
    schema_versions: SchemaVersionResource[];
}

interface SchemaVersionResource {
  id: string;
  schema_version: number;
  date_created: Date;
  url: string;
  raw: string;
}

export class SchemaVersionInstance {
  protected _solution: SchemaVersionContextSolution;
  protected _context?: SchemaVersionContext;

  constructor(protected _version: V1, payload: SchemaVersionResource, id: string, schemaVersion?: number) {
    this.id = (payload.id);
    this.schemaVersion = deserialize.integer(payload.schema_version);
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = (payload.url);
    this.raw = (payload.raw);

    this._solution = { id, schemaVersion: schemaVersion || this.schemaVersion,  };
  }

  /**
   * The unique identifier of the schema. Each schema can have multiple versions, that share the same id.
   */
  id: string;
  /**
   * The version of this schema.
   */
  schemaVersion: number;
  /**
   * The date the schema version was created, given in ISO 8601 format.
   */
  dateCreated: Date;
  /**
   * The URL of this resource.
   */
  url: string;
  raw: string;

  private get _proxy(): SchemaVersionContext {
    this._context = this._context || new SchemaVersionContextImpl(this._version, this._solution.id, this._solution.schemaVersion);
    return this._context;
  }

  /**
   * Fetch a SchemaVersionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SchemaVersionInstance
   */
  fetch(callback?: (error: Error | null, item?: SchemaVersionInstance) => any): Promise<SchemaVersionInstance>

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
      id: this.id,
      schemaVersion: this.schemaVersion,
      dateCreated: this.dateCreated,
      url: this.url,
      raw: this.raw,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface SchemaVersionSolution {
  id: string;
}

export interface SchemaVersionListInstance {
  _version: V1;
  _solution: SchemaVersionSolution;
  _uri: string;

  (schemaVersion: number, ): SchemaVersionContext;
  get(schemaVersion: number, ): SchemaVersionContext;





  /**
   * Streams SchemaVersionInstance records from the API.
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
   * @param { SchemaVersionListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void): void;
  each(params: SchemaVersionListInstanceEachOptions, callback?: (item: SchemaVersionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  /**
   * Lists SchemaVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SchemaVersionListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SchemaVersionInstance[]) => any): Promise<SchemaVersionInstance[]>;
  list(params: SchemaVersionListInstanceOptions, callback?: (error: Error | null, items: SchemaVersionInstance[]) => any): Promise<SchemaVersionInstance[]>;
  /**
   * Retrieve a single page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SchemaVersionListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;
  page(params: SchemaVersionListInstancePageOptions, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SchemaVersionListInstance(version: V1, id: string): SchemaVersionListInstance {
  if (!isValidPathParam(id)) {
    throw new Error('Parameter \'id\' is not valid.');
  }

  const instance = ((schemaVersion, ) => instance.get(schemaVersion, )) as SchemaVersionListInstance;

  instance.get = function get(schemaVersion, ): SchemaVersionContext {
    return new SchemaVersionContextImpl(version, id, schemaVersion);
  }

  instance._version = version;
  instance._solution = { id,  };
  instance._uri = `/Schemas/${id}/Versions`;

  instance.page = function page(params?: SchemaVersionListInstancePageOptions | ((error: Error | null, items: SchemaVersionPage) => any), callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage> {
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
    
    operationPromise = operationPromise.then(payload => new SchemaVersionPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: SchemaVersionPage) => any): Promise<SchemaVersionPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new SchemaVersionPage(instance._version, payload, instance._solution));
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

export class SchemaVersionPage extends Page<V1, SchemaVersionPayload, SchemaVersionResource, SchemaVersionInstance> {
/**
* Initialize the SchemaVersionPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: SchemaVersionSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of SchemaVersionInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: SchemaVersionResource): SchemaVersionInstance {
    return new SchemaVersionInstance(
    this._version,
    payload,
        this._solution.id,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

