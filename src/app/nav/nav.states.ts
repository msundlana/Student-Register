import {navComponent} from './nav.component'
import {Ng2StateDeclaration} from '@uirouter/angular';

export const navState: Ng2StateDeclaration = {
  parent: 'app',
  name: 'edu',
  url: 'edu',
  component: navComponent
}


