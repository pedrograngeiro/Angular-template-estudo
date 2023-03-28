import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent {
  public exibirConteudo = false;

  public toggleConteudo() {
    this.exibirConteudo = !this.exibirConteudo;
  }
}
