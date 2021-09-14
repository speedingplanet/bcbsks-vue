// test()
test( 'testing with test()', () => {
  // expect() -> matcher
  // actual -> expected
  expect( 2 + 2 ).toEqual( 4 );
  expect( 2 + 2 ).not.toEqual( 6 );
} );

it( 'testing with it()', () => {
  expect( 'New Jersey' ).toMatch( /Jersey/ );
} );

describe( 'A set of tests', () => {
  beforeAll( () => {
    console.log( 'Runs ONCE before all tests in this block' );
  } );

  beforeEach( () => {
    console.log( 'Runs before EACH test.' );
  } );

  test( 'Test 1', () => {
    expect( true ).toBeTruthy();
  } );
  test( 'Test 2', () => {
    expect( false ).toBeFalsy();
  } );

  afterEach( () => {
    console.log( 'Runs after EACH test' );
  } );

  afterAll( () => {
    console.log( 'Runs once AFTER all tests in this block' );
  } );

  describe( 'An inner set of tests', () => {} );
} );
