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
 * Options to pass to create a EligibilityInstance
 */
export interface EligibilityListInstanceCreateOptions {
  /**  */
  "body"?: object;
}


export interface EligibilitySolution {
}

export interface EligibilityListInstance {
  _version: V1;
  _solution: EligibilitySolution;
  _uri: string;



  /**
   * Create a EligibilityInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EligibilityInstance
   */
  create(callback?: (error: Error | null, item?: EligibilityInstance) => any): Promise<EligibilityInstance>;
  /**
   * Create a EligibilityInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed EligibilityInstance
   */
  create(params: object, callback?: (error: Error | null, item?: EligibilityInstance) => any): Promise<EligibilityInstance>;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function EligibilityListInstance(version: V1): EligibilityListInstance {
  const instance = {} as EligibilityListInstance;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/HostedNumber/Eligibility`;

  instance.create = function create(params?: object | ((error: Error | null, items: EligibilityInstance) => any), callback?: (error: Error | null, items: EligibilityInstance) => any): Promise<EligibilityInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
    
    data = params

    const headers: any = {};
    headers["Content-Type"] = "application/json"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new EligibilityInstance(operationVersion, payload));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.toJSON = function toJSON() {
    return instance._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(instance.toJSON(), options);
  }

  return instance;
}

interface EligibilityPayload extends EligibilityResource {}

interface EligibilityResource {
  results: Array<any>;
}

export class EligibilityInstance {

  constructor(protected _version: V1, payload: EligibilityResource) {
    this.results = (payload.results);

  }

  /**
   * The result set that contains the eligibility check response for the requested number, each result has at least the following attributes:  phone_number: The requested phone number ,hosting_account_sid: The account sid where the phone number will be hosted, date_last_checked: Datetime (ISO 8601) when the PN was last checked for eligibility, country: Phone number’s country, eligibility_status: Indicates the eligibility status of the PN (Eligible/Ineligible), eligibility_sub_status: Indicates the sub status of the eligibility , ineligibility_reason: Reason for number\'s ineligibility (if applicable), next_step: Suggested next step in the hosting process based on the eligibility status.
   */
  results: Array<any>;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      results: this.results,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


