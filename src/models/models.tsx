export interface magazinesModels {
    articleId: number
    articleName: string
    pageNumber: number
    products: Array<productModels>,
    thumbnailUrl: string
}
export interface productModels {
    brand: string
    id: number
    name: string
    price: number
    productTypeId: number
    productTypeName: string
    thumbnailUrl: string
}
