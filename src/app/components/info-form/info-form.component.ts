import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { JobPositions } from '../../enums/job-positions.enum';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
  public infoForm: FormGroup;
  public jobPositionValues = [];
  public isSubmitClicked: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.generateInfoForm();
    this.buildDropdownValues();
  }

  generateInfoForm() {
    this.infoForm = new FormGroup({
      name: new FormControl('', Validators.required),
      jobPosition: new FormControl('', Validators.required),
    });
  }

  onSumbit() {
    const infoFormValue = this.infoForm.value;
    this.isSubmitClicked = true;
    console.log(infoFormValue);
  }

  buildDropdownValues() {
    // console.log( Object.keys(JobPositions));
    const jobPositionsEnumValues = Object.keys(JobPositions).filter(key => !isNaN(Number(JobPositions[key])));
    let data;
    // console.log(jobPositionsEnumValues);
    jobPositionsEnumValues.forEach((value, index, array) => {
      data = {
        'text': value, 'value': index + 1
      }
      this.jobPositionValues.push(data);
    });
  }

}