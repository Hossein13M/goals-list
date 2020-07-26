import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { GoalsListComponent } from "./goals-list/goals-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeleteComponent } from "./dialogs/delete/delete.component";
import { EditComponent } from "./dialogs/edit/edit.component";
import { ToastrModule } from "ngx-toastr";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GoalsListComponent,
    DeleteComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-left',
    }),
  ],
  providers: [DeleteComponent, EditComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
