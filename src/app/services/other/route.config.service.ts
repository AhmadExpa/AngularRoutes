import { InjectionToken } from '@angular/core';
import { RouteConfig } from './route.config.interface';

export const RouteConfigToken = new InjectionToken<RouteConfig>('routeConfig');
