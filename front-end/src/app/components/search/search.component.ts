import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService, Professional } from '../../services/search.search';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';

@Component({
    selector: 'app-search-component',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
    searchQuery = '';
    filteredResults: Professional[] = [];
    showSuggestions = false;
    private destroy$ = new Subject<void>();
    private searchSubject = new Subject<string>();

    constructor(private searchService: SearchService) {}

    ngOnInit() {
        this.searchSubject
            .pipe(
            debounceTime(300),
            distinctUntilChanged(),
            takeUntil(this.destroy$)
            )
            .subscribe(query => {
            this.filteredResults = this.searchService.filterResults(query);
            });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onSearchInput() {
        this.searchSubject.next(this.searchQuery);
        this.showSuggestions = true;
    }

    onSearch() {
        if (this.searchQuery.trim()) {
            this.showSuggestions = false;
            this.searchService.performSearch(this.searchQuery).subscribe(results => {
                console.log('Search results:', results);
                // Here you would typically navigate to a results page or display results
            });
        }
    }

    selectSuggestion(professional: Professional) {
        this.searchQuery = professional.service;
        this.showSuggestions = false;
        this.onSearch();
    }

    onBlur() {
        setTimeout(() => {
            this.showSuggestions = false;
        }, 200);
    }
}