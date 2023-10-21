import { Component } from '@angular/core';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'bosch-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() {
    // Add the imported icons to the FontAwesome library
    library.add(faCheck, faHeart);

    // Make FontAwesome icons available in the DOM
    dom.watch();
}
}
