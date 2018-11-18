import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css'],
})
export class NewCardComponent implements OnInit {


  tags = new FormControl('');

  public addNewTaskForm = new FormGroup({
    title: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(24)])),
    description: new FormControl(),
    deadline: new FormControl(),
    tags: this.tags,
  });

  constructor(private taskService: TaskService) { }


  onSubmitButtonClickEvent() {

    const task = this.addNewTaskForm.value as Task;
    // (task as any).someRandomUnrelatedShit = '';

    this.taskService.addTask(task).subscribe();
  }

  ngOnInit() {
    this.tags.valueChanges.pipe(distinctUntilChanged()).subscribe((value: string) => {

      // replace any double spaces with single space
      this.tags.setValue(value.replace(/\s\s+/g, ' '));

      // the value should only start with '#'
      if (!value.startsWith('#')) {
        this.tags.setValue('');
      }

      if (value.includes(' ')) {
        const hasthags = value.split(' ');

        if (hasthags.every(hastag => !!hastag)) {
          this.tags.setValue(
            hasthags.filter((hasthag: string) => hasthag.startsWith('#')).join(' ')
          );
        }
      }
    });
  }

}
