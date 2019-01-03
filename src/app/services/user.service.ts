import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersModel } from '../Entities/Users';
import { AppSettings } from '../Entities/AppSettings';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<UsersModel[]>(AppSettings.UsersBaseUrl);
  }

  getById(id: number) {
    return this.httpClient.get<UsersModel>(AppSettings.UsersBaseUrl + '/' + id);
  }

  delete(id: number) {
    const deleteUrl = AppSettings.UsersBaseUrl + '/delete/' + id;
    return this.httpClient.post<any>(deleteUrl, {});
  }

  createOrUpdateUser(user) {
    console.log('user service hit');
    console.log(user)
    console.log('api url ' + AppSettings.UsersBaseUrl);
    return this.httpClient.post(AppSettings.UsersBaseUrl, user);
  }
}
