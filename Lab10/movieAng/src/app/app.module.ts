import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { DatabaseService } from "./database.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ListactorsComponent } from "./listactors/listactors.component";
import { AddactorComponent } from "./addactor/addactor.component";
import { DeleteactorComponent } from "./deleteactor/deleteactor.component";
import { UpdateactorComponent } from "./updateactor/updateactor.component";
import { RouterModule, Routes } from "@angular/router";
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { AddactormovieComponent } from './addactormovie/addactormovie.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DeleteactormoviesComponent } from './deleteactormovies/deleteactormovies.component'; //extra task
const appRoutes: Routes = [
  { path: "listactors", component: ListactorsComponent },
  { path: "addactor", component: AddactorComponent },
  { path: "updateactor", component: UpdateactorComponent },
  { path: "deleteactor", component: DeleteactorComponent },
  { path: "addmovie", component: AddmovieComponent },
  { path: "deletemovie", component: DeletemovieComponent },
  { path: "listmovies", component: ListmoviesComponent },
  { path: "addactormovie", component: AddactormovieComponent },
  { path: "deleteactormovies", component: DeleteactormoviesComponent}, //extra task
  { path: "", redirectTo: "/listactors", pathMatch: "full" },
  {path:"**", component:PagenotfoundComponent},  //** means wildcard ,   must be at the bottom
];
@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,

    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmoviesComponent,
    AddactormovieComponent,
    DeleteactormoviesComponent, //extra task
    PagenotfoundComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash:true}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}