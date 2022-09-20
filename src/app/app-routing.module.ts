import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceImportComponent } from './components/attendance/attendance-import/attendance-import.component';
import { AttendanceVerificationComponent } from './components/attendance/attendance-verification/attendance-verification.component';
import { DailyAttendanceComponent } from './components/attendance/daily-attendance/daily-attendance.component';
import { LeaveApplicationComponent } from './components/attendance/leave-application/leave-application.component';
import { ManualPunchingComponent } from './components/attendance/manual-punching/manual-punching.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AwardsListComponent } from './components/employee/awards-list/awards-list.component';
import { CreateEmpComponent } from './components/employee/create-emp/create-emp.component';
import { EmployeeImportsComponent } from './components/employee/employee-imports/employee-imports.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { GstComponent } from './components/gst/gst.component';
import { IncentiveComponent } from './components/incentive/incentive.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/registration/admin/admin.component';
import { EmployeeComponent } from './components/registration/employee/employee.component';
import { PayslipComponent } from './components/payslip/payslip.component';
import { ProvisionalFundComponent } from './components/provisional-fund/provisional-fund.component';
import { SalaryComponent } from './components/salary/salary.component';
import { DailyExpensesComponent } from './components/stocks/daily-expenses/daily-expenses.component';
import { ItemdetailReportComponent } from './components/stocks/itemdetail-report/itemdetail-report.component';
import { ItemwisePLComponent } from './components/stocks/itemwise-p-l/itemwise-p-l.component';
import { LowstockSummaryComponent } from './components/stocks/lowstock-summary/lowstock-summary.component';
import { StockSummaryComponent } from './components/stocks/stock-summary/stock-summary.component';
import { StockComponent } from './components/stocks/stock/stock.component';
import { AuthGuard } from './components/guard/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GuestuserComponent } from './components/guestuser/guestuser.component';
import { GuestuserProfileComponent } from './components/guestuser-profile/guestuser-profile.component';
import { SendmoneyComponent } from './components/sendmoney/sendmoney.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { ListcompanyComponent } from './components/listcompany/listcompany.component';
import { EmpDetailsComponent } from './components/employee/emp-details/emp-details.component';
import { JobuserpostComponent } from './components/jobuserpost/jobuserpost.component';
import { EventreqComponent } from './components/eventreq/eventreq.component';
import { ExpensesEmpComponent } from './components/stocks/expenses-emp/expenses-emp.component';
import { ExpensesDetailsComponent } from './components/stocks/expenses-details/expenses-details.component';
import { LocationComponent } from './components/billing/location/location.component';
import { AddlocationComponent } from './components/billing/addlocation/addlocation.component';
import { ProductComponent } from './components/billing/product/product.component';
import { AddproductComponent } from './components/billing/addproduct/addproduct.component';
import { BillComponent } from './components/billing/bill/bill.component';
import { GeneratebillComponent } from './components/billing/generatebill/generatebill.component';
import { AddinvoiceComponent } from './components/addinvoice/addinvoice.component';
import { SchedulerFeatureComponent } from './components/scheduler-feature/scheduler-feature.component';
const routes: Routes = [
  
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/registration/admin', pathMatch: 'full'},
  {path:'home',component:HomePageComponent},
  {path:'guestuser',component:GuestuserComponent,data:{user : 'guest' }},
  {path:'guestuserProfile',component:GuestuserProfileComponent},
  {path:'guestuserDetails',component:JobuserpostComponent},
  {path:'workspace',component:WorkspaceComponent},
  {path:'listcompany',component:ListcompanyComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'sendmoney', component:SendmoneyComponent},
  {path:'employee/create', component:CreateEmpComponent, canActivate:[AuthGuard]},
  {path:'employee/list', component: EmployeeListComponent, canActivate:[AuthGuard]},
  {path:'employee/imports', component:EmployeeImportsComponent, canActivate:[AuthGuard]},
  {path:'employee/awards', component:AwardsListComponent, canActivate:[AuthGuard]},
  {path:'employee/details', component:EmpDetailsComponent},
  {path:'attendance/manual', component:ManualPunchingComponent},
  {path:'attendance/daily', component:DailyAttendanceComponent},
  {path:'attendance/import', component:AttendanceImportComponent},
  {path:'attendance/verify', component:AttendanceVerificationComponent},
  {path:'attendance/leave', component:LeaveApplicationComponent, canActivate:[AuthGuard]},
  {path: 'events', component: CalendarComponent},
  {path: 'eventsrequest', component: EventreqComponent},
  {path:'gst', component:GstComponent, canActivate:[AuthGuard]},
  {path:'stocks', component:StockComponent},
  {path:'stockSummary', component:StockSummaryComponent},
  {path:'LowStockSummary', component:LowstockSummaryComponent},
  {path:'itemwiseP&L', component:ItemwisePLComponent},
  {path:'invoice', component:InvoiceComponent, canActivate:[AuthGuard]},
  {path:'addinvoice', component:AddinvoiceComponent, canActivate:[AuthGuard]},
  {path:'incentive', component:IncentiveComponent},
  {path:'salary', component:SalaryComponent, canActivate:[AuthGuard]},
  {path:'dailyExpenses', component:DailyExpensesComponent},
  {path:'expenses', component:ExpensesEmpComponent},
  {path:'expensesDetails', component:ExpensesDetailsComponent},
  {path:'itemDetailReport', component:ItemdetailReportComponent},
  {path:'payslip', component:PayslipComponent},
  {path:'billing/location',component:LocationComponent},
  {path:'billing/addlocation',component:AddlocationComponent},
  {path:'billing/product',component:ProductComponent},
  {path:'billing/addproduct',component:AddproductComponent},
  {path:'billing/bill',component:BillComponent},
  {path:'billing/generateBill',component:GeneratebillComponent},
  {path:'provisionalFund', component:ProvisionalFundComponent},
  {path:'registration', component:NavbarComponent, pathMatch: 'full'},
  {path:'registration/admin', component:AdminComponent, data:{user : 'admin' }},
  {path:'registration/employee', component:EmployeeComponent,data:{user : 'employee' }},
  {path:'scheduler', component:SchedulerFeatureComponent},
  
  {path:'**', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
