import {pageDataType} from "./page";

export interface pagesDataType {
    favoriteListId: Array<number>,
    pages: Array<pageDataType>,
    selectedPage: number
}
