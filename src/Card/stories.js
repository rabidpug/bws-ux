import Card from '.';
import React from 'react';
import { storiesOf, } from '@storybook/react';
import { withInfo, } from '@storybook/addon-info';
const { Body, Footer, Header, } = Card;

storiesOf( 'Card', module )
  .add( 'default',
        withInfo()( () => (
          <Card>
            <Header>Header</Header>
            <Body>Body</Body>
            <Footer>Footer</Footer>
          </Card>
        ) ) )
  .add( 'full',
        withInfo()( () => (
          <Card fullScreen>
            <Header>Header</Header>
            <Body>Body</Body>
            <Footer>Footer</Footer>
          </Card>
        ) ) );
