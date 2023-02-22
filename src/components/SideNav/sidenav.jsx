import styled from "styled-components"
import RdcLogo from "./../../assets/img/rdc-logo.webp"
import OpionIcon from "./../../assets/img/opinion-icon.png"
import NewPostIcon from "./../../assets/img/new-post-icon.png"
import NewCompteIcon from "./../../assets/img/new-compte-icon.png"

const SideNavStyle = styled.div`
    height: 100vh;
    background: white;
`
const LiStyle = styled.li`
    list-style-type: none;
    margin: 5px 10px 0px 0px;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
        background-color: #f5f5f5;
    }
`

const MonPaysTagStyle = styled.span`
    color: blue;
    font-weight: bold;
`

const IconStyle = styled.img`
    width: 20px;
    margin-left: 5px;
    margin-right: 10px;
`

const SideNav = () => {
    return (
        <SideNavStyle className="shadow-sm">
            <p className="p-2">
                <img src={RdcLogo} className="img-fluid w-25" alt="Logo rdc" />
                <span className="h2">rdc,</span>
                <MonPaysTagStyle className="mx-2">Mon pays</MonPaysTagStyle>
            </p>
            <ul>
                <LiStyle>
                    <IconStyle
                        src={OpionIcon}
                        className="img-fluid"
                        alt="Opionion icon"
                    />
                    <span>Opinions</span>
                </LiStyle>
                <LiStyle>
                    <IconStyle
                        src={NewPostIcon}
                        className="img-fluid"
                        alt="Opionion icon"
                    />
                    <span>Nouveau Post</span>
                </LiStyle>
            </ul>
            <ul className="px-4 mt-5">
                <p className="text-muted">Profile</p>
                <LiStyle>
                    <IconStyle
                        src={NewCompteIcon}
                        className="img-fluid"
                        alt="Opionion icon"
                    />
                    <span>Créer un compte</span>
                </LiStyle>
            </ul>
        </SideNavStyle>
    )
}

export default SideNav
