import { Component } from '@angular/core';
interface Images{
  image:string;
}
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  image1 = "/poert1.png";
  image2 = "/port2.png";
  image3 = "/port3.png";
  image: string = ""; 

  focus(image: string): void {
    this.image = image; 
    console.log(`${image}`);
  }
  closeLayer(): void {
    this.image = ""; 
  }
}
