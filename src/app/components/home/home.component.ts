import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public isMobile = false;

  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(['(min-width: 800px)']).subscribe((res) => {
      this.isMobile = res.matches;
    });
  }

  redirectToLinkedin = (): void => {
    window.open(environment.linkedinLink, '_blank');
  };

  redirectToYoutube = () => {
    window.open(environment.youtubeLink, '_blank');
  };

  redirectToFB = () => {
    window.open(environment.fbLink, '_blank');
  };

  redirectToGithub = () => {
    window.open(environment.githubLink, '_blank');
  };

  redirectToInsta = () => {
    window.open(environment.instaLink, '_blank');
  };

  redirectToProject = () => {
    window.location.href = '#projects';
  };

  redirectToAbout = () => {
    window.location.href = '#about';
  };
}
