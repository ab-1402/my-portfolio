import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;  // FontAwesome or icon URL
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'Git', icon: 'fab fa-git-alt' },
  ];
}
