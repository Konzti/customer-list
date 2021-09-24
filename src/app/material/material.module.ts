import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
})
export class MaterialModule {}
