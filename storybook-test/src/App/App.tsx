import 'braid-design-system/reset';

import Test from './components/Test';
import { BraidProvider, Box } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';

const App = () => (
  <BraidProvider theme={apac}>
    <Box>
      <Test title="I hope this works" text="Nah probs won't" />
    </Box>
  </BraidProvider>
);

export default App;
