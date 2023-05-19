import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any[] | undefined;

  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((data: any) => {
      this.posts = data as any[];
    });
  }
}
