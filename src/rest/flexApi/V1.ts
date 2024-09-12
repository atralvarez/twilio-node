/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import FlexApiBase from "../FlexApiBase";
import Version from "../../base/Version";
import { AssessmentsListInstance } from "./v1/assessments";
import { ChannelListInstance } from "./v1/channel";
import { ConfigurationListInstance } from "./v1/configuration";
import { FlexFlowListInstance } from "./v1/flexFlow";
import { InsightsAssessmentsCommentListInstance } from "./v1/insightsAssessmentsComment";
import { InsightsConversationsListInstance } from "./v1/insightsConversations";
import { InsightsQuestionnairesListInstance } from "./v1/insightsQuestionnaires";
import { InsightsQuestionnairesCategoryListInstance } from "./v1/insightsQuestionnairesCategory";
import { InsightsQuestionnairesQuestionListInstance } from "./v1/insightsQuestionnairesQuestion";
import { InsightsSegmentsListInstance } from "./v1/insightsSegments";
import { InsightsSessionListInstance } from "./v1/insightsSession";
import { InsightsSettingsAnswerSetsListInstance } from "./v1/insightsSettingsAnswerSets";
import { InsightsSettingsCommentListInstance } from "./v1/insightsSettingsComment";
import { InsightsUserRolesListInstance } from "./v1/insightsUserRoles";
import { InteractionListInstance } from "./v1/interaction";
import { PluginListInstance } from "./v1/plugin";
import { PluginArchiveListInstance } from "./v1/pluginArchive";
import { PluginConfigurationListInstance } from "./v1/pluginConfiguration";
import { PluginConfigurationArchiveListInstance } from "./v1/pluginConfigurationArchive";
import { PluginReleaseListInstance } from "./v1/pluginRelease";
import { PluginVersionArchiveListInstance } from "./v1/pluginVersionArchive";
import { ProvisioningStatusListInstance } from "./v1/provisioningStatus";
import { WebChannelListInstance } from "./v1/webChannel";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of FlexApi
   *
   * @param domain - The Twilio (Twilio.FlexApi) domain
   */
  constructor(domain: FlexApiBase) {
    super(domain, "v1");
  }

  /** assessments - { Twilio.FlexApi.V1.AssessmentsListInstance } resource */
  protected _assessments?: AssessmentsListInstance;
  /** channel - { Twilio.FlexApi.V1.ChannelListInstance } resource */
  protected _channel?: ChannelListInstance;
  /** configuration - { Twilio.FlexApi.V1.ConfigurationListInstance } resource */
  protected _configuration?: ConfigurationListInstance;
  /** flexFlow - { Twilio.FlexApi.V1.FlexFlowListInstance } resource */
  protected _flexFlow?: FlexFlowListInstance;
  /** insightsAssessmentsComment - { Twilio.FlexApi.V1.InsightsAssessmentsCommentListInstance } resource */
  protected _insightsAssessmentsComment?: InsightsAssessmentsCommentListInstance;
  /** insightsConversations - { Twilio.FlexApi.V1.InsightsConversationsListInstance } resource */
  protected _insightsConversations?: InsightsConversationsListInstance;
  /** insightsQuestionnaires - { Twilio.FlexApi.V1.InsightsQuestionnairesListInstance } resource */
  protected _insightsQuestionnaires?: InsightsQuestionnairesListInstance;
  /** insightsQuestionnairesCategory - { Twilio.FlexApi.V1.InsightsQuestionnairesCategoryListInstance } resource */
  protected _insightsQuestionnairesCategory?: InsightsQuestionnairesCategoryListInstance;
  /** insightsQuestionnairesQuestion - { Twilio.FlexApi.V1.InsightsQuestionnairesQuestionListInstance } resource */
  protected _insightsQuestionnairesQuestion?: InsightsQuestionnairesQuestionListInstance;
  /** insightsSegments - { Twilio.FlexApi.V1.InsightsSegmentsListInstance } resource */
  protected _insightsSegments?: InsightsSegmentsListInstance;
  /** insightsSession - { Twilio.FlexApi.V1.InsightsSessionListInstance } resource */
  protected _insightsSession?: InsightsSessionListInstance;
  /** insightsSettingsAnswerSets - { Twilio.FlexApi.V1.InsightsSettingsAnswerSetsListInstance } resource */
  protected _insightsSettingsAnswerSets?: InsightsSettingsAnswerSetsListInstance;
  /** insightsSettingsComment - { Twilio.FlexApi.V1.InsightsSettingsCommentListInstance } resource */
  protected _insightsSettingsComment?: InsightsSettingsCommentListInstance;
  /** insightsUserRoles - { Twilio.FlexApi.V1.InsightsUserRolesListInstance } resource */
  protected _insightsUserRoles?: InsightsUserRolesListInstance;
  /** interaction - { Twilio.FlexApi.V1.InteractionListInstance } resource */
  protected _interaction?: InteractionListInstance;
  /** plugins - { Twilio.FlexApi.V1.PluginListInstance } resource */
  protected _plugins?: PluginListInstance;
  /** pluginArchive - { Twilio.FlexApi.V1.PluginArchiveListInstance } resource */
  protected _pluginArchive?: PluginArchiveListInstance;
  /** pluginConfigurations - { Twilio.FlexApi.V1.PluginConfigurationListInstance } resource */
  protected _pluginConfigurations?: PluginConfigurationListInstance;
  /** pluginConfigurationArchive - { Twilio.FlexApi.V1.PluginConfigurationArchiveListInstance } resource */
  protected _pluginConfigurationArchive?: PluginConfigurationArchiveListInstance;
  /** pluginReleases - { Twilio.FlexApi.V1.PluginReleaseListInstance } resource */
  protected _pluginReleases?: PluginReleaseListInstance;
  /** pluginVersionArchive - { Twilio.FlexApi.V1.PluginVersionArchiveListInstance } resource */
  protected _pluginVersionArchive?: PluginVersionArchiveListInstance;
  /** provisioningStatus - { Twilio.FlexApi.V1.ProvisioningStatusListInstance } resource */
  protected _provisioningStatus?: ProvisioningStatusListInstance;
  /** webChannel - { Twilio.FlexApi.V1.WebChannelListInstance } resource */
  protected _webChannel?: WebChannelListInstance;

  /** Getter for assessments resource */
  get assessments(): AssessmentsListInstance {
    this._assessments = this._assessments || AssessmentsListInstance(this);
    return this._assessments;
  }

  /** Getter for channel resource */
  get channel(): ChannelListInstance {
    this._channel = this._channel || ChannelListInstance(this);
    return this._channel;
  }

  /** Getter for configuration resource */
  get configuration(): ConfigurationListInstance {
    this._configuration = this._configuration || ConfigurationListInstance(this);
    return this._configuration;
  }

  /** Getter for flexFlow resource */
  get flexFlow(): FlexFlowListInstance {
    this._flexFlow = this._flexFlow || FlexFlowListInstance(this);
    return this._flexFlow;
  }

  /** Getter for insightsAssessmentsComment resource */
  get insightsAssessmentsComment(): InsightsAssessmentsCommentListInstance {
    this._insightsAssessmentsComment = this._insightsAssessmentsComment || InsightsAssessmentsCommentListInstance(this);
    return this._insightsAssessmentsComment;
  }

  /** Getter for insightsConversations resource */
  get insightsConversations(): InsightsConversationsListInstance {
    this._insightsConversations = this._insightsConversations || InsightsConversationsListInstance(this);
    return this._insightsConversations;
  }

  /** Getter for insightsQuestionnaires resource */
  get insightsQuestionnaires(): InsightsQuestionnairesListInstance {
    this._insightsQuestionnaires = this._insightsQuestionnaires || InsightsQuestionnairesListInstance(this);
    return this._insightsQuestionnaires;
  }

  /** Getter for insightsQuestionnairesCategory resource */
  get insightsQuestionnairesCategory(): InsightsQuestionnairesCategoryListInstance {
    this._insightsQuestionnairesCategory = this._insightsQuestionnairesCategory || InsightsQuestionnairesCategoryListInstance(this);
    return this._insightsQuestionnairesCategory;
  }

  /** Getter for insightsQuestionnairesQuestion resource */
  get insightsQuestionnairesQuestion(): InsightsQuestionnairesQuestionListInstance {
    this._insightsQuestionnairesQuestion = this._insightsQuestionnairesQuestion || InsightsQuestionnairesQuestionListInstance(this);
    return this._insightsQuestionnairesQuestion;
  }

  /** Getter for insightsSegments resource */
  get insightsSegments(): InsightsSegmentsListInstance {
    this._insightsSegments = this._insightsSegments || InsightsSegmentsListInstance(this);
    return this._insightsSegments;
  }

  /** Getter for insightsSession resource */
  get insightsSession(): InsightsSessionListInstance {
    this._insightsSession = this._insightsSession || InsightsSessionListInstance(this);
    return this._insightsSession;
  }

  /** Getter for insightsSettingsAnswerSets resource */
  get insightsSettingsAnswerSets(): InsightsSettingsAnswerSetsListInstance {
    this._insightsSettingsAnswerSets = this._insightsSettingsAnswerSets || InsightsSettingsAnswerSetsListInstance(this);
    return this._insightsSettingsAnswerSets;
  }

  /** Getter for insightsSettingsComment resource */
  get insightsSettingsComment(): InsightsSettingsCommentListInstance {
    this._insightsSettingsComment = this._insightsSettingsComment || InsightsSettingsCommentListInstance(this);
    return this._insightsSettingsComment;
  }

  /** Getter for insightsUserRoles resource */
  get insightsUserRoles(): InsightsUserRolesListInstance {
    this._insightsUserRoles = this._insightsUserRoles || InsightsUserRolesListInstance(this);
    return this._insightsUserRoles;
  }

  /** Getter for interaction resource */
  get interaction(): InteractionListInstance {
    this._interaction = this._interaction || InteractionListInstance(this);
    return this._interaction;
  }

  /** Getter for plugins resource */
  get plugins(): PluginListInstance {
    this._plugins = this._plugins || PluginListInstance(this);
    return this._plugins;
  }

  /** Getter for pluginArchive resource */
  get pluginArchive(): PluginArchiveListInstance {
    this._pluginArchive = this._pluginArchive || PluginArchiveListInstance(this);
    return this._pluginArchive;
  }

  /** Getter for pluginConfigurations resource */
  get pluginConfigurations(): PluginConfigurationListInstance {
    this._pluginConfigurations = this._pluginConfigurations || PluginConfigurationListInstance(this);
    return this._pluginConfigurations;
  }

  /** Getter for pluginConfigurationArchive resource */
  get pluginConfigurationArchive(): PluginConfigurationArchiveListInstance {
    this._pluginConfigurationArchive = this._pluginConfigurationArchive || PluginConfigurationArchiveListInstance(this);
    return this._pluginConfigurationArchive;
  }

  /** Getter for pluginReleases resource */
  get pluginReleases(): PluginReleaseListInstance {
    this._pluginReleases = this._pluginReleases || PluginReleaseListInstance(this);
    return this._pluginReleases;
  }

  /** Getter for pluginVersionArchive resource */
  get pluginVersionArchive(): PluginVersionArchiveListInstance {
    this._pluginVersionArchive = this._pluginVersionArchive || PluginVersionArchiveListInstance(this);
    return this._pluginVersionArchive;
  }

  /** Getter for provisioningStatus resource */
  get provisioningStatus(): ProvisioningStatusListInstance {
    this._provisioningStatus = this._provisioningStatus || ProvisioningStatusListInstance(this);
    return this._provisioningStatus;
  }

  /** Getter for webChannel resource */
  get webChannel(): WebChannelListInstance {
    this._webChannel = this._webChannel || WebChannelListInstance(this);
    return this._webChannel;
  }

}
