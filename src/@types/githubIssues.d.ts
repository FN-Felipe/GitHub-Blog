import { githubUser } from './githubUser'

export type githubIssues = {
  author_association: string,
  body: string,
  comments: 0,
  comments_url: string,
  created_at: string,
  events_url: string,
  html_url: string,
  id: number,
  locked: false,
  milestone: null,
  node_id: string,
  number: number,
  repository_url: string,
  state: string,
  timeline_url: string,
  title: string,
  updated_at: string,
  url: string,
  user: githubUser
}