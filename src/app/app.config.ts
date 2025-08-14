import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { FORMLY_CONFIG, provideFormlyCore } from '@ngx-formly/core';
import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideTranslateService,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import {
  provideHttpClient,
  withFetch,
  HttpClient,
  withInterceptors,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideStore } from '@ngrx/store';
import { provideAuthFeature } from './store/features/auth/auth.feature';
import { DatePicker } from './components/widgets/forms/date-picker/date-picker';
import { registerTranslateExtension } from './components/widgets/forms/validators-messages';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FilesInput } from './components/widgets/forms/files-input/files-input';
import { SectionWrapper } from './components/widgets/forms/section-wrapper';
import { provideEmployeeFeature } from './store/features/users/users.feature';
import { provideRouter } from '@angular/router';
import { providePostFeature } from './store/features/posts/posts.feature';
import { tokenInterceptor } from './store/services/http-token-interceptor';
import { Select } from './components/widgets/forms/select/select';
import { InputComponent } from './components/widgets/forms/input-component/input-component';
import { notifsFeature } from './store/features/notifications/notifications.feature';
const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (
  http: HttpClient
) => new TranslateHttpLoader(http, './i18n/', '.json');
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideFormlyCore({
      wrappers: [{ name: 'section', component: SectionWrapper }],
      types: [
        {
          name: 'input',
          component: InputComponent,
        },
        {
          name: 'datepicker',
          component: DatePicker,
        },
        {
          name: 'select',
          component: Select,
        },

        {
          name: 'file-upload',
          component: FilesInput,
        },
      ],
    }),
    {
      provide: FORMLY_CONFIG,
      multi: true,
      useFactory: registerTranslateExtension,
      deps: [TranslateService],
    },
    provideHttpClient(withFetch(), withInterceptors([tokenInterceptor])),
    provideTranslateService({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    [
      notifsFeature(),
      provideAuthFeature(),
      provideStore(),
      provideEmployeeFeature(),
      providePostFeature(),
    ],
  ],
};
