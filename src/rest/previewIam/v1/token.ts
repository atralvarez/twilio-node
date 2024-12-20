/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Organization Public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
 * Options to pass to create a TokenInstance
 */
export interface TokenListInstanceCreateOptions {
  /** Grant type is a credential representing resource owner\\\'s authorization which can be used by client to obtain access token. */
  grantType: string;
  /** A 34 character string that uniquely identifies this OAuth App. */
  clientId: string;
  /** The credential for confidential OAuth App. */
  clientSecret?: string;
  /** JWT token related to the authorization code grant type. */
  code?: string;
  /** The redirect uri */
  redirectUri?: string;
  /** The targeted audience uri */
  audience?: string;
  /** JWT token related to refresh access token. */
  refreshToken?: string;
  /** The scope of token */
  scope?: string;
}

export interface TokenSolution {}

export interface TokenListInstance {
  _version: V1;
  _solution: TokenSolution;
  _uri: string;

  /**
   * Create a TokenInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TokenInstance
   */
  create(
    params: TokenListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TokenInstance) => any
  ): Promise<TokenInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TokenListInstance(version: V1): TokenListInstance {
  const instance = {} as TokenListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/token`;

  instance.create = function create(
    params: TokenListInstanceCreateOptions,
    callback?: (error: Error | null, items: TokenInstance) => any
  ): Promise<TokenInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["grantType"] === null || params["grantType"] === undefined) {
      throw new Error("Required parameter \"params['grantType']\" missing.");
    }

    if (params["clientId"] === null || params["clientId"] === undefined) {
      throw new Error("Required parameter \"params['clientId']\" missing.");
    }

    let data: any = {};

    data["grant_type"] = params["grantType"];

    data["client_id"] = params["clientId"];
    if (params["clientSecret"] !== undefined)
      data["client_secret"] = params["clientSecret"];
    if (params["code"] !== undefined) data["code"] = params["code"];
    if (params["redirectUri"] !== undefined)
      data["redirect_uri"] = params["redirectUri"];
    if (params["audience"] !== undefined) data["audience"] = params["audience"];
    if (params["refreshToken"] !== undefined)
      data["refresh_token"] = params["refreshToken"];
    if (params["scope"] !== undefined) data["scope"] = params["scope"];

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
      (payload) => new TokenInstance(operationVersion, payload)
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

interface TokenPayload extends TokenResource {}

interface TokenResource {
  access_token: string;
  refresh_token: string;
  id_token: string;
  token_type: string;
  expires_in: number;
}

export class TokenInstance {
  constructor(protected _version: V1, payload: TokenResource) {
    this.accessToken = payload.access_token;
    this.refreshToken = payload.refresh_token;
    this.idToken = payload.id_token;
    this.tokenType = payload.token_type;
    this.expiresIn = payload.expires_in;
  }

  /**
   * Token which carries the necessary information to access a Twilio resource directly.
   */
  accessToken: string;
  /**
   * Token which carries the information necessary to get a new access token.
   */
  refreshToken: string;
  /**
   * Token which carries the information necessary of user profile.
   */
  idToken: string;
  /**
   * Token type
   */
  tokenType: string;
  expiresIn: number;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      idToken: this.idToken,
      tokenType: this.tokenType,
      expiresIn: this.expiresIn,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
