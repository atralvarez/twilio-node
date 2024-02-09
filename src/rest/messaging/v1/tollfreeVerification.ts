/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export type TollfreeVerificationOptInType =
  | "VERBAL"
  | "WEB_FORM"
  | "PAPER_FORM"
  | "VIA_TEXT"
  | "MOBILE_QR_CODE";

export type TollfreeVerificationStatus =
  | "PENDING_REVIEW"
  | "IN_REVIEW"
  | "TWILIO_APPROVED"
  | "TWILIO_REJECTED";

/**
 * Options to pass to update a TollfreeVerificationInstance
 */
export interface TollfreeVerificationContextUpdateOptions {
  /** The name of the business or organization using the Tollfree number. */
  businessName?: string;
  /** The website of the business or organization using the Tollfree number. */
  businessWebsite?: string;
  /** The email address to receive the notification about the verification result. . */
  notificationEmail?: string;
  /** The category of the use case for the Tollfree Number. List as many are applicable.. */
  useCaseCategories?: Array<string>;
  /** Use this to further explain how messaging is used by the business or organization. */
  useCaseSummary?: string;
  /** An example of message content, i.e. a sample message. */
  productionMessageSample?: string;
  /** Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL. */
  optInImageUrls?: Array<string>;
  /**  */
  optInType?: TollfreeVerificationOptInType;
  /** Estimate monthly volume of messages from the Tollfree Number. */
  messageVolume?: string;
  /** The address of the business or organization using the Tollfree number. */
  businessStreetAddress?: string;
  /** The address of the business or organization using the Tollfree number. */
  businessStreetAddress2?: string;
  /** The city of the business or organization using the Tollfree number. */
  businessCity?: string;
  /** The state/province/region of the business or organization using the Tollfree number. */
  businessStateProvinceRegion?: string;
  /** The postal code of the business or organization using the Tollfree number. */
  businessPostalCode?: string;
  /** The country of the business or organization using the Tollfree number. */
  businessCountry?: string;
  /** Additional information to be provided for verification. */
  additionalInformation?: string;
  /** The first name of the contact for the business or organization using the Tollfree number. */
  businessContactFirstName?: string;
  /** The last name of the contact for the business or organization using the Tollfree number. */
  businessContactLastName?: string;
  /** The email address of the contact for the business or organization using the Tollfree number. */
  businessContactEmail?: string;
  /** The phone number of the contact for the business or organization using the Tollfree number. */
  businessContactPhone?: string;
  /** Describe why the verification is being edited. If the verification was rejected because of a technical issue, such as the website being down, and the issue has been resolved this parameter should be set to something similar to \\\'Website fixed\\\'. */
  editReason?: string;
}

/**
 * Options to pass to create a TollfreeVerificationInstance
 */
export interface TollfreeVerificationListInstanceCreateOptions {
  /** The name of the business or organization using the Tollfree number. */
  businessName: string;
  /** The website of the business or organization using the Tollfree number. */
  businessWebsite: string;
  /** The email address to receive the notification about the verification result. . */
  notificationEmail: string;
  /** The category of the use case for the Tollfree Number. List as many are applicable.. */
  useCaseCategories: Array<string>;
  /** Use this to further explain how messaging is used by the business or organization. */
  useCaseSummary: string;
  /** An example of message content, i.e. a sample message. */
  productionMessageSample: string;
  /** Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL. */
  optInImageUrls: Array<string>;
  /**  */
  optInType: TollfreeVerificationOptInType;
  /** Estimate monthly volume of messages from the Tollfree Number. */
  messageVolume: string;
  /** The SID of the Phone Number associated with the Tollfree Verification. */
  tollfreePhoneNumberSid: string;
  /** Customer\\\'s Profile Bundle BundleSid. */
  customerProfileSid?: string;
  /** The address of the business or organization using the Tollfree number. */
  businessStreetAddress?: string;
  /** The address of the business or organization using the Tollfree number. */
  businessStreetAddress2?: string;
  /** The city of the business or organization using the Tollfree number. */
  businessCity?: string;
  /** The state/province/region of the business or organization using the Tollfree number. */
  businessStateProvinceRegion?: string;
  /** The postal code of the business or organization using the Tollfree number. */
  businessPostalCode?: string;
  /** The country of the business or organization using the Tollfree number. */
  businessCountry?: string;
  /** Additional information to be provided for verification. */
  additionalInformation?: string;
  /** The first name of the contact for the business or organization using the Tollfree number. */
  businessContactFirstName?: string;
  /** The last name of the contact for the business or organization using the Tollfree number. */
  businessContactLastName?: string;
  /** The email address of the contact for the business or organization using the Tollfree number. */
  businessContactEmail?: string;
  /** The phone number of the contact for the business or organization using the Tollfree number. */
  businessContactPhone?: string;
  /** An optional external reference ID supplied by customer and echoed back on status retrieval. */
  externalReferenceId?: string;
}
/**
 * Options to pass to each
 */
export interface TollfreeVerificationListInstanceEachOptions {
  /** The SID of the Phone Number associated with the Tollfree Verification. */
  tollfreePhoneNumberSid?: string;
  /** The compliance status of the Tollfree Verification record. */
  status?: TollfreeVerificationStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: TollfreeVerificationInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TollfreeVerificationListInstanceOptions {
  /** The SID of the Phone Number associated with the Tollfree Verification. */
  tollfreePhoneNumberSid?: string;
  /** The compliance status of the Tollfree Verification record. */
  status?: TollfreeVerificationStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TollfreeVerificationListInstancePageOptions {
  /** The SID of the Phone Number associated with the Tollfree Verification. */
  tollfreePhoneNumberSid?: string;
  /** The compliance status of the Tollfree Verification record. */
  status?: TollfreeVerificationStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TollfreeVerificationContext {
  /**
   * Remove a TollfreeVerificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TollfreeVerificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TollfreeVerificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance>;

  /**
   * Update a TollfreeVerificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TollfreeVerificationInstance
   */
  update(
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance>;
  /**
   * Update a TollfreeVerificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TollfreeVerificationInstance
   */
  update(
    params: TollfreeVerificationContextUpdateOptions,
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TollfreeVerificationContextSolution {
  sid: string;
}

export class TollfreeVerificationContextImpl
  implements TollfreeVerificationContext
{
  protected _solution: TollfreeVerificationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Tollfree/Verifications/${sid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TollfreeVerificationInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | TollfreeVerificationContextUpdateOptions
      | ((error: Error | null, item?: TollfreeVerificationInstance) => any),
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["businessName"] !== undefined)
      data["BusinessName"] = params["businessName"];
    if (params["businessWebsite"] !== undefined)
      data["BusinessWebsite"] = params["businessWebsite"];
    if (params["notificationEmail"] !== undefined)
      data["NotificationEmail"] = params["notificationEmail"];
    if (params["useCaseCategories"] !== undefined)
      data["UseCaseCategories"] = serialize.map(
        params["useCaseCategories"],
        (e: string) => e
      );
    if (params["useCaseSummary"] !== undefined)
      data["UseCaseSummary"] = params["useCaseSummary"];
    if (params["productionMessageSample"] !== undefined)
      data["ProductionMessageSample"] = params["productionMessageSample"];
    if (params["optInImageUrls"] !== undefined)
      data["OptInImageUrls"] = serialize.map(
        params["optInImageUrls"],
        (e: string) => e
      );
    if (params["optInType"] !== undefined)
      data["OptInType"] = params["optInType"];
    if (params["messageVolume"] !== undefined)
      data["MessageVolume"] = params["messageVolume"];
    if (params["businessStreetAddress"] !== undefined)
      data["BusinessStreetAddress"] = params["businessStreetAddress"];
    if (params["businessStreetAddress2"] !== undefined)
      data["BusinessStreetAddress2"] = params["businessStreetAddress2"];
    if (params["businessCity"] !== undefined)
      data["BusinessCity"] = params["businessCity"];
    if (params["businessStateProvinceRegion"] !== undefined)
      data["BusinessStateProvinceRegion"] =
        params["businessStateProvinceRegion"];
    if (params["businessPostalCode"] !== undefined)
      data["BusinessPostalCode"] = params["businessPostalCode"];
    if (params["businessCountry"] !== undefined)
      data["BusinessCountry"] = params["businessCountry"];
    if (params["additionalInformation"] !== undefined)
      data["AdditionalInformation"] = params["additionalInformation"];
    if (params["businessContactFirstName"] !== undefined)
      data["BusinessContactFirstName"] = params["businessContactFirstName"];
    if (params["businessContactLastName"] !== undefined)
      data["BusinessContactLastName"] = params["businessContactLastName"];
    if (params["businessContactEmail"] !== undefined)
      data["BusinessContactEmail"] = params["businessContactEmail"];
    if (params["businessContactPhone"] !== undefined)
      data["BusinessContactPhone"] = params["businessContactPhone"];
    if (params["editReason"] !== undefined)
      data["EditReason"] = params["editReason"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TollfreeVerificationInstance(
          operationVersion,
          payload,
          instance._solution.sid
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

interface TollfreeVerificationPayload extends TwilioResponsePayload {
  verifications: TollfreeVerificationResource[];
}

interface TollfreeVerificationResource {
  sid: string;
  account_sid: string;
  customer_profile_sid: string;
  trust_product_sid: string;
  date_created: Date;
  date_updated: Date;
  regulated_item_sid: string;
  business_name: string;
  business_street_address: string;
  business_street_address2: string;
  business_city: string;
  business_state_province_region: string;
  business_postal_code: string;
  business_country: string;
  business_website: string;
  business_contact_first_name: string;
  business_contact_last_name: string;
  business_contact_email: string;
  business_contact_phone: string;
  notification_email: string;
  use_case_categories: Array<string>;
  use_case_summary: string;
  production_message_sample: string;
  opt_in_image_urls: Array<string>;
  opt_in_type: TollfreeVerificationOptInType;
  message_volume: string;
  additional_information: string;
  tollfree_phone_number_sid: string;
  status: TollfreeVerificationStatus;
  url: string;
  rejection_reason: string;
  error_code: number;
  edit_expiration: Date;
  edit_allowed: boolean;
  resource_links: any;
  external_reference_id: string;
}

export class TollfreeVerificationInstance {
  protected _solution: TollfreeVerificationContextSolution;
  protected _context?: TollfreeVerificationContext;

  constructor(
    protected _version: V1,
    payload: TollfreeVerificationResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.customerProfileSid = payload.customer_profile_sid;
    this.trustProductSid = payload.trust_product_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.regulatedItemSid = payload.regulated_item_sid;
    this.businessName = payload.business_name;
    this.businessStreetAddress = payload.business_street_address;
    this.businessStreetAddress2 = payload.business_street_address2;
    this.businessCity = payload.business_city;
    this.businessStateProvinceRegion = payload.business_state_province_region;
    this.businessPostalCode = payload.business_postal_code;
    this.businessCountry = payload.business_country;
    this.businessWebsite = payload.business_website;
    this.businessContactFirstName = payload.business_contact_first_name;
    this.businessContactLastName = payload.business_contact_last_name;
    this.businessContactEmail = payload.business_contact_email;
    this.businessContactPhone = payload.business_contact_phone;
    this.notificationEmail = payload.notification_email;
    this.useCaseCategories = payload.use_case_categories;
    this.useCaseSummary = payload.use_case_summary;
    this.productionMessageSample = payload.production_message_sample;
    this.optInImageUrls = payload.opt_in_image_urls;
    this.optInType = payload.opt_in_type;
    this.messageVolume = payload.message_volume;
    this.additionalInformation = payload.additional_information;
    this.tollfreePhoneNumberSid = payload.tollfree_phone_number_sid;
    this.status = payload.status;
    this.url = payload.url;
    this.rejectionReason = payload.rejection_reason;
    this.errorCode = deserialize.integer(payload.error_code);
    this.editExpiration = deserialize.iso8601DateTime(payload.edit_expiration);
    this.editAllowed = payload.edit_allowed;
    this.resourceLinks = payload.resource_links;
    this.externalReferenceId = payload.external_reference_id;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The unique string to identify Tollfree Verification.
   */
  sid: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Tollfree Verification resource.
   */
  accountSid: string;
  /**
   * Customer\'s Profile Bundle BundleSid.
   */
  customerProfileSid: string;
  /**
   * Tollfree TrustProduct Bundle BundleSid.
   */
  trustProductSid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The SID of the Regulated Item.
   */
  regulatedItemSid: string;
  /**
   * The name of the business or organization using the Tollfree number.
   */
  businessName: string;
  /**
   * The address of the business or organization using the Tollfree number.
   */
  businessStreetAddress: string;
  /**
   * The address of the business or organization using the Tollfree number.
   */
  businessStreetAddress2: string;
  /**
   * The city of the business or organization using the Tollfree number.
   */
  businessCity: string;
  /**
   * The state/province/region of the business or organization using the Tollfree number.
   */
  businessStateProvinceRegion: string;
  /**
   * The postal code of the business or organization using the Tollfree number.
   */
  businessPostalCode: string;
  /**
   * The country of the business or organization using the Tollfree number.
   */
  businessCountry: string;
  /**
   * The website of the business or organization using the Tollfree number.
   */
  businessWebsite: string;
  /**
   * The first name of the contact for the business or organization using the Tollfree number.
   */
  businessContactFirstName: string;
  /**
   * The last name of the contact for the business or organization using the Tollfree number.
   */
  businessContactLastName: string;
  /**
   * The email address of the contact for the business or organization using the Tollfree number.
   */
  businessContactEmail: string;
  /**
   * The phone number of the contact for the business or organization using the Tollfree number.
   */
  businessContactPhone: string;
  /**
   * The email address to receive the notification about the verification result. .
   */
  notificationEmail: string;
  /**
   * The category of the use case for the Tollfree Number. List as many are applicable..
   */
  useCaseCategories: Array<string>;
  /**
   * Use this to further explain how messaging is used by the business or organization.
   */
  useCaseSummary: string;
  /**
   * An example of message content, i.e. a sample message.
   */
  productionMessageSample: string;
  /**
   * Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly hosted URL.
   */
  optInImageUrls: Array<string>;
  optInType: TollfreeVerificationOptInType;
  /**
   * Estimate monthly volume of messages from the Tollfree Number.
   */
  messageVolume: string;
  /**
   * Additional information to be provided for verification.
   */
  additionalInformation: string;
  /**
   * The SID of the Phone Number associated with the Tollfree Verification.
   */
  tollfreePhoneNumberSid: string;
  status: TollfreeVerificationStatus;
  /**
   * The absolute URL of the Tollfree Verification resource.
   */
  url: string;
  /**
   * The rejection reason given when a Tollfree Verification has been rejected.
   */
  rejectionReason: string;
  /**
   * The error code given when a Tollfree Verification has been rejected.
   */
  errorCode: number;
  /**
   * The date and time when the ability to edit a rejected verification expires.
   */
  editExpiration: Date;
  /**
   * If a rejected verification is allowed to be edited/resubmitted. Some rejection reasons allow editing and some do not.
   */
  editAllowed: boolean;
  /**
   * The URLs of the documents associated with the Tollfree Verification resource.
   */
  resourceLinks: any;
  /**
   * An optional external reference ID supplied by customer and echoed back on status retrieval.
   */
  externalReferenceId: string;

  private get _proxy(): TollfreeVerificationContext {
    this._context =
      this._context ||
      new TollfreeVerificationContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a TollfreeVerificationInstance
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
   * Fetch a TollfreeVerificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TollfreeVerificationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a TollfreeVerificationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TollfreeVerificationInstance
   */
  update(
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance>;
  /**
   * Update a TollfreeVerificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TollfreeVerificationInstance
   */
  update(
    params: TollfreeVerificationContextUpdateOptions,
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      customerProfileSid: this.customerProfileSid,
      trustProductSid: this.trustProductSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      regulatedItemSid: this.regulatedItemSid,
      businessName: this.businessName,
      businessStreetAddress: this.businessStreetAddress,
      businessStreetAddress2: this.businessStreetAddress2,
      businessCity: this.businessCity,
      businessStateProvinceRegion: this.businessStateProvinceRegion,
      businessPostalCode: this.businessPostalCode,
      businessCountry: this.businessCountry,
      businessWebsite: this.businessWebsite,
      businessContactFirstName: this.businessContactFirstName,
      businessContactLastName: this.businessContactLastName,
      businessContactEmail: this.businessContactEmail,
      businessContactPhone: this.businessContactPhone,
      notificationEmail: this.notificationEmail,
      useCaseCategories: this.useCaseCategories,
      useCaseSummary: this.useCaseSummary,
      productionMessageSample: this.productionMessageSample,
      optInImageUrls: this.optInImageUrls,
      optInType: this.optInType,
      messageVolume: this.messageVolume,
      additionalInformation: this.additionalInformation,
      tollfreePhoneNumberSid: this.tollfreePhoneNumberSid,
      status: this.status,
      url: this.url,
      rejectionReason: this.rejectionReason,
      errorCode: this.errorCode,
      editExpiration: this.editExpiration,
      editAllowed: this.editAllowed,
      resourceLinks: this.resourceLinks,
      externalReferenceId: this.externalReferenceId,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TollfreeVerificationSolution {}

export interface TollfreeVerificationListInstance {
  _version: V1;
  _solution: TollfreeVerificationSolution;
  _uri: string;

  (sid: string): TollfreeVerificationContext;
  get(sid: string): TollfreeVerificationContext;

  /**
   * Create a TollfreeVerificationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TollfreeVerificationInstance
   */
  create(
    params: TollfreeVerificationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance>;

  /**
   * Streams TollfreeVerificationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TollfreeVerificationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: TollfreeVerificationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: TollfreeVerificationListInstanceEachOptions,
    callback?: (
      item: TollfreeVerificationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of TollfreeVerificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage>;
  /**
   * Lists TollfreeVerificationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TollfreeVerificationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: TollfreeVerificationInstance[]
    ) => any
  ): Promise<TollfreeVerificationInstance[]>;
  list(
    params: TollfreeVerificationListInstanceOptions,
    callback?: (
      error: Error | null,
      items: TollfreeVerificationInstance[]
    ) => any
  ): Promise<TollfreeVerificationInstance[]>;
  /**
   * Retrieve a single page of TollfreeVerificationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TollfreeVerificationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage>;
  page(
    params: TollfreeVerificationListInstancePageOptions,
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TollfreeVerificationListInstance(
  version: V1
): TollfreeVerificationListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as TollfreeVerificationListInstance;

  instance.get = function get(sid): TollfreeVerificationContext {
    return new TollfreeVerificationContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Tollfree/Verifications`;

  instance.create = function create(
    params: TollfreeVerificationListInstanceCreateOptions,
    callback?: (error: Error | null, items: TollfreeVerificationInstance) => any
  ): Promise<TollfreeVerificationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["businessName"] === null ||
      params["businessName"] === undefined
    ) {
      throw new Error("Required parameter \"params['businessName']\" missing.");
    }

    if (
      params["businessWebsite"] === null ||
      params["businessWebsite"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['businessWebsite']\" missing."
      );
    }

    if (
      params["notificationEmail"] === null ||
      params["notificationEmail"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['notificationEmail']\" missing."
      );
    }

    if (
      params["useCaseCategories"] === null ||
      params["useCaseCategories"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['useCaseCategories']\" missing."
      );
    }

    if (
      params["useCaseSummary"] === null ||
      params["useCaseSummary"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['useCaseSummary']\" missing."
      );
    }

    if (
      params["productionMessageSample"] === null ||
      params["productionMessageSample"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['productionMessageSample']\" missing."
      );
    }

    if (
      params["optInImageUrls"] === null ||
      params["optInImageUrls"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['optInImageUrls']\" missing."
      );
    }

    if (params["optInType"] === null || params["optInType"] === undefined) {
      throw new Error("Required parameter \"params['optInType']\" missing.");
    }

    if (
      params["messageVolume"] === null ||
      params["messageVolume"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['messageVolume']\" missing."
      );
    }

    if (
      params["tollfreePhoneNumberSid"] === null ||
      params["tollfreePhoneNumberSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['tollfreePhoneNumberSid']\" missing."
      );
    }

    let data: any = {};

    data["BusinessName"] = params["businessName"];

    data["BusinessWebsite"] = params["businessWebsite"];

    data["NotificationEmail"] = params["notificationEmail"];

    data["UseCaseCategories"] = serialize.map(
      params["useCaseCategories"],
      (e: string) => e
    );

    data["UseCaseSummary"] = params["useCaseSummary"];

    data["ProductionMessageSample"] = params["productionMessageSample"];

    data["OptInImageUrls"] = serialize.map(
      params["optInImageUrls"],
      (e: string) => e
    );

    data["OptInType"] = params["optInType"];

    data["MessageVolume"] = params["messageVolume"];

    data["TollfreePhoneNumberSid"] = params["tollfreePhoneNumberSid"];
    if (params["customerProfileSid"] !== undefined)
      data["CustomerProfileSid"] = params["customerProfileSid"];
    if (params["businessStreetAddress"] !== undefined)
      data["BusinessStreetAddress"] = params["businessStreetAddress"];
    if (params["businessStreetAddress2"] !== undefined)
      data["BusinessStreetAddress2"] = params["businessStreetAddress2"];
    if (params["businessCity"] !== undefined)
      data["BusinessCity"] = params["businessCity"];
    if (params["businessStateProvinceRegion"] !== undefined)
      data["BusinessStateProvinceRegion"] =
        params["businessStateProvinceRegion"];
    if (params["businessPostalCode"] !== undefined)
      data["BusinessPostalCode"] = params["businessPostalCode"];
    if (params["businessCountry"] !== undefined)
      data["BusinessCountry"] = params["businessCountry"];
    if (params["additionalInformation"] !== undefined)
      data["AdditionalInformation"] = params["additionalInformation"];
    if (params["businessContactFirstName"] !== undefined)
      data["BusinessContactFirstName"] = params["businessContactFirstName"];
    if (params["businessContactLastName"] !== undefined)
      data["BusinessContactLastName"] = params["businessContactLastName"];
    if (params["businessContactEmail"] !== undefined)
      data["BusinessContactEmail"] = params["businessContactEmail"];
    if (params["businessContactPhone"] !== undefined)
      data["BusinessContactPhone"] = params["businessContactPhone"];
    if (params["externalReferenceId"] !== undefined)
      data["ExternalReferenceId"] = params["externalReferenceId"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new TollfreeVerificationInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | TollfreeVerificationListInstancePageOptions
      | ((error: Error | null, items: TollfreeVerificationPage) => any),
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["tollfreePhoneNumberSid"] !== undefined)
      data["TollfreePhoneNumberSid"] = params["tollfreePhoneNumberSid"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TollfreeVerificationPage(
          operationVersion,
          payload,
          instance._solution
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: TollfreeVerificationPage) => any
  ): Promise<TollfreeVerificationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new TollfreeVerificationPage(
          instance._version,
          payload,
          instance._solution
        )
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
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

export class TollfreeVerificationPage extends Page<
  V1,
  TollfreeVerificationPayload,
  TollfreeVerificationResource,
  TollfreeVerificationInstance
> {
  /**
   * Initialize the TollfreeVerificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TollfreeVerificationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TollfreeVerificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: TollfreeVerificationResource
  ): TollfreeVerificationInstance {
    return new TollfreeVerificationInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
