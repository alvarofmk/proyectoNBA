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

export interface Player {
    personId: string;
}

export interface TeamRoster {
    teamId: string;
    players: Player[];
}

export interface League {
    standard: TeamRoster;
    africa: TeamRoster;
    sacramento: TeamRoster;
    vegas: TeamRoster;
    utah: TeamRoster;
}

export interface TeamRosterResponse {
    _internal: Internal;
    league: League;
}