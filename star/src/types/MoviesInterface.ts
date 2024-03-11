export interface Pokedex {
    resultsSectionOrder: string[];
    findPageMeta:        FindPageMeta;
    keywordResults:      Results;
    titleResults:        TitleResults;
    nameResults:         NameResults;
    companyResults:      Results;
}

export interface Results {
    results: any[];
}

export interface FindPageMeta {
    searchTerm:   string;
    includeAdult: boolean;
    isExactMatch: boolean;
}

export interface NameResults {
    results:         NameResultsResult[];
    nextCursor:      string;
    hasExactMatches: boolean;
}

export interface NameResultsResult {
    id:                  string;
    displayNameText:     string;
    knownForJobCategory: number | string;
    knownForTitleText:   number | string;
    knownForTitleYear:   number | string;
    avatarImageModel?:   RImageModel;
}

export interface RImageModel {
    url:       string;
    maxHeight: number;
    maxWidth:  number;
    caption:   string;
}

export interface TitleResults {
    results:         TitleResultsResult[];
    nextCursor:      string;
    hasExactMatches: boolean;
}

export interface TitleResultsResult {
    id:                    string;
    titleNameText:         string;
    titleReleaseText:      string;
    titleTypeText:         string;
    titlePosterImageModel: RImageModel;
    topCredits:            string[];
    imageType:             string;
}
