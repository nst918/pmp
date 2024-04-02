export class ProviderResponseModel {
    status: boolean;
    message: string;
    data: any;
    isUserConfirmationRequired: boolean;
}

export class ProjectSummaryIQMSDto {
    ClientName: string;
    ProjectName: string;
    OnsitePM: string;
    OffshorePM: string;
    CurrentPhase: string;
    Scope: string;
    Schedule: string;
    Effort: string;
    ProjectStatusSummary: string;
    ProjectStartDate: string;
    PlanGoLiveDate: string;
    ActualGoLiveDate: string;
    PlannedEffort: string;
    ActualEffortInception: string;
    EstimationToComplete: string;
    EtcDate: string;
    ExpectedAtCompletion: string;
    Variance: string;
    AvgExp: string;
    Remarks: string;
}


export class reportModel {
    id: string;
    description: string;
    dependencies: Array<DependencyModel>;
    riskIssue: Array<RiskIssueModel>;
    nextStep: Array<DependencyModel>;
}

export class RiskIssueModel {
    risk: string;
    description: string;
    owner: string;
    priority: string;
    etd: string;
}

export class DependencyModel {
    description: string;
    owner: string;
    etd: string;
}

export class resourceSheetModel {
    EmpID: string;
    EmployeeName: string;
    DOJ: string;
    OverallExp: string;
    ReportingTo: string;
    ManagerforHRMS: string;
    Designation: string;
    ProjectFunctionName: string;
    GTGOrgActivities: string;
    ProjectType: string;
    Location: string;
    EmploymentType: string;
    Trainee: string;
    Shared: string;
    RoleLevel: string;
    Client: string;
    Competency: string;
    PrimarySkills: string;
    SecondarySkills: string;
    Billable: string;
    Billed: string;
    DepartmentName: string;
    FunctionName: string;
    NSTExp: string;
    NSTExpasNum: string;
    Expatthetimeofhiring: string;
    PercentageAllocation: string;
    FromDate: string;
    ToDate: string;
    Today: string;
    NOD: string;
    WorkingHours: string;
    Remarks: string;
}