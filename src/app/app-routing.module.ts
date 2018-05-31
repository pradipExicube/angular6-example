import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    // { path: '', component: AppComponent, },
    { path: 'testPage', component: TestPageComponent, }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { enableTracing: true } // <-- debugging purposes only)
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
