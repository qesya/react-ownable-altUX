import {productDataType} from "./product";

export interface pageDataType {
    articleId: number
    articleName: string
    pageNumber:number
    products: Array<productDataType>
    thumbnailUrl: string
}
