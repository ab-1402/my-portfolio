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
      image: 'assets/portfolio.png',
      link: 'https://github.com/username/project-one'
    },
    {
      title: 'Project Two',
      description: 'Banking Chatbot using react , flask and firebase',
      image: 'assets/banking.png',
      link: 'https://github.com/username/project-two'
    },
    {
      title: 'Project Three',
      description: 'job recrutment platform using agnular',
      image: 'assets/project3.png',
      link: 'https://github.com/username/project-three'
    },
  ];
  openLink(url: string): void {
  window.open(url, '_blank');
}

}
