import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {
  private baseApiUrl: string = "http://localhost:3000/Data";
  constructor(private http: HttpClient) { }

  public getSummary(): Observable<any[]> {
    return this.http.get<any[]>(this.baseApiUrl);
  }
  
  public updateSummary(id: number, data: any) {
    return this.http.put(`${this.baseApiUrl}/${id}`, data);
  }
  
}
