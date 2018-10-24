import {SignUpComponent} from './signup.component'
import {Ng2StateDeclaration} from '@uirouter/angular';

export const signUpState: Ng2StateDeclaration = {
  parent: 'app',
  name: 'signup',
  url: 'signup',
  component: SignUpComponent
}


