import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './../api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolveService implements Resolve<any> {

  constructor(private api: ApiService ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.getProfile(route.paramMap.get('username')).pipe(
      map((profile: any) => profile.profile)
    );
  }

}
