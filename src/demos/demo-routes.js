import HelloWorld from './HelloWorld';
import ComponentData from './ComponentData';
import TestableComponent from './TestableComponent';
import ComponentPropsContainer from './ComponentPropsContainer';
import EventHandler from './EventHandler';
import EventHandlerContainer from './EventHandlerContainer';
import ConditionalRendering from './ConditionalRendering';
import ComputedValues from './ComputedValues';
import CSSClassesAndStyles from './CSSClassesAndStyles';

const routes = [
  {
    path: 'css-and-vue',
    name: 'CSSClassesAndStyles',
    component: CSSClassesAndStyles,
  },
  {
    path: 'computed-values',
    name: 'ComputedValues',
    component: ComputedValues,
  },
  {
    path: 'conditional-rendering',
    name: 'ConditionalRendering',
    component: ConditionalRendering,
  },
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
