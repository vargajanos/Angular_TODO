import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
 newTask:Task ={
  nev:'',
  text:"",
  prio:false,
  date: "",
  done:false
 }
@Output() addItem = new EventEmitter<Task>;

 addnewItem(){
  console.log(this.newTask);
  this.addItem.emit(this.newTask);
  this.newTask = {
    nev:'',
    text:"",
    prio:false,
    date: "",
    done: false
  }
 }


}
