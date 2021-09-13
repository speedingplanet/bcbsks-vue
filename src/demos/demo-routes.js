import HelloWorld from './HelloWorld';
import ComponentData from './ComponentData';
import TestableComponent from './TestableComponent';

const routes = [
  {
    path: 'hello-world',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: 'component-data',
    name: 'ComponentData',
    component: ComponentData,
  },
  {
    path: 'testable-component',
    name: 'TestableComponent',
    component: TestableComponent,
  },
];

export default routes;
