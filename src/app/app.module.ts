import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

import { AppComponent } from './app.component'
import { ListItemComponent } from './components/list-item/list-item.component'
import { ToDoListComponent } from './components/to-do-list/to-do-list.component'
import { HeaderComponent } from './components/header/header.component'
import { FormComponent } from './components/form/form.component'
import { TaskListCardComponent } from './components/task-list-card/task-list-card.component'
import 'hammerjs'

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ListItemComponent,
    HeaderComponent,
    FormComponent,
    TaskListCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
