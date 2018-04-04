import { wrapComponent } from './util';
import Educt from './educt';
import TestRenderer from 'react-test-renderer';

export default function mount(element) {
  const testRendererInstance = TestRenderer.create(wrapComponent(element));
  return new Educt(testRendererInstance);
}
