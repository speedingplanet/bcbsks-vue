import { mount } from '@vue/test-utils';
// import { render, fireEvent } from '@testing-library/vue';
import NextPrevious from '../../src/components/NextPrevious';

describe( 'NextPrevious', () => {
  test( 'vue/test-utils', async() => {
    const wrapper = mount( NextPrevious );
    const nextButton = wrapper.find( '.btn-success' );
    const previousButton = wrapper.find( '.btn-danger' );
    const p = wrapper.find( 'p' );

    expect( p.text() ).toBe( '' );
    await nextButton.trigger( 'click' );
    expect( p.text() ).toContain( 'Next' );
    await previousButton.trigger( 'click' );
    expect( p.text() ).toContain( 'Previous' );
  } );
  test( 'testing-library/vue', async() => {} );
} );
