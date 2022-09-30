import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { HeaderIconsComponent } from './header-icons/header-icons.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FooterComponent } from './footer/footer.component';
import { FooterIconsComponent } from './footer-icons/footer-icons.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { BlogResumeComponent } from './blog-resume/blog-resume.component';
import { ShoppingResumeComponent } from './shopping-resume/shopping-resume.component';
import { MoreLinkFooterComponent } from './more-link-footer/more-link-footer.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { TopRatingComponent } from './top-rating/top-rating.component';
import { LandingBlockComponent } from './landing-block/landing-block.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    HeaderIconsComponent,
    FooterComponent,
    FooterIconsComponent,
    ArticleDetailsComponent,
    BlogResumeComponent,
    ShoppingResumeComponent,
    MoreLinkFooterComponent,
    ContactFooterComponent,
    AdBannerComponent,
    TopRatingComponent,
    LandingBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faUser,
      faMagnifyingGlass,
      faHeart,
      faCartShopping, 
      faTwitter,
      faInstagram,
      faFacebook, 
      faYoutube
    );
  }
 }
