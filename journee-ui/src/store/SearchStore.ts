import { defineStore } from "pinia";
import {SearchResults} from "../types/SearchResults";

export type SearchStoreState = {
    searchValue: string,
    searchResults: SearchResults
}

export const useSearchStore = defineStore( {
    id: 'search',
    state: (): SearchStoreState => {
        return {
            searchValue: '',
            searchResults: {} as SearchResults
        }
    }
})
