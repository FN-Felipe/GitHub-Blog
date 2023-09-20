// import { format } from "date-fns";
import { PostContainer } from "./Post.styles"
import { useNavigate } from "react-router-dom";

export function PostCard({ title, date, content, id }: { title: string; date: string, content: string; id: number }) {
  // const dateFormatted = format(new Date(date), 'dd/MM/yyyy HH:mm')
  const navigate = useNavigate()

  function goCompletPost(id: number) {
    console.log('Cheguei aqui')
    navigate(`${id}`)
  }

  return (
    <PostContainer>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} onClick={() => goCompletPost(id)}>
        <h2>{title}</h2>
        <span>
          {date}
        </span>
      </div>
      <p>{content}</p>
    </PostContainer>
  )
}

