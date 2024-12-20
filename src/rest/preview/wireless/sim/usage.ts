/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Wireless from "../../Wireless";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to fetch a UsageInstance
 */
export interface UsageContextFetchOptions {
  /**  */
  end?: string;
  /**  */
  start?: string;
}

export interface UsageContext {
  /**
   * Fetch a UsageInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UsageInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UsageInstance) => any
  ): Promise<UsageInstance>;
  /**
   * Fetch a UsageInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UsageInstance
   */
  fetch(
    params: UsageContextFetchOptions,
    callback?: (error: Error | null, item?: UsageInstance) => any
  ): Promise<UsageInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UsageContextSolution {
  simSid: string;
}

export class UsageContextImpl implements UsageContext {
  protected _solution: UsageContextSolution;
  protected _uri: string;

  constructor(protected _version: Wireless, simSid: string) {
    if (!isValidPathParam(simSid)) {
      throw new Error("Parameter 'simSid' is not valid.");
    }

    this._solution = { simSid };
    this._uri = `/Sims/${simSid}/Usage`;
  }

  fetch(
    params?:
      | UsageContextFetchOptions
      | ((error: Error | null, item?: UsageInstance) => any),
    callback?: (error: Error | null, item?: UsageInstance) => any
  ): Promise<UsageInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["end"] !== undefined) data["End"] = params["end"];
    if (params["start"] !== undefined) data["Start"] = params["start"];

    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UsageInstance(operationVersion, payload, instance._solution.simSid)
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

interface UsagePayload extends UsageResource {}

interface UsageResource {
  sim_sid: string;
  sim_unique_name: string;
  account_sid: string;
  period: any;
  commands_usage: any;
  commands_costs: any;
  data_usage: any;
  data_costs: any;
  url: string;
}

export class UsageInstance {
  protected _solution: UsageContextSolution;
  protected _context?: UsageContext;

  constructor(
    protected _version: Wireless,
    payload: UsageResource,
    simSid: string
  ) {
    this.simSid = payload.sim_sid;
    this.simUniqueName = payload.sim_unique_name;
    this.accountSid = payload.account_sid;
    this.period = payload.period;
    this.commandsUsage = payload.commands_usage;
    this.commandsCosts = payload.commands_costs;
    this.dataUsage = payload.data_usage;
    this.dataCosts = payload.data_costs;
    this.url = payload.url;

    this._solution = { simSid };
  }

  simSid: string;
  simUniqueName: string;
  accountSid: string;
  period: any;
  commandsUsage: any;
  commandsCosts: any;
  dataUsage: any;
  dataCosts: any;
  url: string;

  private get _proxy(): UsageContext {
    this._context =
      this._context ||
      new UsageContextImpl(this._version, this._solution.simSid);
    return this._context;
  }

  /**
   * Fetch a UsageInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UsageInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UsageInstance) => any
  ): Promise<UsageInstance>;
  /**
   * Fetch a UsageInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UsageInstance
   */
  fetch(
    params: UsageContextFetchOptions,
    callback?: (error: Error | null, item?: UsageInstance) => any
  ): Promise<UsageInstance>;

  fetch(
    params?: any,
    callback?: (error: Error | null, item?: UsageInstance) => any
  ): Promise<UsageInstance> {
    return this._proxy.fetch(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      simSid: this.simSid,
      simUniqueName: this.simUniqueName,
      accountSid: this.accountSid,
      period: this.period,
      commandsUsage: this.commandsUsage,
      commandsCosts: this.commandsCosts,
      dataUsage: this.dataUsage,
      dataCosts: this.dataCosts,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UsageSolution {
  simSid: string;
}

export interface UsageListInstance {
  _version: Wireless;
  _solution: UsageSolution;
  _uri: string;

  (): UsageContext;
  get(): UsageContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UsageListInstance(
  version: Wireless,
  simSid: string
): UsageListInstance {
  if (!isValidPathParam(simSid)) {
    throw new Error("Parameter 'simSid' is not valid.");
  }

  const instance = (() => instance.get()) as UsageListInstance;

  instance.get = function get(): UsageContext {
    return new UsageContextImpl(version, simSid);
  };

  instance._version = version;
  instance._solution = { simSid };
  instance._uri = ``;

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
