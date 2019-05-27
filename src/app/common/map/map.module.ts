import { MapService } from './map.service';
import { MapComponent } from './map.component';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from 'ngx-pipes';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBVA3lYAsPdBR9njvJz0pPWoPwhqtqYbec'
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ],
  
})
export class MapModule { }