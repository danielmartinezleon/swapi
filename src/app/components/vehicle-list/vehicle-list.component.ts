import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehiclesListComponent implements OnInit {
  vehicleList: Vehicle[] = [];
  imagen: string = 'https://starwars-visualguide.com/assets/img/vehicles/'


  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getVehicleList().subscribe((resp) => {
      this.vehicleList = resp.results;
    });
  }

  getImagen(url: string) {
    let id = url.slice(31, -1);
    return this.imagen.concat(id + '.jpg');
  }
}