import { InjectionToken } from '@angular/core';

export interface EnvironmentModel {
  apiUrl: string;
}

export const APP_CONFIG = new InjectionToken<EnvironmentModel>('APP_CONFIG');
