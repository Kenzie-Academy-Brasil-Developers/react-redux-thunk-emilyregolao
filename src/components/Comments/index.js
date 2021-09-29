import { useDispatch, useSelector } from "react-redux"
import { addCommentThunk } from "../../store/modules/user/thunks"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import "./style.css"

const Comments = () => {
  const dispatch = useDispatch()
  const comments = useSelector((state) => state.user.comments)
  const schema = yup.object().shape({
    newComment: yup.string().required("Campo obrigatório!"),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleForm = ({ newComment }) => {
    dispatch(addCommentThunk(newComment))
  }
  return (
    <div className='content'>
      <h1>Kenzie Academy Brasil</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <p className='error'>{errors.newComment?.message}</p>
        <input type='text' placeholder='write a new comment' {...register("newComment")} />
        <br />
        <button type='submit'>add new comment</button>
      </form>
      {comments.map((comment) => (
        <p className='comments'>{comment}</p>
      ))}
    </div>
  )
}

export default Comments
