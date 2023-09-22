import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modal/Modal';
import { Observable } from 'rxjs';


const USERNAME_KEY = 'USERNAME';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8082/api/addUser', user);
  }

  findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8082/api/admin/findAllUsers');
  }
  findUserById(id: any): Observable<User> {
    return this.http.get<User>(`http://localhost:8082/api/findUserById/${id}`);
  }
  editUser(user: User, idUser: number): Observable<User> {
    return this.http.put<User>(`http://localhost:8082/api/editUser/${idUser}`, user);
  }

  deleteUser(idUser: number): Observable<User> {
    return this.http.delete<User>(`http://localhost:8082/api/deleteUser/${idUser}`);
  }
  findByUsername(username: string): Observable<any> {
    return  this.http.get<any>(`http://localhost:8082/api/findByUsername/${username}`);
  }

  saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY) || "";
  }

  signOut() {
    window.sessionStorage.clear();
  }
}
