import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal(" Luffy");
  public lastName = signal("Monkey D.");

  public fullName = computed( () => {
    return this.lastName() + this.firstName();
  })

  public array = signal([1]);

  constructor(){
    effect ( () =>  {
      console.log(this.array());
      console.log(this.firstName());
    })
  }

  public updateName(){
    this.firstName.set("João ");
  }

  public updateArray() {
    this.array.update( (oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1];
    })
  }
}
