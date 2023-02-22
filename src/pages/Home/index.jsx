import RdcLogo from "./../../assets/img/rdc-logo.webp"

const Home = () => {
    return (
        <div class="container-fluid p-3 p-lg-5">
            <div className="container py-5">
                <div class="row align-items-center text-center text-lg-start">
                    <div class="col-sm-12 col-lg-6">
                        <p class="display-3 fw-bold pt-3 pt-lg-0">
                            RDC, Mon pays{" "}
                        </p>
                        <p class="text-muted py-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Corrupti fugit temporibus rem quisquam
                            deleniti porro vero quia necessitatibus accusantium
                            saepe. Libero veritatis fugiat aliquam tempore
                            obcaecati ratione nisi soluta dolorum.
                        </p>
                        <p className="py-4">
                            <button className="btn btn-outline-dark rounded-4">
                                Se connecter
                            </button>
                            &nbsp;&nbsp;
                            <button className="btn btn-dark rounded-4">
                                Voir Opinions
                            </button>
                        </p>
                    </div>
                    <div class="col-sm-12 col-lg-6 d-none d-lg-block">
                        <img src={RdcLogo} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
