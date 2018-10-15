import React, { Fragment, } from 'react';

import Input from '.';
import { storiesOf, } from '@storybook/react';
import { withInfo, } from '@storybook/addon-info';

class ControlledInput extends React.Component {
  state = { value: '', };

  handleChange = ( { target: { value, }, } ) => this.setState( { value, } );

  render () {
    const { value, } = this.state;

    return <Input onChange={ this.handleChange } value={ value } { ...this.props } />;
  }
}
class ValidatedInput extends React.Component {
  state = {
    valid : '',
    value : '',
  };

  handleChange = ( { target: { value, }, } ) =>
    this.setState( {
      valid: value.length > 0 ? value.length > 3 : '',
      value,
    } );

  render () {
    const { value, valid, } = this.state;

    return ( <Input
      onChange={ this.handleChange } valid={ valid } value={ value }
      { ...this.props } /> );
  }
}

storiesOf( 'Input', module )
  .add( 'default', withInfo()( () => <Input /> ) )
  .add( 'with label', withInfo()( () => <Input label='Input With Label' /> ) )
  .add( 'position right', withInfo()( () => <Input label='Input With Label' position='right' /> ) )
  .add( 'position left', withInfo()( () => <Input label='Input With Label' position='left' /> ) )
  .add( 'required', withInfo()( () => <Input label='Required' required /> ) )
  .add( 'validation', withInfo()( () => <ValidatedInput label='Validated' required /> ) )
  .add( 'checkbox',
        withInfo()( () => (
          <Fragment>
            <Input
              label='Checkbox 1' name='checkbox' position='left'
              required type='checkbox' />
            <Input
              label='Checkbox 2' name='checkbox' position='left'
              type='checkbox' />
          </Fragment>
        ) ) )
  .add( 'radio',
        withInfo()( () => (
          <Fragment>
            <Input
              label='Radio 1' name='radio' position='left'
              type='radio' />
            <Input
              label='Radio 2' name='radio' position='left'
              type='radio' />
          </Fragment>
        ) ) )
  .add( 'password', withInfo()( () => ( <Input
    label='Password' name='password' position='right'
    type='password' /> ) ) )
  .add( 'number', withInfo()( () => ( <Input
    label='zip/post code' max='99999' min='1'
    position='right' type='number' /> ) ) )
  .add( 'textarea', withInfo()( () => <Input as='textarea' rows={ 3 } /> ) )
  .add( 'dynamic textarea', withInfo()( () => <ControlledInput as='textarea' fitContent /> ) );
