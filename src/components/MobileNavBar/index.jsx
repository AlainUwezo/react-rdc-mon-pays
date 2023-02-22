import styled from "styled-components"
import OpionIcon from "./../../assets/img/opinion-icon.png"
import NewPostIcon from "./../../assets/img/new-post-icon.png"
import NewCompteIcon from "./../../assets/img/new-compte-icon.png"

const MobileNavStyle = styled.ul`
    position: fixed;
    bottom: 0;
    background: white;
    width: 100%;
    margin: 0;
    padding: 0px;
`
const LiStyle = styled.li`
    list-style-type: none;
    font-size: 10px;
    cursor: pointer;
    padding-top: 10px;
    &:hover {
        border-top: 2px solid #000;
    }
`

const IconStyle = styled.img`
    width: 20px;
`

const LabelNavItem = styled.p`
    font-size: 12px;
`

const MobileNavBar = () => {
    return (
        <MobileNavStyle className="row shadow">
            <LiStyle className="col-4 text-start">
                <div className="text-center">
                    <IconStyle
                        src={OpionIcon}
                        alt="Opinion icon for mobile device"
                    />
                    <LabelNavItem>Opionions</LabelNavItem>
                </div>
            </LiStyle>
            <LiStyle className="col-4 text-center">
                <div className="text-center">
                    <IconStyle
                        src={NewPostIcon}
                        alt="Opinion icon for mobile device"
                    />
                    <LabelNavItem>Poster</LabelNavItem>
                </div>
            </LiStyle>
            <LiStyle className="col-4 text-end">
                <div className="text-center">
                    <IconStyle
                        src={NewCompteIcon}
                        alt="Opinion icon for mobile device"
                    />
                    <LabelNavItem>Compte</LabelNavItem>
                </div>
            </LiStyle>
        </MobileNavStyle>
    )
}

export default MobileNavBar
