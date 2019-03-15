import React from 'react';
import styled from 'styled-components';

import { rgba } from 'polished';

import { Flex, Box } from 'grid-styled';
import media from 'utils/media';
import Buttons from './Buttons';
import Content from './Content';
import Head from './Head';

const Intro = styled(Box)`
  
  ${media.sm.css`
    background-color: ${rgba(16, 31, 52, 0.9)};
  `}
  
  ${media.md.css`
    margin-right: 0;
  `}
`;

const Container = styled(Flex)`
  justify-content:space-between;
  flex-direction:column;

  ${media.md.css`
  flex-direction:row;
  `}
`;

const WhatIsSkycoin = () =>
  (<Container width={'100%'}>
    <Intro width={['100%', '100%', 560]} p={[0, 5, 5]}>
      <Head />
      <Content />
    </Intro>
    <Buttons />
  </Container>);

export default WhatIsSkycoin;
