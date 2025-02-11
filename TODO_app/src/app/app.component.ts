import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AddTaskComponent } from "./components/add-task/add-task.component";
import { Task } from './interfaces/task';
import { ThemeService } from './services/theme.service';
import { ListComponent } from "./components/list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AddTaskComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'TODO_app';
  author = 'Én';
  company ="Csoki";
  theme = '';

  constructor(private themeService:ThemeService){}

  ngOnInit(): void {
    let lista = localStorage.getItem('taskok')
    this.tasks = (lista) ? JSON.parse(lista) : [];

    this.themeService.theme$.subscribe(theme=>{
      this.theme = theme;
    });
  }

  tasks: Task[] =[];

  addItemToList(item: Task){
    this.tasks.push(item);
    this.SaveList();
  }

  SaveList(){
    localStorage.setItem('taskok', JSON.stringify(this.tasks));
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  Delete($event:any){
    this.tasks.splice($event,1);
    this.SaveList();

  }

}
