type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <section
      id="header-section"
      className="header-section notranslate headroom headroom--not-bottom headroom--pinned headroom--top"
    >
      <div className="section-head">
        <div className="mz-container">
          <div className="section-head__list">
            <a href="tel:1900 545 403" className="section-head__item">
              <div className="section-head__item-inner">
                <div className="section-head__item-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="section-head__item-text">1900 545 403</div>
              </div>
            </a>

            <a href="mailto:support@fado.vn" className="section-head__item">
              <div className="section-head__item-inner">
                <div className="section-head__item-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="section-head__item-text">support@fado.vn</div>
              </div>
            </a>

            <div className="section-head__list-suffix">
              <div
                className="gg-translate-dropdown mz-dropdown section-head__item"
                data-mz-dropdown="toggle"
                data-mz-dropdown-init="true"
              >
                <div
                  className="gg-translate-dropdown__head has-box has-round section-head__item-inner mz-ml-0"
                  data-mz-dropdown-trigger=""
                >
                  <div className="gg-translate-dropdown__head-icon section-head__item-icon">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/icon-header/global-icon.svg"
                      alt="language icon"
                    />
                  </div>

                  <div className="gg-translate-dropdown__head-label section-head__item-text">
                    Ngôn ngữ
                  </div>

                  <div className="gg-translate-dropdown__head-icon section-head__item-icon-down">
                    <i className="fas fa-sort-down"></i>
                  </div>
                </div>

                <div
                  className="mz-dropdown-menu mz-dropdown-menu-right"
                  data-mz-dropdown-target=""
                  data-stop-propagation=""
                >
                  <div className="mz-dropdown-menu__inner-space mz-p-4">
                    <div id="gg-translate-plugin" className="gg-translate-plugin notranslate">
                      <div id="gg-translate-embed" className="gg-translate-plugin__embed">
                        <div className="gg-translate-plugin__loading">Loading...</div>
                      </div>

                      <div className="mz-btn mz-btn-primary mz-btn-md mz-btn-block gg-translate-plugin__reset-btn">
                        Xem ngôn ngữ gốc
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="section-head__item mz-dropdown"
                data-mz-dropdown="toggle"
                data-mz-dropdown-init="true"
              >
                <div className="section-head__item-inner" data-mz-dropdown-trigger="">
                  <div className="section-head__item-icon">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/icon-header/truck.svg"
                      alt="truck icon"
                    />
                  </div>
                  <div className="section-head__item-text">Theo dõi đơn hàng</div>
                </div>

                <div
                  className="search-order-dropdown mz-dropdown-menu mz-dropdown-menu-right"
                  data-mz-dropdown-target=""
                  data-stop-propagation=""
                >
                  <form id="search-order-form" className="search-order-form">
                    <div className="mz-form-group">
                      <div className="mz-form-group__label-col">
                        <div className="mz-form-label">Mã đơn hàng</div>
                      </div>

                      <div className="mz-form-group__control-col">
                        <div className="mz-form-control mz-form-control-md">
                          <input
                            type="text"
                            className="mz-form-control__input"
                            name="orderID"
                            placeholder="VD: AM200617-91807"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mz-form-group">
                      <div className="mz-form-group__label-col">
                        <div className="mz-form-label">Số điện thoại</div>
                      </div>

                      <div className="mz-form-group__control-col">
                        <div className="mz-form-control mz-form-control-md">
                          <input
                            type="text"
                            className="mz-form-control__input"
                            name="phone"
                            placeholder="VD: 0925837182"
                          />
                        </div>
                      </div>
                    </div>

                    <button className="mz-btn mz-btn-primary mz-btn-md mz-btn-block">
                      Xem trạng thái đơn hàng
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-body">
        <div className="header-main-block">
          <div className="mz-container">
            <div className="header-main-block__logo-col">
              <a className="logo-field" href="https://fado.vn">
                <img
                  className="logo-img"
                  src="https://st-fe-v2.fado.vn/desktop/image/logo/fado_black_v2.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="header-main-block__search-col">
              <div className="search-form">
                <div className="mz-header-vsearch">
                  <div className="mz-header-vsearch__input-group">
                    <div
                      data-mz-dropdown="toggle"
                      className="search-from-dropdown mz-dropdown"
                      data-mz-dropdown-init="true"
                    >
                      <div data-mz-dropdown-trigger="" className="dropdown-head">
                        <span className="dropdown-title">Từ Mỹ</span>
                      </div>
                      <div data-mz-dropdown-target="" className="mz-dropdown-menu">
                        <div className="mz-dropdown-menu__inner-space">
                          <ul className="mz-dropdown-menu__list">
                            <li className="mz-dropdown-menu__list-item-outer">
                              <a href="#" className="mz-dropdown-menu__list-item is-active">
                                Từ Mỹ
                              </a>
                            </li>
                            <li className="mz-dropdown-menu__list-item-outer">
                              <a href="#" className="mz-dropdown-menu__list-item is-active">
                                Từ Nhật
                              </a>
                            </li>
                            <li className="mz-dropdown-menu__list-item-outer">
                              <a href="#" className="mz-dropdown-menu__list-item is-active">
                                Từ Đức
                              </a>
                            </li>
                            <li className="mz-dropdown-menu__list-item-outer">
                              <a href="#" className="mz-dropdown-menu__list-item is-active">
                                Từ Anh
                              </a>
                            </li>
                            <li className="mz-dropdown-menu__list-item-outer">
                              <a href="#" className="mz-dropdown-menu__list-item is-active">
                                Từ Gian hàng
                              </a>
                            </li>
                            <li className="mz-dropdown-menu__list-item-outer">
                              <a href="#" className="mz-dropdown-menu__list-item is-active">
                                Từ hàng cao cấp
                              </a>
                            </li>
                            <li className="mz-dropdown-menu__list-item-outer">
                              <a href="#" className="mz-dropdown-menu__list-item is-active">
                                Tất cả
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <input
                      placeholder="Nhập link hoặc tên sản phẩm trên khắp thế giới ..."
                      type="text"
                      autoComplete="off"
                      data-test-search-input=""
                      className="mz-header-vsearch__keyword-input"
                    />
                    <div className="mz-header-vsearch__loading-field" style={{ display: 'none' }}>
                      <i className="mz-header-vsearch__loading-icon far fa-spinner fa-spin"></i>
                    </div>
                  </div>
                  <div
                    className="mz-header-vsearch__suggest-item-wrap"
                    style={{ display: 'none' }}
                  ></div>
                </div>
                <button type="submit" data-test-search-submit-btn="" className="submit-btn">
                  <span className="submit-btn-bg"></span>{' '}
                  <span className="submit-btn-label">
                    <i className="fal fa-search"></i>
                  </span>
                </button>
              </div>
            </div>

            <div className="header-main-block__user-col">
              <a className="section-body__item" href="/dang-nhap?redirect=https%3A%2F%2Ffado.vn%2F">
                <div className="section-body__item-icon">
                  <img
                    src="https://st-fe-v2.fado.vn/desktop/image/icon-header/user.png"
                    alt="language icon"
                  />
                </div>

                <div className="section-body__item-text">Đăng nhập</div>

                <div className="section-body__item-icon-down">
                  <i className="fas fa-sort-down"></i>
                </div>
              </a>

              <div
                className="cart-dropdown mz-dropdown"
                data-mz-dropdown="toggle"
                data-mz-dropdown-init="true"
              >
                <a id="header-cart-btn" href="/gio-hang-cua-ban" className="section-body__item">
                  <div className="section-body__item-icon">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/icon-header/shopping-bag.png"
                      alt="cart icon"
                    />
                  </div>

                  <div className="section-body__item-text">Giỏ hàng</div>
                  <span id="header-cart-quantity" className="section-body__cart-quantity">
                    1
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-foot">
        <div className="mz-container">
          <nav id="header-menu-nav" className="header-menu-nav">
            <div id="header-menu-nav__country-col" className="header-menu-nav__link-col is-menu">
              <div
                className="menu-country-cate-dropdown mz-dropdown"
                data-mz-dropdown="toggle"
                data-mz-dropdown-init="true"
              >
                <div className="country-cate-dropdown-head" data-mz-dropdown-trigger="">
                  <div className="menu-icon-col">
                    <img
                      src="https://st-fe-v2.fado.vn/desktop/image/icon-header/menu.png"
                      alt="user icon"
                    />
                  </div>

                  <div className="head-label">Danh mục</div>
                </div>

                <div
                  className="mz-dropdown-menu mz-dropdown-menu-left country-cate-dropdown-menu"
                  data-mz-dropdown-target=""
                  data-stop-propagation=""
                >
                  <div className="cate-segment">
                    <div className="cate-segment__col-1">
                      <ul className="cate-lv1-list">
                        <li className="cate-lv1-item-outer is-active">
                          <a
                            href="/us/s/search?rh=k:đồ+điện+tử&amp;keywords=đồ+điện+tử"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-dien-tu"></i>
                            </span>{' '}
                            <span className="title-col">Đồ điện tử và công nghệ</span>{' '}
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:đồng+hồ&amp;keywords=đồng+hồ"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-dong-ho"></i>
                            </span>{' '}
                            <span className="title-col">Đồng hồ hàng hiệu</span>{' '}
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:thời+trang+nữ&amp;keywords=thời+trang+nữ"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-thoi-trang"></i>
                            </span>
                            <span className="title-col">Thời trang nữ</span>{' '}
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:thời+trang+nam&amp;keywords=thời+trang+nam"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-thoi-trang-nam"></i>
                            </span>{' '}
                            <span className="title-col">Thời trang nam</span>{' '}
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:mẹ+và+bé&amp;keywords=mẹ+và+bé"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-me-va-be"></i>
                            </span>{' '}
                            <span className="title-col">Mẹ, Bé và Đồ chơi</span>{' '}
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:đồ+làm+dẹp&amp;keywords=đồ+làm+dẹp"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-my-pham"></i>
                            </span>{' '}
                            <span className="title-col">Làm đẹp</span>
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:nước+hoa&amp;keywords=nước+hoa"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-nuoc-hoa"></i>
                            </span>{' '}
                            <span className="title-col">Thế giới nước hoa</span>{' '}
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:đồ+chơi&amp;keywords=đồ+chơi"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-do-choi"></i>
                            </span>{' '}
                            <span className="title-col">Đồ chơi và Games</span>
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:oto+xe+máy&amp;keywords=oto+xe+máy"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-o-to"></i>
                            </span>{' '}
                            <span className="title-col">Phụ tùng,phụ kiện xe hơi</span>{' '}
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                        <li className="cate-lv1-item-outer">
                          <a
                            href="/us/s/search?rh=k:đồ+thể+thao+dã+ngoại&amp;keywords=đồ+thể+thao+dã+ngoại"
                            className="cate-lv1-item"
                          >
                            <span className="icon-col">
                              <i className="fd fd-cate-the-thao"></i>
                            </span>{' '}
                            <span className="title-col">Thể thao,du lịch và dã ngoại</span>
                            <span className="icon-right-col">
                              <i className="fal fa-angle-right"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="cate-segment__col-2">
                      <div className="cate-segment__col-2a">
                        <div className="cate-segment__col-2a-inner mz-flex mz-flex-wrap mz--mx-8">
                          <div className="mz-min-w-0 mz-w-4/12 mz-px-4 cate-lv2-panel-outer">
                            <div className="cate-lv2-panel">
                              <a
                                href="/us/s/search?rh=k:máy+tính+phụ+kiện&amp;keywords=máy+tính+phụ+kiện"
                                className="panel-head"
                              >
                                <div className="panel-title">Máy tính và phụ kiện</div>
                                <div className="panel-icon">
                                  <i className="fal fa-angle-right"></i>
                                </div>
                              </a>
                              <ul className="cate-lv3-list">
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:máy+tính+máy+tính+bảng&amp;keywords=máy+tính+máy+tính+bảng"
                                    className="cate-lv3-item"
                                  >
                                    Máy tính - máy tính bảng
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:màn+hình+máy+tính&amp;keywords=màn+hình+máy+tính"
                                    className="cate-lv3-item"
                                  >
                                    Màn hình
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:webcam&amp;keywords=webcam"
                                    className="cate-lv3-item"
                                  >
                                    Webcams
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:linh+kiện+máy+tính&amp;keywords=linh+kiện+máy+tính"
                                    className="cate-lv3-item"
                                  >
                                    Phụ Kiện, Linh kiện
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:thiết+bị+mạng&amp;keywords=thiết+bị+mạng"
                                    className="cate-lv3-item"
                                  >
                                    Thiết bị mạng
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mz-min-w-0 mz-w-4/12 mz-px-4 cate-lv2-panel-outer">
                            <div className="cate-lv2-panel">
                              <a
                                href="/us/s/search?rh=k:điện+thoại+phụ+kiện&amp;keywords=điện+thoại+phụ+kiện"
                                className="panel-head"
                              >
                                <div className="panel-title">Điện thoại và phụ kiện</div>
                                <div className="panel-icon">
                                  <i className="fal fa-angle-right"></i>
                                </div>
                              </a>
                              <ul className="cate-lv3-list">
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:điện+thoại&amp;keywords=điện+thoại"
                                    className="cate-lv3-item"
                                  >
                                    Điện thoại
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:phụ+kiện+điện+thoại&amp;keywords=phụ+kiện+điện+thoại"
                                    className="cate-lv3-item"
                                  >
                                    Phụ kiện cho điện thoại
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:ốp+lưng&amp;keywords=ốp+lưng"
                                    className="cate-lv3-item"
                                  >
                                    Ốp lưng và Cường lực điện thoại
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:tai+nghe+điện+thoại&amp;keywords=tai+nghe+điện+thoại"
                                    className="cate-lv3-item"
                                  >
                                    Tai nghe cho điện thoại
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:điện+thoại+unlock&amp;keywords=điện+thoại+unlock"
                                    className="cate-lv3-item"
                                  >
                                    Điện thoại unlock
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mz-min-w-0 mz-w-4/12 mz-px-4 cate-lv2-panel-outer">
                            <div className="cate-lv2-panel">
                              <a
                                href="/us/s/search?rh=k:thiết+bị+kỹ+thuật+số&amp;keywords=thiết+bị+kỹ+thuật+số"
                                className="panel-head"
                              >
                                <div className="panel-title">Thiết bị kỹ thuật số</div>
                                <div className="panel-icon">
                                  <i className="fal fa-angle-right"></i>
                                </div>
                              </a>
                              <ul className="cate-lv3-list">
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:máy+ảnh+máy+quay+phim&amp;keywords=máy+ảnh+máy+quay+phim"
                                    className="cate-lv3-item"
                                  >
                                    Máy ảnh, Quay phim và Camera hành trình
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:loa+bluetooth&amp;keywords=loa+bluetooth"
                                    className="cate-lv3-item"
                                  >
                                    Loa Bluetooth
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:máy+chơi+game&amp;keywords=máy+chơi+game"
                                    className="cate-lv3-item"
                                  >
                                    Thiết bị Game
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:kính+thực+tế+ảo&amp;keywords=kính+thực+tế+ảo"
                                    className="cate-lv3-item"
                                  >
                                    Kính thực tế ảo
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:phụ+kiện+máy+ảnh+KTS&amp;keywords=phụ+kiện+máy+ảnh+KTS"
                                    className="cate-lv3-item"
                                  >
                                    Phụ kiện máy ảnh kỹ thuật số
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mz-min-w-0 mz-w-4/12 mz-px-4 cate-lv2-panel-outer">
                            <div className="cate-lv2-panel">
                              <a
                                href="/us/s/search?rh=k:điện+tử+văn+phòng&amp;keywords=điện+tử+văn+phòng"
                                className="panel-head"
                              >
                                <div className="panel-title">Điện tử cho văn phòng</div>
                                <div className="panel-icon">
                                  <i className="fal fa-angle-right"></i>
                                </div>
                              </a>
                              <ul className="cate-lv3-list">
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:máy+in&amp;keywords=máy+in"
                                    className="cate-lv3-item"
                                  >
                                    Máy in
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:máy+chiếu&amp;keywords=máy+chiếu"
                                    className="cate-lv3-item"
                                  >
                                    Máy chiếu
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:máy+hủy+tài+liệu&amp;keywords=máy+hủy+tài+liệu"
                                    className="cate-lv3-item"
                                  >
                                    Máy hủy tài liệu
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:thiết+bị+sinh+trắc&amp;keywords=thiết+bị+sinh+trắc"
                                    className="cate-lv3-item"
                                  >
                                    Máy chấm công
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:phụ+kiện+máy+in&amp;keywords=phụ+kiện+máy+in"
                                    className="cate-lv3-item"
                                  >
                                    Phụ kiện máy in
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mz-min-w-0 mz-w-4/12 mz-px-4 cate-lv2-panel-outer">
                            <div className="cate-lv2-panel">
                              <a
                                href="/us/s/search?rh=k:tai+nghe&amp;keywords=tai+nghe"
                                className="panel-head"
                              >
                                <div className="panel-title">Tai nghe</div>
                                <div className="panel-icon">
                                  <i className="fal fa-angle-right"></i>
                                </div>
                              </a>
                              <ul className="cate-lv3-list">
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:tai+nghe+chụp&amp;keywords=tai+nghe+chụp"
                                    className="cate-lv3-item"
                                  >
                                    Tai nghe chụp tai (Over-Ear)
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:tai+nghe+nhét&amp;keywords=tai+nghe+nhét"
                                    className="cate-lv3-item"
                                  >
                                    Tai nghe nhét tai (In-Ear và Earbud)
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:tai+nghe+game&amp;keywords=tai+nghe+game"
                                    className="cate-lv3-item"
                                  >
                                    Tai nghe Game
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:tai+nghe+thể+thao&amp;keywords=tai+nghe+thể+thao"
                                    className="cate-lv3-item"
                                  >
                                    Tai nghe thể thao
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:phụ+kiện+tai+nghe&amp;keywords=phụ+kiện+tai+nghe"
                                    className="cate-lv3-item"
                                  >
                                    Phụ kiện cho tai nghe
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mz-min-w-0 mz-w-4/12 mz-px-4 cate-lv2-panel-outer">
                            <div className="cate-lv2-panel">
                              <a
                                href="/us/s/search?rh=k:thiết+bị+nhà+cửa&amp;keywords=thiết+bị+nhà+cửa"
                                className="panel-head"
                              >
                                <div className="panel-title">Hệ thống nhà thông minh</div>
                                <div className="panel-icon">
                                  <i className="fal fa-angle-right"></i>
                                </div>
                              </a>
                              <ul className="cate-lv3-list">
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:tivi&amp;keywords=tivi"
                                    className="cate-lv3-item"
                                  >
                                    Tivi
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:loa+âm+thanh&amp;keywords=loa+âm+thanh"
                                    className="cate-lv3-item"
                                  >
                                    Âm thanh giải trí tại gia
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:nhà+bếp+hiện+đại&amp;keywords=nhà+bếp+hiện+đại"
                                    className="cate-lv3-item"
                                  >
                                    Nhà bếp hiện đại
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:đèn+thông+minh&amp;keywords=đèn+thông+minh"
                                    className="cate-lv3-item"
                                  >
                                    Đèn chiếu sáng thông minh
                                  </a>
                                </li>
                                <li className="cate-lv3-item-outer">
                                  <a
                                    href="/us/s/search?rh=k:thiết+bị+chống+trộm&amp;keywords=thiết+bị+chống+trộm"
                                    className="cate-lv3-item"
                                  >
                                    Thiết bị chống trộm
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="header-menu-nav__link-col">
              <a className="header-menu-nav__link-item" href="/deluxe/flash-sale-offers.html">
                Thời trang cao cấp
              </a>
            </div>

            <div className="header-menu-nav__link-col">
              <a className="header-menu-nav__link-item" href="/fado-daily">
                Bách hoá mỹ
              </a>
            </div>

            <div className="header-menu-nav__link-col">
              <a className="header-menu-nav__link-item" href="/fado-swift">
                Fado Mall
              </a>
            </div>

            <div className="header-menu-nav__link-col">
              <a className="header-menu-nav__link-item" href="/khuyen-mai/ma-giam-gia">
                Mã giảm giá
              </a>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
