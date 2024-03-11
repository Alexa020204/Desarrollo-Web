
export interface MoviesStarwars{
    titleResults: TitleResults;
}

export interface TitleResults{
    results: TitleResultsResult[];
}

export interface TitleResultsResult{
    id:                    string;
    titleNameText:         string;
    titleReleaseText:      string;
    titleTypeText:         string;
    titlePosterImageModel: RImageModel;
    topCredits:            string[];
    imageType:             string;
}


export interface RImageModel {
    url:       string;
    maxHeight: number;
    maxWidth:  number;
    caption:   string;
}