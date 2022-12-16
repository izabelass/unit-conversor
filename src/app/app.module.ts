import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorComponent } from './conversor/conversor.component';
import { UnitSelectionComponent } from './unit-selection/unit-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValueInputComponent } from './value-input/value-input.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [
        AppComponent,
        ConversorComponent,
        UnitSelectionComponent,
        ValueInputComponent,
        HeaderComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
    ]
})
export class AppModule { }