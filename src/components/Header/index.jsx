import styled from "styled-components"
import RdcLogo from "./../../assets/img/rdc-logo.webp"
import NewPost from "./../../assets/img/new-post-icon.png"

const NavStyle = styled.nav`
    background-color: white;
    border-bottom: 1px solid #f5f5f5;
`

const LinkStyle = styled.a`
    text-decoration: none;
    color: #000;
    margin-right: 10px;
`

const LiStyle = styled.li`
    display: inline-block;
`
const MonPaysTagStyle = styled.span`
    color: red;
    font-weight: bold;
`

const NewPostStyle = styled.img`
    cursor: pointer;
    &:hover {
        scale: 110%;
    }
`

const Header = () => {
    return (
        <NavStyle className="navbar navbar-light px-4 px-lg-5 sticky-top justify-content-between">
            <div className="navbar-brand" href="#">
                <img src={RdcLogo} alt="Logo de la rdc" width={40} />
                <span>rdc,</span>
                <MonPaysTagStyle className="mx-2">Mon pays</MonPaysTagStyle>
            </div>
            <ul className="navbar-nav d-inline-block d-none d-lg-block">
                <LiStyle class="nav-item active">
                    <LinkStyle className="nav-link" href="#">
                        Accueil
                    </LinkStyle>
                </LiStyle>
                <LiStyle className="nav-item">
                    <LinkStyle className="nav-link" href="#">
                        Posts
                    </LinkStyle>
                </LiStyle>
                <LiStyle className="nav-item">
                    <LinkStyle className="nav-link" href="#">
                        Comptes
                    </LinkStyle>
                </LiStyle>
            </ul>
            <form class="form-inline d-none d-lg-block">
                <button className="btn btn-danger rounded-3" type="submit">
                    Se connecter
                </button>
            </form>
            <NewPostStyle
                className="d-block d-lg-none"
                src={NewPost}
                width={25}
                alt="Nouveau post"
            />
        </NavStyle>
    )
}
export default Header
