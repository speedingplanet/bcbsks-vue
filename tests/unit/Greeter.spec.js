import { shallowMount } from '@vue/test-utils';
import { render } from '@testing-library/vue';
import Greeter from '../../src/components/Greeter';

describe( 'Greeter.vue', () => {
  let greeterProps;

  beforeEach( () => {
    greeterProps = {
      userName: 'John',
    };
  } );

  test( 'Using vue/test-utils', () => {
    const wrapper = shallowMount( Greeter, { props: greeterProps } );
    expect( wrapper.text() ).toContain( greeterProps.userName );
  } );

  test( 'Using testing-library', () => {
    const { getByText } = render( Greeter, { props: greeterProps } );
    // expect( getByText( /John/ ) ).not.toBeNull();
    expect( getByText( greeterProps.userName, { exact: false } ) ).not.toBeNull();
  } );
} );
