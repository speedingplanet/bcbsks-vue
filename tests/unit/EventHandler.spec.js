import { mount } from '@vue/test-utils';
import { render, fireEvent } from '@testing-library/vue';
import EventHandler from '../../src/demos/EventHandler';

describe( 'EventHandler', () => {
  test( 'vue/test-utils', async() => {
    const wrapper = mount( EventHandler );

    // Always check your assumptions
    expect( wrapper.find( '.buttonMsg' ).text() ).toContain( '0' );
    await wrapper.find( 'button' ).trigger( 'click' );
    expect( wrapper.find( '.buttonMsg' ).text() ).toContain( '1' );
  } );

  test( 'testing-library/vue', async() => {
    const { getByText } = render( EventHandler );
    const button = getByText( 'Click me' );
    expect( getByText( /You clicked on the button/ ) ).toBeInTheDocument();
    expect( getByText( /You clicked on the button/ ).textContent ).toMatch( /0/ );
    await fireEvent.click( button );
    expect( getByText( /You clicked on the button/ ).textContent ).toMatch( /1/ );
  } );
} );
