/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import BulkexportsBase from "../BulkexportsBase";
import Version from "../../base/Version";
import { ExportListInstance } from "./v1/export";
import { ExportConfigurationListInstance } from "./v1/exportConfiguration";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Bulkexports
   *
   * @property { Twilio.Bulkexports.V1.ExportListInstance } exports - exports resource
   * @property { Twilio.Bulkexports.V1.ExportConfigurationListInstance } exportConfiguration - exportConfiguration resource
   *
   * @param { Twilio.Bulkexports } domain - The Twilio domain
   */
  constructor(domain: BulkexportsBase) {
    super(domain, "v1");
  }

  protected _exports?: ExportListInstance;
  protected _exportConfiguration?: ExportConfigurationListInstance;

  get exports(): ExportListInstance {
    this._exports = this._exports || ExportListInstance(this);
    return this._exports;
  }

  get exportConfiguration(): ExportConfigurationListInstance {
    this._exportConfiguration = this._exportConfiguration || ExportConfigurationListInstance(this);
    return this._exportConfiguration;
  }

}
