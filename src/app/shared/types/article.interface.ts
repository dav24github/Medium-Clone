import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface{
    title: string,
    slug: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    tagList: string[],
    description: string,
    author: ProfileInterface
    // author: {username: "", bio: null, ...},
    favorited: boolean,
    favoritedCount: number
}