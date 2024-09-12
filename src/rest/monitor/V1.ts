/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Monitor
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import MonitorBase from "../MonitorBase";
import Version from "../../base/Version";
import { AlertListInstance } from "./v1/alert";
import { EventListInstance } from "./v1/event";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Monitor
   *
   * @param domain - The Twilio (Twilio.Monitor) domain
   */
  constructor(domain: MonitorBase) {
    super(domain, "v1");
  }

  /** alerts - { Twilio.Monitor.V1.AlertListInstance } resource */
  protected _alerts?: AlertListInstance;
  /** events - { Twilio.Monitor.V1.EventListInstance } resource */
  protected _events?: EventListInstance;

  /** Getter for alerts resource */
  get alerts(): AlertListInstance {
    this._alerts = this._alerts || AlertListInstance(this);
    return this._alerts;
  }

  /** Getter for events resource */
  get events(): EventListInstance {
    this._events = this._events || EventListInstance(this);
    return this._events;
  }

}
