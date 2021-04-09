import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkbenchesComponent } from './workbenches/workbenches.component';
import { DatasourcesComponent } from './datasources/datasources.component'; 
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MainAllComponent } from './main-all/main-all.component';
import { MainPendingComponent } from './main-pending/main-pending.component';
import { MainApprovedComponent } from './main-approved/main-approved.component';
import { MainRejectedComponent } from './main-rejected/main-rejected.component';
import { RequestWorkbenchComponent } from './request-workbench/request-workbench.component'  
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { WorkbenchAllComponent } from './workbench-all/workbench-all.component';
import { WorkbenchApprovedComponent } from './workbench-approved/workbench-approved.component';
import { WorkbenchRunningComponent } from './workbench-running/workbench-running.component';
import { WorkbenchStoppedComponent } from './workbench-stopped/workbench-stopped.component';
import { WorkbenchDeletedComponent } from './workbench-deleted/workbench-deleted.component';
import { DatasourcesAllComponent } from './datasources-all/datasources-all.component';
import { DatasourcesPendingComponent } from './datasources-pending/datasources-pending.component';
import { DatasourcesApprovedComponent } from './datasources-approved/datasources-approved.component';
import { DatasourcesRejectedComponent } from './datasources-rejected/datasources-rejected.component';
import { DataRequestComponent } from './data-request/data-request.component';
import {MatMenuModule} from '@angular/material/menu';
 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MainComponent,
    ProfileComponent,
    WorkbenchesComponent,
    DatasourcesComponent,
    MainAllComponent,
    MainPendingComponent,
    MainApprovedComponent,
    MainRejectedComponent,
    RequestWorkbenchComponent,
    WorkbenchAllComponent,
    WorkbenchApprovedComponent,
    WorkbenchRunningComponent,
    WorkbenchStoppedComponent,
    WorkbenchDeletedComponent,
    DatasourcesAllComponent,
    DatasourcesPendingComponent,
    DatasourcesApprovedComponent,
    DatasourcesRejectedComponent,
    DataRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
