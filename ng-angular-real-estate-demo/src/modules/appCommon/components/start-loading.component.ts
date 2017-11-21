import { Component } from '@angular/core';


@Component({
  template: `Loading...<img src="/img/spinner.gif" alt="Loading..." />`
})
export class StartLoadingComponent {
  image: string= "/img/spinner.gif"
}
