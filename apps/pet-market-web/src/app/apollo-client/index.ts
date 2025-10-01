import { inject } from '@angular/core';
import { InMemoryCache } from '@apollo/client/cache';
import { HttpLink } from 'apollo-angular/http';
import { APP_CONFIG } from '../../../environments';

export function getApolloClient() {
  const httpLink = inject(HttpLink);
  const appConfig = inject(APP_CONFIG);
  return {
    link: httpLink.create({ uri: `${appConfig.apiUrl}/graphql` }),
    cache: new InMemoryCache(),
  };
}
