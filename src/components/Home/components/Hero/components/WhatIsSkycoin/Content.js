import React from 'react';
import PropTypes from 'prop-types';
import features from './features';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Heading from 'components/Heading';
import { FONT_FAMILIES, COLOR, FONT_SIZES, SPACE } from 'config';
import { rem } from 'polished';
import media from 'utils/media';

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


const Container = styled(Flex)`    
    flex-wrap:no-wrap;


    ${media.sm.css`
        flex-wrap:wrap;
        height:400px;
    `}
`;


const ContentItemContainer = styled(Flex)`
`;

const ContentItem = ({ title, description }) =>
  (<ContentItemContainer direction="column" width={['100%', '300px', '250px']} mr={[0, 0, rem(SPACE[5])]}>
    <Heading heavy as="h6" color="white" fontSize={[4, 5, 5]} mb={[rem(SPACE[2])]}>
      <FormattedMessage id={title} />
    </Heading>
    <Paragraph>
      <FormattedMessage id={description} />
    </Paragraph>
  </ContentItemContainer>);

ContentItem.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
}

const Content = () =>
  (<Container direction="column">
    {features.map(feature => 
        <ContentItem title={feature.title} description={feature.description} />)}
  </Container>);

export default Content;
