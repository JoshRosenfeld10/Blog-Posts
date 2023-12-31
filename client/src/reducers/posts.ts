import PostModel from "../models/postModel";

export interface Action {
    type: string,
    payload: any
}

const reducer = (posts: PostModel[] = [], action: Action): PostModel[] => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [ ...posts, action.payload];
        default:
            return posts;
    }
}

export default reducer;
