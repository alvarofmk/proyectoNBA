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

export interface Broadcaster {
    shortName: string;
    longName: string;
}

export interface Broadcasters {
    national: Broadcaster[];
    canadian: Broadcaster[];
    spanish_national: any[];
    vTeam: VTeam[];
    hTeam: HTeam[];
}

export interface DeepLink {
    broadcaster: string;
    regionalMarketCodes: string;
    iosApp: string;
    androidApp: string;
    desktopWeb: string;
    mobileWeb: string;
}

export interface Video {
    regionalBlackoutCodes: string;
    canPurchase: boolean;
    isLeaguePass: boolean;
    isNationalBlackout: boolean;
    isTNTOT: boolean;
    isVR: boolean;
    tntotIsOnAir: boolean;
    isNextVR: boolean;
    isNBAOnTNTVR: boolean;
    isMagicLeap: boolean;
    isOculusVenues: boolean;
    streams: Stream[];
    deepLink: DeepLink[];
}

export interface National2 {
    streams: Stream2[];
    broadcasters: any[];
}

export interface Stream {
    streamType: string;
    isOnAir: boolean;
    doesArchiveExist: boolean;
    isArchiveAvailToWatch: boolean;
    streamId: string;
    duration: number;
}
export interface Stream2 {
    language: string;
    isOnAir: boolean;
    streamId: string;
}

export interface Audio {
    national: National2;
    vTeam: VTeam2;
    hTeam: HTeam2;
}

export interface Broadcast {
    broadcasters: Broadcasters;
    video: Video;
    audio: Audio;
}

export interface Watch {
    broadcast: Broadcast;
}

export interface Nugget {
    text: string;
}

export interface VTeam {
    shortName: string;
    longName: string;
}
export interface VTeam2 {
    streams: Stream2[];
    broadcasters: Broadcaster[];
}
export interface VTeam3 {
    teamId: string;
    score: string;
}
export interface VTeam4 {
    seedNum: string;
    seriesWin: string;
    isSeriesWinner: boolean;
}

export interface HTeam {
    shortName: string;
    longName: string;
}
export interface HTeam2 {
    streams: Stream2[];
    broadcasters: Broadcaster[];
}
export interface HTeam3 {
    teamId: string;
    score: string;
}
export interface HTeam4 {
    seedNum: string;
    seriesWin: string;
    isSeriesWinner: boolean;
}

export interface Playoffs {
    roundNum: string;
    confName: string;
    seriesId: string;
    seriesSummaryText: string;
    isSeriesCompleted: boolean;
    gameNumInSeries: string;
    isIfNecessary: boolean;
    vTeam: VTeam4;
    hTeam: HTeam4;
}

export interface Standard {
    seasonStageId: number;
    seasonId: string;
    gameUrlCode: string;
    gameId: string;
    statusNum: number;
    extendedStatusNum: number;
    startTimeEastern: string;
    startTimeUTC: Date;
    startDateEastern: string;
    homeStartDate: string;
    homeStartTime: string;
    visitorStartDate: string;
    visitorStartTime: string;
    isHomeTeam: boolean;
    isStartTimeTBD: boolean;
    watch: Watch;
    nugget: Nugget;
    vTeam: VTeam3;
    hTeam: HTeam3;
    playoffs: Playoffs;
    tags: string[];
}

export interface League {
    lastStandardGamePlayedIndex: number;
    standard: Standard[];
    africa: any[];
    sacramento: any[];
    vegas: any[];
    utah: any[];
}

export interface ScheduleResponse {
    _internal: Internal;
    league: League;
}