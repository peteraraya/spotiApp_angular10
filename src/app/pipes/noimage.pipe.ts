import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[] ): string {
    // validaciones

    // Imagen no existe
    if (!images) {
        return 'assets/img/noimage.png';
    }

    // Si la imagen existe
    if (images.length > 0 ) {
        return images[0].url;
    }else{
      return 'assets/img/noimage.png';
    }

    return null;
  }

}


// images sera el arreglo de las imagenes

// assets --> simulamos que estamos en el index por esto llamamos ese path