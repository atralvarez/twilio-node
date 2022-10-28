/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Routes
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import RoutesBase from "../RoutesBase";
import Version from "../../base/Version";
import { PhoneNumberListInstance } from "./v2/phoneNumber";
import { SipDomainListInstance } from "./v2/sipDomain";
import { TrunkListInstance } from "./v2/trunk";

export default class V2 extends Version {
  /**
   * Initialize the V2 version of Routes
   *
   * @property { Twilio.Routes.V2.PhoneNumberListInstance } phoneNumbers - phoneNumbers resource
   * @property { Twilio.Routes.V2.SipDomainListInstance } sipDomains - sipDomains resource
   * @property { Twilio.Routes.V2.TrunkListInstance } trunks - trunks resource
   *
   * @param { Twilio.Routes } domain - The Twilio domain
   */
  constructor(domain: RoutesBase) {
    super(domain, "v2");
  }

  protected _phoneNumbers?: PhoneNumberListInstance;
  protected _sipDomains?: SipDomainListInstance;
  protected _trunks?: TrunkListInstance;

  get phoneNumbers(): PhoneNumberListInstance {
    this._phoneNumbers = this._phoneNumbers || PhoneNumberListInstance(this);
    return this._phoneNumbers;
  }

  get sipDomains(): SipDomainListInstance {
    this._sipDomains = this._sipDomains || SipDomainListInstance(this);
    return this._sipDomains;
  }

  get trunks(): TrunkListInstance {
    this._trunks = this._trunks || TrunkListInstance(this);
    return this._trunks;
  }

}
