export interface Internal {
    pubDateTime: string;
    igorPath: string;
    xslt: string;
    xsltForceRecompile: string;
    xsltInCache: string;
    xsltCompileTimeMillis: string;
    xsltTransformTimeMillis: string;
    consolidatedDomKey: string;
    endToEndTimeMillis: string;
}

export interface TeamSitesOnly {
    playerCode: string;
    posFull: string;
    displayAffiliation: string;
    freeAgentCode: string;
}

export interface Team {
    teamId: string;
    seasonStart: string;
    seasonEnd: string;
}

export interface Draft {
    teamId: string;
    pickNum: string;
    roundNum: string;
    seasonYear: string;
}

export interface Player {
    firstName: string;
    lastName: string;
    temporaryDisplayName: string;
    personId: string;
    teamId: string;
    jersey: string;
    isActive: boolean;
    pos: string;
    heightFeet: string;
    heightInches: string;
    heightMeters: string;
    weightPounds: string;
    weightKilograms: string;
    dateOfBirthUTC: string;
    teamSitesOnly: TeamSitesOnly;
    teams: Team[];
    draft: Draft;
    nbaDebutYear: string;
    yearsPro: string;
    collegeName: string;
    lastAffiliation: string;
    country: string;
    isallStar?: boolean;
}

export interface TeamSitesOnly2 {
    playerCode: string;
    posFull: string;
    displayAffiliation: string;
    freeAgentCode: string;
}

export interface Team2 {
    teamId: string;
    seasonStart: string;
    seasonEnd: string;
}

export interface Draft2 {
    teamId: string;
    pickNum: string;
    roundNum: string;
    seasonYear: string;
}

export interface Sacramento {
    firstName: string;
    lastName: string;
    temporaryDisplayName: string;
    personId: string;
    teamId: string;
    jersey: string;
    isActive: boolean;
    pos: string;
    heightFeet: string;
    heightInches: string;
    heightMeters: string;
    weightPounds: string;
    weightKilograms: string;
    dateOfBirthUTC: string;
    teamSitesOnly: TeamSitesOnly2;
    teams: Team2[];
    draft: Draft2;
    nbaDebutYear: string;
    yearsPro: string;
    collegeName: string;
    lastAffiliation: string;
    country: string;
}

export interface TeamSitesOnly3 {
    playerCode: string;
    posFull: string;
    displayAffiliation: string;
    freeAgentCode: string;
}

export interface Team3 {
    teamId: string;
    seasonStart: string;
    seasonEnd: string;
}

export interface Draft3 {
    teamId: string;
    pickNum: string;
    roundNum: string;
    seasonYear: string;
}

export interface Vega {
    firstName: string;
    lastName: string;
    temporaryDisplayName: string;
    personId: string;
    teamId: string;
    jersey: string;
    isActive: boolean;
    pos: string;
    heightFeet: string;
    heightInches: string;
    heightMeters: string;
    weightPounds: string;
    weightKilograms: string;
    dateOfBirthUTC: string;
    teamSitesOnly: TeamSitesOnly3;
    teams: Team3[];
    draft: Draft3;
    nbaDebutYear: string;
    yearsPro: string;
    collegeName: string;
    lastAffiliation: string;
    country: string;
    isallStar?: boolean;
}

export interface TeamSitesOnly4 {
    playerCode: string;
    posFull: string;
    displayAffiliation: string;
    freeAgentCode: string;
}

export interface Draft4 {
    teamId: string;
    pickNum: string;
    roundNum: string;
    seasonYear: string;
}

export interface Utah {
    firstName: string;
    lastName: string;
    temporaryDisplayName: string;
    personId: string;
    teamId: string;
    jersey: string;
    isActive: boolean;
    pos: string;
    heightFeet: string;
    heightInches: string;
    heightMeters: string;
    weightPounds: string;
    weightKilograms: string;
    dateOfBirthUTC: string;
    teamSitesOnly: TeamSitesOnly4;
    teams: any[];
    draft: Draft4;
    nbaDebutYear: string;
    yearsPro: string;
    collegeName: string;
    lastAffiliation: string;
    country: string;
    isallStar?: boolean;
}

export interface League {
    standard: Player[];
    africa: any[];
    sacramento: Sacramento[];
    vegas: Vega[];
    utah: Utah[];
}

export interface PlayerResponse {
    _internal: Internal;
    league: League;
}