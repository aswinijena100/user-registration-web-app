
import { NgModule } from '@angular/core';
import { MyDefaultSorterComponent } from "./myDefaultSorterComponent";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@NgModule({
declarations: [
    MyDefaultSorterComponent, 
],
    imports: [CommonModule],
        exports: [MyDefaultSorterComponent, CommonModule]
})
export class CommonComponentsModule {

}