import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  resumeUrl: string = 'assets/Abhay_Borase_Resume.pdf';

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'Resume.pdf';
    link.click();
  }
}
