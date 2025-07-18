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
      link: 'https://github.com/ab-1402/my-portfolio.git'
    },
    {
      title: 'Project Two(Hackathon Project)',
      description: 'Banking Chatbot using react , flask and firebase',
      image: 'assets/banking.png',
      link: 'https://github.com/username/project-two'
    },
    {
      title: 'Project Three',
      description: 'Expense Tracker Web App',
      image: 'assets/expense_tracker.png',
      link: 'https://github.com/ab-1402/Personalized-finance-manager.git'
    },
    {
      title:'Project Four',
      description:'Supplier Compliance Dashboard with ai insights',
      image: 'project4.png',
      link:'https://github.com/ab-1402/Supplier-Compliance-Insights-Dashboard-with-ai'
    }
  ];
  openLink(url: string): void {
  window.open(url, '_blank');
}

}
