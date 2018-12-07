/* eslint-disable no-nested-ternary */
import React from 'react';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import { SPACE, FONT_FAMILIES, COLOR } from 'config';
import Fa from '@fortawesome/react-fontawesome';
import { FormattedMessage } from 'react-intl';
import { renderMenu, StyledLink } from '../Navigation';
import media from '../../../utils/media';

const menuBreakpoint = '1035px';

const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-left: 7px;
  min-width: 10px;
`;

const IconStyle = {
  fontSize: '14px',
  zIndex: 2,
};

const LinksContainer = styled.ul`
  background: white;
  padding: 0px;
  margin: 5px 0 0 15px;
  transition: height 1s linear;
  height: auto;
  
  a {
    margin: 10px 0 5px 0;
    white-space: nowrap;
    padding: 0;
  }
  
  ${media.md.css`
    background: ${props => (props.white ? COLOR.dark : '#fff')};
    border-radius: 0 0 3px 3px;
    box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
    border-top: 1px solid white;
    margin: -2px 0 0 0;
    min-width: 100%;
    position: absolute;
    top: calc(100%);
    
    a, a:first-child {
      margin: 5px;
      padding: 5px;
    }
  `};
  
  /*&.example-enter {
    transform: translateY(-100%);
    transition: .3s cubic-bezier(0, 1, 0.5, 1);
  
    &.example-enter-active {
      transform: translateY(0%);
    }
  }
  
  &.example-leave {
    transform: translateY(0%);
    transition: .3s ease-in-out;
  
    &.example-leave-active {
      transform: translateY(-100%);
    }
  }*/
`;

const Container = styled(Flex)`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: ${props => (props.isMobile ? 'auto' : '33.3333%')};
  margin: 0;
  padding-top: ${props => (props.isMobile ? rem(SPACE[3]) : rem(SPACE[1]))}; 
  padding-bottom: ${props => (props.isMobile ? rem(SPACE[3]) : rem(SPACE[1]))};
  padding-left: ${props => (props.isMobile ? rem(SPACE[8]) : '0')}; 
  padding-right: ${props => (props.isMobile ? rem(SPACE[8]) : '0')};
  font-family: ${FONT_FAMILIES.sans};
  color: ${props => (props.white && !props.isMobile ? 'white' : (props.active ? COLOR.dark : COLOR.base))};
  text-decoration: none;
  
  ${media.sm.css`
    width: auto;
    margin-left: ${props => (props.isMobile ? '0' : rem(SPACE[7]))};
  `};
  
  ${media.md.css`
    align-items: center;
    margin-left: ${rem(SPACE[4])};
    padding: ${rem(SPACE[1])};
    border-top: 2px solid transparent;
    border-bottom: 2px solid ${props => (props.active ? COLOR.base : 'transparent')};
    color: ${props => (props.white ? 'white' : (props.active ? COLOR.dark : COLOR.base))};
    
    &:first-child {
      margin-left: 0;
    }
  `};
  
  @media (min-width: ${menuBreakpoint}) {
    margin-left: ${rem(SPACE[7])};
  };
`;

export const Icon = props => <Fa icon={props.icon} style={IconStyle} />;

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

class Dropdown extends React.Component {
  constructor({ active }) {
    super();
    this.state = {
      menuOpen: active || false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  handleOpen() {
    this.setState({
      menuOpen: true,
    });
  }

  handleClose() {
    this.setState({
      menuOpen: false,
    });
  }

  toggleOpen() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    const { isMobile, white, menuItem } = this.props;
    const DropdownLink = styled(StyledLink)`
      padding: 0;
      cursor: pointer;
      color: ${props => (props.white && !props.isMobile ? 'white' : (props.active ? COLOR.dark : COLOR.base))};
    `;
    const { menuOpen } = this.state;

    return (
      <Container
        {...this.props}
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        onClick={this.toggleOpen}
      >
        <DropdownLink
          {...this.props}
        >
          <FormattedMessage id={menuItem.name} />
          <IconWrap>
            <Icon icon={faAngleDown} />
          </IconWrap>
        </DropdownLink>
        {menuOpen && <LinksContainer>
          {menuItem.menu.map((item, index) => renderMenu(item, white, isMobile, index))}
        </LinksContainer>}
      </Container>
    );
  }
}

Dropdown.propTypes = {
  white: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  menuItem: PropTypes.shape({
    menu: PropTypes.array,
    to: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
};

export default Dropdown;

