import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  poderes = ['volar','Super Fuerza', 'Invisibilidad','Rayos laser']
  heroe = new Heroe(0,'','');
  enviado = false;

  ngOnInit(): void {
    
  }

  onSumit(){
    this.enviado = true;
  }
  
  nuevoHeroe(){
    this.heroe = new Heroe(0,'','');
  }

}
