import {LoginComponent} from './login.component'
import {Ng2StateDeclaration} from '@uirouter/angular';

export const loginState: Ng2StateDeclaration = {
  parent: 'app',
  name: 'login',
  url: 'login',
  component: LoginComponent
}

