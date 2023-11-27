import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PtapRoutingModule } from './ptap-routing.module';
import { PtapComponent } from './ptap.component';
import { HomeComponent } from './home/home.component';
import { PtapFormatComponent } from './ptap-format/ptap-format.component';
import { WaterControlComponent } from './water-control/water-control.component';
import { ActivityRegisterComponent } from './activity-register/activity-register.component';
import { JardFormatComponent } from './jard-format/jard-format.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonComponentModule } from '../common-component/common-component.module';
import { HeaderComponent } from "../common-component/header/header.component";
import { FooterComponent } from "../common-component/footer/footer.component";
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
    declarations: [
        PtapComponent,
        HomeComponent,
        JardFormatComponent,
        PtapFormatComponent,
        WaterControlComponent,
        ActivityRegisterComponent,
    ],
    imports: [
        CommonModule,
        PtapRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonComponentModule,
        HeaderComponent,
        FooterComponent,
        ToastrModule.forRoot(),
    ],
    providers: [{ provide: ToastrService, useClass: ToastrService }],
})
export class PtapModule {}
