import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { DropdownDirective } from './directive-example/dropdown.directive';
import { PrimengComponent } from './primeng/primeng.component';
import { DataTableModule, SharedModule, MenuModule, MenubarModule } from 'primeng/primeng';
import { CarService } from './primeng/car.service';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'directive', component: DirectiveExampleComponent },
  { path: 'primeng', component: PrimengComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveExampleComponent,
    DropdownDirective,
    PrimengComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    HttpModule, MenubarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
