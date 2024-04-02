export const environment= {
    appConfig: 'appconfig.json',
    redirectUri: 'http://localhost:4200',
    postLogoutUrl:"http://localhost:4200",
    appInsights: {
        instrumentationKey: '0d448b62-c003-438b-9d49-8438ad5e36df'
    },
    clintId: '33b0bc08-ff1b-46fd-b477-a23221ca2978',
    tenantId: '09795158-d437-4993-b8a4-de614fbac9e3',
    consentScopes: ['user.read', 'api://85f293af-c001-494b-99a4-62b5b4ca8719/access_as_user'],
    scopes: ['api://85f293af-c001-494b-99a4-62b5b4ca8719/access_as_user'],
    // clintId: '43f42021-e733-415a-ab31-6f8ebaec4e78',
    // tenantId: 'b2183828-8e6c-4cb5-b7b7-7211ac8de809',
    // consentScopes: ['user.read', 'api://5b4043db-cd84-4990-a163-6aea931feb0b/access_as_user'],
    // scopes: ['api://5b4043db-cd84-4990-a163-6aea931feb0b/access_as_user'],
    apiEndPoint: 'https://hrms.svamindia.com/'
}