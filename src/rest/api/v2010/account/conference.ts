/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { ParticipantListInstance } from "./conference/participant";
import { RecordingListInstance } from "./conference/recording";


export type ConferenceReasonConferenceEnded = 'conference-ended-via-api'|'participant-with-end-conference-on-exit-left'|'participant-with-end-conference-on-exit-kicked'|'last-participant-kicked'|'last-participant-left';

export type ConferenceStatus = 'init'|'in-progress'|'completed';

export type ConferenceUpdateStatus = 'completed';



/**
 * Options to pass to update a ConferenceInstance
 */
export interface ConferenceContextUpdateOptions {
  /**  */
  "status"?: ConferenceUpdateStatus;
  /** The URL we should call to announce something into the conference. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs. */
  "announceUrl"?: string;
  /** The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is `POST` */
  "announceMethod"?: string;
}
/**
 * Options to pass to each
 */
export interface ConferenceListInstanceEachOptions {
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreated"?: Date;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreatedBefore"?: Date;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreatedAfter"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdated"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdatedBefore"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdatedAfter"?: Date;
  /** The string that identifies the Conference resources to read. */
  "friendlyName"?: string;
  /** The status of the resources to read. Can be: `init`, `in-progress`, or `completed`. */
  "status"?: ConferenceStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ConferenceListInstanceOptions {
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreated"?: Date;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreatedBefore"?: Date;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreatedAfter"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdated"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdatedBefore"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdatedAfter"?: Date;
  /** The string that identifies the Conference resources to read. */
  "friendlyName"?: string;
  /** The status of the resources to read. Can be: `init`, `in-progress`, or `completed`. */
  "status"?: ConferenceStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ConferenceListInstancePageOptions {
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreated"?: Date;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreatedBefore"?: Date;
  /** Only include conferences that were created on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were created on this date. You can also specify an inequality, such as `DateCreated<=YYYY-MM-DD`, to read conferences that were created on or before midnight of this date, and `DateCreated>=YYYY-MM-DD` to read conferences that were created on or after midnight of this date. */
  "dateCreatedAfter"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdated"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdatedBefore"?: Date;
  /** Only include conferences that were last updated on this date. Specify a date as `YYYY-MM-DD` in UTC, for example: `2009-07-06`, to read only conferences that were last updated on this date. You can also specify an inequality, such as `DateUpdated<=YYYY-MM-DD`, to read conferences that were last updated on or before midnight of this date, and `DateUpdated>=YYYY-MM-DD` to read conferences that were last updated on or after midnight of this date. */
  "dateUpdatedAfter"?: Date;
  /** The string that identifies the Conference resources to read. */
  "friendlyName"?: string;
  /** The status of the resources to read. Can be: `init`, `in-progress`, or `completed`. */
  "status"?: ConferenceStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}


export interface ConferenceContext {
  participants: ParticipantListInstance;
  recordings: RecordingListInstance;

  /**
   * Fetch a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceInstance
   */
  fetch(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>

  /**
   * Update a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceInstance
   */
  update(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
  /**
   * Update a ConferenceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceInstance
   */
  update(params: ConferenceContextUpdateOptions, callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ConferenceContextSolution {
  "accountSid": string;
  "sid": string;
}

export class ConferenceContextImpl implements ConferenceContext {
  protected _solution: ConferenceContextSolution;
  protected _uri: string;

  protected _participants?: ParticipantListInstance;
  protected _recordings?: RecordingListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error('Parameter \'accountSid\' is not valid.');
    }

    if (!isValidPathParam(sid)) {
      throw new Error('Parameter \'sid\' is not valid.');
    }

    this._solution = { accountSid, sid,  };
    this._uri = `/Accounts/${accountSid}/Conferences/${sid}.json`;
  }

  get participants(): ParticipantListInstance {
    this._participants = this._participants || ParticipantListInstance(this._version, this._solution.accountSid, this._solution.sid);
    return this._participants;
  }

  get recordings(): RecordingListInstance {
    this._recordings = this._recordings || RecordingListInstance(this._version, this._solution.accountSid, this._solution.sid);
    return this._recordings;
  }

  fetch(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance> {
  
    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.fetch({ uri: instance._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new ConferenceInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: ConferenceContextUpdateOptions | ((error: Error | null, item?: ConferenceInstance) => any), callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance> {
      if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["status"] !== undefined)
    data["Status"] = params["status"];
    if (params["announceUrl"] !== undefined)
    data["AnnounceUrl"] = params["announceUrl"];
    if (params["announceMethod"] !== undefined)
    data["AnnounceMethod"] = params["announceMethod"];

    

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    const instance = this;
    let operationVersion = instance._version,
        operationPromise = operationVersion.update({ uri: instance._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new ConferenceInstance(operationVersion, payload, instance._solution.accountSid, instance._solution.sid));
    

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
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


interface ConferencePayload extends TwilioResponsePayload {
    conferences: ConferenceResource[];
}

interface ConferenceResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  api_version: string;
  friendly_name: string;
  region: string;
  sid: string;
  status: ConferenceStatus;
  uri: string;
  subresource_uris: Record<string, string>;
  reason_conference_ended: ConferenceReasonConferenceEnded;
  call_sid_ending_conference: string;
}

export class ConferenceInstance {
  protected _solution: ConferenceContextSolution;
  protected _context?: ConferenceContext;

  constructor(protected _version: V2010, payload: ConferenceResource, accountSid: string, sid?: string) {
    this.accountSid = (payload.account_sid);
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.apiVersion = (payload.api_version);
    this.friendlyName = (payload.friendly_name);
    this.region = (payload.region);
    this.sid = (payload.sid);
    this.status = (payload.status);
    this.uri = (payload.uri);
    this.subresourceUris = (payload.subresource_uris);
    this.reasonConferenceEnded = (payload.reason_conference_ended);
    this.callSidEndingConference = (payload.call_sid_ending_conference);

    this._solution = { accountSid, sid: sid || this.sid,  };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Conference resource.
   */
  accountSid: string;
  /**
   * The date and time in UTC that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in UTC that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The API version used to create this conference.
   */
  apiVersion: string;
  /**
   * A string that you assigned to describe this conference room. Maximum length is 128 characters.
   */
  friendlyName: string;
  /**
   * A string that represents the Twilio Region where the conference audio was mixed. May be `us1`, `ie1`,  `de1`, `sg1`, `br1`, `au1`, and `jp1`. Basic conference audio will always be mixed in `us1`. Global Conference audio will be mixed nearest to the majority of participants.
   */
  region: string;
  /**
   * The unique, Twilio-provided string used to identify this Conference resource.
   */
  sid: string;
  status: ConferenceStatus;
  /**
   * The URI of this resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * A list of related resources identified by their URIs relative to `https://api.twilio.com`.
   */
  subresourceUris: Record<string, string>;
  reasonConferenceEnded: ConferenceReasonConferenceEnded;
  /**
   * The call SID that caused the conference to end.
   */
  callSidEndingConference: string;

  private get _proxy(): ConferenceContext {
    this._context = this._context || new ConferenceContextImpl(this._version, this._solution.accountSid, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceInstance
   */
  fetch(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>

    {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ConferenceInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceInstance
   */
  update(callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;
  /**
   * Update a ConferenceInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ConferenceInstance
   */
  update(params: ConferenceContextUpdateOptions, callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>;

    update(params?: any, callback?: (error: Error | null, item?: ConferenceInstance) => any): Promise<ConferenceInstance>
    {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the participants.
   */
  participants(): ParticipantListInstance {
    return this._proxy.participants;
  }

  /**
   * Access the recordings.
   */
  recordings(): RecordingListInstance {
    return this._proxy.recordings;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      apiVersion: this.apiVersion,
      friendlyName: this.friendlyName,
      region: this.region,
      sid: this.sid,
      status: this.status,
      uri: this.uri,
      subresourceUris: this.subresourceUris,
      reasonConferenceEnded: this.reasonConferenceEnded,
      callSidEndingConference: this.callSidEndingConference,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface ConferenceSolution {
  accountSid: string;
}

export interface ConferenceListInstance {
  _version: V2010;
  _solution: ConferenceSolution;
  _uri: string;

  (sid: string, ): ConferenceContext;
  get(sid: string, ): ConferenceContext;







  /**
   * Streams ConferenceInstance records from the API.
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
   * @param { ConferenceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void): void;
  each(params: ConferenceListInstanceEachOptions, callback?: (item: ConferenceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;
  /**
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ConferenceInstance[]) => any): Promise<ConferenceInstance[]>;
  list(params: ConferenceListInstanceOptions, callback?: (error: Error | null, items: ConferenceInstance[]) => any): Promise<ConferenceInstance[]>;
  /**
   * Retrieve a single page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ConferenceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;
  page(params: ConferenceListInstancePageOptions, callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ConferenceListInstance(version: V2010, accountSid: string): ConferenceListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error('Parameter \'accountSid\' is not valid.');
  }

  const instance = ((sid, ) => instance.get(sid, )) as ConferenceListInstance;

  instance.get = function get(sid, ): ConferenceContext {
    return new ConferenceContextImpl(version, accountSid, sid);
  }

  instance._version = version;
  instance._solution = { accountSid,  };
  instance._uri = `/Accounts/${accountSid}/Conferences.json`;

  instance.page = function page(params?: ConferenceListInstancePageOptions | ((error: Error | null, items: ConferencePage) => any), callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["dateCreated"] !== undefined)
    data["DateCreated"] = serialize.iso8601Date(params["dateCreated"]);
    if (params["dateCreatedBefore"] !== undefined)
    data["DateCreated<"] = serialize.iso8601Date(params["dateCreatedBefore"]);
    if (params["dateCreatedAfter"] !== undefined)
    data["DateCreated>"] = serialize.iso8601Date(params["dateCreatedAfter"]);
    if (params["dateUpdated"] !== undefined)
    data["DateUpdated"] = serialize.iso8601Date(params["dateUpdated"]);
    if (params["dateUpdatedBefore"] !== undefined)
    data["DateUpdated<"] = serialize.iso8601Date(params["dateUpdatedBefore"]);
    if (params["dateUpdatedAfter"] !== undefined)
    data["DateUpdated>"] = serialize.iso8601Date(params["dateUpdatedAfter"]);
    if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["status"] !== undefined)
    data["Status"] = params["status"];
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    
    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: instance._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ConferencePage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: ConferencePage) => any): Promise<ConferencePage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new ConferencePage(instance._version, payload, instance._solution));
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  }


  instance.toJSON = function toJSON() {
    return instance._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(instance.toJSON(), options);
  }

  return instance;
}

export class ConferencePage extends Page<V2010, ConferencePayload, ConferenceResource, ConferenceInstance> {
/**
* Initialize the ConferencePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V2010, response: Response<string>, solution: ConferenceSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ConferenceInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ConferenceResource): ConferenceInstance {
    return new ConferenceInstance(
    this._version,
    payload,
        this._solution.accountSid,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

