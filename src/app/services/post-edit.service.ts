import {FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class PostEditService {

  POST_API = 'http://localhost:9000/api/post';

  constructor(private http: HttpClient, private router: Router) {}

  createPost(editPostForm: FormGroup): void {
    const formDataObject = editPostForm.getRawValue();

    formDataObject.timestamp = (new Date()).toISOString();
    formDataObject.tags = this.createTagsArrayFromTagsString(formDataObject.tags);

    const formDataJson = JSON.stringify(formDataObject);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(this.POST_API + '/add-post', formDataJson, httpOptions)
      .subscribe(response => {
        console.log(response);
        // todo: write this redirect in the component?
        this.router.navigate(['/posts-feed']);
      });
  }

  updatePost(editPostForm: FormGroup, postId: string): void {
    const formDataObject = editPostForm.getRawValue();

    formDataObject.id = postId;
    formDataObject.timestamp = (new Date()).toISOString();
    formDataObject.tags = this.createTagsArrayFromTagsString(formDataObject.tags);

    const formDataJson = JSON.stringify(formDataObject);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.put(this.POST_API + '/update-post', formDataJson, httpOptions)
      .subscribe(response => {
        console.log(response);
        // todo: write this redirect in the component?
        this.router.navigate(['/post/', postId]);
      });
  }

  // todo: extract image api URL into a variable
  uploadImage(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {

      const formData = new FormData();
      formData.append('file', file);

      this.http.post('http://localhost:9000/api/image/upload', formData)
        .subscribe((response: { imageUrl: string }) => {
          const imageUrl = response.imageUrl;
          console.log(imageUrl);
          resolve(imageUrl);
        });
    });
  }

  private createTagsArrayFromTagsString(tagsString: string): string[] {
    return tagsString.replace(/\s/g, '').toLowerCase().split(',');
  }
}
