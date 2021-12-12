import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import Quill from 'quill';
import ImageUploader from 'quill-image-uploader';
import {ActivatedRoute, Router} from '@angular/router';
import {PostDetail} from '../../models/post-detail.model';
import {PostEditService} from '../../services/post-edit.service';
import {Subscription} from 'rxjs';

Quill.register('modules/imageUploader', ImageUploader);

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit, OnDestroy {

  editPostForm: FormGroup;
  editorContent: string;
  editMode = false;
  currentPost: PostDetail;

  alphabeticAndCommaOnly: RegExp = /[A-Za-z0-9,]$/;
  onlyFourTagsAllowed: Subscription;

  modules: {};

  constructor(private postEditService: PostEditService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.currentPost = this.router.getCurrentNavigation().extras.state as PostDetail;
      this.editMode = true;
    }
  }

  ngOnInit(): void {
    this.initForm();
    this.initQuillEditor();
    this.initFormValueBasedOnCurrentMode();
    this.createTagsInputRestriction();
  }

  private initForm(): void {
    this.editPostForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      tags: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    });
  }

  private initFormValueBasedOnCurrentMode(): void {
    if (this.editMode) {
      this.editPostForm.patchValue({
        title: this.currentPost.title,
        tags: this.currentPost.tags
      });
      this.editorContent = this.currentPost.content;
    }
    else {
      this.editorContent = '';
    }
  }

  private initQuillEditor(): void {
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image']                         // link and image
      ],
      imageUploader: {
        upload: file => {
          return this.postEditService.uploadImage(file);
        }
      }
    };
  }

  private createTagsInputRestriction(): void {
    this.onlyFourTagsAllowed = this.editPostForm.controls['tags'].valueChanges.subscribe((value: string) => {
      if (value.includes(',') && value.split(',').length - 1 === 3) {
        this.alphabeticAndCommaOnly = /[A-Za-z0-9\s]$/;
      } else {
        this.alphabeticAndCommaOnly = /[A-Za-z0-9\s,]$/;
      }
    });
  }

  onSubmit(): void {
    if (this.editMode) {
      this.postEditService.updatePost(this.editPostForm, this.currentPost.id);
    } else {
      this.postEditService.createPost(this.editPostForm);
    }
  }

  onCancelEdit(): void {
    this.router.navigate(['/post/', this.currentPost.id]);
  }

  ngOnDestroy(): void {
    this.onlyFourTagsAllowed.unsubscribe();
  }

}
