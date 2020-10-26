import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddVisitorDialogComponent } from '../add-visitor-dialog/add-visitor-dialog.component';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss']
})
export class VisitorListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'id_no', 'company', 'host', 'purpose', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(Items);
  selection = new MatTableDataSource<PeriodicElement>([]);
  totalVisitor = this.dataSource.data.length;

  name: string;
  position: number;
  weight: number;
  symbol: string;


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  getRecord(name) {
    alert(name);
  }

  addRecord() {
    alert('name');
  }
  deleteEmp(index) {
    this.dataSource.data.splice(index, 1);
    this.dataSource = new MatTableDataSource<PeriodicElement>(Items);
    this.dataSource.paginator = this.paginator;
    this.totalVisitor = this.dataSource.data.length;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddVisitorDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const data = this.dataSource.data;
        data.unshift(result);
        this.dataSource.data = data;
        this.totalVisitor = this.dataSource.data.length;

      }
    });
  }
}

export interface PeriodicElement {
  name: string;
  id_no: string;
  company: string;
  host: string;
  purpose: string;
}

export let Items: PeriodicElement[] = [
  { name: "Desiree Jarvis", id_no: "68373495399", company: "Dui Augue Eu LLC", host: "Department 1", purpose: "Meeting" },
  { name: "Madison Cross", id_no: "52460253499", company: "Suspendisse Associates", host: "Department 1", purpose: "Meeting" },
  { name: "Raven Mclean", id_no: "82387633099", company: "Sem Pellentesque Ut Institute", host: "Department 1", purpose: "Meeting" },
  { name: "Quynn Haynes", id_no: "11642837099", company: "Orci Phasellus Dapibus LLP", host: "Department 2", purpose: "Meeting" },
  { name: "Rigel Logan", id_no: "42614133899", company: "Quis Arcu Foundation", host: "Department 2", purpose: "Meeting" },
  { name: "Abraham Tillman", id_no: "32747355599", company: "Magna Nam Ligula Company", host: "Department 2", purpose: "Meeting" },
  { name: "Declan Saunders", id_no: "58923728199", company: "Curae; Phasellus Ltd", host: "Department 3", purpose: "Visit" },
  { name: "Kaden Joyner", id_no: "80766419199", company: "Pharetra Ut Ltd", host: "Department 3", purpose: "Visit" },
  { name: "Ulysses Barnett", id_no: "61624654399", company: "Arcu Corporation", host: "Department 3", purpose: "Visit" },
  { name: "Andrew Whitfield", id_no: "17780511499", company: "Ipsum Limited", host: "Department 4", purpose: "Visit" },
  { name: "Joel Tucker", id_no: "83419395599", company: "Eleifend Cras Sed LLC", host: "Department 4", purpose: "Visit" },
  { name: "Yoshi Snider", id_no: "81661247499", company: "Ac Orci Ut Corporation", host: "Department 4", purpose: "Visit" },
  { name: "Malachi Little", id_no: "50435231599", company: "Faucibus Morbi Vehicula Incorporated", host: "Department 5", purpose: "Meeting" },
  { name: "Jane Michael", id_no: "30531208199", company: "Eget Associates", host: "Department 5", purpose: "Meeting" },
  { name: "Daquan Vaughan", id_no: "98445827699", company: "Sapien Cursus Limited", host: "Department 5", purpose: "Meeting" },
  { name: "Levi Snyder", id_no: "89669030999", company: "Mattis Ornare Lectus Company", host: "Department 1", purpose: "Meeting" },
  { name: "Quinlan Rivas", id_no: "98587787999", company: "Vestibulum Neque Company", host: "Department 1", purpose: "Meeting" },
  { name: "Grant Mcclure", id_no: "12840899799", company: "Sit Amet Corporation", host: "Department 1", purpose: "Meeting" },
  { name: "Remedios Duran", id_no: "76370147199", company: "Nullam Nisl Institute", host: "Department 2", purpose: "Visit" },
];