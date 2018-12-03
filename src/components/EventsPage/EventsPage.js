import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage, injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';
import { rem } from 'polished';
import { COLOR, FONT_FAMILIES, FONT_SIZES, SPACE } from 'config';
import media from 'utils/media';

import Expander from '../ExpanderComponent/ExpanderComponent';
import Text from '../Text/Text';
import Header from '../Header/Header';
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import SubHeading from '../SubHeading/SubHeading';
import Footer from '../Footer/Footer';

import { en, ko, ru, zh } from './events';

const localeList = { en, zh, ko, ru };

const getLocale = locale => localeList[locale];

const Wrapper = styled.div`
  padding: 2em 0;
`;
const StyledText = styled(Text) `
  font-family: SkycoinSansBold, sans-serif;
  display: inline;
  margin: 0;
  text-transform: uppercase;
  color: #07172E;
  font-size: ${rem(FONT_SIZES[2])};

  ${media.md.css`
    font-size: ${rem(FONT_SIZES[3])};  
  `}
`;
const StyledText2 = styled(StyledText) `
  margin: 0;
  text-transform: uppercase;
  font-family: SkycoinSansBold, sans-serif;
  font-size: ${rem(FONT_SIZES[2])};
  color: #07172E;

  ${media.md.css`
    font-size: ${rem(FONT_SIZES[3])};  
  `}
`;
const StyledList = styled.ul`
  margin: 0 0 ${rem(SPACE[4])};
  font-size: ${FONT_SIZES[2]}px;
  color: #394049;
  font-family: ${FONT_FAMILIES.sans};
  line-height: 1.75rem;
  list-style-type: none;
`;
const StyledListItem = styled.li`
  list-style-position: inside;
  position: relative;
  padding-left: 20px;

  &::before {
    position: absolute;
    width: 4px;
    height: 4px;
    content: '';
    background-color: ${COLOR.base};
    left: 0;
    top: 13px;
  }
`;
const StyledLink = styled.a`
  font-family: SkycoinSans, sans-serif;
  font-size: ${rem(FONT_SIZES[3])};
  margin-left: 7px;
  text-decoration: none;
  color: ${COLOR.base};
`;
const ContentOuter = styled(Flex) `
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 55px;
`;
const ContentInner = styled(Box) `
  background-color: ${COLOR.lightBlue};
  padding: 20px;
  margin-bottom: 20px;
`;
const QuoteContainer = styled.div`
  display: flex;
  margin-bottom: 35px;
`;
const QuoteLine = styled.div`
  border: 2px solid #92A4BA;
  border-radius: 2px;
  width: 1px;
  background-color: #92A4BA;
`;
const Quote = styled.div`
  padding-left: ${rem(SPACE[2])};
  text-transform: uppercase;

  ${media.md.css`
    font-size: ${rem(SPACE[5])};  
  `}
`;
const Line = styled.div`
  height: 1px;
  background-color: #92A4BA;
`;
const Subtitle = styled(Text) `
  text-transform: uppercase;
  color: ${COLOR.black};
  font-family: SkycoinSansBold, sans-serif;
  font-size: ${rem(FONT_SIZES[2])};
`;

const renderAccordionContent = event =>
  (<StyledList>
    {event.info.map(info => (<StyledListItem>
      {info.title && <Subtitle fontSize={[1, 2, 3]} heavy mb={[2, 3]}>
        <FormattedMessage id={info.title} />
      </Subtitle>}
      <FormattedMessage id={info.text} />
    </StyledListItem>))}
  </StyledList>);

const EventsPage = ({ intl }) => {
  const events = getLocale(intl.locale);
  return (<div>
    <Helmet>
      <title>Skycoin Jobs</title>
      <meta
        name="description"
        content="Skycoin is hiring developers"
      />
    </Helmet>
    <Header border />
    <Container>
      <Wrapper>
        <Heading heavy as="h2" fontSize={[6, 7]} color={COLOR.textDark} mb={2}>
          <FormattedMessage id="jobs.title" />
        </Heading>
        <SubHeading fontSize={[1, 1, 2]} normal mb={[8, 10]}>
          <FormattedMessage id="jobs.subtitle" />
        </SubHeading>

        <ContentOuter>
          <Box width={[1, 35 / 100]}>
            <ContentInner>
              <QuoteContainer>
                <QuoteLine />
                <Quote>
                  <StyledText>
                    <FormattedMessage id="events.sidebarTitle1" />
                  </StyledText>
                  <StyledLink href="https://t.me/meetupsworldwideskycoin">@meetupsworldwideskycoin</StyledLink><br />
                  <StyledText>
                    <FormattedMessage id="events.sidebarTitle2" />
                  </StyledText>
                  <StyledLink href="mailto:contact@skycoin.net">contact@skycoin.net</StyledLink><br />
                  <StyledText>
                    <FormattedMessage id="events.sidebarTitle3" />
                  </StyledText>
                </Quote>
              </QuoteContainer>
              <Text>
                <StyledList>
                  <StyledListItem>
                    <FormattedMessage id="events.sidebarList.city" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="events.sidebarList.location" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="events.sidebarList.date" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="events.sidebarList.time" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="events.sidebarList.additional" />
                  </StyledListItem>
                  <StyledListItem>
                    <FormattedMessage id="events.sidebarList.contact" />
                  </StyledListItem>
                </StyledList>
              </Text>
            </ContentInner>
          </Box>
          <Box width={[1, 65 / 100]} pl={[0, 35]}>
            {events && events.map(event => (<Expander title={<FormattedMessage id={event.title} />}>
              {renderAccordionContent(event)}
            </Expander>))
            }
            <Line />
          </Box>
        </ContentOuter>
      </Wrapper>
    </Container>
    <Footer />
  </div>);
};

export default injectIntl(EventsPage);
