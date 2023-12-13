import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GithubLogoIcon } from './github-icon/github-icon.component';
import { GoogleLogoIcon } from './google-icon/google-icon.component';
import { TwitterLogoIcon } from './twitter-icon/twitter-icon.component';



@NgModule({
  imports: [
    CommonModule,
    GithubLogoIcon,
    GoogleLogoIcon,
    TwitterLogoIcon
  ],
  exports: [GithubLogoIcon,GoogleLogoIcon,TwitterLogoIcon]
})
export class IconModule { }
