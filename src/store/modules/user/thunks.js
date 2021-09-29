import { addComment } from "./actions"

export const addCommentThunk = (comment) => {
  return (dispatch, getState) => {
    const { user } = getState()
    const updateUser = { ...user, comments: [...user.comments, comment] }
    dispatch(addComment(updateUser))
  }
}
