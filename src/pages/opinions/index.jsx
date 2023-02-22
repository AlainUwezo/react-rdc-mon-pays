import styled from "styled-components"
import PostList from "../PostList"

const changeOpionNumberIconColor = () => {
    var li = document.querySelector(".li-item")
    var li = document.querySelector(".number-icon")
    li.addEventListener("mouseover", () => {})
}

const OpinionContainerStyle = styled.div`
    background-color: white;
    padding: 10px 20px;
    width: 100%;
`
const OpinionLabel = styled.p`
    padding: 5px 0px;
    border-bottom: 1px solid #f5f5f5;
    font-weight: 700;
    font-size: 20px;
`
const OpionCategoreStyle = styled.ul`
    border-bottom: 1px solid #f5f5f5;
`

const LiStyle = styled.li`
    list-style-type: none;
    display: inline-block;
    padding: 10px;
    margin: 0;
    cursor: pointer;
    &:hover {
        border-bottom: 2px solid #000;
    }
`

const OpinionCategorieLabel = styled.span`
    padding-right: 5px;
`

const OpionNumber = styled.span`
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 4px;
    font-weight: bold;
    background-color: orangered;
    color: white;
`

const Opinions = () => {
    return (
        <OpinionContainerStyle className="rounded-2 shadow-sm">
            <OpinionLabel>Opinions</OpinionLabel>
            <OpionCategoreStyle className="p-0">
                <LiStyle className="li-item">
                    <OpinionCategorieLabel>
                        Ce que j'aime...
                    </OpinionCategorieLabel>
                    <OpionNumber className="number-icon">12</OpionNumber>
                </LiStyle>
                <LiStyle className="li-item">
                    <OpinionCategorieLabel>
                        Ce que je n'aime pas...
                    </OpinionCategorieLabel>
                    <OpionNumber className="number-icon bg-light text-dark">
                        2
                    </OpionNumber>
                </LiStyle>
            </OpionCategoreStyle>
            <div>
                <PostList />
                {/* <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nam quaerat unde et voluptatibus officia esse ipsam ipsa
                    doloribus exercitationem sint at debitis itaque tempore
                    adipisci aspernatur similique, ex quod? Atque. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Odio deserunt
                    pariatur eaque ex laboriosam. Ex suscipit totam quas dolore
                    architecto animi, fugiat perferendis cum atque. Assumenda
                    fugit soluta impedit est.
                </div> */}
            </div>
        </OpinionContainerStyle>
    )
}

export default Opinions
