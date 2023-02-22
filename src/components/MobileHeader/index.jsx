import styled from "styled-components"
import RdcLogo from "./../../assets/img/rdc-logo.webp"

const MobileHeaderStyle = styled.div`
    position: fixed;
    background-color: white;
    width: 100%;
`
const MonPaysTagStyle = styled.span`
    color: blue;
    font-weight: bold;
`

const MobileHeader = () => {
    const rdcLogoWidth = 40
    return (
        <MobileHeaderStyle>
            <p className="p-2">
                <img
                    src={RdcLogo}
                    className="img-fluid me-2"
                    width={rdcLogoWidth}
                    alt="Logo rdc"
                    />
                    <span className="h2">rdc,</span>
                    <MonPaysTagStyle className="mx-2">Mon pays</MonPaysTagStyle>
            </p>
        </MobileHeaderStyle>
    )
}

export default MobileHeader
