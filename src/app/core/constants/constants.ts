/**
 * basic constant values required in project
 */
export enum Constants {
    Empty_String = "",
    InitialRowId = '-1',
    Form_Invalid = 'INVALID',
    AccessToken = 'access_token',
    UnauthorizedAccessEvent = 'unAuthorizedAccess',
    AccessProjectFromMenuEvent = 'accessProjectFromMenuEvent',
    MsalLoginSuccessEvent = 'loginSuccess',
    InitiatePurchaseOrderInProgressEvent = 'initiatePurchaseOrderInProgressEvent',
    IsAuthenticated = 'authenticated',
    IsUserLoggedIn = 'loggedIn',
    ConnectionTimeoutErrorEvent = 'connectionTimeoutError',
    UserPrefGridPageSize = 'userPreferenceGridPageSize',
    LoggedInUserData = 'loggedInUserData',
    ReadyForUpload = "Ready for upload",
    InvalidVoucherNumber = "Invalid voucher",
    CheckInfoReceived = "Check info is received",
    RegexPatternAlphaNumeric = '^[a-zA-Z0-9 ]+$',
    RegexPatternOnlyNumeric = '^[0-9]*$',
    RegexPatternVarCharDataType = '^[a-zA-Z0-9_.\/-]*$',
    RegexPatternNumberDataType = '[0-9]+',
    RegexPatternCodeValue = '^[9, 0-9]*$',
    RegexPatternExponential = '^[0-9]+([eE][-+]?[0-9]+)?$',
    RegexPatternProjectNumber = '^[A-Z]{3}[0-9]{10}$',
    RegexPatternPlanNumber = '^[0-9]{1}[.]{1}[A-Z0-9]{3}$',
    RegexPatternEmail = '^([a-zA-Z0-9.]+@nycsca.org)$',
    RegexPatternstateaidNum = '^[a-zA-Z0-9_.*-]*$',               // special Char Allowed:  _.-*  //
    RegexPatternOrigLoc = '^[a-zA-Z0-9 ,\/\`]*$',            // special Char Allowed:  `,/  //
    RegexPatternProjLiason = '^[a-zA-Z0-9 \\/\\-$,().?]*$',  // special Char Allowed:  /-$,().?  //
    RegexPatternTcuLoc = '^[a-zA-Z0-9 \/]*$',                // special Char Allowed:  /  //
    RegexPatternTitleProg = '^[a-zA-Z0-9 \\/\\-#.*,@&\']*$', // special Char Allowed:  /-#.,@&'  //
    RegexPatternJobType = '^[a-zA-Z0-9+]*$',                 // special Char Allowed:  +  //
    Kendo_Operation_Add = 1,
    Kendo_Operation_Edit = 2,
    InActive_Symbol = 'I',
    inActive = 'inActive',
    Max_Length_1 = 1,
    Max_Length_2 = 2,
    Max_Length_3 = 3,
    Max_Length_4 = 4,
    Max_Length_5 = 5,
    Max_Length_6 = 6,
    Max_Length_8 = 8,
    Max_Length_9 = 9,

    Max_Length_15 = 15,
    Max_Length_10 = 10,
    Max_Length_11 = 11,
    Max_Length_20 = 20,
    Max_Length_22 = 22,
    Max_Length_25 = 25,
    Max_Length_30 = 30,

    Max_Length_50 = 50,
    Max_Length_100 = 100,
    Max_Length_200 = 200,
    Max_Length_255 = 255,
    Max_Length_4000 = 4000,
    Filter_Contain_Operator = 'contains',
    timeBeforeTokenRefresh = 15000,
    IdleTimeout = 1200, // 20 mins
    ForceTimeout = 120, // 2min
    timeBeforeSessionRefresh = 300000, // 5 mins
    CapitalProjectIdEvent = 'screenCapitalProjectId',
}

/**
 * Constants related to kendo module
 */
export const ModuleConstants = {
    paginationButtonSize: 2,
    defaultTake: 20,
    popUpDefaultTake: 100,
    popUpButtonCount: 2,
    timeDelay: 500,
    exportTime: 5000,
    CapitalProjectExportExcelLimit: 5000,
    apiTimeout: 120000,  // 2 min
    kendoGridExportPdfAction: 1,
    kendoGridExportExcelAction: 2,
    kendoGridExportPrintAction: 3,
    kendoGridExportPdfLimit: 1000,
    kendoGridExportExcelLimit: 5000,
    kendoGridExportPrintLimit: 5000,
    defaultPageSize: { pageSizes: [20, 50, 100] },
    projectPageSize: { pageSizes: [100, 500, 1000] },
    POProcessBatchOpenStatus: 'O',
};

/**
 * URLs in project 
*/
export enum UrlConstants {
    capitalProjectIdPath = '/maintenance/capital-project-id',
}

/**
 * Interface for the subscribe and publish events
*/
export interface IMessage {
    messageType: string;
    payload?: any;
}

export const rolePermission = {
    EMP: "1",
    PM: "2",
    PMO: "3"
}