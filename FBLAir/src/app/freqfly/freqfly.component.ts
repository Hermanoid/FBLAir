import { Component, OnInit } from '@angular/core';
import { faAdjust, faSpinner, faCommentDollar, faQuestion} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-freqfly',
  templateUrl: './freqfly.component.html',
  styleUrls: ['./freqfly.component.sass']
})
export class FreqflyComponent implements OnInit {
  public faAdjust = faAdjust;
  public faSpinner = faSpinner;
  public faCommentDollar = faCommentDollar;
  public faQuestion = faQuestion;
  constructor() { }

  ngOnInit() {
  }

}
