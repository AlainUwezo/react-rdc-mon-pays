import styled from "styled-components"
import DefaultProfil from "./../../assets/img/default-Profil.jpg"
import LikeIcon from "./../../assets/img/like-icon.svg"
import IsLikedIcon from "./../../assets/img/is-like.png"
import IsDislikeIcon from "./../../assets/img/is-dislike.png"
import DislikeIcon from "./../../assets/img/dislike-icon.png"
import { useState } from "react"
import CommentaireIcon from "./../../assets/img/commentaire-icon.png"

const ProfilImgStyle = styled.img`
    display: inline-block;
    vertical-align: top;
    width: 50px;
`

const PostCardStyle = styled.div`
    display: inline-block;
    padding: 0px 5px;
    width: calc(100% - 50px);
    border-bottom: 1px solid #f5f5f5;
    padding: 10px 0px;
`

const LikeIconStyle = styled.img`
    width: 20px;
    margin-right: 5px;
    cursor: pointer;
`

const LikeStyle = styled.span`
    margin-right: 10px;
`

const CommentaireIconStyle = styled.img`
    width: 25px;
    cursor: pointer;
    &:hover {
        background: #f5f5f5;
    }
`

const Post = () => {
    const [isLiked, setLike] = useState(false)
    const [isDisliked, setDislike] = useState(false)
    const toogleLike = () => {
        isLiked ? setLike(false) : setLike(true)
    }
    const toogleDislike = () => {
        isDisliked ? setDislike(false) : setDislike(true)
    }
    return (
        <div>
            <ProfilImgStyle src={DefaultProfil} alt="Profil du posteur" />
            <PostCardStyle>
                <span>
                    <strong>Alain Uwezo</strong> - Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Vero doloremque...
                </span>
                <br />
                <span className="text-muted">Il y a une heure</span>
                <div className="d-flex justify-content-between">
                    <span className="py-2 d-inline-block">
                        <LikeStyle>
                            {isLiked ? (
                                <LikeIconStyle
                                    onClick={() => toogleLike()}
                                    src={IsLikedIcon}
                                    alt="Like icon"
                                />
                            ) : (
                                <LikeIconStyle
                                    onClick={() => toogleLike()}
                                    src={LikeIcon}
                                    alt="Like icon"
                                />
                            )}
                            <span>24</span>
                        </LikeStyle>
                        <LikeStyle>
                            {isDisliked ? (
                                <LikeIconStyle
                                    onClick={() => toogleDislike()}
                                    src={IsDislikeIcon}
                                    alt="Like icon"
                                    disabled={true}
                                />
                            ) : (
                                <LikeIconStyle
                                    onClick={() => toogleDislike()}
                                    src={DislikeIcon}
                                    alt="Like icon"
                                />
                            )}

                            <span>4</span>
                        </LikeStyle>
                    </span>
                    <span className="d-inline-block">
                        <CommentaireIconStyle
                            src={CommentaireIcon}
                            alt="Icon des commentaires"
                        />
                    </span>
                </div>
            </PostCardStyle>
        </div>
    )
}

export default Post
