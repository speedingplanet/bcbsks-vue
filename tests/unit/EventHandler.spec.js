import { mount } from '@vue/test-utils';
import { render, fireEvent } from '@testing-library/vue';
import EventHandler from '../../src/demos/EventHandler';

describe( 'EventHandler regular events', () => {
  test( 'vue/test-utils', async() => {
    const wrapper = mount( EventHandler );

    // Always check your assumptions
    expect( wrapper.find( '.buttonMsg' ).text() ).toContain( '0' );
    await wrapper.find( 'button.btn-primary' ).trigger( 'click' );
    expect( wrapper.find( '.buttonMsg' ).text() ).toContain( '1' );
  } );

  test( 'testing-library/vue', async() => {
    const { getByText } = render( EventHandler );
    const button = getByText( 'Click me (method ref)' );
    expect( getByText( /You clicked on the button/ ) ).toBeInTheDocument();
    expect( getByText( /You clicked on the button/ ).textContent ).toMatch( /0/ );
    await fireEvent.click( button );
    expect( getByText( /You clicked on the button/ ).textContent ).toMatch( /1/ );
  } );
} );

describe( 'EventHandler custom event', () => {
  test( 'vue/test-utils', async() => {
    const wrapper = mount( EventHandler );

    expect( wrapper.emitted().customEvent ).toBeFalsy();
    await wrapper.find( 'button.btn-danger' ).trigger( 'click' );
    expect( wrapper.emitted().customEvent.length ).toBe( 1 );
  } );
  test( 'testing-library/vue', async() => {
    const { getByText, emitted } = render( EventHandler );
    const button = getByText( 'Fire custom event' );
    expect(
      getByText( /You clicked on the custom event button/ ),
    ).toBeInTheDocument();
    expect(
      getByText( /You clicked on the custom event button/ ).textContent,
    ).toMatch( /0/ );
    expect( emitted().customEvent ).toBeFalsy();

    await fireEvent.click( button );
    expect(
      getByText( /You clicked on the custom event button/ ).textContent,
    ).toMatch( /1/ );
    expect( emitted().customEvent.length ).toBe( 1 );
  } );
} );

xdescribe( 'Spying on events', () => {
  test( 'Spying with vue/test-utils', async() => {
    const spy = jest.fn();
    const wrapper = mount( EventHandler, { listeners: { customEvent: spy } } );
    expect( spy ).not.toHaveBeenCalled();
    // wrapper.vm.$emit( 'customEvent' );
    await wrapper.find( 'button.btn-danger' ).trigger( 'click' );
    expect( spy ).toHaveBeenCalled();
  } );
} );
