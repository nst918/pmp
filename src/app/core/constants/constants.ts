/**
 * basic constant values required in project
 */
export enum Constants {
    Empty_String = "",
    InitialRowId = '-1',
    Form_Invalid = 'INVALID',
    CurrentUser = 'currentUser',
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

export const possibleProjectTypes = [
    {id: "1", description: "TnM"},
    {id: "2", description: "Managed Service Support"},
    {id: "3", description: "Maintenance"},
    {id: "4", description: "Fixed Cost"},
    {id: "5", description: "Product Dev"},
    {id: "6", description: "Administrative Project"},
    {id: "7", description: "IT Support"}
]

export const empCols = [
    { field: 'projName', header: 'Project Name' },
    { field: 'manager', header: 'Manager' },
    { field: 'teamSize', header: 'Team Size' },
    { field: 'phase', header: 'Phase' },
    { field: 'allocation', header: 'Allocation' }
];

export const managerCols = [
    { field: 'projectCode', header: 'Project Code' },
    { field: 'clientName', header: 'Client Name' },
    { field: 'projectName', header: 'Project Name' },
    { field: 'phase', header: 'Phase' },
    { field: 'teamSize', header: 'Team Size' },
];
export const pmoCols = [
    { field: 'projectCode', header: 'Project Code' },
    { field: 'clientName', header: 'Client Name' },
    { field: 'projectName', header: 'Project Name' },
    { field: 'phase', header: 'Phase' },
    { field: 'projectStartDate', header: 'Project Start Date' },
    { field: 'projectCloserDate', header: 'Project End Date' },
    { field: 'issueDate', header: 'Issue Date' },
    { field: 'projectedHours', header: 'Projected Hours' },
    { field: 'actualHours', header: 'Actual Hours' },
    { field: 'onsitePM', header: 'Onsite Manager' },
    { field: 'offshorePM', header: 'Offsite Manager' },
];
export const myDummyProjects = [
    {id: 1, code: 'p1', projName: 'ABC', projectStartDate: '16/04/24', projectCloserDate: '16/11/24', issueDate: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 2, code: 'p2', projName: 'ABC', projectStartDate: '16/04/24', projectCloserDate: '16/11/24', issueDate: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 3, code: 'p3', projName: 'ABC', projectStartDate: '16/04/24', projectCloserDate: '16/11/24', issueDate: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 4, code: 'p4', projName: 'ABC', projectStartDate: '16/04/24', projectCloserDate: '16/11/24', issueDate: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 5, code: 'p5', projName: 'ABC', projectStartDate: '16/04/24', projectCloserDate: '16/11/24', issueDate: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 6, code: 'p6', projName: 'ABC', projectStartDate: '16/04/24', projectCloserDate: '16/11/24', issueDate: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'},
    {id: 7, code: 'p7', projName: 'ABC', projectStartDate: '16/04/24', projectCloserDate: '16/11/24', issueDate: '01/04/24', projected_hours: '3500', actual_hours: '3000', onsite_manager: 'abcd', offsite_manager: 'xyzz', manager: 'XYZ', client: 'XYZ', teamSize: 8, phase: 'testing', allocation: '60%'}
];