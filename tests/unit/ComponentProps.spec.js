import { shallowMount } from '@vue/test-utils';
import { render } from '@testing-library/vue';
import ComponentProps from '../../src/demos/ComponentProps';

describe( 'ComponentProps', () => {
  let passedProps;

  beforeEach( () => {
    passedProps = {
      propOne: 'value one',
      propTwo: 'value two',
      propThree: 3,
    };
  } );

  test( 'vue/test-utils', () => {
    const wrapper = shallowMount( ComponentProps, {
      propsData: passedProps,
    } );
    let renderedProps = wrapper.props();

    expect( renderedProps.propOne ).toEqual( passedProps.propOne );
    expect( wrapper.text() ).toContain( passedProps.propTwo );
  } );

  test( 'testing-library/vue', () => {
    const { getByText } = render( ComponentProps, { props: passedProps } );
    expect(
      getByText( passedProps.propTwo, { exact: false } ),
    ).toBeInTheDocument();
  } );
} );
