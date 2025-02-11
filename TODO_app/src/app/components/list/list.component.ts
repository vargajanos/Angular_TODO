import { CommonModule } from '@angular/common'; 
import { Component, EventEmitter, Input, Output } from '@angular/core'; 
import { Task } from '../../interfaces/task';
import { FormsModule } from '@angular/forms';

@Component({ 
    selector: 'app-list', 
    standalone: true, 
    imports: [CommonModule, FormsModule], 
    templateUrl: './list.component.html', 
    styleUrls: ['./list.component.scss'] 
}) 
export class ListComponent {
    @Input() tasks: Task[] = []; 
    @Output() taskIndex = new EventEmitter();
    
    searchTerm: string = '';

    torles(i: number) { 
        this.taskIndex.emit(i); 
    }

    ChangePrio(i: number) { 
        this.tasks[i].prio = !this.tasks[i].prio; 
        this.SaveList(); 
    }

    ChangeDone(i: number) { 
        this.tasks[i].done = !this.tasks[i].done; 
        this.SaveList(); 
    }

    SaveList() { 
        localStorage.setItem('taskok', JSON.stringify(this.tasks)); 
    }


    filteredTasks() {
        if (!this.searchTerm) {
            return this.tasks; 
        }

        return this.tasks.filter(task => 
            task.nev.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
    }
}
