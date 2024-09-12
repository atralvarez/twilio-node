/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
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


export type ParticipantConversationState = 'inactive'|'active'|'closed';

/**
 * Options to pass to each
 */
export interface ParticipantConversationListInstanceEachOptions {
  /** A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters. */
  "identity"?: string;
  /** A unique string identifier for the conversation participant who\'s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded. */
  "address"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ParticipantConversationInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ParticipantConversationListInstanceOptions {
  /** A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters. */
  "identity"?: string;
  /** A unique string identifier for the conversation participant who\'s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded. */
  "address"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ParticipantConversationListInstancePageOptions {
  /** A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters. */
  "identity"?: string;
  /** A unique string identifier for the conversation participant who\'s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded. */
  "address"?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  "pageSize"?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}



export interface ParticipantConversationSolution {
}

export interface ParticipantConversationListInstance {
  _version: V1;
  _solution: ParticipantConversationSolution;
  _uri: string;




  /**
   * Streams ParticipantConversationInstance records from the API.
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
   * @param { ParticipantConversationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: ParticipantConversationInstance, done: (err?: Error) => void) => void): void;
  each(params: ParticipantConversationListInstanceEachOptions, callback?: (item: ParticipantConversationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of ParticipantConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl: string, callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage>;
  /**
   * Lists ParticipantConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantConversationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: ParticipantConversationInstance[]) => any): Promise<ParticipantConversationInstance[]>;
  list(params: ParticipantConversationListInstanceOptions, callback?: (error: Error | null, items: ParticipantConversationInstance[]) => any): Promise<ParticipantConversationInstance[]>;
  /**
   * Retrieve a single page of ParticipantConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantConversationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage>;
  page(params: ParticipantConversationListInstancePageOptions, callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ParticipantConversationListInstance(version: V1): ParticipantConversationListInstance {
  const instance = {} as ParticipantConversationListInstance;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/ParticipantConversations`;

  instance.page = function page(params?: ParticipantConversationListInstancePageOptions | ((error: Error | null, items: ParticipantConversationPage) => any), callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["identity"] !== undefined)
    data["Identity"] = params["identity"];
    if (params["address"] !== undefined)
    data["Address"] = params["address"];
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    
    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: instance._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new ParticipantConversationPage(operationVersion, payload, instance._solution));

    operationPromise = instance._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl: string, callback?: (error: Error | null, items: ParticipantConversationPage) => any): Promise<ParticipantConversationPage> {
    const operationPromise = instance._version._domain.twilio.request({method: "get", uri: targetUrl});

    let pagePromise = operationPromise.then(payload => new ParticipantConversationPage(instance._version, payload, instance._solution));
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

interface ParticipantConversationPayload extends TwilioResponsePayload {
    conversations: ParticipantConversationResource[];
}

interface ParticipantConversationResource {
  account_sid: string;
  chat_service_sid: string;
  participant_sid: string;
  participant_user_sid: string;
  participant_identity: string;
  participant_messaging_binding: any;
  conversation_sid: string;
  conversation_unique_name: string;
  conversation_friendly_name: string;
  conversation_attributes: string;
  conversation_date_created: Date;
  conversation_date_updated: Date;
  conversation_created_by: string;
  conversation_state: ParticipantConversationState;
  conversation_timers: any;
  links: Record<string, string>;
}

export class ParticipantConversationInstance {

  constructor(protected _version: V1, payload: ParticipantConversationResource) {
    this.accountSid = (payload.account_sid);
    this.chatServiceSid = (payload.chat_service_sid);
    this.participantSid = (payload.participant_sid);
    this.participantUserSid = (payload.participant_user_sid);
    this.participantIdentity = (payload.participant_identity);
    this.participantMessagingBinding = (payload.participant_messaging_binding);
    this.conversationSid = (payload.conversation_sid);
    this.conversationUniqueName = (payload.conversation_unique_name);
    this.conversationFriendlyName = (payload.conversation_friendly_name);
    this.conversationAttributes = (payload.conversation_attributes);
    this.conversationDateCreated = deserialize.iso8601DateTime(payload.conversation_date_created);
    this.conversationDateUpdated = deserialize.iso8601DateTime(payload.conversation_date_updated);
    this.conversationCreatedBy = (payload.conversation_created_by);
    this.conversationState = (payload.conversation_state);
    this.conversationTimers = (payload.conversation_timers);
    this.links = (payload.links);

  }

  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
   */
  accountSid: string;
  /**
   * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
   */
  chatServiceSid: string;
  /**
   * The unique ID of the [Participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource).
   */
  participantSid: string;
  /**
   * The unique string that identifies the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource).
   */
  participantUserSid: string;
  /**
   * A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters.
   */
  participantIdentity: string;
  /**
   * Information about how this participant exchanges messages with the conversation. A JSON parameter consisting of type and address fields of the participant.
   */
  participantMessagingBinding: any;
  /**
   * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) this Participant belongs to.
   */
  conversationSid: string;
  /**
   * An application-defined string that uniquely identifies the Conversation resource.
   */
  conversationUniqueName: string;
  /**
   * The human-readable name of this conversation, limited to 256 characters. Optional.
   */
  conversationFriendlyName: string;
  /**
   * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set \"{}\" will be returned.
   */
  conversationAttributes: string;
  /**
   * The date that this conversation was created, given in ISO 8601 format.
   */
  conversationDateCreated: Date;
  /**
   * The date that this conversation was last updated, given in ISO 8601 format.
   */
  conversationDateUpdated: Date;
  /**
   * Identity of the creator of this Conversation.
   */
  conversationCreatedBy: string;
  conversationState: ParticipantConversationState;
  /**
   * Timer date values representing state update for this conversation.
   */
  conversationTimers: any;
  /**
   * Contains absolute URLs to access the [participant](https://www.twilio.com/docs/conversations/api/conversation-participant-resource) and [conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) of this conversation.
   */
  links: Record<string, string>;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      chatServiceSid: this.chatServiceSid,
      participantSid: this.participantSid,
      participantUserSid: this.participantUserSid,
      participantIdentity: this.participantIdentity,
      participantMessagingBinding: this.participantMessagingBinding,
      conversationSid: this.conversationSid,
      conversationUniqueName: this.conversationUniqueName,
      conversationFriendlyName: this.conversationFriendlyName,
      conversationAttributes: this.conversationAttributes,
      conversationDateCreated: this.conversationDateCreated,
      conversationDateUpdated: this.conversationDateUpdated,
      conversationCreatedBy: this.conversationCreatedBy,
      conversationState: this.conversationState,
      conversationTimers: this.conversationTimers,
      links: this.links,
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class ParticipantConversationPage extends Page<V1, ParticipantConversationPayload, ParticipantConversationResource, ParticipantConversationInstance> {
/**
* Initialize the ParticipantConversationPage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: ParticipantConversationSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of ParticipantConversationInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: ParticipantConversationResource): ParticipantConversationInstance {
    return new ParticipantConversationInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }

