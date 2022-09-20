import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/service/emp.service';
import {LoginService} from 'src/app/service/login.service'
import { HttpClient  } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-daily-attendance',
  templateUrl: './daily-attendance.component.html',
  styleUrls: ['./daily-attendance.component.scss']
})
export class DailyAttendanceComponent implements OnInit {
  displayedColumns: string[] = ['image', 'id', 'name', 'checkin', 'break', 'checkout', 'total', 'status', 'shift', 'worktype', 'action'];
  dataSource = new MatTableDataSource<EmployeeData>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private config:EmployeeService,  private loginService: LoginService,  private http:HttpClient) { }
  myresult: any;
  loginDetails: any = {};
  ngOnInit(): void {
    this.http.get("https://api.ipify.org/?format=json").subscribe((res:any)=>{
    console.log(res);
    this.loginDetails.ipAddress =  res.ip;
    });
      if (navigator.geolocation) {  
        navigator.geolocation.getCurrentPosition((position: any) => {  
            if (position) {  
                this.loginDetails.lat = position.coords.latitude;  
                this.loginDetails.lng = position.coords.longitude;
                this.loginDetails.getAddress = (this.loginDetails.lat, this.loginDetails.lng);
                this.loginDetails.time = position.timestamp;
                console.log(position);
                }
        });
  }
    this.config.getData().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.myresult = res.data
      }
    )
    this.loginService.empName.subscribe((res: any) => {
    this.loginDetails.name = res;
    console.log(res);
    })
  }
    goToMap() {
  const url = "http://www.google.com/maps/place/"+this.loginDetails.lat+","+this.loginDetails.lng+"/";
  window.open(url, '_blank');
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  OpenEmployeeData(element:any) {
    const url = "http://www.google.com/maps/place/"+element.latitude+","+element.longitude+"/";
  window.open(url, '_blank');
    // let employeeData = element;
    // let a = [];
    // let b = [];
    // let c = [];
    // a[0] = employeeData.attendanceRatio[0];
    // b[0] = employeeData.attendanceRatio[1];
    // c[0] = employeeData.attendanceRatio[2];
    // employeeData.radialBar1 = a;
    // employeeData.radialBar2 = b;
    // employeeData.radialBar3 = c;
    // const dialogRef = this.dialog.open(EmployeeDetailsComponent, {
    //   data: employeeData,
    //   height: "auto",
    //   width: "70%",
    //   autoFocus: true,
    // });
  }
}
export interface EmployeeData {
  image: any;
  id: string;
  name: string;
  checkin: string;
  break: string;
  checkout: string;
  total: string;
  status: string;
  shift: string;
  worktype: string;
  ip: string;
  latitude: string;
  longitude: string;
  attendanceRatio: any;
  empAttendance: any;
}
const ELEMENT_DATA: EmployeeData[] = [
  {
    image: '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',
    id: 'IM2805UE',
    name: 'Jennifer',
    checkin: '8:30 AM',
    break: '1:30 PM',
    checkout: '4:30 PM',
    total: '8:00',
    status: 'Present',
    shift: 'Day Shift',
    worktype: 'Office',
    ip: ' ',
    latitude: '44.968046',
    longitude: ' -94.420307',
    attendanceRatio: [70, 20, 10],
    empAttendance: [
      {
        date: '12-05-2022',
        checkin: '9:00 AM',
        break: '1:15 PM',
        checkout: '5:30 PM',
        workinghours: '8:30',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '13-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Absent',
        shift: 'Day Shift'
      },
      {
        date: '14-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '15-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '16-05-2022',
        checkin: '8:50 PM',
        break: '1:30 AM',
        checkout: '5:05 AM',
        workinghours: '8:15',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '17-05-2022',
        checkin: '9:00 PM',
        break: '1:00 AM',
        checkout: '4:50 AM',
        workinghours: '7:50',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '18-05-2022',
        checkin: '8:56 PM',
        break: '1:08 AM',
        checkout: '5:24 AM',
        workinghours: '8:26',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '19-05-2022',
        checkin: '9:25 AM',
        break: '1:30 PM',
        checkout: '5:45 PM',
        workinghours: '8:20',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '20-05-2022',
        checkin: '8:30 AM',
        break: '1:30 PM',
        checkout: '4:30 PM',
        workinghours: '8:00',
        status: 'Present',
        shift: 'Day Shift'
      }
    ]
  },
  {
    image: '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',
    id: 'IM5897LK',
    name: 'John',
    checkin: '9:15 PM',
    break: '1:00 AM',
    checkout: '5:00 AM',
    total: '7:45',
    status: 'Present',
    shift: 'Night Shift',
    worktype: 'Remote',
    ip: '27.5.178.109',
    latitude: '38.889510',
    longitude: '-77.032000',
    attendanceRatio: [64, 25, 11],
    empAttendance: [
      {
        date: '12-05-2022',
        checkin: '9:17 PM',
        break: '1:03 AM',
        checkout: '5:26 AM',
        workinghours: '8:09',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '13-05-2022',
        checkin: '8:50 PM',
        break: '1:20 AM',
        checkout: '5:00 AM',
        workinghours: '8:10',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '14-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '15-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '16-05-2022',
        checkin: '9:10 PM',
        break: '1:01 AM',
        checkout: '4:50 AM',
        workinghours: '7:40',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '17-05-2022',
        checkin: '10:00 AM',
        break: '1:50 PM',
        checkout: '6:30 PM',
        workinghours: '8:30',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '18-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Absent',
        shift: 'Day Shift'
      },
      {
        date: '19-05-2022',
        checkin: '8:30 AM',
        break: '1:44 PM',
        checkout: '4:30 PM',
        workinghours: '8:00',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '20-05-2022',
        checkin: '9:15 PM',
        break: '1:00 AM',
        checkout: '5:00 AM',
        workinghours: '7:45',
        status: 'Present',
        shift: 'Night Shift'
      }
    ]
  },
  {
    image: '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',
    id: 'IM6738MN',
    name: 'Maria',
    checkin: '-',
    break: '-',
    checkout: '-',
    total: '-',
    status: 'Absent',
    shift: 'Day Shift',
    worktype: 'Office',
    ip: ' ',
    latitude: '38.032120',
    longitude: '-78.477510',
    attendanceRatio: [63, 23, 14],
    empAttendance: [
      {
        date: '12-05-2022',
        checkin: '8:48 AM',
        break: '1:02 PM',
        checkout: '4:57 PM',
        workinghours: '8:09',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '13-05-2022',
        checkin: '9:00 AM',
        break: '1:20 PM',
        checkout: '5:10 PM',
        workinghours: '8:10',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '14-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '15-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '16-05-2022',
        checkin: '9:28 AM',
        break: '1:43 PM',
        checkout: '5:06 PM',
        workinghours: '7:38',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '17-05-2022',
        checkin: '9:11 AM',
        break: '1:22 PM',
        checkout: '5:05 PM',
        workinghours: '7:54',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '18-05-2022',
        checkin: '8:46 AM',
        break: '1:57 PM',
        checkout: '6:12 PM',
        workinghours: '9:28',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '19-05-2022',
        checkin: '9:17 AM',
        break: '1:33 PM',
        checkout: '6:00 PM',
        workinghours: '8:43',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '20-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Absent',
        shift: 'Day Shift'
      }
    ]
  },
  {
    image: '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',
    id: 'IM9795FE',
    name: 'Charles',
    checkin: '8:44 PM',
    break: '11:50 AM',
    checkout: '4:15 AM',
    total: '7:55',
    status: 'Present',
    shift: 'Night Shift',
    worktype: 'Remote',
    ip: '28.5.247.734',
    latitude: '36.379450',
    longitude: '-75.830290',
    attendanceRatio: [90, 8, 2],
    empAttendance: [
      {
        date: '12-05-2022',
        checkin: '9:12 AM',
        break: '1:47 PM',
        checkout: '5:35 PM',
        workinghours: '8:23',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '13-05-2022',
        checkin: '8:45 AM',
        break: '1:20 PM',
        checkout: '5:20 PM',
        workinghours: '8:35',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '14-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '15-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '16-05-2022',
        checkin: '9:44 PM',
        break: '1:05 AM',
        checkout: '5:25 AM',
        workinghours: '7:41',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '17-05-2022',
        checkin: '8:50 PM',
        break: '1:00 AM',
        checkout: '5:50 AM',
        workinghours: '9:00',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '18-05-2022',
        checkin: '9:50 AM',
        break: '1:46 PM',
        checkout: '6:06 PM',
        workinghours: '8:16',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '19-05-2022',
        checkin: '9:30 AM',
        break: '1:38 PM',
        checkout: '5:40 PM',
        workinghours: '8:10',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '20-05-2022',
        checkin: '8:44 PM',
        break: '11:50 AM',
        checkout: '4:15 AM',
        workinghours: '7:55',
        status: 'Present',
        shift: 'Night Shift'
      }
    ]
  },
  {
    image: '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',
    id: 'IM4807JF',
    name: 'Laura',
    checkin: '10:10 PM',
    break: '1:15 AM',
    checkout: '5:20 AM',
    total: '7:10',
    status: 'Present',
    shift: 'Night Shift',
    worktype: 'Office',
    ip: ' ',
    latitude: '35.929673',
    longitude: '-78.948237',
    attendanceRatio: [44, 15, 10],
    empAttendance: [
      {
        date: '12-05-2022',
        checkin: '10:00 AM',
        break: '1:15 PM',
        checkout: '5:20 PM',
        workinghours: '7:20',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '13-05-2022',
        checkin: '9:40 AM',
        break: '1:20 PM',
        checkout: '6:00 PM',
        workinghours: '8:20',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '14-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '15-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '16-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Absent',
        shift: 'Night Shift'
      },
      {
        date: '17-05-2022',
        checkin: '9:30 PM',
        break: '1:00 AM',
        checkout: '6:20 AM',
        workinghours: '8:50',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '18-05-2022',
        checkin: '8:40 AM',
        break: '1:05 PM',
        checkout: '5:40 PM',
        workinghours: '9:00',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '19-05-2022',
        checkin: '9:20 AM',
        break: '1:46 PM',
        checkout: '6:07 PM',
        workinghours: '8:47',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '20-05-2022',
        checkin: '10:10 PM',
        break: '1:15 AM',
        checkout: '5:20 AM',
        workinghours: '7:10',
        status: 'Present',
        shift: 'Night Shift'
      }
    ]
  },
  {
    image: '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',
    id: 'IM8756AS',
    name: 'Richard',
    checkin: '9:48 AM',
    break: '1:25 PM',
    checkout: '7:00 PM',
    total: '9:52',
    status: 'Present',
    shift: 'Day Shift',
    worktype: 'On-Site',
    ip: ' ',
    latitude: '-31.39819082',
    longitude: '149.76811946',
    attendanceRatio: [50, 40, 10],
    empAttendance: [
      {
        date: '12-05-2022',
        checkin: '9:37 AM',
        break: '1:19 PM',
        checkout: '8:00 PM',
        workinghours: '6:00',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '13-05-2022',
        checkin: '8:23 AM',
        break: '1:28 PM',
        checkout: '5:45 PM',
        workinghours: '9:56',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '14-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '15-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '16-05-2022',
        checkin: '9:43 AM',
        break: '1:57 PM',
        checkout: '6:13 PM',
        workinghours: '9:13',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '17-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Absent',
        shift: 'Day Shift'
      },
      {
        date: '18-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Absent',
        shift: 'Day Shift'
      },
      {
        date: '19-05-2022',
        checkin: '8:56 AM',
        break: '1:43 PM',
        checkout: '5:30 PM',
        workinghours: '8:30',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '20-05-2022',
        checkin: '9:48 AM',
        break: '1:25 PM',
        checkout: '7:00 PM',
        workinghours: '9:52',
        status: 'Present',
        shift: 'Day Shift'
      }
    ]
  },
  {
    image: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAODQ0QEA8NDxINDg0ODg0NDQ8NDRAOIBEWFhUdEx8kHSggJBoxGxMTIjEhJSkrLi4yFx8zODMsNygtLisBCgoKDg0OFxAQFy0eHR8tLS0tLS0tLS0tLSstLTctLS0tLS0tLS0rNy0tLS0tLS0uLS0rLS03Ny0tLSs3Ky0tN//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EAEQQAAIBAgIFCAQLBgcBAAAAAAECAAMRBAUGEiExQRMiUWFxgZHRBzKhsRQjQkNSU2JyksHCJHODotLhFkRkgqOy8OL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgYB/8QALhEAAgIBBAECBQMEAwAAAAAAAAECAxEEEiExBUFREyIyYYFxsdEUkaHBIzNC/9oADAMBAAIRAxEAPwDuMREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREATESKzbPKOFHPa7W2U15zny75xOcYrLeD42ksslZr4nGU6QvUqIg6XYLKFmelmIrXFO1Ffs7ah/wB3lICo5clmJYnezG58TKFnkYriCyV56lLpZOh4nS/CpuZ6n7tNnibTQqacIPVoOfvOo85SolSWvtfXBC9RJ9Fy/wAdf6b/AJh5T0TThD61Bx911PlKTE5Wuu9/8Hz48/c6Jh9L8K+9np/fRreIvJnDY2nVF6dRHHSrBpyKZpuUIKkqRuZTY+Mmh5GS+pZJI6l+qOyROc5ZpXiKVhUPLL9rZUHY3nLjlOeUcUOY1mA2025rjz7poVaquzhPksQtjLoloiJZJBERAEREAREQBERAEREAT5ZgBc8Nu3hDsACTw27eE59pPpCa5alSJFIGzMN9X/498gvvVUcs4ssUFlm7pBpZvp4Y9TVv6POVB3LEkkkk3LMbknrmImDbdK15bM+dkpvIifFWoqKzMQqqLsx3ASn5xnb1iUS6U91txft8oqplY+OixpNFZqZYXCXbJ/HZ7Qo3FzUYfJp7QO07pD1tKKp9SnTX72s5/KQMTQhpa49rJ6OnxWnguVuf3/gl10jxN96H7JpraWDKc4TEKb2puvrKW2HrB6JSIn2emhJYSwdajxlNscRW1+6OlROe4THVaJBR2XqvdD2jdLXkudLiOY1lqAX1RucdI8pSt0soLK5RharxVlC3J7okvMo5UggkFTcMpsQZiJWMwuOj+lu6niSOha39fnLkrAi429BE45LHoxpEaBWjVJNJjZWO+kf6PdNPS615UbH+S3Vf6SOhxPhWBFxbbtFuM+5rlsREQBERAEREATESK0hzL4Lh3fZrHm0weLny3zic1GLb6R8bSWWV7TPO73w1M7PnmB/l8/CVCZdyxJJJLFizHeSeMxPO3Wu2TbM2yblLLERNPNsVyNCo/EDVT752D/3VI4pyaSFdbnNRXbK7pNmXKOaKHmUzz7fKqeQkHHt6zE2q4KEUke301Maa1BegiIkpOJ6UaBcVCNvJI1Ruy4H5zzl79HeSCrRxVWqt0rocMgPyk+cI77DtE4lLCycTltWSiT6puVYMpIKm6sOBk1pLoxWwDXN6lFjZK6j2OOB9hkHGVJH1OM17ov2VY34RRV9gPquo4ON/nNyVPRHE6tWpT4VE1gPtj+3ulsmPfDZNpHjNfp/g3Siuu0IiJEUy4aGZ3tGGqH9yxP8AL5S6zjaOVIIJBUqVYbwRxnT9Hsy+FYdH2aw5tQDg48982NBqN0dj7Rd09m5YZLRETSLIiIgCIiAYM5zpnj+VxJpg82gNTtqH1j7h3S/Y7EClRqVDupoznuE5JUcszMdpZmZj1naZm+RsxFRXqVtTPCS9z5iImOUhK3pjX5tGn9ImoR2bB7zLJKfpY98SB9Gmg8bmWdLHNi+xpeJrUtTFv0yyFiAO09kkshyapja2olwqjXq1NW4pp2cSeA4zVzg9c2kss0KNJnYKis7H1URWcnuEn8HoRjqtiaS0gfr6iofAXMtmBpYjApq4TKiVtzqtfEUhiavWwG7sv3SWyfPKleoaVXBYrDuASWZNej+LZIpTfoQyul2it5X6O7MGxNYMBtNKgGGt1Fj+Ql7oUVpoqIoVUVVVVFgoHAT0kTnWcthiqphcViGcXXkU+LHUW4GQuUpMgcpSfJI4jDpVRkdQ6Ouq6sLhhOPaV5GcDiSm006g16LHeU6D1jynR8Jm+OYgvljqv2cVS5QD7ptf2TX08wQxGXNU1SGoWrKGWzgbnBHZ7p3CTi8HdcnGWDmWT1dTE0G3c9Qew7Pzl/nOKZ1WU7RZkYfinSDK2tXMWY3nIJShL7MxERKRhCT+hmP5LEhCebXGpt4VB6p9475ATNNyjKw2FWDKesbRJKZuE1Jeh3CW2SZ2WJrYHECtSp1BuqIrjvE2Z6RNNZRpiIidAREQCu6b19TBMB846J3XufdOdy7ekKpzMOvS7t4Lb9UpMwtfLNuPYoah5lgRESkQCUnSY/tdTqWl/wBJdpSdJh+11OtaX/QS3o/r/BseF/73+n+ya9G1BXxNdmAOrQsL8NZ7H2bJe9HclXBYXkkILtrO9QrfWc7rjoAsLSg+javq4yon1uHNu1SD7rzqVM7B2S1Y3uaN+7vBWc3pZgmHpO+Ks71HVqWApKKdMDdrFwzEnuA3SbydKow1FqtQu7rrEOipUTb8q1gb79wO3bN2J8lPPoUYUyVjlvbXsJ446m7UavJ1OTdUdl1UV3Ygbkvsv2g9k9onMXh5JpxcotJ4KpkqY+omIZcW+vTVDTXG0kNCq53rzVDL2jd0Sfr4d6mFqU6hRnqUHpuUVkQuUI2A7hfpm5e8wxsD2T65tpEdNTrWHJt/c5vp7gRSo5aLDWpryBPSAifnfxkpNfTxtfE5dR33d6jDqug/IzYlbUPKijP8zLmtfqIiJVMQREQDomhFfXwSj6tnTuvce+WGVD0e1Pi8QvQ6N4rb9Mt89FpZbqos0qnmCZmIiWCQREQClekP/K/xv0SnS6+kKn8Xh26HdfFb/plKmBrVi5mff9bEREqEIlM0pX9rbrSkfZLnKhpav7SvXST2Ey1pH/yGr4Z41H4ZH5Rj2w2IpVl28m1yvShWxHgZ0zQjM0qUmotjHxlUF6papTak60yQAu3fb8+icom/keZthMTSrLc6jWdR8umdjjw9tppThuR6eytS59TuETywuIStTSohDJUUOrDiDNLNazoVArCgrbOVajyoD9B23HbYyqotvBVS5wbYerqHm0y99gDsEt4Xnsp2C9gbbQN15BjA4q2sM0wRXfrXUey02ctquXK/CFxIUc6otDk0B4AG+3wnbqcVlnTjHHEs/h/wSkgNMM3GGw7ItdMPWrKeQd0aoAQRckAHsGzfJ2pUCqWYhQoLMzGwAG8zjGlOcfDcXUq7dQfF0VPCmOPad/fFccsRhufJK5di3xuNNeoQ3IUEpBguoGe1r24XOubdcn5HZDguQw6g7Gfnv1E7h3CSMoaialN46PMeQuVtza6XC/AiIkJSERE+AuXo8/zX8H9cucqHo9p/F4hul0XwW/6pb56HRrFMTRp+hGYiJaJRERAK7pvQ18Ex+rdH7r2PvnO51zH4cVaNSmd1RHTxE5JUQqxU7CpZWHQRsmN5GvElL3KepjymYiImcVRKtpivxlFulHXwb+8tMr2mKfF0W+i7qe8X/KT6V4sRoeLnt1MPvn9irRETZPYlu0H0o+CNyFYnkHa6sfmnP6Tx6N/TOnMqutjZlYdoInBaaFiFXaWIVQOJOwTsGUucNRpUvWWkiJbosvCVLsReSvZDnKNs5Hh731T2BmtN6jSVFCqAoG4ATxGOS3EdWrI7Naxr0qtIXUVEdLg7dotIt5H80uGyp6eaUirrYXDtemDavVU7KhHyQejpPGQWjeWcq4quOZTPNB+W/kJrZXk71qhVgVWm2rUa24jeB1y6UKSoqooAVRZVE+33KEdkeyh5HWRph8Kt/M+/sekREzjzIiIgCImaaFmVRtLMqqOs7ISzwDoehNDUwSk/OO7917D3SwzWwOHFGlTpjciKg7hNmemqjtgl7GpBYikZiIkh0IiIBgznOmmX8lii4FlrjX/iD1h7j3zo0itIct+FYdk2aw51Mng4890raqr4lbS7I7Ybo4OXxMuhUkEEFSwZTvB6JieeM0SJ0np62Eb7Do/tt+clp44yhytKon00K9/Cd1y2zTJtPP4dsZezRzuJllsSDsINiOuYm2e7znosGg+WnEY0EAEYdTVN+ncg8T7J0J0KmxBHbIj0X4LVwtasRtrVdQH7CDzLS5kX6D2iVLvmkVZ2fNggZ9IhY2AJ7BJrkE+iv4Vn0BboHYJDsOd/sVzMMtamOUsLE3cL8k9JkdLoRe+432EGQeYZORdqW0bynEdnT2SKyv1Rha7RScnZDnPaIeJki173Ft4PCYlcxxERAEsGheX8rihUIutAa236w+r+Z7pAIhYgAElioVRvJ6J0/R7LRhcOibNY86oRxc+W6XdFTvs3PpE9EN0s+xLRETdL4iIgCIiAIiIBSdMsksTiaY/fKB/N5ynzsbAEWPHZt4yh5/ou1OoHogmlUcayj5q/6PdMnWaR53wX6lW2lt5j6lfw2DqVfUQkXtrbh4ySw+RHZruB9lNp8TJmlTCKFXYFFgJ9ytGmK7NOnx1aScuWcq090f8AgtcVqYPJV9536lbiD27x3yqzvGPwdPEUnpVVDJUXVZT7x0EdM4xn+VNgsVUosdbVsyNb16Z3Hz6xL9c8rBt0z42+x1PQunq5ZhB00tc9rEkyblZ9HmL5XLqa7zQd6R7L649hlmkE/qZBPtiIicnIiInwHhisHTq+uoJ4MNjjvkTiMiO3k3B+y4sfESdicSrjLtFe3SVW8tclRxGDqUvXUgXsG3jxnhLlVph1KttBFiJqaP6MNUqF6wIp02IUH5236PfI1pnKSUfUx9VoXXJbeUzZ0MyS9sTUH7lSP5vKXUTCqALDhs2TM26alVHajqEFFYRmIiTHYiIgCIiAIiIAmCJmIBAZrlxVdekhbiaS2B/2390rozejchiyEGzK6MCD1zoFpE5tkNDFDnrZrbKi7HHn3ypbps8x7L2n1MY/LZnHuuys1M0oIjO1akqqLszPawnJ9MM5XHYs1EBCU0FJCwsWAJNz0XJ3S16aaCZgH16QGJoqLqlI2qr0kqd57Lyo4TR2uxHKA0BxWorCp+HzkMYfDWZGrT8OTzCWS3eiu/I4u99Xlqer26m38pebShYCgMPTCUyygbTZmuTxJ65sjE1PrH/G0qzmnLJPLRyk85LpEpfwqp9ZU/G0wa7/AE3Pa7Tnec/0cvcupb/xnk+IRd7qO1hKYzE8Se03madMsQFUsTuVVufZPu46/o0uXItVTNaK/ODsAJms2eISFRKlQsbKALXPvnzlmiWIqkGp8Qp3622oexfOXLKcioYUXRbsRY1W2ufLulmrTzly+EUb79PVxF7n/j+5p5Ll1V+fXVUB9WiDc/7z+UsIEzAl+FagsIxrLJTeWZiIkhwIiIAiIgCIiAIiIAiIgCIiAYmtisDTrC1Smj/fVTNqYnxpPs+ptPKK7iND8K97K9O/0HNvA3mhU0FQ+riKg+8inylxiROit9xLENZfHqbKT/gP/U/8P956poKg9bEVD91FHnLjE+LS1r0O35DUP/3+xXcNofhU9YVKn7xzbwFpM4bA0qItTpon3VAmzMSSNcV0ivO6yf1SbM2mYidkYiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAf/9k=',
    id: 'IM1248GB',
    name: 'Nancy',
    checkin: '-',
    break: '-',
    checkout: '-',
    total: '-',
    status: 'Absent',
    shift: 'Night Shift',
    worktype: 'Remote',
    ip: '82.5.492.793',
    latitude: '38.889510',
    longitude: '-77.032000',
    attendanceRatio: [58, 34, 8],
    empAttendance: [
      {
        date: '12-05-2022',
        checkin: '9:00 AM',
        break: '1:56 PM',
        checkout: '6:00 PM',
        workinghours: '9:00',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '13-05-2022',
        checkin: '8:50 AM',
        break: '1:30 PM',
        checkout: '6:10 PM',
        workinghours: '9:20',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '14-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '15-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '16-05-2022',
        checkin: '9:50 AM',
        break: '1:55 PM',
        checkout: '5:50 PM',
        workinghours: '8:00',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '17-05-2022',
        checkin: '9:30 AM',
        break: '1:40 PM',
        checkout: '6:00 PM',
        workinghours: '8:30',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '18-05-2022',
        checkin: '10:08 PM',
        break: '1:06 AM',
        checkout: '6:30 AM',
        workinghours: '8:38',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '19-05-2022',
        checkin: '9:30 PM',
        break: '1:25 AM',
        checkout: '5:30 AM',
        workinghours: '8:00',
        status: 'Present',
        shift: 'Night Shift'
      },
      {
        date: '20-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Absent',
        shift: 'Night Shift'
      }
    ]
  },
  {
    image: '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',
    id: 'IM4873XZ',
    name: 'Michael',
    checkin: '7:15 AM',
    break: '1:00 PM',
    checkout: '5:00 PM',
    total: '9:45',
    status: 'Present',
    shift: 'Day Shift',
    worktype: 'On-Site',
    ip: ' ',
    latitude: '38.8951',
    longitude: '-77.0364',
    attendanceRatio: [73, 15, 12],
    empAttendance: [
      {
        date: '12-05-2022',
        checkin: '8:30 AM',
        break: '1:10 PM',
        checkout: '5:30 PM',
        workinghours: '9:00',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '13-05-2022',
        checkin: '9:15 AM',
        break: '1:43 PM',
        checkout: '6:00 PM',
        workinghours: '8:45',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '14-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '15-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Weekend',
        shift: '-'
      },
      {
        date: '16-05-2022',
        checkin: '8:55 AM',
        break: '1:42 PM',
        checkout: '5:56 PM',
        workinghours: '9:01',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '17-05-2022',
        checkin: '9:45 AM',
        break: '1:30 PM',
        checkout: '6:00 PM',
        workinghours: '8:15',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '18-05-2022',
        checkin: '9:28 AM',
        break: '1:40 PM',
        checkout: '6:28 PM',
        workinghours: '9:00',
        status: 'Present',
        shift: 'Day Shift'
      },
      {
        date: '19-05-2022',
        checkin: '-',
        break: '-',
        checkout: '-',
        workinghours: '-',
        status: 'Absent',
        shift: 'Day Shift'
      },
      {
        date: '20-05-2022',
        checkin: '7:15 AM',
        break: '1:00 PM',
        checkout: '5:00 PM',
        workinghours: '9:45',
        status: 'Present',
        shift: 'Day Shift'
      }
    ]
  }
];
