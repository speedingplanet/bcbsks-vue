import { shallowMount } from '@vue/test-utils';
import { render } from '@testing-library/vue';
import TestableComponent from '@/demos/TestableComponent.vue';

describe( 'Vue Test Utils / TestableComponent', () => {
  it( 'renders data.dynamicValue when passed', () => {
    const wrapper = shallowMount( TestableComponent );
    expect( wrapper.text() ).toMatch( 'dynamicValue' );
    expect( wrapper.text() ).not.toMatch( 'bar' );
  } );
} );

describe( 'Vue Testing Library / TestableComponent', () => {
  it( 'renders data.dynamicValue when passed', () => {
    const { getByText, queryByText } = render( TestableComponent );
    expect( getByText( /dynamicValue/ ) ).toBeInTheDocument();
    expect( queryByText( 'bar' ) ).toBeNull();
  } );
} );
