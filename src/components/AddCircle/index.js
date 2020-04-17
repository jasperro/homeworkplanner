import React from 'react';

import Wrapper from './Wrapper'
import Line from './Line';

export default ({ radius }) => (
    <Wrapper radius={radius}>
      <Line width="30%" height="2px" />
      <Line width="2px" height="30%" />
    </Wrapper>
);
