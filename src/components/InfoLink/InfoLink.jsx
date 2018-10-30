import React, { Component } from 'react';
import styled from 'styled-components';

const Info = styled.div`
  font-size: 12px;
`;

const InfoWrap = styled.div`
  margin-top: 10px;
`;

const Trigger = styled.a`
  font-size: 12px;
  margin-top: 5px;
  &:link, &:visited {
    color: #888;
  }
`

class InfoLink extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }

  render() {
    return (
      <InfoWrap>
        <Trigger href="" onClick={this.showMenu}>
          Why are there different reagents?
        </Trigger>

        {
          this.state.showMenu
            ? (
              <Info>
              <p>Reagents are a sort of chemical used for testing. It will change colour when in contact with a substance it will interact with.</p>

              <p>There are different chemicals that can do this; hence the  5 different kinds of Reagent test we have in our list. Every chemical reacts differently to different samples, making it key to test with more than one reagent chemical on each sample source you’re testing.</p>
              </Info>
            )
            : (
              null
            )
        }
      </InfoWrap>
    );
  }
}

export default InfoLink;
