import { ISubcategory } from "./ISubcategory"

export interface ICategory {
    id: string
    name: string
    path: string
    subcategories: ISubcategory[]
}