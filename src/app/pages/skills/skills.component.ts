import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string; // FontAwesome or image/icon class
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
      { name: 'C', icon: 'fas fa-code' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'core and Advanced Java', icon: 'fab fa-java' },
    { name: 'Python', icon: 'fab fa-python' },
     { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
     { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'Angular', icon: 'fab fa-angular' },
   
    { name: 'Node.js', icon: 'fab fa-node-js' },
   
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' },
    
  
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'REST APIs', icon: 'fas fa-plug' },
    { name: 'Postman', icon: 'fas fa-envelope-open-text' },
    { name: 'OOP', icon: 'fas fa-cubes' },
    { name: 'Data Structures', icon: 'fas fa-sitemap' },
    { name: 'Algorithms', icon: 'fas fa-project-diagram' },
    { name: 'Problem Solving', icon: 'fas fa-lightbulb' },
    { name: 'Competitive Programming', icon: 'fas fa-keyboard' },
    { name: 'Responsive Web Design', icon: 'fas fa-laptop-code' },
  ];
}
