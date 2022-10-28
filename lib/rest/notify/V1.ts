/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Notify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import NotifyBase from "../NotifyBase";
import Version from "../../base/Version";
import { CredentialListInstance } from "./v1/credential";
import { ServiceListInstance } from "./v1/service";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Notify
   *
   * @property { Twilio.Notify.V1.CredentialListInstance } credentials - credentials resource
   * @property { Twilio.Notify.V1.ServiceListInstance } services - services resource
   *
   * @param { Twilio.Notify } domain - The Twilio domain
   */
  constructor(domain: NotifyBase) {
    super(domain, "v1");
  }

  protected _credentials?: CredentialListInstance;
  protected _services?: ServiceListInstance;

  get credentials(): CredentialListInstance {
    this._credentials = this._credentials || CredentialListInstance(this);
    return this._credentials;
  }

  get services(): ServiceListInstance {
    this._services = this._services || ServiceListInstance(this);
    return this._services;
  }

}
