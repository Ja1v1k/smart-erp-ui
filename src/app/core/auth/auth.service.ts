import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   isAuthenticated(): boolean {
    // Check authentication state
    return true;
  }
}
