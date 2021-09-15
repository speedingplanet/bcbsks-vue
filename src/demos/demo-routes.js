import HelloWorld from './HelloWorld';
import ComponentData from './ComponentData';
import TestableComponent from './TestableComponent';
import ComponentPropsContainer from './ComponentPropsContainer';
import EventHandler from './EventHandler';
import EventHandlerContainer from './EventHandlerContainer';

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
  {
    path: 'component-props',
    name: 'ComponentProps',
    component: ComponentPropsContainer,
  },
  {
    path: 'event-handler',
    name: 'EventHandler',
    component: EventHandler,
  },
  {
    path: 'event-handler-container',
    name: 'CustomEvent',
    component: EventHandlerContainer,
  },
];

export default routes;
