import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkbenchesComponent } from './workbenches/workbenches.component';
import { DatasourcesComponent } from './datasources/datasources.component';
import { MainAllComponent } from './main-all/main-all.component';
import { MainApprovedComponent } from './main-approved/main-approved.component';
import { MainPendingComponent } from './main-pending/main-pending.component';
import { MainRejectedComponent } from './main-rejected/main-rejected.component';
import { RequestWorkbenchComponent } from './request-workbench/request-workbench.component';
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


const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch: 'full'},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:'', 
        component: MainComponent,
        children: [
          {path:'', component: MainAllComponent},
          {path:'approved', component: MainApprovedComponent},
          {path:'pending', component: MainPendingComponent},
          {path:'rejected', component: MainRejectedComponent}
        ]
      },
      {path:'profile', component: ProfileComponent},
      {
        path:'workbenches',
        component: WorkbenchesComponent,
        children: [
          {path:'', component: WorkbenchAllComponent},
          {path:'workbenchapproved', component: WorkbenchApprovedComponent},
          {path:'workbenchrunning', component: WorkbenchRunningComponent},
          {path:'workbenchstopped', component: WorkbenchStoppedComponent},
          {path:'workbenchdeleted', component: WorkbenchDeletedComponent}
        ]
      },
      {
        path:'datasources',
        component: DatasourcesComponent,
        children: [
          {path:'', component:DatasourcesAllComponent},
          {path:'datasourcespending', component: DatasourcesPendingComponent},
          {path:'datasourcesapproved', component: DatasourcesApprovedComponent},
          {path:'datasourcesrejected', component: DatasourcesRejectedComponent}
        ]
      },
      {path:'requestworkbench', component: RequestWorkbenchComponent},
      {path:'datarequest', component: DataRequestComponent}
    ]
  },
  {path: 'login',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,LoginComponent]
