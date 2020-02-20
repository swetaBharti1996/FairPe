import styled from "styled-components";
import Router from "next/router";
import UserDropdown from "./userDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "../../../server/routes";
import { Button as CustomButtom } from "../../UI";
import {
  Drawer,
  Input,
  Button,
  Modal,
  Form,
  Icon,
  Checkbox,
  message
} from "antd";
import Login from "./login";
import Register from "./register";
import _ from "lodash";
import CustomSearch from "../reusable/search";
import axios from "axios";

const { Search } = Input;

const CustomDrawer = styled(Drawer)`
  > div[class="ant-drawer-content-wrapper"] {
    position: absolute;
    top: 80px;
  }
`;

const Wrapper = styled.div`
  height: 70px;
  background: ${props => props.theme.white};
  box-shadow: 0 2px 4px 0px ${props => props.theme.gray300};
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
  z-index: 100;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: ${props => props.theme.smallScreen};
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;
const Logo = styled.div`
  width: 120px;
  cursor: pointer;
  > img {
    width: 100%;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  margin-left: 32px;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;

const List = styled.a`
  font-size: 17px;
  color: ${props => props.theme.default};
  cursor: pointer;
  padding: 6px;
  letter-spacing: -0.3px;
  transition-duration: 300ms;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  justify-content: flex-end;

  width: 100%;
  > li {
    margin-right: 6px;

    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      margin-bottom: 8px;
    }

    &:last-child {
      display: flex;
      justify-content: flex-end;
      margin-left: 32px;
      position: relative;

      @media only screen and (max-width: ${props => props.theme.bpxs}) {
        justify-content: flex-start;
        width: 100%;
        margin-top: 32px;
      }
    }

    &:nth-child(3) {
      margin-right: 40px;
    }
  }
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const SearchIcon = styled.a`
  color: ${props => props.theme.primary};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  line-height: 19px;
  cursor: pointer;
  position: absolute;
  right: 0;
  font-size: 17px;
  padding: 4px 11px;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    transition: all 0s;
    background-color: #f8f8f8;
    background-image: -webkit-linear-gradient(top, #f8f8f8, #f1f1f1);
    border: 1px solid #c6c6c6;
  }
  &:active {
    background-color: #f6f6f6;
    background-image: -webkit-linear-gradient(top, #f6f6f6, #f1f1f1);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

const NormalSearchIcon = styled.a`
  color: ${props => props.theme.primary};
  cursor: pointer;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  line-height: 19px;
  font-size: 17px;
  cursor: pointer;
  padding: 4px 11px;
  border: 1px solid transparent;
`;

const ProductSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #b2b2b2;
  border-radius: 3px;
  padding: 0.325rem 1.55rem;
  padding-right: 0;
  > input {
    width: 100%;
    border: none;
    box-shadow: none;
    outline: none;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

// const Icon = styled.a`
//   display: none;
//   @media only screen and (max-width: ${props => props.theme.bpxs}) {
//     font-size: 28px;
//     margin-right: 16px;
//     display: block;
//     cursor: pointer;
//     color: ${props => props.theme.default};

//     &:active {
//       color: inherit;
//     }

//     &:hover {
//       color: inherit;
//     }
//   }
// `;

const LocationBox = styled.div`
  position: fixed;
  height: 150px;
  top: 74px;
  left: 173px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  color: #333;
  width: 440px;
  justify-content: center;
  align-items: center;
  display: flex;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    width: 80%;
    left: 15%;
  }

  &::before {
    margin-left: -6px;
    bottom: 100%;
    left: 14%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid #eee;

    @media only screen and (max-width: ${props => props.theme.bpxs}) {
      left: 64%;
    }
  }
`;

const ModalBody = styled.div`
  flex: 1;
  display: flex;
  height: 520px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    flex-flow: column;
  }
`;
const ModalLeft = styled.div`
  flex: 1;
  background: #f8f8f8;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: none;
  }
`;

const ModalRight = styled.div`
  flex: 1.3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ham = styled.div`
  display: none;

  @media only screen and (max-width: ${props => props.theme.bpxs}) {
    display: block;
    font-size: 21px;
    margin-right: 8px;
  }
`;

const Close = styled.a`
  position: absolute;
  flex: 1;
  width: 25px;
  height: 25px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TYPE = { LOGIN: "login", REGISTER: "register" };

class Header extends React.Component {
  state = {
    showSearch: false,
    displaySearch: false,
    drawer: false,
    term: "",
    modal: false,
    type: TYPE.LOGIN,
    locationLoader: true,
    showLocation: true,
    locationError: false
  };

  async componentDidMount() {
    let loc = await localStorage.getItem("loc");
    if (loc) {
      this.props.refreshLocation(JSON.parse(loc));
      this.setState({ showLocation: false });
    }
    this.setState({ locationLoader: false });
  }

  _onSearch = event => {
    this.setState(prevState => ({
      showSearch: !prevState.showSearch
    }));

    // if (this.state.showSearch) {
    //   this.props.onSearch(term);
    // }
  };

  _toggleDrawer = () => {
    this.setState(prevState => ({
      drawer: !prevState.drawer
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  changeAuth = type => {
    this.setState({ type: type });
  };

  closeModal = () => {
    this.props.authModal(false);
  };

  currentLocation = () => {
    this.setState({ locationLoader: true });

    axios
      .post(
        "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAVVdU_-mfoW6jMtUDgLlSadGsy2vt4E3k"
      )
      .then(resp => {
        this.props.getCurrentLocation(
          {
            lat: resp.data.location.lat.toString(),
            lng: resp.data.location.lng.toString()
          },
          bol => {
            this.setState({
              locationLoader: false,
              showLocation: false
            });
          }
        );
      })
      .catch(err => {
        this.setState({ showLocation: false });
        console.log(err);
      });

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     this.success,
    //     this.error,
    //     this.options
    //   );
    // } else {
    //   message.error("Geolocation is not supported by this browser.", 2);
    //   this.setState({ locationLoader: false });
    // }
  };

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  success = pos => {
    var crd = pos.coords;

    this.props.getCurrentLocation(
      { lat: crd.latitude.toString(), lng: crd.longitude.toString() },
      bol => {
        this.setState({
          locationLoader: false,
          showLocation: false,
          locationError: false
        });

        if (bol) {
          // Hide the box
        } else {
          message.error("error", 1);
        }
      }
    );
  };

  error = err => {
    console.log(err);

    message.error(`ERROR(${err.code}): ${err.message}`, 2);
    this.setState({
      locationLoader: false,
      showLocation: false,
      locationError: true
    });
  };

  _renderSearch = () => {
    const { pathname } = this.props.newRouter;
    const { showSearch, term } = this.state;

    if (pathname === "/product") {
      return (
        <SearchContainer>
          {/* {showSearch ? ( */}
          <ProductSearch>
            <input
              value={term}
              onChange={() => this.setState({ term: event.target.value })}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  term && this.props.onSearch(term);
                }
              }}
            />
            <NormalSearchIcon
              onClick={() => {
                term && this.props.onSearch(term);
              }}
            >
              <FontAwesomeIcon icon="search" />
            </NormalSearchIcon>
          </ProductSearch>
          {/* // ) : ( //{" "}
          <SearchIcon onClick={this._onSearch}>
            // <FontAwesomeIcon icon="search" />
            //{" "}
          </SearchIcon>
          // )} */}
        </SearchContainer>
      );
    } else return null;
  };

  // _renderHeader = () => {
  //   window.addEventListener("scroll", () => {
  //     if (window.screenY > 500) this.setState({ displaySearch: true });
  //     else this.setState({ displaySearch: false });
  //   });
  // };

  onLocationBoxClose = () => {};

  renderLocationBox = location => {
    const { showLocation } = this.state;

    if (_.isEmpty(location)) {
      return showLocation;
    } else {
      return showLocation && !_.isEmpty(location);
    }
  };

  render() {
    const {
      user,
      logout,
      login,
      signup,
      error,
      location,
      refreshLocation
    } = this.props;
    const { getFieldDecorator } = this.props.form;

    const {
      drawer,
      type,
      locationLoader,
      showLocation,
      locationError
    } = this.state;

    const { modal, authModal } = this.props;

    return (
      <Wrapper>
        <Container style={{ height: "100%" }}>
          <Ham>
            <Icon onClick={this._toggleDrawer}>
              <FontAwesomeIcon icon="bars" />
            </Icon>
          </Ham>
          <Logo>
            <img
              src="../../static/images/logo.png"
              onClick={() => Router.push(`/`)}
            />
          </Logo>

          <div
            style={{
              height: "60%",
              display: "flex",
              alignItems: "center",
              marginLeft: 16,
              paddingLeft: 16,
              borderLeft: "1px solid #eee",
              position: "relative"
            }}
          >
            {!_.isEmpty(location) ? (
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={() => {
                  this.setState(prevState => ({
                    showLocation: !prevState.showLocation
                  }));

                  // this.setState({ showLocation: true });
                }}
              >
                <FontAwesomeIcon icon="map-marker-alt" color={"#6376f1"} />
                <p
                  style={{
                    margin: 0,
                    font: "menu",
                    marginLeft: 8,
                    marginRight: 8,
                    cursor: "pointer",
                    color: "#555"
                  }}
                >
                  {location.results &&
                    location.results[
                      location.results.length - 3
                    ].address_components[0].long_name.split(" ")[0]}
                </p>
                <FontAwesomeIcon icon="angle-down" />
              </a>
            ) : (
              <a
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onClick={() => {
                  this.setState(prevState => ({
                    showLocation: !prevState.showLocation
                  }));
                }}
              >
                <FontAwesomeIcon icon="map-marker-alt" color={"#555"} />
                <p
                  style={{
                    margin: 0,
                    font: "menu",
                    marginLeft: 8,
                    marginRight: 8
                  }}
                >
                  {"No Location"}
                </p>
                <FontAwesomeIcon icon="angle-down" />
              </a>
            )}

            {/* {(showLocation || _.isEmpty(location)
              ? locationError
                ? false
                : _.isEmpty(location)
              : locationError) && ( */}

            {this.renderLocationBox(location) && (
              <LocationBox>
                <div
                  style={{
                    padding: 16,
                    display: "flex",
                    flexFlow: "column",
                    flex: 1,
                    position: "relative"
                  }}
                >
                  <div style={{ display: "flex" }}>
                    {/* <Search
                      disabled
                      size={"large"}
                      placeholder={"search any area "}
                    /> */}
                    <Button
                      size={"large"}
                      style={{
                        marginLeft: 8,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        font: "menu",
                        fontSize: "15px",
                        background: "#6276f11a",
                        color: "#333",
                        width: "38%"
                      }}
                      loading={locationLoader}
                      onClick={this.currentLocation}
                    >
                      Detect
                      <FontAwesomeIcon
                        icon={"location-arrow"}
                        style={{ fontSize: 12, marginLeft: 4 }}
                      />
                    </Button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      marginTop: 12
                    }}
                  >
                    <span
                      style={{
                        letterSpacing: "-0.3px",
                        color: "#707070",
                        lineHeight: 1.3,
                        opacity: 0.9,
                        fontSize: 13
                      }}
                    >
                      <a
                        style={{
                          font: "menu",
                          paddingLeft: 2,
                          letterSpacing: "0px",
                          color: "rgba(0, 0, 0, 0.85)",
                          fontSize: 14
                        }}
                      >
                        <FontAwesomeIcon
                          icon={"info-circle"}
                          style={{
                            marginRight: 4,
                            color: "#555",
                            fontSize: 12
                          }}
                        />
                        Give Location and see Local store
                        <FontAwesomeIcon
                          icon={"store"}
                          style={{ marginLeft: 6, color: "#6a7af1" }}
                        />
                      </a>
                    </span>
                  </div>
                </div>

                <Close
                  onClick={() => {
                    this.setState({
                      showLocation: false,
                      locationError: false
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={"times"}
                    style={{ marginLeft: 6, color: "#999" }}
                  />
                </Close>
              </LocationBox>
            )}
          </div>

          <LeftContainer>
            {this._renderSearch()}
            <Nav>
              {/* <li>
                <Link route={"vendor"}>
                  <List>Become Partner</List>
                </Link>
              </li>
              <li>
                <Link route={"about"}>
                  <List>Why FairPe</List>
                </Link>
              </li> */}

              {user && user.name && (
                <li>
                  <Link route={"searchurl"}>
                    <CustomButtom active>Search by URL</CustomButtom>
                  </Link>
                </li>
              )}

              {user && !user.name ? (
                <li>
                  {/* <CustomButtom
                    style={{ marginRight: 12 }}
                    onClick={() => this.props.openModal(true)}
                  >
                    Log In
                  </CustomButtom> */}

                  <CustomButtom active onClick={() => authModal(true)}>
                    Login / Register
                  </CustomButtom>
                </li>
              ) : (
                <li>
                  <UserDropdown user={user} logout={logout} />
                </li>
              )}
            </Nav>
          </LeftContainer>
        </Container>

        <CustomDrawer
          placement="left"
          visible={drawer}
          onClose={this._toggleDrawer}
          closable={false}
        >
          <Nav>
            {/* <li>
              <Link route={"vendor"}>
                <List onClick={() => this.setState({ drawer: false })}>
                  Become Partner
                </List>
              </Link>
            </li>
            <li>
              <Link route={"about"}>
                <List onClick={() => this.setState({ drawer: false })}>
                  Why FairPe
                </List>
              </Link>
            </li>

            <li>
              <Link route={"contact"}>
                <List onClick={() => this.setState({ drawer: false })}>
                  Contact us
                </List>
              </Link>
            </li> */}

            {user && user.name && (
              <li>
                <Link route={"searchurl"}>
                  <CustomButtom
                    onClick={() => {
                      this.setState({ drawer: false });
                    }}
                    active
                  >
                    Search by URL
                  </CustomButtom>
                </Link>
              </li>
            )}

            {user && !user.name ? (
              <li>
                <CustomButtom
                  active
                  onClick={() => {
                    authModal(true);

                    this.setState({ drawer: false });
                  }}
                >
                  Login / Register
                </CustomButtom>
              </li>
            ) : (
              <li>
                <UserDropdown user={user} logout={logout} />
              </li>
            )}
          </Nav>
        </CustomDrawer>

        <Modal
          centered
          bodyStyle={{ padding: 0 }}
          destroyOnClose={true}
          width={900}
          visible={modal.auth}
          footer={null}
          onCancel={() => authModal(false)}
          onOk={() => authModal(false)}
        >
          <ModalBody>
            <ModalLeft>
              <FontAwesomeIcon
                style={{ fontSize: "200px", opacity: 0.4 }}
                icon={"images"}
              />
            </ModalLeft>
            <ModalRight>
              {type === TYPE.LOGIN ? (
                <Login
                  changeAuth={this.changeAuth}
                  login={login}
                  closeModal={this.closeModal}
                />
              ) : (
                <Register
                  changeAuth={this.changeAuth}
                  closeModal={this.closeModal}
                  signup={signup}
                  error={error}
                />
              )}
            </ModalRight>
          </ModalBody>
        </Modal>
      </Wrapper>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Header);

export default WrappedNormalLoginForm;
