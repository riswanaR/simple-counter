import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  animations: [
    trigger('fade', [
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PopupComponent implements OnInit{
  

  showMessage = true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.showMessage = false;
    }, 3000);
  }
}
