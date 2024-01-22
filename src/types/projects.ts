export type CoInvestigator = {
  contactId: number;
  canUserEdit: boolean;
  firstName: string;
  lastName: string;
  fullName: string;
  fullNameInverted: string;
  middleInitial?: string;
  primaryEmail: string;
  publicEmail: boolean;
  nacontact: boolean;
};
export type Program = {
  acronym: string;
  active: boolean;
  description: string;
  programId: number;
  responsibleMd: any;
  responsibleMdId: number;
  stockImageFileId: number;
  title: string;
};

export type Organization = {
  acronym?: string;
  canUserEdit: boolean;
  city: string;
  country: any;
  countryId: number;
  external: boolean;
  linkCount: number;
  organizationId: number;
  organizationName: string;
  organizationType: string;
  stateTerritory: any;
  stateTerritoryId: number;
  naorganization: boolean;
  organizationTypePretty: string;
  murepUnitId?: number;
};

export type ProjectShort = {
  title: string;
  acronym: string;
  projectId: number;
  website: string;
  lastUpdated: string;
};

export type Project = ProjectShort & {
  primaryTaxonomyNodes: any[];
  startTrl: number;
  currentTrl: number;
  endTrl: number;
  benefits: string;
  description: string;
  destinations: any[];
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
  statusDescription: string;
  principalInvestigators: CoInvestigator[];
  programDirectors: CoInvestigator[];
  programExecutives: CoInvestigator[];
  projectManagers: CoInvestigator[];
  coInvestigators: CoInvestigator[];
  website: string;
  libraryItems: any[];
  transitions: any[];
  responsibleMd: any;
  program: Program;
  leadOrganization: Organization;
  supportingOrganizations: Organization[];
  statesWithWork: any[];
  lastUpdated: string;
  releaseStatusString: string;
  viewCount: number;
  endDateString: string;
  startDateString: string;
};
