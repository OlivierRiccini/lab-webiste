import { Theme } from 'src/app/models/theme';

export const environment = {
  production: true,
  defaultTheme: Theme.LIGHT,
  languages: [ { value: 'en', label: 'english' }, { value: 'fr', label: 'francais' } ],
  contactEmail: 'hello@blockbrainers.com',
  emailerApiUrl: 'https://bb-emailer-api.herokuapp.com/email'
};
