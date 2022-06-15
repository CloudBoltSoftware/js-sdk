import crud from '../../../crudOperations'

const URL = 'v3/cmp/miscellaneousSettings'

export default {
  /**
   * Retrieve a list of existing Miscellaneous Settings
   * @returns {Promise} resolves with a paginated list of all misc settings.
   */
  list: () => crud.getItems(URL),

  /**
   * Update existing Miscellaneous Settings
   * @param {object} updatedMiscSettings updated Miscellaneous Settings object definition
   * Supported fields are the following:
   * allowedGlobalRolesInEmbeddedMode, allowExceedingQuotas, autoGenerateUserPasswords, automaticallyLoginToSso, avatars, bypassProxyDomains,
   * catalogViewingMode, cbadminEmail, cssoLink, defaultAddressingScheme, defaultRedirect, defaultUserDisplayScheme, disabledOutOfTheBoxReports,
   * disabledRecentActivityCategories, displayLegalNoticeOnEveryLogin, embeddedMode, enforceSingleSession, externalUrlWhitelist, fastTrackServerDeletion,
   * frameAncestors, genericErrorMessage, groupNameLevelsToShow, hostnamesCaseSensitive, inactivityTimeoutMinutes, inheritGroupParameters, jobTimeout,
   * legalNoticeText, newServerButton, originalPasswordVerification, passwordResetQuestion, passwordToggle, remoteScriptDirUnix, remoteScriptDirWindows,
   * requireUserEmailVerification, restrictNewEnvironments, reuseHistoricalHostnames, securityMessage, showCostPreviewWhenOrdering, showRatesWhenOrdering,
   * showRecipientFieldOnOrderForm, showVideoTips, social, urlForSiteSpecificHelp
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Miscellaneous Settings object
   */
  update: (updatedMiscSettings) =>
    crud.patchItemById(URL, undefined, updatedMiscSettings)
}
