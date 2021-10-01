import { Album } from "../types";

type AlbumCategoryModel = {
    _id: string
    title: string,
    albums: Album[]
}
export default AlbumCategoryModel;