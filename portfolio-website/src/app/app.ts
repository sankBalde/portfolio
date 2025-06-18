import { Component } from '@angular/core';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    imports: [HomeComponent, AboutComponent, ProjectsComponent, ContactComponent],
    standalone: true,
})
export class AppComponent { }