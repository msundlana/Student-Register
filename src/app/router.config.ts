import {UIRouter, Category} from '@uirouter/angular';

export function routerConfig(router: UIRouter) {
  // const transitionService = router.transitionService;

  router.trace.enable(Category.TRANSITION);
}
