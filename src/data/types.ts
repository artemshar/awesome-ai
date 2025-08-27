export type TagType = 
| "favorite" 
| "opensource" 
| "proprietary" 
| "foundationModels" 
| "developmentEnvironment"  // merged from IDEs, codeAssistants, testingQA, documentation
| "appDevelopment"          // merged from fullStackGenerators, uiuxGenerators, databaseBackend
| "mediaGeneration"         // merged from imageGeneration, videoCreation, audioMusic
| "businessProductivity"    // keep as is
| "infrastructureOperations" // merged from modelServing, securityCompliance
| "researchEducation"       // merged from researchTools, experimentationTools
| "versionControl"          // merged from gitClients, prCodeReview
| "codeGeneration"          // merged from codeGenerators, shellCliTools
| "pluginsIntegrations"     // merged from openaiPlugins, developmentAgents
| "contentGeneration"       // keep as is
| "projectManagement"       // keep as is
| "aiAgentsWorkflows"



export type AwesomeAI = {
  title: string;
  description: string;
  preview: string | null; // null = use our serverless screenshot service
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};