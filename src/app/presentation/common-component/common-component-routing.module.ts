import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponentComponent } from './common-component.component';

const routes: Routes = [{ path: '', component: CommonComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonComponentRoutingModule { }
