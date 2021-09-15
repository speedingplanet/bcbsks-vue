import { mount } from '@vue/test-utils';
import { render, fireEvent } from '@testing-library/vue';
import EventHandler from '../../src/demos/EventHandler';

// fdescribe == describe.only()
// ftest == test.only()
describe( 'EventHandler regular events', () => {
  test( 'vue/test-utils', async() => {
    const wrapper = mount( EventHandler );
    const p = wrapper.find( '.buttonMsg' );

    // Always check your assumptions
    expect( p.text() ).toContain( '0' );
    await wrapper.find( 'button.btn-primary' ).trigger( 'click' );
    expect( p.text() ).toContain( '1' );
  } );

  test( 'testing-library/vue', async() => {
    const { getByText } = render( EventHandler );
    const button = getByText( 'Click me (method ref)' );
    const p = getByText( /You clicked on the button/ );
    expect( p ).toBeInTheDocument();
    expect( p.textContent ).toMatch( /0/ );
    await fireEvent.click( button );
    expect( p.textContent ).toMatch( /1/ );
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

// xdescribe == describe.skip()
// xtest == test.skip()
describe.skip( 'Spying on events', () => {
  test( 'Spying with vue/test-utils', async() => {
    const wrapper = mount( EventHandler );
    // jest.spyOn(wrapper.)
    // expect( spy ).not.toHaveBeenCalled();
    await wrapper.find( 'button.btn-danger' ).trigger( 'click' );
    // expect( spy ).toHaveBeenCalled();
  } );
} );
