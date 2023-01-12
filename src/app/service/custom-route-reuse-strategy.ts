import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private routeStore = new Map<string, DetachedRouteHandle>();
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path;
    return (
      (path != null || path !== undefined) && ['random-number-first', 'random-number-second'].includes(path)
    );
  }
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
    if(route.routeConfig?.path && handle){
      this.routeStore.set(route.routeConfig.path, handle);
    }
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = route.routeConfig?.path;
    return (
      (path != null || path !== undefined)  &&
      ['random-number-first', 'random-number-second'].includes(path) &&
      !!this.routeStore.get(path)
    );
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    const path = route.routeConfig?.path;
    if(path && this.routeStore.has(path)){
      return this.routeStore.get(path)!;
    }
    return null;
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
 
}
