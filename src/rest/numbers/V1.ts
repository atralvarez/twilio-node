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

import NumbersBase from "../NumbersBase";
import Version from "../../base/Version";
import { BulkEligibilityListInstance } from "./v1/bulkEligibility";
import { EligibilityListInstance } from "./v1/eligibility";
import { PortingBulkPortabilityListInstance } from "./v1/portingBulkPortability";
import { PortingPortInListInstance } from "./v1/portingPortIn";
import { PortingPortInFetchListInstance } from "./v1/portingPortInFetch";
import { PortingPortInPhoneNumberListInstance } from "./v1/portingPortInPhoneNumber";
import { PortingPortabilityListInstance } from "./v1/portingPortability";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Numbers
   *
   * @param domain - The Twilio (Twilio.Numbers) domain
   */
  constructor(domain: NumbersBase) {
    super(domain, "v1");
  }

  /** bulkEligibilities - { Twilio.Numbers.V1.BulkEligibilityListInstance } resource */
  protected _bulkEligibilities?: BulkEligibilityListInstance;
  /** eligibilities - { Twilio.Numbers.V1.EligibilityListInstance } resource */
  protected _eligibilities?: EligibilityListInstance;
  /** portingBulkPortabilities - { Twilio.Numbers.V1.PortingBulkPortabilityListInstance } resource */
  protected _portingBulkPortabilities?: PortingBulkPortabilityListInstance;
  /** portingPortIns - { Twilio.Numbers.V1.PortingPortInListInstance } resource */
  protected _portingPortIns?: PortingPortInListInstance;
  /** portingPortInsFetch - { Twilio.Numbers.V1.PortingPortInFetchListInstance } resource */
  protected _portingPortInsFetch?: PortingPortInFetchListInstance;
  /** portingPortInPhoneNumber - { Twilio.Numbers.V1.PortingPortInPhoneNumberListInstance } resource */
  protected _portingPortInPhoneNumber?: PortingPortInPhoneNumberListInstance;
  /** portingPortabilities - { Twilio.Numbers.V1.PortingPortabilityListInstance } resource */
  protected _portingPortabilities?: PortingPortabilityListInstance;

  /** Getter for bulkEligibilities resource */
  get bulkEligibilities(): BulkEligibilityListInstance {
    this._bulkEligibilities =
      this._bulkEligibilities || BulkEligibilityListInstance(this);
    return this._bulkEligibilities;
  }

  /** Getter for eligibilities resource */
  get eligibilities(): EligibilityListInstance {
    this._eligibilities = this._eligibilities || EligibilityListInstance(this);
    return this._eligibilities;
  }

  /** Getter for portingBulkPortabilities resource */
  get portingBulkPortabilities(): PortingBulkPortabilityListInstance {
    this._portingBulkPortabilities =
      this._portingBulkPortabilities ||
      PortingBulkPortabilityListInstance(this);
    return this._portingBulkPortabilities;
  }

  /** Getter for portingPortIns resource */
  get portingPortIns(): PortingPortInListInstance {
    this._portingPortIns =
      this._portingPortIns || PortingPortInListInstance(this);
    return this._portingPortIns;
  }

  /** Getter for portingPortInsFetch resource */
  get portingPortInsFetch(): PortingPortInFetchListInstance {
    this._portingPortInsFetch =
      this._portingPortInsFetch || PortingPortInFetchListInstance(this);
    return this._portingPortInsFetch;
  }

  /** Getter for portingPortInPhoneNumber resource */
  get portingPortInPhoneNumber(): PortingPortInPhoneNumberListInstance {
    this._portingPortInPhoneNumber =
      this._portingPortInPhoneNumber ||
      PortingPortInPhoneNumberListInstance(this);
    return this._portingPortInPhoneNumber;
  }

  /** Getter for portingPortabilities resource */
  get portingPortabilities(): PortingPortabilityListInstance {
    this._portingPortabilities =
      this._portingPortabilities || PortingPortabilityListInstance(this);
    return this._portingPortabilities;
  }
}
