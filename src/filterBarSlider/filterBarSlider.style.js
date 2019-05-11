import styled from "styled-components";
import { transition, borderRadius, boxShadow } from '../style-util';

const FilterBarSliderWrapper = styled.div`
  background-color: #ffffff;
  width: 340px;
  height: calc(100% - 70px);
  padding: 0 0 50px;
  flex-shrink: 0;
  position: fixed;
  top: 70px;
  // right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '-340px')};
  // left: ${props => (props['data-rtl'] === 'rtl' ? '-340px' : 'inherit')};

  // right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '-340px')};
  // left: ${props => (props['data-rtl'] === 'rtl' ? '-340px' : 'inherit')};

  //right: '-340px';
  left: -340px;

  z-index: 1001;
  ${transition()};
  ${boxShadow('-1px 0 5px rgba(0,0,0,0.25)')};

  // @media only screen and (max-width: 767px) {
  //   width: 270px;
  //   // right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '-270px')};
  //   // left: ${props => (props['data-rtl'] === 'rtl' ? '-270px' : 'inherit')};
  // }

  &.active {
    //right: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
    left: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
  }

  .switcherToggleBtn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #ffffff !important;
    outline: 0;
    border: 1px solid rgba(0, 0, 0, 0.65) !important;
    position: absolute;
    text-align: center;
    top: 100px;
    // left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '-50px')};
    // right: ${props => (props['data-rtl'] === 'rtl' ? '-50px' : 'inherit')};
    left: 342px;
    cursor: pointer;
    border-radius: ${props =>
    props['data-rtl'] === 'rtl' ? '0 3px 3px 0' : '3px 0 0 3px'};
    ${boxShadow('-2px 0 5px rgba(0,0,0,0.2)')};

    img {
      width: 23px;
    }
  }

  i {
     font-size: 20px; 
     color: rgba(0, 0, 0, 0.65); 
  }

  @-webkit-keyframes selectedAnimation {
    0% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(2.4);
      transform: scale(2.4);
      opacity: 0;
    }
  }
  @keyframes selectedAnimation {
    0% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(2.4);
      transform: scale(2.4);
      opacity: 0;
    }
  }

`;

export default FilterBarSliderWrapper;
