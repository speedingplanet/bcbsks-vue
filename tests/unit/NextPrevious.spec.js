import { mount } from '@vue/test-utils';
import NextPrevious from '../../src/components/NextPrevious';

describe( 'NextPrevious', () => {
  test( 'vue/test-utils', async() => {
    const propsTest = {
      nextLabel: 'next label text',
      previousLabel: 'previous label text',
    };
    const wrapper = mount( NextPrevious, {
      props: propsTest,
    } );
    const nextButton = wrapper.find( '.btn-success' );
    const previousButton = wrapper.find( '.btn-danger' );

    expect( nextButton.text() ).toBe( propsTest.nextLabel );
    expect( previousButton.text() ).toBe( propsTest.previousLabel );
  } );
} );

describe( 'NextPrevious custom events', () => {
  test( 'nextRecord', () => {
    const wrapper = mount( NextPrevious );
    const nextButton = wrapper.find( 'button.btn-success' );
    expect( wrapper.emitted() ).not.toHaveProperty( 'nextRecord' );
    nextButton.trigger( 'click' );
    expect( wrapper.emitted() ).toHaveProperty( 'nextRecord' );
  } );
} );
