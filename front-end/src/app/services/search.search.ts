import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, delay } from 'rxjs';

export interface Professional {
    id: number;
    name: string;
    service: string;
    rating: number;
    location: string;
}

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private professionals: Professional[] = [
    { id: 1, name: 'John Smith', service: 'Plumbing', rating: 4.8, location: 'New York' },
    { id: 2, name: 'Sarah Johnson', service: 'Electrical', rating: 4.9, location: 'Los Angeles' },
    { id: 3, name: 'Mike Wilson', service: 'Cleaning', rating: 4.7, location: 'Chicago' },
    { id: 4, name: 'Emily Brown', service: 'Carpentry', rating: 4.6, location: 'Houston' },
    { id: 5, name: 'David Lee', service: 'Painting', rating: 4.8, location: 'Phoenix' },
    { id: 6, name: 'Lisa Martinez', service: 'Plumbing', rating: 4.9, location: 'Philadelphia' },
    { id: 7, name: 'Tom Anderson', service: 'HVAC', rating: 4.7, location: 'San Antonio' },
    { id: 8, name: 'Jennifer Taylor', service: 'Cleaning', rating: 4.8, location: 'San Diego' }
    ];

    private searchResultsSubject = new BehaviorSubject<Professional[]>([]);
    searchResults$ = this.searchResultsSubject.asObservable();

    filterResults(query: string): Professional[] {
    if (!query.trim()) {
        return [];
    }

    const lowerQuery = query.toLowerCase();
    return this.professionals.filter(professional =>
        professional.service.toLowerCase().includes(lowerQuery) ||
        professional.name.toLowerCase().includes(lowerQuery)
    ).slice(0, 5); // Limit to 5 suggestions
    }

    performSearch(query: string): Observable<Professional[]> {
    // Simulate API call with delay
    const results = this.filterResults(query);
    this.searchResultsSubject.next(results);
    return of(results).pipe(delay(500));
    }
}