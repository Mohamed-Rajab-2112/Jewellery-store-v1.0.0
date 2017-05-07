import {Component, Input} from "@angular/core";
@Component({
  selector: "jewellery-thumbnail",
  templateUrl: "app/jewellery/jeweleryThumbnailComponent/jewelery.thumbnail.template.html",
  styleUrls :["app/jewellery/jeweleryThumbnailComponent/jewellery.thumbnail.styles.css"]
})

export class JewelleryThumbnailComponent {
  @Input() product: any;
}
