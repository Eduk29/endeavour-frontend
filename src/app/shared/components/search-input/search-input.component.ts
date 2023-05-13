import { AfterViewChecked, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { ISystemValue } from '../../model/system-value.model';
import { ISearchFilter } from './model/search-filter.model';
import { ISearchInputParameters } from './model/search-input-parameters.model';

@Component({
  selector: 'edv-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements AfterViewChecked {
  @Input() searchInputParameters!: ISearchInputParameters;
  @Output() searchEventEmitter = new EventEmitter<ISearchFilter>();

  public searchInputForm!: FormGroup;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.createForm(new FormBuilder());
  }

  public ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  public changeSelection(event: any): void {
    if (event.value === 'all') {
      this.searchInputForm.controls['searchParameter'].setValue('');
    }
  }

  public searchEvent(): void {
    this.searchEventEmitter.emit(this.searchInputForm.value);
  }

  private createForm(formBuilder: FormBuilder): void {
    this.searchInputForm = formBuilder.group({
      searchType: new FormControl<string>('all'),
      searchParameter: new FormControl<string>(''),
    });
  }

  public get displaySearchInput(): boolean | undefined {
    return this.searchInputParameters.displaySearchType;
  }

  public get displaySearchType(): boolean | undefined {
    return this.searchInputParameters.displaySearchType;
  }

  public get inputPlaceholder(): string {
    const searchType = this.searchInputForm.controls['searchType'].value;
    if (searchType === 'all') {
      return `Search by...`;
    }
    return `Search by ${this.searchInputForm.controls['searchType'].value}`;
  }

  public get inputType(): string {
    return this.searchInputForm.controls['searchType'].value === 'id' ? 'number' : 'text';
  }

  public get searchTypeList(): ISystemValue[] | undefined {
    return this.searchInputParameters.searchTypeList;
  }
}
