import { shallowMount } from '@vue/test-utils';
import { render } from '@testing-library/vue';
import Greeter from '../../src/components/Greeter';

describe( 'Greeter.vue', () => {
  test( 'Using vue/test-utils', () => {
    const wrapper = shallowMount( Greeter );
    expect( wrapper.text() ).toContain( 'John' );
  } );

  test( 'Using testing-library', () => {
    const { getByText } = render( Greeter );
    // expect( getByText( /John/ ) ).not.toBeNull();
    expect( getByText( 'John', { exact: false } ) ).not.toBeNull();
  } );
} );
