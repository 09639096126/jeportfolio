import { Component } from '@angular/core';
import { Tools } from 'src/app/models/tools';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  firstPoject: Tools[] = [
    {
      name: 'Figma',
    }
   
  ];

  secoundProject: Tools[] = [
    {
      name: 'Figma',
    }
  ];

  thirdProject: Tools[] = [
    {
      name: 'Figma',
    }
    //,
    // {
    //   name: 'SCSS',
    // },
    // {
    //   name: 'TypeScript',
    // },
    // {
    //   name: 'Angular',
    // },
    // {
    //   name: 'Aungular Material',
    // },
  ];

  fourthProject: Tools[] = [
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
  ];

  projectOne = () => {
    window.open(environment.projectOne, '_blank');
  };

  projectTwo = () => {
    window.open(environment.projectTwo, '_blank');
  };

  projectThree = () => {
    window.open(environment.projectThree, '_blank');
  };
  projectFour = () => {
    window.open(environment.projectFour, '_blank');
  };

  
}
