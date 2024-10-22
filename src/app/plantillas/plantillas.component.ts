import { Component } from '@angular/core'; // Importa el decorador Component de Angular
import { Router } from '@angular/router'; // Importa el servicio Router para la navegación

// Define el componente PlantillasComponent
@Component({
  selector: 'app-plantillas', // El nombre del selector que se utilizará en el HTML para este componente
  standalone: true, // Indica que este componente es independiente y puede ser utilizado sin un módulo
  imports: [], // En este caso, no se importan otros módulos o componentes
  templateUrl: './plantillas.component.html', // Ruta al archivo HTML que define la plantilla del componente
  styleUrls: ['./plantillas.component.css'] // Ruta al archivo CSS que define los estilos del componente
})
export class PlantillasComponent { // Define la clase del componente
  // Aquí puedes agregar propiedades y métodos del componente según sea necesario
  // Constructor que recibe el servicio Router para la navegación
  constructor(private router: Router) {}

  // Método para redirigir a la ruta '/Inicio'
  redirigir(): void {
    this.router.navigate(['/Inicio']); // Utiliza el servicio Router para navegar a la ruta especificada
  }
}