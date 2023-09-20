import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaBuilding, FaUserGroup } from "react-icons/fa6";
import { ContainerProfile } from "./Profile.styles";
import { githubUser } from "../../@types/githubUser";

export function Profile({ dataUser }: { dataUser: githubUser }) {
  return (
    <ContainerProfile>
      <img src={dataUser.avatar_url} />
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <h2>{dataUser.name}</h2>
          <a href={dataUser.html_url} target="_blank">
            GITHUB
            <BiLinkExternal />
          </a>
        </div>
        <p>{dataUser.bio}</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '2rem' }}>
            <BsGithub />
            <span>{dataUser.login}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '2rem' }}>
            <FaBuilding />
            <span>{dataUser.company}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '2rem' }}>
            <FaUserGroup />
            <span>{dataUser.followers}</span>
          </div>
        </div>
      </div>
    </ContainerProfile>
  )
}