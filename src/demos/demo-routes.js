import HelloWorld from './HelloWorld';
import ComponentData from './ComponentData';
import TestableComponent from './TestableComponent';
import ComponentPropsContainer from './ComponentPropsContainer';
import EventHandler from './EventHandler';
import EventHandlerContainer from './EventHandlerContainer';
import ConditionalRendering from './ConditionalRendering';
import ComputedValues from './ComputedValues';
import CSSClassesAndStyles from './CSSClassesAndStyles';
import VModelDemo from './VModelDemo';
import LoopingDemo from './LoopingDemo';
import AsyncDemo from './AsyncDemo';
import LifecycleDemo from './LifecycleDemo';

const routes = [
  {
    path: 'lifecycle-demo',
    name: 'LifecycleDemo',
    component: LifecycleDemo,
  },
  {
    path: 'async-demo',
    name: 'AsyncDemo',
    component: AsyncDemo,
  },
  {
    path: 'looping-demo',
    name: 'LoopingDemo',
    component: LoopingDemo,
  },
  {
    path: 'v-model-demo',
    name: 'VModelDemo',
    component: VModelDemo,
  },
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
