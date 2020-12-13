import 'braid-design-system/reset';
import React from 'react';

import { storiesOf } from 'sku/@storybook/react';
import { text } from 'sku/@storybook/addon-knobs';

import Test from './Test';

storiesOf('Test', module).add('test', () => (
  <Test 
    title={text('Title', 'Default title', 'defaultGroup')}
    text={text('Text', 'Default text', 'defaultGroup')}
  />
));
