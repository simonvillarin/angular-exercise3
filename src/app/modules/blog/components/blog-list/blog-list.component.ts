import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  blogs: Blog[] = this.blogService.getBlogs();
  id: number = 0;

  constructor(private blogService: BlogService) {}

  getId = (id: number) => {
    this.id = id;
    // console.log(id);
  };
}
