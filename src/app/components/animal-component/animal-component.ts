import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-animal-component',
  imports: [FormsModule],
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css',
})
export class AnimalComponent {
animalList: any = [];

constructor(private animalService: AnimalService, private toastr: ToastrService){}

}
