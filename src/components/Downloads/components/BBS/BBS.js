import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import DownloadsTable from 'components/DownloadTableSimple';

import content from './content';

const BBS = () => (
  <div>
    <Container>
      <Heading heavy as="h2" fontSize={[6, 7]} color="black" mb={[0]}>
        <FormattedMessage id="downloads.bbs.heading" />
      </Heading>

      <Text fontSize={[2, 2, 3]} color="black" heavy mb={[6, 8]}>
        <FormattedMessage id="downloads.bbs.lead" />
      </Text>

      <DownloadsTable list={content} />
    </Container>
  </div>
);

export default BBS;
