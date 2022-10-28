/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Oauth
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




export interface OauthContext {


  /**
   * Fetch a OauthInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OauthInstance
   */
  fetch(callback?: (error: Error | null, item?: OauthInstance) => any): Promise<OauthInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface OauthContextSolution {
}

export class OauthContextImpl implements OauthContext {
  protected _solution: OauthContextSolution;
  protected _uri: string;


  constructor(protected _version: V1) {
    this._solution = {  };
    this._uri = `/certs`;
  }

  fetch(callback?: any): Promise<OauthInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new OauthInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface OauthPayload extends OauthResource{
}

interface OauthResource {
  keys?: any | null;
  url?: string | null;
}

export class OauthInstance {
  protected _solution: OauthContextSolution;
  protected _context?: OauthContext;

  constructor(protected _version: V1, payload: OauthPayload) {
    this.keys = payload.keys;
    this.url = payload.url;

    this._solution = {  };
  }

  /**
   * A collection of certificates
   */
  keys?: any | null;
  url?: string | null;

  private get _proxy(): OauthContext {
    this._context = this._context || new OauthContextImpl(this._version);
    return this._context;
  }

  /**
   * Fetch a OauthInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed OauthInstance
   */
  fetch(callback?: (error: Error | null, item?: OauthInstance) => any): Promise<OauthInstance>
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
      keys: this.keys, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface OauthListInstance {
  (): OauthContext;
  get(): OauthContext;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface Solution {
}

interface OauthListInstanceImpl extends OauthListInstance {}
class OauthListInstanceImpl implements OauthListInstance {
  _version?: V1;
  _solution?: Solution;
  _uri?: string;

}

export function OauthListInstance(version: V1): OauthListInstance {
  const instance = (() => instance.get()) as OauthListInstanceImpl;

  instance.get = function get(): OauthContext {
    return new OauthContextImpl(version);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/certs`;

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}



