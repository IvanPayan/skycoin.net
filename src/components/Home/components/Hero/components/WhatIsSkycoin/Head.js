import React from 'react';
import Heading from 'components/Heading';
import { SPACE } from 'config';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

const Head = () =>
  (<Heading heavy as="h1" color="white" fontSize={[6, 7, 8]} mb={rem(SPACE[6])} alignItem="center">
    <FormattedMessage id="home.hero.heading" />
  </Heading>);

export default Head;
