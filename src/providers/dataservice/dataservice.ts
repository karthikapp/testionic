import { Http ,Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class DataserviceProvider {
  	public value : any;

  	constructor(private http: Http) {
  		console.log('Hello DataserviceProvider Provider');
  	}

  	getmessages()
  	{
      let headers = new Headers(
      {
        'Authorization': 'Basic QUVIUk1TOndlbGNvbWU=',
        'Content-Type' : 'application/json'
      });

      let options = new RequestOptions({ headers: headers });

      let data = JSON.stringify({InputParameters:{P_USRNAME:"james",P_PASSWORD : "welcome"}});

      return this.http.post('http://mobiebz.transsyssolutions.com:8009/webservices/rest/XXMBZ_SECURITY_PKG/LOGIN/',
        data,options)
    }


    getnotifications()
    {
      let headers = new Headers(
      {
        'Authorization': 'Basic QUVIUk1TOndlbGNvbWU=',
        'Content-Type' : 'application/json'
      });

      let options = new RequestOptions({ headers: headers });

      let data = JSON.stringify({"InputParameters":{"P_PERSON_ID":30913}});

      return this.http.post('http://mobiebz.transsyssolutions.com:8009/webservices/rest/XXMBZ_COMMON_PKG/DASHBOARD/',
        data,options)


    }

    getapprovalslist()
    {
      let headers = new Headers(
      {
        'Authorization': 'Basic QUVIUk1TOndlbGNvbWU=',
        'Content-Type' : 'application/json'
      });

      let options = new RequestOptions({ headers: headers });

      let data = JSON.stringify({"InputParameters":{"EMPID": "30913","P_DUE_TYPE": "All"}});

      return this.http.post('http://mobiebz.transsyssolutions.com:8009/webservices/rest/XXMBZ_APPROVALS_PKG/APPROVALS_LIST/',
        data,options)
    }

    getpendingapprovalsit()
    {
      let headers = new Headers(
      {
        'Authorization': 'Basic QUVIUk1TOndlbGNvbWU=',
        'Content-Type' : 'application/json'
      });

      let options = new RequestOptions({ headers: headers });

      let data = JSON.stringify({"InputParameters": {"P_PERSON_ID": "30913", "P_REQUEST_TYPE": "SIT"}});

      return this.http.post('http://mobiebz.transsyssolutions.com:8009/webservices/rest/XXMBZ_APPROVALS_PKG/PENDING_APPROVALS/',
        data,options)

    }

    getapprovedhrlist()
    {
      let headers = new Headers(
      {
        'Authorization': 'Basic QUVIUk1TOndlbGNvbWU=',
        'Content-Type' : 'application/json'
      });

      let options = new RequestOptions({ headers: headers });

      let data = JSON.stringify({"InputParameters": {"P_PERSON_ID": 30913}});

      return this.http.post('http://mobiebz.transsyssolutions.com:8009/webservices/rest/XXMBZ_HRREQUESTS_PKG/APPROVED_REQ_LIST/',
        data,options)

    }

    getpendingdetails(requestid:string)
    {
      let headers = new Headers(
      {
        'Authorization': 'Basic QUVIUk1TOndlbGNvbWU=',
        'Content-Type' : 'application/json'
      });

      let options = new RequestOptions({ headers: headers });

      let data = JSON.stringify({"InputParameters": {"P_REQUEST_ID": requestid,"P_TRANSACTION_TYPE_ID": "SSHRMS","P_TYPE": "undefined"}
      });

      return this.http.post('http://mobiebz.transsyssolutions.com:8009/webservices/rest/XXMBZ_HRREQUESTS_PKG/PENDING_REQ_LIST/',
        data,options)

    }


     createresquest()
    {
      let headers = new Headers(
      {
        'Authorization': 'Basic QUVIUk1TOndlbGNvbWU=',
        'Content-Type' : 'application/json'
      });

      let options = new RequestOptions({ headers: headers });

      let data = JSON.stringify({"InputParameters": {"P_PERSON_ID": 30913}});

      return this.http.post('http://mobiebz.transsyssolutions.com:8009/webservices/rest/XXMBZ_HRREQUESTS_PKG/REQ_TYPES/',
        data,options)

    }






  }
