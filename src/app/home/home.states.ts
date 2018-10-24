import {HomeComponent} from './home.component'
import {Ng2StateDeclaration} from '@uirouter/angular';

export const homeState: Ng2StateDeclaration = {
  parent: 'edu',
  name: 'home',
  url: '#home',
  component: HomeComponent
}

