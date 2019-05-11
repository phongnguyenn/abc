import styled from "styled-components";

const TopNavigationWrapper = styled.div`
  height: 71px;
  background-color: #fff;
  border-bottom: 1px solid #767676;

  .topLogo {
    text-align: center;
    padding: 8px 0px 0px 20px;
  }

  .topLogo img {
    width: 185px;
  }

  .actionButton {
    height: 70px;
    float: left;
    border-left: 1px solid #767676;
    padding-top: 20px;
    width: 100%;
    text-align: center;
  }

  .topMenuOption {
  }

  .anticon {
    fontsize: 30;
    color: #767676;
  }


`;

const TopMenuWrapper = styled.div`
  text-align: center;

  .menuOption {
    height: 70px;
    padding-top: 25px;
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;
    color: #6e7073;
  }

  .menuActiveText {
    color: #1e7fbf;
  }

  .menuActiveBar {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    border-bottom: 10px solid #1e7fbf;
  }

  .menuHoverBar {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    border-bottom: 10px solid #6DA8FD;
    opacity: 0.5;
    margin-bottom: 1px;
  }
`;

export { TopNavigationWrapper, TopMenuWrapper };
