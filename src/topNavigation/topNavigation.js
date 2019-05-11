import React, { Component } from "react";
import { TopNavigationWrapper, TopMenuWrapper } from "./topNavigation.style";
import { Alert, Menu, Layout, Row, Col, AntdIcon, Popover } from "antd";
import { Icon } from 'react-fa';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class TopNavigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenu: "option-a",
      hoverMenu: ""
    };
  }

  mouseEnter(element) {
    this.setState({ hoverMenu: element });
  }

  mouseLeave(element) {
    this.setState({ hoverMenu: "" });
  }

  changeSubMenu(subMenu) {
    const { onSubMenuChange } = this.props;

    onSubMenuChange(subMenu);
  }

  render() {
    const { activeMenu, hoverMenu } = this.state;

    return (
      <TopNavigationWrapper>
        <Row>
          <Col span={4}>
            <div className="topLogo">
              <img
                alt="[logo]"
                src="https://360sfconnector.blob.core.windows.net/test/logo.JPG"
              />
            </div>
          </Col>
          <Col span={16}>
            <Row gutter={2}>
              <Col span={8}>
                <TopMenuWrapper
                  onMouseEnter={() => this.mouseEnter("option-a")}
                  onMouseLeave={() => this.mouseLeave("option-a")}
                >
                  <div className="menuOption" style={{ color: "#1e7fbf" }}>
                    Comparative
                  </div>

                  {activeMenu === "option-a" && (
                    <div className="menuActiveBar" />
                  )}

                  {hoverMenu === "option-a" && <div className="menuHoverBar" />}
                </TopMenuWrapper>
              </Col>
              <Col span={8}>
                <TopMenuWrapper
                  onMouseEnter={() => this.mouseEnter("option-b")}
                  onMouseLeave={() => this.mouseLeave("option-b")}
                >
                  <div className="menuOption">Property Manager</div>

                  {activeMenu === "option-b" && (
                    <div className="menuActiveBar" />
                  )}

                  {hoverMenu === "option-b" && <div className="menuHoverBar" />}
                </TopMenuWrapper>
              </Col>
              <Col span={8}>
                <TopMenuWrapper
                  onMouseEnter={() => this.mouseEnter("option-c")}
                  onMouseLeave={() => this.mouseLeave("option-c")}
                >
                  <div className="menuOption">Pacing</div>

                  {activeMenu === "option-c" && (
                    <div className="menuActiveBar" />
                  )}

                  {hoverMenu === "option-c" && <div className="menuHoverBar" />}
                </TopMenuWrapper>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
            <Row>
              <Col span={8}>
                <div className="actionButton">
                  <Icon name="user-circle" style={{ fontSize: 30, color: "#767676" }} />
                </div>
              </Col>

              <Col span={8}>
                <div className="actionButton">
                  <Icon name="cog" style={{ fontSize: 30, color: "#767676" }} />
                </div>
              </Col>

              <Col span={8}>
                <Popover
                  title="Notifications"
                  trigger="['hover', 'click']"
                  placement="bottomRight"
                  content={
                    <Alert
                      description="No news is good news!"
                      type="info"
                      showIcon
                    />
                  }
                >
                  <div className="actionButton">
                    <Icon name="bell" style={{ fontSize: 30, color: "#767676" }} />
                  </div>
                </Popover>
              </Col>
            </Row>
          </Col>
        </Row>

      </TopNavigationWrapper>
    );
  }
}

export default TopNavigation;
