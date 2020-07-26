import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";

import { MatPaginator } from "@angular/material/paginator";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { DeleteComponent } from "../dialogs/delete/delete.component";
import { EditComponent } from "../dialogs/edit/edit.component";

interface tableData {
  id: number;
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
  selectDummyValue: string;
  inputDummyValue: string = "Hossein";

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

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.tableList.paginator = this.paginator;
  }

  openDeleteDialog(chosenElement) {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: chosenElement,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tableList.data = this.tableList.data.filter(
          (item) => item !== chosenElement
        );
        this.toastService.error("پاک شد");
      }
    });
  }

  openEditDialog(chosenElement) {
    const dialogRef = this.dialog.open(EditComponent, {
      width: "700px",
      data: { data: chosenElement, type: "edit" },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let index = result.id;
        this.tableList.data[index - 1] = result;
        this.tableList._updateChangeSubscription();
      }
      this.toastService.success("با موفقیت ویرایش شد");
    });
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(EditComponent, {
      width: "700px",
      data: { type: "create" },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tableList.data.push(result);
        this.tableList._updateChangeSubscription();
      }
      this.toastService.success("با موفقیت اضافه شد");
    });
  }
}

// dummy data we need :
let tableData: tableData[] = [
  {
    id: 1,
    employee: "کارمند ۱",
    goalDesc: "هدف ۱",
    weight: 1,
    expectedAmount: 0,
    measureUnit: "تن",
    date: "",
    confirmStatus: true,
  },
  {
    id: 2,
    employee: "کارمند ۲",
    goalDesc: "هدف ۲",
    weight: 1,
    expectedAmount: 13,
    measureUnit: "میلیون",
    date: "",
    confirmStatus: true,
  },
  {
    id: 3,
    employee: "کارمند ۳",
    goalDesc: "هدف ۳",
    weight: 1,
    expectedAmount: 0,
    measureUnit: "تن",
    date: "",
    confirmStatus: false,
  },
  {
    id: 4,
    employee: "کارمند ۴",
    goalDesc: "هدف ۴",
    weight: 8,
    expectedAmount: 6,
    measureUnit: "تن",
    date: "",
    confirmStatus: true,
  },
  {
    id: 5,
    employee: "کارمند ۵",
    goalDesc: "هدف ۵",
    weight: 1,
    expectedAmount: 0,
    measureUnit: "کیلو",
    date: "",
    confirmStatus: false,
  },
  {
    id: 6,
    employee: "کارمند ۶",
    goalDesc: "هدف ۶",
    weight: 1,
    expectedAmount: 41,
    measureUnit: "تن",
    date: "",
    confirmStatus: true,
  },
  {
    id: 7,
    employee: "کارمند ۷",
    goalDesc: "هدف ۷",
    weight: 1,
    expectedAmount: 9,
    measureUnit: "دستگاه",
    date: "",
    confirmStatus: true,
  },
];
