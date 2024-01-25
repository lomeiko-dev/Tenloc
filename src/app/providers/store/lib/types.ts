import { ICartScheme } from "entities/cart";
import { excursionApiReducer } from "entities/excursion";
import { ILikesScheme } from "entities/likes";
import { reviewsApiReducer } from "entities/reviews";
import { addReviewApiReducer } from "features/form-add-review";
import { sortExcursionApiReducer } from "features/sort-excursion";

export interface IStore {
    LikesReducer: ILikesScheme,
    CartReducer: ICartScheme
    SortExcursionApi: ReturnType<typeof sortExcursionApiReducer>,
    ExcursionApi: ReturnType<typeof excursionApiReducer>,
    ReviewsApi: ReturnType<typeof reviewsApiReducer>,
    AddReviewApi: ReturnType<typeof addReviewApiReducer>
}