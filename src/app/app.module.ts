import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from "ng2-charts";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateEmpComponent } from './components/employee/create-emp/create-emp.component';
import { BarchartComponent } from './components/charts/barchart/barchart.component';
import { PiechartComponent } from './components/charts/piechart/piechart.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { LinechartComponent } from './components/charts/linechart/linechart.component';
import { RadarchartComponent } from './components/charts/radarchart/radarchart.component';
import { EventsComponent } from './components/events/events.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { EmployeeImportsComponent } from './components/employee/employee-imports/employee-imports.component';
import { AwardsListComponent } from './components/employee/awards-list/awards-list.component';
import { ManualPunchingComponent } from './components/attendance/manual-punching/manual-punching.component';
import { LeaveApplicationComponent } from './components/attendance/leave-application/leave-application.component';
import { AttendanceVerificationComponent } from './components/attendance/attendance-verification/attendance-verification.component';
import { AttendanceImportComponent } from './components/attendance/attendance-import/attendance-import.component';
import { DailyAttendanceComponent } from './components/attendance/daily-attendance/daily-attendance.component';
import { LoginComponent } from './components/login/login.component';
import { GstComponent } from './components/gst/gst.component';
import { IncentiveComponent } from './components/incentive/incentive.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SalaryComponent } from './components/salary/salary.component';
import { StockComponent } from './components/stocks/stock/stock.component';
import { StockSummaryComponent } from './components/stocks/stock-summary/stock-summary.component';
import { TimesheetComponent } from './components/employee/timesheet/timesheet.component';
import { AboutComponent } from './components/about/about.component';
import { LowstockSummaryComponent } from './components/stocks/lowstock-summary/lowstock-summary.component';
import { ItemwisePLComponent } from './components/stocks/itemwise-p-l/itemwise-p-l.component';
import { DailyExpensesComponent } from './components/stocks/daily-expenses/daily-expenses.component';
import { ItemdetailReportComponent } from './components/stocks/itemdetail-report/itemdetail-report.component';
import { PayslipComponent } from './components/payslip/payslip.component';
import { ProvisionalFundComponent } from './components/provisional-fund/provisional-fund.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/registration/admin/admin.component';
import { EmployeeComponent } from './components/registration/employee/employee.component';
import { AuthGuard } from './components/guard/auth.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GuestuserComponent } from './components/guestuser/guestuser.component';
import { GuestuserProfileComponent } from './components/guestuser-profile/guestuser-profile.component';
import { SendmoneyComponent } from './components/sendmoney/sendmoney.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { ListcompanyComponent } from './components/listcompany/listcompany.component';
import { ExcelService } from './service/excelservice';
import { MatTableModule } from '@angular/material/table';
import { EmpDetailsComponent } from './components/employee/emp-details/emp-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JobuserpostComponent } from './components/jobuserpost/jobuserpost.component';
import { EventreqComponent } from './components/eventreq/eventreq.component';
import { ExpensesEmpComponent } from './components/stocks/expenses-emp/expenses-emp.component';
import { ExpensesDetailsComponent } from './components/stocks/expenses-details/expenses-details.component';
import { ProductComponent } from './components/billing/product/product.component';
import { AddproductComponent } from './components/billing/addproduct/addproduct.component';
import { LocationComponent } from './components/billing/location/location.component';
import { AddlocationComponent } from './components/billing/addlocation/addlocation.component';
import { GeneratebillComponent } from './components/billing/generatebill/generatebill.component';
import { BillComponent } from './components/billing/bill/bill.component';
import { AddinvoiceComponent } from './components/addinvoice/addinvoice.component';
import { SchedulerFeatureComponent } from './components/scheduler-feature/scheduler-feature.component';
// import { EmployeeAttendanceComponent } from './components/attendance/employee-attendance/employee-attendance.component';
// import { EmployeeDetailsComponent } from './components/attendance/employee-details/employee-details.component'  
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, 
    CreateEmpComponent,
    BarchartComponent,
    PiechartComponent,
    CalendarComponent,
    LinechartComponent,
    RadarchartComponent,
    EventsComponent,
    EmployeeListComponent,
    EmployeeImportsComponent,
    AwardsListComponent,
    ManualPunchingComponent,
    LeaveApplicationComponent,
    AttendanceVerificationComponent,
    AttendanceImportComponent,
    DailyAttendanceComponent,
    LoginComponent,
    GstComponent,
    IncentiveComponent,
    InvoiceComponent,
    SalaryComponent,
    StockComponent,
    StockSummaryComponent,
    TimesheetComponent,
    AboutComponent,
    LowstockSummaryComponent,
    ItemwisePLComponent,
    DailyExpensesComponent,
    ItemdetailReportComponent,
    PayslipComponent,
    ProvisionalFundComponent,
    NavbarComponent,
    AdminComponent,
    EmployeeComponent,
    HomePageComponent,
    GuestuserComponent,
    GuestuserProfileComponent,
    SendmoneyComponent,
    WorkspaceComponent,
    ListcompanyComponent,
    EmpDetailsComponent,
    JobuserpostComponent,
    EventreqComponent,
    ExpensesEmpComponent,
    ExpensesDetailsComponent,
    ProductComponent,
    AddproductComponent,
    LocationComponent,
    AddlocationComponent,
    GeneratebillComponent,
    BillComponent,
    AddinvoiceComponent,
    SchedulerFeatureComponent
  
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    NgChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatRadioModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [AuthGuard,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
