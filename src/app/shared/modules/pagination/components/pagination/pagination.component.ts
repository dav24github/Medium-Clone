import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps!: number;
  @Input('limit') limitProps!: number;
  @Input('currentPage') currentPageProps!: number;
  @Input('url') urlProps!: string;

  pageCount!: number;
  pages!: number[];

  constructor(private utilsServive: UtilsService) {}

  ngOnInit(): void {
    this.pageCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utilsServive.range(1, this.pageCount);

    console.log('=> ', this.currentPageProps);
  }
}
