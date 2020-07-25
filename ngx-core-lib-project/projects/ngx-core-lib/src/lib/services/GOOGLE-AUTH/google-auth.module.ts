import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAuthService } from './google-auth.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [
        GoogleAuthService
    ]
})

export class GoogleAuthModule { }