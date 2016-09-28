import { AppModule } from "./app.module";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

require('font-awesome/css/font-awesome.css');
if (process.env["ENV"] === 'production') {
	enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);