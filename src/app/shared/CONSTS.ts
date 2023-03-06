import { InjectionToken } from "@angular/core";

export const SOME_STR = new InjectionToken<string>('This is string provided by useValue');
export const SOME_TRUE = new InjectionToken<boolean>('SOME_TRUE');
export const USE_FACTORY = new InjectionToken<string>('USE_FACTORY');
