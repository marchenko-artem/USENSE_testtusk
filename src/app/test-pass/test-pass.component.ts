import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pass',
  templateUrl: './test-pass.component.html',
  styleUrls: ['./test-pass.component.css']
})
export class TestPassComponent {

  inputValue = '';
  emptyField = true;
  shortPass = false;
  passStrength = 0;
  easyStrength = false;
  mediumStrength = false;
  strongStrength = false;

  onInput(event: any) {
    this.inputValue = event.target.value;
    this.inputValue === '' ? this.emptyField = true : this.emptyField = false;
    (this.inputValue.length >= 1 && this.inputValue.length <=8) ? this.shortPass = true : this.shortPass = false;
    this.passStrength = (/[a-zA-Z]/.test(this.inputValue) ? 1 : 0) + (/[0123456789]/.test(this.inputValue) ? 1 : 0) + (/[-!"#$%&'()*+,./:;<=>?@[\\\]_`{|}~]/.test(this.inputValue) ? 1 : 0)
    console.log(+/[a-zA-Z]/.test(this.inputValue));

    switch (this.passStrength) {
      case 1:
        this.easyStrength = true;
        this.mediumStrength = false;
        this.strongStrength = false;
        break;
      case 2:
        this.easyStrength = false;
        this.mediumStrength = true;
        this.strongStrength = false;
        break;
      case 3:
        this.easyStrength = false;
        this.strongStrength = true;
        this.mediumStrength = false;
        break;
    }

    this.passStrength = 0;
  }
}
