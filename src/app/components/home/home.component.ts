import { Component } from '@angular/core';
// Serrvice
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  nuevasCanciones: any[] = [];

  loading: boolean;

  error = false;

  mensajeError = '';

  numeroError: number ;

  constructor(
    // Llamando al servicio
    private spotify: SpotifyService
  ) {
    // cuando se inicialize el componente
    this.loading = true;
    this.error = false;

    // Llamamos la funciones del los servicios
    this.spotify.getNewRelease()
      .subscribe( (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
        // cuando ya tenemos la data
      }, ({error}) =>{
          this.loading = false;
          console.log(error);
          this.numeroError  = error.error.status;
          this.mensajeError = error.error.message;
          this.error = true;
      });

  }


}
