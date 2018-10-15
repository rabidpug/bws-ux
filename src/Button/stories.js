import Button from '.';
import React from 'react';
import { storiesOf, } from '@storybook/react';
import { withInfo, } from '@storybook/addon-info';

storiesOf( 'Button/Primary', module )
  .add( 'default', withInfo()( () => <Button>Button</Button> ) )
  .add( 'active', withInfo()( () => <Button active>Button</Button> ) )
  .add( 'disabled', () => <Button disabled>Button</Button> );

storiesOf( 'Button/Secondary', module )
  .add( 'default', () => <Button secondary>Button</Button> )
  .add( 'active', () => (
    <Button active secondary>
      Button
    </Button>
  ) )
  .add( 'disabled', () => (
    <Button disabled secondary>
      Button
    </Button>
  ) );

storiesOf( 'Button/Tertiary' )
  .add( 'default', () => <Button tertiary>Button</Button> )
  .add( 'active', () => (
    <Button active tertiary>
      Button
    </Button>
  ) )
  .add( 'disabled', () => (
    <Button disabled tertiary>
      Button
    </Button>
  ) );
