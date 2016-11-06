import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './modules/app/index';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
