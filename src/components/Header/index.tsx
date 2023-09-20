import { HeaderContainer } from "./Header.styles";
import Cover from '../../assets/CoverWithLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Cover} />
    </HeaderContainer>
  )
}