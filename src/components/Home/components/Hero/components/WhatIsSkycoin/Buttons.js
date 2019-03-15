import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';
import media from 'utils/media';

import { Flex } from 'grid-styled';

import Button from 'components/Button';
import Buy from 'components/Buy';
import { SPACE } from 'config';

const StyledBuy = styled(Buy)`
  padding: ${rem(SPACE[4])} ${rem(SPACE[8])};
  margin-bottom:${rem(SPACE[3])};
  

  ${media.md.css`
  margin-bottom:${rem(SPACE[7])};
  `}
`;

const StyledDownloads = styled(Button)`
  padding: ${rem(SPACE[4])} ${rem(SPACE[8])};
`;

const ButtonsContainer = styled(Flex)`
  padding: ${rem(SPACE[5])} 0;
  height:100%;
  margin-bottom:${rem(SPACE[8])};

  ${media.md.css`
    margin-bottom:0;
    margin-top:${rem(SPACE[4])};
  `}
`;


const Buttons = () =>
  (<ButtonsContainer column>
    <StyledBuy color="white" bg="base" width={'100%'} pill>
      <FormattedMessage id="home.hero.buy" />
    </StyledBuy>
    <StyledDownloads to="downloads" color="base" bg="white" width={'100%'} pill>
      <FormattedMessage id="home.hero.wallet.get" />
    </StyledDownloads>
  </ButtonsContainer>);

export default Buttons;
