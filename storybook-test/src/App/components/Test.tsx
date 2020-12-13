import { Heading, Text, Box, Stack } from 'braid-design-system';
import React from 'react';

const App = ({
  title = 'default title',
  text = 'default text',
}: {
  title: string;
  text: string;
}) => (
  <Box>
    <Stack space="large">
      <Heading level="1">{title}</Heading>
      <Text>{text}</Text>
    </Stack>
  </Box>
);

export default App;
