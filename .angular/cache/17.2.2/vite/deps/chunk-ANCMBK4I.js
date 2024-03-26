import {
  BrowserCacheManager,
  DEFAULT_BROWSER_CACHE_MANAGER,
  StandardController,
  blockAPICallsBeforeInitialize,
  blockNonBrowserEnvironment,
  buildConfiguration,
  createBrowserConfigurationAuthError,
  name,
  stubbedPublicClientApplicationCalled,
  version
} from "./chunk-CLEIRTY2.js";
import {
  BridgeStatusCode
} from "./chunk-SFVKSKUF.js";
import {
  BROWSER_PERF_ENABLED_KEY,
  BrowserCacheLocation,
  Constants,
  CryptoOps,
  DEFAULT_CRYPTO_IMPLEMENTATION,
  EventHandler,
  EventType,
  InteractionStatus,
  InteractionType,
  LOG_LEVEL_CACHE_KEY,
  LOG_PII_CACHE_KEY,
  LogLevel,
  Logger,
  PerformanceClient,
  PopTokenGenerator,
  createNewGuid
} from "./chunk-XU4WRQPX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-47AXDMZD.js";

// node_modules/@azure/msal-browser/dist/operatingcontext/BaseOperatingContext.mjs
var BaseOperatingContext = class _BaseOperatingContext {
  static loggerCallback(level, message) {
    switch (level) {
      case LogLevel.Error:
        console.error(message);
        return;
      case LogLevel.Info:
        console.info(message);
        return;
      case LogLevel.Verbose:
        console.debug(message);
        return;
      case LogLevel.Warning:
        console.warn(message);
        return;
      default:
        console.log(message);
        return;
    }
  }
  constructor(config) {
    this.browserEnvironment = typeof window !== "undefined";
    this.config = buildConfiguration(config, this.browserEnvironment);
    let sessionStorage;
    try {
      sessionStorage = window[BrowserCacheLocation.SessionStorage];
    } catch (e) {
    }
    const logLevelKey = sessionStorage?.getItem(LOG_LEVEL_CACHE_KEY);
    const piiLoggingKey = sessionStorage?.getItem(LOG_PII_CACHE_KEY)?.toLowerCase();
    const piiLoggingEnabled = piiLoggingKey === "true" ? true : piiLoggingKey === "false" ? false : void 0;
    const loggerOptions = __spreadValues({}, this.config.system.loggerOptions);
    const logLevel = logLevelKey && Object.keys(LogLevel).includes(logLevelKey) ? LogLevel[logLevelKey] : void 0;
    if (logLevel) {
      loggerOptions.loggerCallback = _BaseOperatingContext.loggerCallback;
      loggerOptions.logLevel = logLevel;
    }
    if (piiLoggingEnabled !== void 0) {
      loggerOptions.piiLoggingEnabled = piiLoggingEnabled;
    }
    this.logger = new Logger(loggerOptions, name, version);
    this.available = false;
  }
  /**
   * Return the MSAL config
   * @returns BrowserConfiguration
   */
  getConfig() {
    return this.config;
  }
  /**
   * Returns the MSAL Logger
   * @returns Logger
   */
  getLogger() {
    return this.logger;
  }
  isAvailable() {
    return this.available;
  }
  isBrowserEnvironment() {
    return this.browserEnvironment;
  }
};

// node_modules/@azure/msal-browser/dist/naa/BridgeProxy.mjs
var BridgeProxy = class _BridgeProxy {
  /**
   * initializeNestedAppAuthBridge - Initializes the bridge to the host app
   * @returns a promise that resolves to an InitializeBridgeResponse or rejects with an Error
   * @remarks This method will be called by the create factory method
   * @remarks If the bridge is not available, this method will throw an error
   */
  static initializeNestedAppAuthBridge() {
    return __async(this, null, function* () {
      if (window === void 0) {
        throw new Error("window is undefined");
      }
      if (window.nestedAppAuthBridge === void 0) {
        throw new Error("window.nestedAppAuthBridge is undefined");
      }
      if (window.crypto === void 0) {
        throw new Error("window.crypto is undefined");
      }
      try {
        _BridgeProxy.crypto = window.crypto;
        window.nestedAppAuthBridge.addEventListener("message", (response) => {
          const responsePayload = typeof response === "string" ? response : response.data;
          const responseEnvelope = JSON.parse(responsePayload);
          const request = _BridgeProxy.bridgeRequests.find((element) => element.requestId === responseEnvelope.requestId);
          if (request !== void 0) {
            _BridgeProxy.bridgeRequests.splice(_BridgeProxy.bridgeRequests.indexOf(request), 1);
            if (responseEnvelope.success) {
              request.resolve(responseEnvelope);
            } else {
              request.reject(responseEnvelope.error);
            }
          }
        });
        const bridgeResponse = yield new Promise((resolve, reject) => {
          const message = {
            messageType: "NestedAppAuthRequest",
            method: "GetInitContext",
            requestId: _BridgeProxy.getRandomId()
          };
          const request = {
            requestId: message.requestId,
            method: message.method,
            resolve,
            reject
          };
          _BridgeProxy.bridgeRequests.push(request);
          window.nestedAppAuthBridge.postMessage(JSON.stringify(message));
        });
        return _BridgeProxy.validateBridgeResultOrThrow(bridgeResponse.initContext);
      } catch (error) {
        window.console.log(error);
        throw error;
      }
    });
  }
  static getRandomId() {
    return _BridgeProxy.crypto.randomUUID();
  }
  /**
   * getTokenInteractive - Attempts to get a token interactively from the bridge
   * @param request A token request
   * @returns a promise that resolves to an auth result or rejects with a BridgeError
   */
  getTokenInteractive(request) {
    return this.getToken("GetTokenPopup", request);
  }
  /**
   * getTokenSilent Attempts to get a token silently from the bridge
   * @param request A token request
   * @returns a promise that resolves to an auth result or rejects with a BridgeError
   */
  getTokenSilent(request) {
    return this.getToken("GetToken", request);
  }
  getToken(requestType, request) {
    return __async(this, null, function* () {
      const result = yield this.sendRequest(requestType, {
        tokenParams: request
      });
      return {
        token: _BridgeProxy.validateBridgeResultOrThrow(result.token),
        account: _BridgeProxy.validateBridgeResultOrThrow(result.account)
      };
    });
  }
  getActiveAccount() {
    return __async(this, null, function* () {
      const result = yield this.sendRequest("GetActiveAccount");
      return _BridgeProxy.validateBridgeResultOrThrow(result.account);
    });
  }
  getHostCapabilities() {
    return this.capabilities ?? null;
  }
  /**
   * A method used to send a request to the bridge
   * @param request A token request
   * @returns a promise that resolves to a response of provided type or rejects with a BridgeError
   */
  sendRequest(method, requestParams) {
    const message = __spreadValues({
      messageType: "NestedAppAuthRequest",
      method,
      requestId: _BridgeProxy.getRandomId()
    }, requestParams);
    const promise = new Promise((resolve, reject) => {
      const request = {
        requestId: message.requestId,
        method: message.method,
        resolve,
        reject
      };
      _BridgeProxy.bridgeRequests.push(request);
      window.nestedAppAuthBridge.postMessage(JSON.stringify(message));
    });
    return promise;
  }
  static validateBridgeResultOrThrow(input) {
    if (input === void 0) {
      const bridgeError = {
        status: BridgeStatusCode.NestedAppAuthUnavailable
      };
      throw bridgeError;
    }
    return input;
  }
  /**
   * Private constructor for BridgeProxy
   * @param sdkName The name of the SDK being used to make requests on behalf of the app
   * @param sdkVersion The version of the SDK being used to make requests on behalf of the app
   * @param capabilities The capabilities of the bridge / SDK / platform broker
   */
  constructor(sdkName, sdkVersion, capabilities) {
    this.sdkName = sdkName;
    this.sdkVersion = sdkVersion;
    this.capabilities = capabilities;
  }
  /**
   * Factory method for creating an implementation of IBridgeProxy
   * @returns A promise that resolves to a BridgeProxy implementation
   */
  static create() {
    return __async(this, null, function* () {
      const response = yield _BridgeProxy.initializeNestedAppAuthBridge();
      return new _BridgeProxy(response.sdkName, response.sdkVersion, response.capabilities);
    });
  }
};
BridgeProxy.bridgeRequests = [];

// node_modules/@azure/msal-browser/dist/operatingcontext/TeamsAppOperatingContext.mjs
var TeamsAppOperatingContext = class _TeamsAppOperatingContext extends BaseOperatingContext {
  constructor() {
    super(...arguments);
    this.bridgeProxy = void 0;
    this.activeAccount = void 0;
  }
  /**
   * Return the module name.  Intended for use with import() to enable dynamic import
   * of the implementation associated with this operating context
   * @returns
   */
  getModuleName() {
    return _TeamsAppOperatingContext.MODULE_NAME;
  }
  /**
   * Returns the unique identifier for this operating context
   * @returns string
   */
  getId() {
    return _TeamsAppOperatingContext.ID;
  }
  getBridgeProxy() {
    return this.bridgeProxy;
  }
  getActiveAccount() {
    return this.activeAccount;
  }
  setActiveAccount(account) {
    this.activeAccount = account;
  }
  /**
   * Checks whether the operating context is available.
   * Confirms that the code is running a browser rather.  This is required.
   * @returns Promise<boolean> indicating whether this operating context is currently available.
   */
  initialize() {
    return __async(this, null, function* () {
      try {
        if (typeof window !== "undefined") {
          const bridgeProxy = yield BridgeProxy.create();
          try {
            if (bridgeProxy.getHostCapabilities()?.queryAccount) {
              this.activeAccount = yield bridgeProxy.getActiveAccount();
            }
          } catch (e) {
            this.activeAccount = void 0;
          }
          this.bridgeProxy = bridgeProxy;
          this.available = bridgeProxy !== void 0;
        } else {
          this.available = false;
        }
      } catch (e) {
        this.available = false;
      } finally {
        return this.available;
      }
    });
  }
};
TeamsAppOperatingContext.MODULE_NAME = "";
TeamsAppOperatingContext.ID = "TeamsAppOperatingContext";

// node_modules/@azure/msal-browser/dist/operatingcontext/StandardOperatingContext.mjs
var StandardOperatingContext = class _StandardOperatingContext extends BaseOperatingContext {
  /**
   * Return the module name.  Intended for use with import() to enable dynamic import
   * of the implementation associated with this operating context
   * @returns
   */
  getModuleName() {
    return _StandardOperatingContext.MODULE_NAME;
  }
  /**
   * Returns the unique identifier for this operating context
   * @returns string
   */
  getId() {
    return _StandardOperatingContext.ID;
  }
  /**
   * Checks whether the operating context is available.
   * Confirms that the code is running a browser rather.  This is required.
   * @returns Promise<boolean> indicating whether this operating context is currently available.
   */
  initialize() {
    return __async(this, null, function* () {
      this.available = typeof window !== "undefined";
      return this.available;
    });
  }
};
StandardOperatingContext.MODULE_NAME = "";
StandardOperatingContext.ID = "StandardOperatingContext";

// node_modules/@azure/msal-browser/dist/controllers/ControllerFactory.mjs
function createV3Controller(config) {
  return __async(this, null, function* () {
    const standard = new StandardOperatingContext(config);
    yield standard.initialize();
    const controller = yield import("./StandardController-DTJIRN7O.js");
    return controller.StandardController.createController(standard);
  });
}
function createController(config) {
  return __async(this, null, function* () {
    const standard = new StandardOperatingContext(config);
    const teamsApp = new TeamsAppOperatingContext(config);
    const operatingContexts = [standard.initialize(), teamsApp.initialize()];
    yield Promise.all(operatingContexts);
    if (teamsApp.isAvailable() && teamsApp.getConfig().auth.supportsNestedAppAuth) {
      const controller = yield import("./NestedAppAuthController-4QX5CZKY.js");
      return controller.NestedAppAuthController.createController(teamsApp);
    } else if (standard.isAvailable()) {
      const controller = yield import("./StandardController-DTJIRN7O.js");
      return controller.StandardController.createController(standard);
    } else {
      return null;
    }
  });
}

// node_modules/@azure/msal-browser/dist/app/PublicClientApplication.mjs
var PublicClientApplication = class _PublicClientApplication {
  static createPublicClientApplication(configuration) {
    return __async(this, null, function* () {
      const controller = yield createV3Controller(configuration);
      const pca = new _PublicClientApplication(configuration, controller);
      return pca;
    });
  }
  /**
   * @constructor
   * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
   *
   * Important attributes in the Configuration object for auth are:
   * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
   * - authority: the authority URL for your application.
   * - redirect_uri: the uri of your application registered in the portal.
   *
   * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
   * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
   * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
   * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
   * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
   * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
   *
   * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
   * Full B2C functionality will be available in this library in future versions.
   *
   * @param configuration Object for the MSAL PublicClientApplication instance
   * @param IController Optional parameter to explictly set the controller. (Will be removed when we remove public constructor)
   */
  constructor(configuration, controller) {
    if (controller) {
      this.controller = controller;
    } else {
      const standardOperatingContext = new StandardOperatingContext(configuration);
      this.controller = new StandardController(standardOperatingContext);
    }
  }
  /**
   * Initializer function to perform async startup tasks such as connecting to WAM extension
   */
  initialize() {
    return __async(this, null, function* () {
      return this.controller.initialize();
    });
  }
  /**
   * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenPopup(request) {
    return __async(this, null, function* () {
      return this.controller.acquireTokenPopup(request);
    });
  }
  /**
   * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
   * the page, so any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  acquireTokenRedirect(request) {
    return this.controller.acquireTokenRedirect(request);
  }
  /**
   * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
   *
   * @param {@link (SilentRequest:type)}
   * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthenticationResult} object
   */
  acquireTokenSilent(silentRequest) {
    return this.controller.acquireTokenSilent(silentRequest);
  }
  /**
   * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
   * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
   * This API is not indended for normal authorization code acquisition and redemption.
   *
   * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
   *
   * @param request {@link AuthorizationCodeRequest}
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenByCode(request) {
    return this.controller.acquireTokenByCode(request);
  }
  /**
   * Adds event callbacks to array
   * @param callback
   */
  addEventCallback(callback) {
    return this.controller.addEventCallback(callback);
  }
  /**
   * Removes callback with provided id from callback array
   * @param callbackId
   */
  removeEventCallback(callbackId) {
    return this.controller.removeEventCallback(callbackId);
  }
  /**
   * Registers a callback to receive performance events.
   *
   * @param {PerformanceCallbackFunction} callback
   * @returns {string}
   */
  addPerformanceCallback(callback) {
    return this.controller.addPerformanceCallback(callback);
  }
  /**
   * Removes a callback registered with addPerformanceCallback.
   *
   * @param {string} callbackId
   * @returns {boolean}
   */
  removePerformanceCallback(callbackId) {
    return this.controller.removePerformanceCallback(callbackId);
  }
  /**
   * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
   */
  enableAccountStorageEvents() {
    this.controller.enableAccountStorageEvents();
  }
  /**
   * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
   */
  disableAccountStorageEvents() {
    this.controller.disableAccountStorageEvents();
  }
  /**
   * Returns the first account found in the cache that matches the account filter passed in.
   * @param accountFilter
   * @returns The first account found in the cache matching the provided filter or null if no account could be found.
   */
  getAccount(accountFilter) {
    return this.controller.getAccount(accountFilter);
  }
  /**
   * Returns the signed in account matching homeAccountId.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found
   * @param homeAccountId
   * @returns The account object stored in MSAL
   * @deprecated - Use getAccount instead
   */
  getAccountByHomeId(homeAccountId) {
    return this.controller.getAccountByHomeId(homeAccountId);
  }
  /**
   * Returns the signed in account matching localAccountId.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found
   * @param localAccountId
   * @returns The account object stored in MSAL
   * @deprecated - Use getAccount instead
   */
  getAccountByLocalId(localId) {
    return this.controller.getAccountByLocalId(localId);
  }
  /**
   * Returns the signed in account matching username.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found.
   * This API is provided for convenience but getAccountById should be used for best reliability
   * @param userName
   * @returns The account object stored in MSAL
   * @deprecated - Use getAccount instead
   */
  getAccountByUsername(userName) {
    return this.controller.getAccountByUsername(userName);
  }
  /**
   * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
   * @param accountFilter - (Optional) filter to narrow down the accounts returned
   * @returns Array of AccountInfo objects in cache
   */
  getAllAccounts(accountFilter) {
    return this.controller.getAllAccounts(accountFilter);
  }
  /**
   * Event handler function which allows users to fire events after the PublicClientApplication object
   * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
   * auth flows.
   * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
   * @returns Token response or null. If the return value is null, then no auth redirect was detected.
   */
  handleRedirectPromise(hash) {
    return this.controller.handleRedirectPromise(hash);
  }
  /**
   * Use when initiating the login process via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  loginPopup(request) {
    return this.controller.loginPopup(request);
  }
  /**
   * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
   * any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  loginRedirect(request) {
    return this.controller.loginRedirect(request);
  }
  /**
   * Deprecated logout function. Use logoutRedirect or logoutPopup instead
   * @param logoutRequest
   * @deprecated
   */
  logout(logoutRequest) {
    return this.controller.logout(logoutRequest);
  }
  /**
   * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param logoutRequest
   */
  logoutRedirect(logoutRequest) {
    return this.controller.logoutRedirect(logoutRequest);
  }
  /**
   * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
   * @param logoutRequest
   */
  logoutPopup(logoutRequest) {
    return this.controller.logoutPopup(logoutRequest);
  }
  /**
   * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
   * - Any browser using a form of Intelligent Tracking Prevention
   * - If there is not an established session with the service
   *
   * In these cases, the request must be done inside a popup or full frame redirect.
   *
   * For the cases where interaction is required, you cannot send a request with prompt=none.
   *
   * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
   * you session on the server still exists.
   * @param request {@link SsoSilentRequest}
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  ssoSilent(request) {
    return this.controller.ssoSilent(request);
  }
  /**
   * Gets the token cache for the application.
   */
  getTokenCache() {
    return this.controller.getTokenCache();
  }
  /**
   * Returns the logger instance
   */
  getLogger() {
    return this.controller.getLogger();
  }
  /**
   * Replaces the default logger set in configurations with new Logger with new configurations
   * @param logger Logger instance
   */
  setLogger(logger) {
    this.controller.setLogger(logger);
  }
  /**
   * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
   * @param account
   */
  setActiveAccount(account) {
    this.controller.setActiveAccount(account);
  }
  /**
   * Gets the currently active account
   */
  getActiveAccount() {
    return this.controller.getActiveAccount();
  }
  /**
   * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
   * @param sku
   * @param version
   */
  initializeWrapperLibrary(sku, version2) {
    return this.controller.initializeWrapperLibrary(sku, version2);
  }
  /**
   * Sets navigation client
   * @param navigationClient
   */
  setNavigationClient(navigationClient) {
    this.controller.setNavigationClient(navigationClient);
  }
  /**
   * Returns the configuration object
   * @internal
   */
  getConfiguration() {
    return this.controller.getConfiguration();
  }
  /**
   * Hydrates cache with the tokens and account in the AuthenticationResult object
   * @param result
   * @param request - The request object that was used to obtain the AuthenticationResult
   * @returns
   */
  hydrateCache(result, request) {
    return __async(this, null, function* () {
      return this.controller.hydrateCache(result, request);
    });
  }
  /**
   * Clears tokens and account from the browser cache.
   * @param logoutRequest
   */
  clearCache(logoutRequest) {
    return this.controller.clearCache(logoutRequest);
  }
};

// node_modules/@azure/msal-browser/dist/controllers/UnknownOperatingContextController.mjs
var UnknownOperatingContextController = class {
  constructor(operatingContext) {
    this.initialized = false;
    this.operatingContext = operatingContext;
    this.isBrowserEnvironment = this.operatingContext.isBrowserEnvironment();
    this.config = operatingContext.getConfig();
    this.logger = operatingContext.getLogger();
    this.performanceClient = this.config.telemetry.client;
    this.browserCrypto = this.isBrowserEnvironment ? new CryptoOps(this.logger, this.performanceClient) : DEFAULT_CRYPTO_IMPLEMENTATION;
    this.browserStorage = this.isBrowserEnvironment ? new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) : DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger);
    this.eventHandler = new EventHandler(this.logger, this.browserCrypto);
  }
  getBrowserStorage() {
    return this.browserStorage;
  }
  getEventHandler() {
    return this.eventHandler;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAccount(accountFilter) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAccountByHomeId(homeAccountId) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAccountByLocalId(localAccountId) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getAccountByUsername(username) {
    return null;
  }
  getAllAccounts() {
    return [];
  }
  initialize() {
    this.initialized = true;
    return Promise.resolve();
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  acquireTokenPopup(request) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  acquireTokenRedirect(request) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return Promise.resolve();
  }
  acquireTokenSilent(silentRequest) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  acquireTokenByCode(request) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  acquireTokenNative(request, apiId, accountId) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  acquireTokenByRefreshToken(commonRequest, silentRequest) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  addEventCallback(callback) {
    return this.eventHandler.addEventCallback(callback);
  }
  removeEventCallback(callbackId) {
    this.eventHandler.removeEventCallback(callbackId);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addPerformanceCallback(callback) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return "";
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removePerformanceCallback(callbackId) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return true;
  }
  enableAccountStorageEvents() {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
  }
  disableAccountStorageEvents() {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
  }
  handleRedirectPromise(hash) {
    blockAPICallsBeforeInitialize(this.initialized);
    return Promise.resolve(null);
  }
  loginPopup(request) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loginRedirect(request) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logout(logoutRequest) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  logoutRedirect(logoutRequest) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  logoutPopup(logoutRequest) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  ssoSilent(request) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  getTokenCache() {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  getLogger() {
    return this.logger;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setLogger(logger) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setActiveAccount(account) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
  }
  getActiveAccount() {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  initializeWrapperLibrary(sku, version2) {
    this.browserStorage.setWrapperMetadata(sku, version2);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setNavigationClient(navigationClient) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
  }
  getConfiguration() {
    return this.config;
  }
  isBrowserEnv() {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return true;
  }
  getBrowserCrypto() {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  getPerformanceClient() {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  getRedirectResponse() {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
    return {};
  }
  preflightBrowserEnvironmentCheck(interactionType, isAppEmbedded) {
    blockAPICallsBeforeInitialize(this.initialized);
    blockNonBrowserEnvironment(this.isBrowserEnvironment);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clearCache(logoutRequest) {
    return __async(this, null, function* () {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment(this.isBrowserEnvironment);
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hydrateCache(result, request) {
    return __async(this, null, function* () {
      blockAPICallsBeforeInitialize(this.initialized);
      blockNonBrowserEnvironment(this.isBrowserEnvironment);
    });
  }
};

// node_modules/@azure/msal-browser/dist/operatingcontext/UnknownOperatingContext.mjs
var UnknownOperatingContext = class _UnknownOperatingContext extends BaseOperatingContext {
  /**
   * Return the module name.  Intended for use with import() to enable dynamic import
   * of the implementation associated with this operating context
   * @returns
   */
  getModuleName() {
    return _UnknownOperatingContext.MODULE_NAME;
  }
  /**
   * Returns the unique identifier for this operating context
   * @returns string
   */
  getId() {
    return _UnknownOperatingContext.ID;
  }
  /**
   * Checks whether the operating context is available.
   * Confirms that the code is running a browser rather.  This is required.
   * @returns Promise<boolean> indicating whether this operating context is currently available.
   */
  initialize() {
    return __async(this, null, function* () {
      return true;
    });
  }
};
UnknownOperatingContext.MODULE_NAME = "";
UnknownOperatingContext.ID = "UnknownOperatingContext";

// node_modules/@azure/msal-browser/dist/app/PublicClientNext.mjs
var PublicClientNext = class _PublicClientNext {
  static createPublicClientApplication(configuration) {
    return __async(this, null, function* () {
      const controller = yield createController(configuration);
      let pca;
      if (controller !== null) {
        pca = new _PublicClientNext(configuration, controller);
      } else {
        pca = new _PublicClientNext(configuration);
      }
      return pca;
    });
  }
  /**
   * @constructor
   * Constructor for the PublicClientNext used to instantiate the PublicClientNext object
   *
   * Important attributes in the Configuration object for auth are:
   * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
   * - authority: the authority URL for your application.
   * - redirect_uri: the uri of your application registered in the portal.
   *
   * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
   * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
   * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
   * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
   * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
   * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
   *
   * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
   * Full B2C functionality will be available in this library in future versions.
   *
   * @param configuration Object for the MSAL PublicClientApplication instance
   * @param IController Optional parameter to explictly set the controller. (Will be removed when we remove public constructor)
   */
  constructor(configuration, controller) {
    this.configuration = configuration;
    if (controller) {
      this.controller = controller;
    } else {
      const operatingContext = new UnknownOperatingContext(configuration);
      this.controller = new UnknownOperatingContextController(operatingContext);
    }
  }
  /**
   * Initializer function to perform async startup tasks such as connecting to WAM extension
   */
  initialize() {
    return __async(this, null, function* () {
      if (this.controller instanceof UnknownOperatingContextController) {
        const result = yield createController(this.configuration);
        if (result !== null) {
          this.controller = result;
        }
        return this.controller.initialize();
      }
      return Promise.resolve();
    });
  }
  /**
   * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenPopup(request) {
    return __async(this, null, function* () {
      return this.controller.acquireTokenPopup(request);
    });
  }
  /**
   * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
   * the page, so any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  acquireTokenRedirect(request) {
    return this.controller.acquireTokenRedirect(request);
  }
  /**
   * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
   *
   * @param {@link (SilentRequest:type)}
   * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthenticationResult} object
   */
  acquireTokenSilent(silentRequest) {
    return this.controller.acquireTokenSilent(silentRequest);
  }
  /**
   * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
   * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
   * This API is not indended for normal authorization code acquisition and redemption.
   *
   * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
   *
   * @param request {@link AuthorizationCodeRequest}
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  acquireTokenByCode(request) {
    return this.controller.acquireTokenByCode(request);
  }
  /**
   * Adds event callbacks to array
   * @param callback
   */
  addEventCallback(callback) {
    return this.controller.addEventCallback(callback);
  }
  /**
   * Removes callback with provided id from callback array
   * @param callbackId
   */
  removeEventCallback(callbackId) {
    return this.controller.removeEventCallback(callbackId);
  }
  /**
   * Registers a callback to receive performance events.
   *
   * @param {PerformanceCallbackFunction} callback
   * @returns {string}
   */
  addPerformanceCallback(callback) {
    return this.controller.addPerformanceCallback(callback);
  }
  /**
   * Removes a callback registered with addPerformanceCallback.
   *
   * @param {string} callbackId
   * @returns {boolean}
   */
  removePerformanceCallback(callbackId) {
    return this.controller.removePerformanceCallback(callbackId);
  }
  /**
   * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
   */
  enableAccountStorageEvents() {
    this.controller.enableAccountStorageEvents();
  }
  /**
   * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
   */
  disableAccountStorageEvents() {
    this.controller.disableAccountStorageEvents();
  }
  /**
   * Returns the first account found in the cache that matches the account filter passed in.
   * @param accountFilter
   * @returns The first account found in the cache matching the provided filter or null if no account could be found.
   */
  getAccount(accountFilter) {
    return this.controller.getAccount(accountFilter);
  }
  /**
   * Returns the signed in account matching homeAccountId.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found
   * @param homeAccountId
   * @returns The account object stored in MSAL
   * @deprecated - Use getAccount instead
   */
  getAccountByHomeId(homeAccountId) {
    return this.controller.getAccountByHomeId(homeAccountId);
  }
  /**
   * Returns the signed in account matching localAccountId.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found
   * @param localAccountId
   * @returns The account object stored in MSAL
   * @deprecated - Use getAccount instead
   */
  getAccountByLocalId(localId) {
    return this.controller.getAccountByLocalId(localId);
  }
  /**
   * Returns the signed in account matching username.
   * (the account object is created at the time of successful login)
   * or null when no matching account is found.
   * This API is provided for convenience but getAccountById should be used for best reliability
   * @param userName
   * @returns The account object stored in MSAL
   * @deprecated - Use getAccount instead
   */
  getAccountByUsername(userName) {
    return this.controller.getAccountByUsername(userName);
  }
  /**
   * Returns all the accounts in the cache that match the optional filter. If no filter is provided, all accounts are returned.
   * @param accountFilter - (Optional) filter to narrow down the accounts returned
   * @returns Array of AccountInfo objects in cache
   */
  getAllAccounts(accountFilter) {
    return this.controller.getAllAccounts(accountFilter);
  }
  /**
   * Event handler function which allows users to fire events after the PublicClientApplication object
   * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
   * auth flows.
   * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
   * @returns Token response or null. If the return value is null, then no auth redirect was detected.
   */
  handleRedirectPromise(hash) {
    return this.controller.handleRedirectPromise(hash);
  }
  /**
   * Use when initiating the login process via opening a popup window in the user's browser
   *
   * @param request
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  loginPopup(request) {
    return this.controller.loginPopup(request);
  }
  /**
   * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
   * any code that follows this function will not execute.
   *
   * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
   * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
   *
   * @param request
   */
  loginRedirect(request) {
    return this.controller.loginRedirect(request);
  }
  /**
   * Deprecated logout function. Use logoutRedirect or logoutPopup instead
   * @param logoutRequest
   * @deprecated
   */
  logout(logoutRequest) {
    return this.controller.logout(logoutRequest);
  }
  /**
   * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
   * Default behaviour is to redirect the user to `window.location.href`.
   * @param logoutRequest
   */
  logoutRedirect(logoutRequest) {
    return this.controller.logoutRedirect(logoutRequest);
  }
  /**
   * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
   * @param logoutRequest
   */
  logoutPopup(logoutRequest) {
    return this.controller.logoutPopup(logoutRequest);
  }
  /**
   * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
   * - Any browser using a form of Intelligent Tracking Prevention
   * - If there is not an established session with the service
   *
   * In these cases, the request must be done inside a popup or full frame redirect.
   *
   * For the cases where interaction is required, you cannot send a request with prompt=none.
   *
   * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
   * you session on the server still exists.
   * @param request {@link SsoSilentRequest}
   *
   * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
   */
  ssoSilent(request) {
    return this.controller.ssoSilent(request);
  }
  /**
   * Gets the token cache for the application.
   */
  getTokenCache() {
    return this.controller.getTokenCache();
  }
  /**
   * Returns the logger instance
   */
  getLogger() {
    return this.controller.getLogger();
  }
  /**
   * Replaces the default logger set in configurations with new Logger with new configurations
   * @param logger Logger instance
   */
  setLogger(logger) {
    this.controller.setLogger(logger);
  }
  /**
   * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
   * @param account
   */
  setActiveAccount(account) {
    this.controller.setActiveAccount(account);
  }
  /**
   * Gets the currently active account
   */
  getActiveAccount() {
    return this.controller.getActiveAccount();
  }
  /**
   * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
   * @param sku
   * @param version
   */
  initializeWrapperLibrary(sku, version2) {
    return this.controller.initializeWrapperLibrary(sku, version2);
  }
  /**
   * Sets navigation client
   * @param navigationClient
   */
  setNavigationClient(navigationClient) {
    this.controller.setNavigationClient(navigationClient);
  }
  /**
   * Returns the configuration object
   * @internal
   */
  getConfiguration() {
    return this.controller.getConfiguration();
  }
  /**
   * Hydrates cache with the tokens and account in the AuthenticationResult object
   * @param result
   * @param request - The request object that was used to obtain the AuthenticationResult
   * @returns
   */
  hydrateCache(result, request) {
    return __async(this, null, function* () {
      return this.controller.hydrateCache(result, request);
    });
  }
  /**
   * Clears tokens and account from the browser cache.
   * @param logoutRequest
   */
  clearCache(logoutRequest) {
    return this.controller.clearCache(logoutRequest);
  }
};

// node_modules/@azure/msal-browser/dist/app/IPublicClientApplication.mjs
var stubbedPublicClientApplication = {
  initialize: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  acquireTokenPopup: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  acquireTokenRedirect: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  acquireTokenSilent: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  acquireTokenByCode: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  getAllAccounts: () => {
    return [];
  },
  getAccountByHomeId: () => {
    return null;
  },
  getAccountByUsername: () => {
    return null;
  },
  getAccountByLocalId: () => {
    return null;
  },
  handleRedirectPromise: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  loginPopup: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  loginRedirect: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  logout: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  logoutRedirect: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  logoutPopup: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  ssoSilent: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  addEventCallback: () => {
    return null;
  },
  removeEventCallback: () => {
    return;
  },
  addPerformanceCallback: () => {
    return "";
  },
  removePerformanceCallback: () => {
    return false;
  },
  enableAccountStorageEvents: () => {
    return;
  },
  disableAccountStorageEvents: () => {
    return;
  },
  getTokenCache: () => {
    throw createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled);
  },
  getLogger: () => {
    throw createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled);
  },
  setLogger: () => {
    return;
  },
  setActiveAccount: () => {
    return;
  },
  getActiveAccount: () => {
    return null;
  },
  initializeWrapperLibrary: () => {
    return;
  },
  setNavigationClient: () => {
    return;
  },
  getConfiguration: () => {
    throw createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled);
  },
  hydrateCache: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  },
  clearCache: () => {
    return Promise.reject(createBrowserConfigurationAuthError(stubbedPublicClientApplicationCalled));
  }
};

// node_modules/@azure/msal-browser/dist/event/EventMessage.mjs
var EventMessageUtils = class {
  /**
   * Gets interaction status from event message
   * @param message
   * @param currentStatus
   */
  static getInteractionStatusFromEvent(message, currentStatus) {
    switch (message.eventType) {
      case EventType.LOGIN_START:
        return InteractionStatus.Login;
      case EventType.SSO_SILENT_START:
        return InteractionStatus.SsoSilent;
      case EventType.ACQUIRE_TOKEN_START:
        if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
          return InteractionStatus.AcquireToken;
        }
        break;
      case EventType.HANDLE_REDIRECT_START:
        return InteractionStatus.HandleRedirect;
      case EventType.LOGOUT_START:
        return InteractionStatus.Logout;
      case EventType.SSO_SILENT_SUCCESS:
      case EventType.SSO_SILENT_FAILURE:
        if (currentStatus && currentStatus !== InteractionStatus.SsoSilent) {
          break;
        }
        return InteractionStatus.None;
      case EventType.LOGOUT_END:
        if (currentStatus && currentStatus !== InteractionStatus.Logout) {
          break;
        }
        return InteractionStatus.None;
      case EventType.HANDLE_REDIRECT_END:
        if (currentStatus && currentStatus !== InteractionStatus.HandleRedirect) {
          break;
        }
        return InteractionStatus.None;
      case EventType.LOGIN_SUCCESS:
      case EventType.LOGIN_FAILURE:
      case EventType.ACQUIRE_TOKEN_SUCCESS:
      case EventType.ACQUIRE_TOKEN_FAILURE:
      case EventType.RESTORE_FROM_BFCACHE:
        if (message.interactionType === InteractionType.Redirect || message.interactionType === InteractionType.Popup) {
          if (currentStatus && currentStatus !== InteractionStatus.Login && currentStatus !== InteractionStatus.AcquireToken) {
            break;
          }
          return InteractionStatus.None;
        }
        break;
    }
    return null;
  }
};

// node_modules/@azure/msal-browser/dist/crypto/SignedHttpRequest.mjs
var SignedHttpRequest = class {
  constructor(shrParameters, shrOptions) {
    const loggerOptions = shrOptions && shrOptions.loggerOptions || {};
    this.logger = new Logger(loggerOptions, name, version);
    this.cryptoOps = new CryptoOps(this.logger);
    this.popTokenGenerator = new PopTokenGenerator(this.cryptoOps);
    this.shrParameters = shrParameters;
  }
  /**
   * Generates and caches a keypair for the given request options.
   * @returns Public key digest, which should be sent to the token issuer.
   */
  generatePublicKeyThumbprint() {
    return __async(this, null, function* () {
      const { kid } = yield this.popTokenGenerator.generateKid(this.shrParameters);
      return kid;
    });
  }
  /**
   * Generates a signed http request for the given payload with the given key.
   * @param payload Payload to sign (e.g. access token)
   * @param publicKeyThumbprint Public key digest (from generatePublicKeyThumbprint API)
   * @param claims Additional claims to include/override in the signed JWT
   * @returns Pop token signed with the corresponding private key
   */
  signRequest(payload, publicKeyThumbprint, claims) {
    return __async(this, null, function* () {
      return this.popTokenGenerator.signPayload(payload, publicKeyThumbprint, this.shrParameters, claims);
    });
  }
  /**
   * Removes cached keys from browser for given public key thumbprint
   * @param publicKeyThumbprint Public key digest (from generatePublicKeyThumbprint API)
   * @returns If keys are properly deleted
   */
  removeKeys(publicKeyThumbprint) {
    return __async(this, null, function* () {
      return this.cryptoOps.removeTokenBindingKey(publicKeyThumbprint);
    });
  }
};

// node_modules/@azure/msal-browser/dist/telemetry/BrowserPerformanceClient.mjs
function getPerfMeasurementModule() {
  let sessionStorage;
  try {
    sessionStorage = window[BrowserCacheLocation.SessionStorage];
    const perfEnabled = sessionStorage?.getItem(BROWSER_PERF_ENABLED_KEY);
    if (Number(perfEnabled) === 1) {
      return import("./BrowserPerformanceMeasurement-DELJXB4E.js");
    }
  } catch (e) {
  }
  return void 0;
}
function supportsBrowserPerformanceNow() {
  return typeof window !== "undefined" && typeof window.performance !== "undefined" && typeof window.performance.now === "function";
}
function getPerfDurationMs(startTime) {
  if (!startTime || !supportsBrowserPerformanceNow()) {
    return void 0;
  }
  return Math.round(window.performance.now() - startTime);
}
var BrowserPerformanceClient = class extends PerformanceClient {
  constructor(configuration, intFields) {
    super(configuration.auth.clientId, configuration.auth.authority || `${Constants.DEFAULT_AUTHORITY}`, new Logger(configuration.system?.loggerOptions || {}, name, version), name, version, configuration.telemetry?.application || {
      appName: "",
      appVersion: ""
    }, intFields);
  }
  generateId() {
    return createNewGuid();
  }
  getPageVisibility() {
    return document.visibilityState?.toString() || null;
  }
  deleteIncompleteSubMeasurements(inProgressEvent) {
    void getPerfMeasurementModule()?.then((module) => {
      const rootEvent = this.eventsByCorrelationId.get(inProgressEvent.event.correlationId);
      const isRootEvent = rootEvent && rootEvent.eventId === inProgressEvent.event.eventId;
      const incompleteMeasurements = [];
      if (isRootEvent && rootEvent?.incompleteSubMeasurements) {
        rootEvent.incompleteSubMeasurements.forEach((subMeasurement) => {
          incompleteMeasurements.push(__spreadValues({}, subMeasurement));
        });
      }
      module.BrowserPerformanceMeasurement.flushMeasurements(inProgressEvent.event.correlationId, incompleteMeasurements);
    });
  }
  /**
   * Starts measuring performance for a given operation. Returns a function that should be used to end the measurement.
   * Also captures browser page visibilityState.
   *
   * @param {PerformanceEvents} measureName
   * @param {?string} [correlationId]
   * @returns {((event?: Partial<PerformanceEvent>) => PerformanceEvent| null)}
   */
  startMeasurement(measureName, correlationId) {
    const startPageVisibility = this.getPageVisibility();
    const inProgressEvent = super.startMeasurement(measureName, correlationId);
    const startTime = supportsBrowserPerformanceNow() ? window.performance.now() : void 0;
    const browserMeasurement = getPerfMeasurementModule()?.then((module) => {
      return new module.BrowserPerformanceMeasurement(measureName, inProgressEvent.event.correlationId);
    });
    void browserMeasurement?.then((measurement) => measurement.startMeasurement());
    return __spreadProps(__spreadValues({}, inProgressEvent), {
      end: (event) => {
        const res = inProgressEvent.end(__spreadProps(__spreadValues({}, event), {
          startPageVisibility,
          endPageVisibility: this.getPageVisibility(),
          durationMs: getPerfDurationMs(startTime)
        }));
        void browserMeasurement?.then((measurement) => measurement.endMeasurement());
        this.deleteIncompleteSubMeasurements(inProgressEvent);
        return res;
      },
      discard: () => {
        inProgressEvent.discard();
        void browserMeasurement?.then((measurement) => measurement.flushMeasurement());
        this.deleteIncompleteSubMeasurements(inProgressEvent);
      }
    });
  }
  /**
   * Adds pre-queue time to preQueueTimeByCorrelationId map.
   * @param {PerformanceEvents} eventName
   * @param {?string} correlationId
   * @returns
   */
  setPreQueueTime(eventName, correlationId) {
    if (!supportsBrowserPerformanceNow()) {
      this.logger.trace(`BrowserPerformanceClient: window performance API not available, unable to set telemetry queue time for ${eventName}`);
      return;
    }
    if (!correlationId) {
      this.logger.trace(`BrowserPerformanceClient: correlationId for ${eventName} not provided, unable to set telemetry queue time`);
      return;
    }
    const preQueueEvent = this.preQueueTimeByCorrelationId.get(correlationId);
    if (preQueueEvent) {
      this.logger.trace(`BrowserPerformanceClient: Incomplete pre-queue ${preQueueEvent.name} found`, correlationId);
      this.addQueueMeasurement(preQueueEvent.name, correlationId, void 0, true);
    }
    this.preQueueTimeByCorrelationId.set(correlationId, {
      name: eventName,
      time: window.performance.now()
    });
  }
  /**
   * Calculates and adds queue time measurement for given performance event.
   *
   * @param {PerformanceEvents} eventName
   * @param {?string} correlationId
   * @param {?number} queueTime
   * @param {?boolean} manuallyCompleted - indicator for manually completed queue measurements
   * @returns
   */
  addQueueMeasurement(eventName, correlationId, queueTime, manuallyCompleted) {
    if (!supportsBrowserPerformanceNow()) {
      this.logger.trace(`BrowserPerformanceClient: window performance API not available, unable to add queue measurement for ${eventName}`);
      return;
    }
    if (!correlationId) {
      this.logger.trace(`BrowserPerformanceClient: correlationId for ${eventName} not provided, unable to add queue measurement`);
      return;
    }
    const preQueueTime = super.getPreQueueTime(eventName, correlationId);
    if (!preQueueTime) {
      return;
    }
    const currentTime = window.performance.now();
    const resQueueTime = queueTime || super.calculateQueuedTime(preQueueTime, currentTime);
    return super.addQueueMeasurement(eventName, correlationId, resQueueTime, manuallyCompleted);
  }
};

export {
  PublicClientApplication,
  PublicClientNext,
  stubbedPublicClientApplication,
  EventMessageUtils,
  SignedHttpRequest,
  BrowserPerformanceClient
};
/*! Bundled license information:

@azure/msal-browser/dist/operatingcontext/BaseOperatingContext.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/naa/BridgeProxy.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/operatingcontext/TeamsAppOperatingContext.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/operatingcontext/StandardOperatingContext.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/controllers/ControllerFactory.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/app/PublicClientApplication.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/controllers/UnknownOperatingContextController.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/operatingcontext/UnknownOperatingContext.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/app/PublicClientNext.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/app/IPublicClientApplication.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/event/EventMessage.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/crypto/SignedHttpRequest.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/telemetry/BrowserPerformanceClient.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)

@azure/msal-browser/dist/index.mjs:
  (*! @azure/msal-browser v3.10.0 2024-02-17 *)
*/
//# sourceMappingURL=chunk-ANCMBK4I.js.map
