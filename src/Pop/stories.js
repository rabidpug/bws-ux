import Pop from '.';
import React from 'react';
import { storiesOf, } from '@storybook/react';
import { withInfo, } from '@storybook/addon-info';

storiesOf( 'Pop', module ).add( 'basic', withInfo()( () => <Pop>Helloooo!</Pop> ) );
