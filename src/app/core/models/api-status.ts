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
