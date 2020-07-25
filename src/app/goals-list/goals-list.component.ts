import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

interface tableData {
  employee: string;
  goalDesc: string;
  weight: number;
  expectedAmount: number;
  measureUnit: string;
  date: string;
  confirmStatus: boolean;
}
@Component({
  selector: "app-goals-list",
  templateUrl: "./goals-list.component.html",
  styleUrls: ["./goals-list.component.scss"],
})
export class GoalsListComponent implements OnInit {
  tableColumnHeaders: string[] = [
    "کارمند",
    "شرح هدف",
    "وزن",
    "میزان انتظار",
    "واحد اندازه‌گیری",
    "مهلت",
    "تاریخ تایید",
    "عملیات",
  ];
  tableList = new MatTableDataSource<tableData>(tableData);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  searchFilterForm: FormGroup = this.formBuilder.group({
    userName: [, { Validators: Validators.required }],
    managerName: [, { Validators: Validators.required }],
    startDate: [, { Validators: Validators.required }],
    endDate: [, { Validators: Validators.required }],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.tableList.paginator = this.paginator;
  }
}

let tableData: tableData[] = [
  {
    employee: "کارمند ۱",
    goalDesc: "هدف ۱",
    weight: 1,
    expectedAmount: 0,
    measureUnit: "تن",
    date: "",
    confirmStatus: true,
  },
  {
    employee: "کارمند ۲",
    goalDesc: "هدف ۲",
    weight: 1,
    expectedAmount: 13,
    measureUnit: "میلیون",
    date: "",
    confirmStatus: true,
  },
  {
    employee: "کارمند ۳",
    goalDesc: "هدف ۳",
    weight: 1,
    expectedAmount: 0,
    measureUnit: "تن",
    date: "",
    confirmStatus: false,
  },
  {
    employee: "کارمند ۴",
    goalDesc: "هدف ۴",
    weight: 8,
    expectedAmount: 6,
    measureUnit: "تن",
    date: "",
    confirmStatus: true,
  },
  {
    employee: "کارمند ۵",
    goalDesc: "هدف ۵",
    weight: 1,
    expectedAmount: 0,
    measureUnit: "کیلو",
    date: "",
    confirmStatus: false,
  },
  {
    employee: "کارمند ۶",
    goalDesc: "هدف ۶",
    weight: 1,
    expectedAmount: 41,
    measureUnit: "تن",
    date: "",
    confirmStatus: true,
  },
  {
    employee: "کارمند ۷",
    goalDesc: "هدف ۷",
    weight: 1,
    expectedAmount: 9,
    measureUnit: "دستگاه",
    date: "",
    confirmStatus: true,
  },
];
