import axios from "axios";
import { BlogContainer, BlogRoot, PostsContainer } from "./Blog.styles";
import { useEffect, useState } from "react";
import { githubUser } from "../../@types/githubUser";
import { githubIssues } from '../../@types/githubIssues'
import { Profile } from "../../components/Profile";
import { PostCard } from "../../components/Post";
import { ContainerStructure } from "../../components/Post/Post.styles";
import { Search } from "../../components/Search";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Blog() {
  const [dataUser, setDataUser] = useState<githubUser>()
  const [dataIssues, setDataIssues] = useState<githubIssues[]>([])

  async function githubUser() {
    try {
      await axios.get('https://api.github.com/users/FN-Felipe').then((response) => {
        setDataUser(response.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function githubIssues() {
    try {
      await axios.get('https://api.github.com/repos/FN-Felipe/GitHub-Blog/issues').then((response) => {
        setDataIssues(response.data)
        console.log('issues', response.data)
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    githubUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    githubIssues()
  }, [])

  if (!dataUser) return <></>
  if (!dataIssues) return <></>

  return (
    <BlogRoot>
      <BlogContainer>
        <Profile dataUser={dataUser} />
        <PostsContainer>
          <h3>Publicações</h3>
          <Search />
          <ContainerStructure>
            {dataIssues.map((item) => {
              return (
                <PostCard content={item.body} date={formatDistanceToNow(new Date(item.created_at), { addSuffix: true, locale: ptBR })} title={item.title} key={item.id} id={item.id} />
              )
            })}
          </ContainerStructure>
        </PostsContainer>
      </BlogContainer>
    </BlogRoot>
  )
}