/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to create a PortingPortInInstance
 */
export interface PortingPortInListInstanceCreateOptions {
  /**  */
  body?: object;
}

export interface PortingPortInContext {
  /**
   * Remove a PortingPortInInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a PortingPortInInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortInInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PortingPortInContextSolution {
  portInRequestSid: string;
}

export class PortingPortInContextImpl implements PortingPortInContext {
  protected _solution: PortingPortInContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, portInRequestSid: string) {
    if (!isValidPathParam(portInRequestSid)) {
      throw new Error("Parameter 'portInRequestSid' is not valid.");
    }

    this._solution = { portInRequestSid };
    this._uri = `/Porting/PortIn/${portInRequestSid}`;
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
    callback?: (error: Error | null, item?: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance> {
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
        new PortingPortInInstance(
          operationVersion,
          payload,
          instance._solution.portInRequestSid
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

interface PortingPortInPayload extends PortingPortInResource {}

interface PortingPortInResource {
  port_in_request_sid: string;
  url: string;
  account_sid: string;
  notification_emails: Array<string>;
  target_port_in_date: Date;
  target_port_in_time_range_start: string;
  target_port_in_time_range_end: string;
  port_in_request_status: string;
  losing_carrier_information: any;
  phone_numbers: Array<any>;
  documents: Array<string>;
  date_created: Date;
}

export class PortingPortInInstance {
  protected _solution: PortingPortInContextSolution;
  protected _context?: PortingPortInContext;

  constructor(
    protected _version: V1,
    payload: PortingPortInResource,
    portInRequestSid?: string
  ) {
    this.portInRequestSid = payload.port_in_request_sid;
    this.url = payload.url;
    this.accountSid = payload.account_sid;
    this.notificationEmails = payload.notification_emails;
    this.targetPortInDate = deserialize.iso8601Date(
      payload.target_port_in_date
    );
    this.targetPortInTimeRangeStart = payload.target_port_in_time_range_start;
    this.targetPortInTimeRangeEnd = payload.target_port_in_time_range_end;
    this.portInRequestStatus = payload.port_in_request_status;
    this.losingCarrierInformation = payload.losing_carrier_information;
    this.phoneNumbers = payload.phone_numbers;
    this.documents = payload.documents;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);

    this._solution = {
      portInRequestSid: portInRequestSid || this.portInRequestSid,
    };
  }

  /**
   * The SID of the Port In request. This is a unique identifier of the port in request.
   */
  portInRequestSid: string;
  /**
   * The URL of this Port In request
   */
  url: string;
  /**
   * Account Sid or subaccount where the phone number(s) will be Ported
   */
  accountSid: string;
  /**
   * Additional emails to send a copy of the signed LOA to.
   */
  notificationEmails: Array<string>;
  /**
   * Target date to port the number. We cannot guarantee that this date will be honored by the other carriers, please work with Ops to get a confirmation of the firm order commitment (FOC) date. Expected format is ISO Local Date, example: ‘2011-12-03`. This date must be at least 7 days in the future for US ports and 10 days in the future for Japanese ports. (This value is only available for custom porting customers.)
   */
  targetPortInDate: Date;
  /**
   * The earliest time that the port should occur on the target port in date. Expected format is ISO Offset Time, example: ‘10:15:00-08:00\'. (This value is only available for custom porting customers.)
   */
  targetPortInTimeRangeStart: string;
  /**
   * The latest time that the port should occur on the target port in date. Expected format is ISO Offset Time, example: ‘10:15:00-08:00\'.  (This value is only available for custom porting customers.)
   */
  targetPortInTimeRangeEnd: string;
  /**
   * The status of the port in request. The possible values are: In progress, Completed, Expired, In review, Waiting for Signature, Action Required, and Canceled.
   */
  portInRequestStatus: string;
  /**
   * Details regarding the customer’s information with the losing carrier. These values will be used to generate the letter of authorization and should match the losing carrier’s data as closely as possible to ensure the port is accepted.
   */
  losingCarrierInformation: any;
  phoneNumbers: Array<any>;
  /**
   * List of document SIDs for all phone numbers included in the port in request. At least one document SID referring to a document of the type Utility Bill is required.
   */
  documents: Array<string>;
  dateCreated: Date;

  private get _proxy(): PortingPortInContext {
    this._context =
      this._context ||
      new PortingPortInContextImpl(
        this._version,
        this._solution.portInRequestSid
      );
    return this._context;
  }

  /**
   * Remove a PortingPortInInstance
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
   * Fetch a PortingPortInInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortInInstance
   */
  fetch(
    callback?: (error: Error | null, item?: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      portInRequestSid: this.portInRequestSid,
      url: this.url,
      accountSid: this.accountSid,
      notificationEmails: this.notificationEmails,
      targetPortInDate: this.targetPortInDate,
      targetPortInTimeRangeStart: this.targetPortInTimeRangeStart,
      targetPortInTimeRangeEnd: this.targetPortInTimeRangeEnd,
      portInRequestStatus: this.portInRequestStatus,
      losingCarrierInformation: this.losingCarrierInformation,
      phoneNumbers: this.phoneNumbers,
      documents: this.documents,
      dateCreated: this.dateCreated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PortingPortInSolution {}

export interface PortingPortInListInstance {
  _version: V1;
  _solution: PortingPortInSolution;
  _uri: string;

  (portInRequestSid: string): PortingPortInContext;
  get(portInRequestSid: string): PortingPortInContext;

  /**
   * Create a PortingPortInInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortInInstance
   */
  create(
    callback?: (error: Error | null, item?: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance>;
  /**
   * Create a PortingPortInInstance
   *
   * @param params - Body for request
   * @param headers - header params for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortInInstance
   */
  create(
    params: object,
    headers?: any,
    callback?: (error: Error | null, item?: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PortingPortInListInstance(
  version: V1
): PortingPortInListInstance {
  const instance = ((portInRequestSid) =>
    instance.get(portInRequestSid)) as PortingPortInListInstance;

  instance.get = function get(portInRequestSid): PortingPortInContext {
    return new PortingPortInContextImpl(version, portInRequestSid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Porting/PortIn`;

  instance.create = function create(
    params?:
      | object
      | ((error: Error | null, items: PortingPortInInstance) => any),
    headers?: any,
    callback?: (error: Error | null, items: PortingPortInInstance) => any
  ): Promise<PortingPortInInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    data = params;

    if (headers === null || headers === undefined) {
      headers = {};
    }

    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new PortingPortInInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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
