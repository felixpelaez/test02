import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FruitsSectionComponent} from './fruits-section/fruits-section.component';


const routes: Routes = [
  {
    // CodeReview It needs use the component
    //{ path: 'stocks', component: FruitsSectionComponent },

    path: 'fruits-section',
    // pathMatch: 'full',
    component: FruitsSectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
