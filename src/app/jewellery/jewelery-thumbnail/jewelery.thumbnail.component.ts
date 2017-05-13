import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";
@Component({
  selector: "jewellery-thumbnail",
  templateUrl: "app/jewellery/jewelery-thumbnail/jewelery.thumbnail.template.html",
  styleUrls: ["app/jewellery/jewelery-thumbnail/jewellery.thumbnail.styles.css"]
})

export class JewelleryThumbnailComponent {
  @Input() product: any;

  constructor(private router: Router) {

  }

  routingToJewelleryDetails() {
    this.router.navigate(['/home/', this.product.type, this.product.id])
  }
}
