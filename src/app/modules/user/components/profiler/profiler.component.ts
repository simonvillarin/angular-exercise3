import { Component } from '@angular/core';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.scss'],
})
export class ProfilerComponent {
  email: string = '';
  name: string = '';
  bio: string = '';
  isActive: boolean = false;

  handleSubmit = (e: Event) => {
    e.preventDefault();

    if (
      this.email != '' &&
      this.name != '' &&
      this.bio != '' &&
      this.isActive
    ) {
      let data = {
        email: this.email,
        name: this.name,
        bio: this.bio,
        isActive: this.isActive,
      };

      console.log(data);
    }
  };
}
