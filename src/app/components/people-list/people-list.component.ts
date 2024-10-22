import { Component, OnInit } from '@angular/core';
import { People } from '../../interfaces/people';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit {
  peopleList: People[] = [];
  imagen: string = 'https://starwars-visualguide.com/assets/img/characters/';

  constructor(private peopleService: PeopleService) {}
  
  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe((resp) => {
      this.peopleList = resp.results;
    });
  }

  getImagen(url: string) {
    let id = url.slice(28, -1);
    return this.imagen.concat(id + '.jpg');
  }


}
