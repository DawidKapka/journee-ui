import {JourneyPreview} from "./JourneyPreview";
import {UserInfo} from "./User";

export interface SearchResults {
    journeys: JourneyPreview[],
    users: UserInfo[]
}
