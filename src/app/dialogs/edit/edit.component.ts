import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

export interface DialogData {
  data: {
    id: number;
    employee: string;
    goalDesc: string;
    weight: number;
    expectedAmount: number;
    measureUnit: string;
    date: string;
    confirmStatus: boolean;
  };
  type: string;
  lentgh: number;
}
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class EditComponent implements OnInit {
  editMode: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<EditComponent>
  ) {}

  goalForm: FormGroup = this.formBuilder.group({
    id: [, { validators: [Validators.required], updateOn: "change" }],
    employee: [, { validators: [Validators.required], updateOn: "change" }],
    goalDesc: [, { validators: [Validators.required], updateOn: "change" }],
    weight: [, { validators: [Validators.required], updateOn: "change" }],
    expectedAmount: [
      ,
      { validators: [Validators.required], updateOn: "change" },
    ],
    measureUnit: [, { validators: [Validators.required], updateOn: "change" }],
    date: [, { validators: [Validators.required], updateOn: "change" }],
    confirmStatus: [
      ,
      { validators: [Validators.required], updateOn: "change" },
    ],
  });

  ngOnInit(): void {
    this.checkComponentType();
    this.editMode && this.fillFormFields();
  }

  checkComponentType() {
    // we use this component for both adding a new goal and editing an existing one
    this.data.type.toLowerCase() == "edit"
      ? (this.editMode = true)
      : (this.editMode = false);
  }

  fillFormFields(): void {
    this.goalForm.get("id").setValue(this.data.data.id);
    this.goalForm.get("employee").setValue(this.data.data.employee);
    this.goalForm.get("goalDesc").setValue(this.data.data.goalDesc);
    this.goalForm.get("weight").setValue(this.data.data.weight);
    this.goalForm.get("expectedAmount").setValue(this.data.data.expectedAmount);
    this.goalForm.get("measureUnit").setValue(this.data.data.measureUnit);
    this.goalForm.get("date").setValue(this.data.data.date);
    this.goalForm.get("confirmStatus").setValue(this.data.data.confirmStatus);
  }

  editGoal() {
    this.dialogRef.close(this.goalForm.value);
  }
}
