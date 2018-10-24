import {TimeTableComponent} from './time-table.component'
import {Ng2StateDeclaration} from '@uirouter/angular';

export const timeTableState: Ng2StateDeclaration = {
  parent: 'edu',
  name: 'time-table',
  url: '#time-table',
  component: TimeTableComponent
}

