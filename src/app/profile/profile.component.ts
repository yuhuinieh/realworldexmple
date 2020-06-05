import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // profile$ = this.route.paramMap.pipe(
  //   map(params => params.get('username')),
  //   switchMap(username => this.api.getProfile(username)),
  //   map((profile: any) => profile.profile)
  // );
  profile$ = this.route.data.pipe(
      map(data => data.profileData));

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.route.data.subscribe(res => console.log(res))
  }

}
