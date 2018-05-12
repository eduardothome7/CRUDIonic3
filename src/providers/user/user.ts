import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  private API_URL = "https://reqres.in/api/";
  
  constructor(public http: HttpClient) {
  }

  createAccount(email: string, password: string){
    return new Promise((resolve, reject) => {
      const data = {
        email: email,
        password: password
      };
      this.http
      .post(`${this.API_URL}register`, data)
      .subscribe((result: any) => {
        resolve(result);
      }, (error: any) => {
        reject(error);
      });
    });
  }

  // login(email: string, password: string){
  //   return new Promise((resolve, reject) => {
  //     const data = {
  //       email: email,
  //       password: password
  //     };
  //     this.http
  //     .post(`${this.API_URL}login`, data)
  //     .subscribe((result: any) => {
  //       resolve(result);
  //     }, (error: any) => {
  //       reject(error);
  //     });
  //   });
  // }
  // // const url = `${this.API_URL}users?per_page=10&page=${page}`;

  // getAll(page :number){
  //   return new Promise((resolve, reject) => {
  //     const url = `${this.API_URL}users?per_page=10&page=${page}`;
  //     this.http
  //     .get(url)
  //     .subscribe((result: any) => {
  //       resolve(result);
  //     }, (error: any) => {
  //       reject(error);
  //     });
  //   });
  // }

  // get(id:number){
  //   return new Promise((resolve, reject) => {
  //     const url = `${this.API_URL}users/${id}`;
  //     this.http
  //     .get(url)
  //     .subscribe((result: any) => {
  //       resolve(result);
  //     }, error => {
  //       reject(error);
  //     });
  //   });
  // }

  // insert(user: any) {
  //   return new Promise((resolve,reject) => {
  //     const url = `${this.API_URL}users`;
      
  //     this.http.post(url, user)
  //     .subscribe((result: any) => {
  //       resolve(result);
  //     }, error => {
  //       reject(error);
  //     });
  //   });
  // }

  // remove(id:number){
  //   return new Promise((resolve, reject) => {
  //     const url = `${this.API_URL}users/${id}`;
  //     this.http
  //     .delete(url)
  //     .subscribe((result: any) => {
  //       resolve(result);
  //     }, error => {
  //       reject(error);
  //     });
  //   });
  // }

  // update(user:any){
  //   return new Promise((resolve, reject) => {
  //     const url = `${this.API_URL}users/${user.id}`;
      
  //     const data = {
  //       "first_name": user.first_name,
  //       "last_name":user.last_name
  //     };
      
  //     this.http
  //     .put(url, data)
  //     .subscribe((result: any) => {
  //       resolve(result);
  //     }, error => {
  //       reject(error);
  //     });
  //   });
  // }

}
