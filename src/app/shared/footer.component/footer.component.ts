import {Component} from "@angular/core";
@Component({
  selector: "footer-component",
  template: `
    <footer class="text-center col-md-12">
      <p>Developed & designed by Mohamed Ragab</p>
    </footer>
  `,
  styles: [`
    footer {
      background-color: black;
      color: white;
      margin-top: 100px;
    }
  `]
})

export class FooterComponent {
}
