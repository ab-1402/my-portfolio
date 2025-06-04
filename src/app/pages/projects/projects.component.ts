import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Project One',
      description: 'Angular based portfolio website with smooth scroll and animations.',
      image: 'assets/project1.png',
      link: 'https://github.com/username/project-one'
    },
    {
      title: 'Project Two',
      description: 'Node.js API for handling user data and authentication.',
      image: 'assets/project2.png',
      link: 'https://github.com/username/project-two'
    },
    {
      title: 'Project Three',
      description: 'Real-time chat app using Socket.io and Angular.',
      image: 'assets/project3.png',
      link: 'https://github.com/username/project-three'
    },
  ];
  openLink(url: string): void {
  window.open(url, '_blank');
}

}
