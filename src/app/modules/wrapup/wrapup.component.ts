import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import API from '../../services';

@Component({
  selector: 'app-wrapup',
  standalone: true,
  imports: [],
  templateUrl: './wrapup.component.html',
  styleUrl: './wrapup.component.css',
})
export class WrapupComponent {
  posts: any;
  loadingPosts = false;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  loadPosts(id: string) {
    this.loadingPosts = true;

    this.httpClient.get(`${API.WRAPUP.POSTS}/${id}`).subscribe((response) => {
      console.log(response);
      this.posts = response;
      this.loadingPosts = false;
    });
  }

  oninit() {
    const postId = this.route.snapshot.paramMap.get('id');
    console.log(postId);
    if (postId) {
      this.loadPosts(postId);
    }
  }
}
