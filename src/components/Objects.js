function Objects(props) {
    return (
        <div
                    class="
                        rounded
                        bg-light
                        d-flex
                        flex-column
                        p-3
                        pt-3
                        my-4
                        shadow-sm
                    "
                >
                    <div class="d-flex justify-content-between">
                        <a href="#" class="btn bg-secondary text-light fw-bold"
                            >NEW</a
                        >
                        <div>
                            <a href="#"
                                ><i class="fa-solid fa-bars fs-3 text-secondary"></i
                            ></a>
                            <a href="#"
                                ><i
                                    class="
                                        fa-regular fa-heart
                                        text-secondary
                                        fs-3
                                        ms-3
                                    "
                                ></i
                            ></a>
                        </div>
                    </div>
                    <div
                        class="
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-center
                            my-3
                        "
                    >
                        <img
                            src={props.gambar}
                            width="200px"
                            height="200px"
                            alt="Sofa"
                            class="text-center mt-2"
                        />
                        <h4 class="text-center text-secondary my-2">
                            {props.name}
                        </h4>
                    </div>
                    <div
                        class="
                            d-flex
                            justify-content-between
                            align-items-center
                        "
                    >
                        <div>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star text-warning"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="input-group w-50">
                            <input
                                type="text"
                                class="form-control border-2 bg-light"
                                placeholder="Rp 12.000"
                                aria-label="Input group example"
                                aria-describedby="btnGroupAddon"
                            />
                            <div
                                class="input-group-text bg-light border-2"
                                id="btnGroupAddon"
                            >
                                <i
                                    class="
                                        fa-solid fa-cart-shopping
                                        text-secondary
                                    "
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Objects