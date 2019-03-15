import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { FONT_FAMILIES, COLOR, FONT_SIZES } from 'config';
import { Flex } from 'grid-styled';
import { rem } from 'polished';
import Link from 'components/Link';

import Heading from 'components/Heading';

const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[3])};
  color: ${COLOR.white};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 1.5rem;
  text-transform: none;
  word-wrap:break-word;
  opacity:0.6;
`;

const StyledSpan = styled.span`
  color:${COLOR.base}
`;


const CarouselItemContainer = styled(Flex)`
  flex-direction:column;
`;

const StyledLink = styled(Link)`
  text-decoration:none;
`;

const CarouselItem = ({ title, content, position, numItems, to }) =>
  (<StyledLink to={to}>
    <CarouselItemContainer>
      <Heading heavy as="h6" color="white" fontSize={[4, 5, 5]} mb={[2]}>
        <StyledSpan>{position}/{numItems}.</StyledSpan> <FormattedMessage id={title} />
      </Heading>
      <Paragraph>
        <FormattedMessage id={content} />
      </Paragraph>
    </CarouselItemContainer>
  </StyledLink>);

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  numItems: PropTypes.number.isRequired,
  to: PropTypes.string,
};

CarouselItem.defaultProps = {
  to: '',
};

export default CarouselItem;
