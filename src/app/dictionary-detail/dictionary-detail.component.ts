import { DictionaryService } from './../dictionary.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  dict:any;
  sub: Subscription;
  constructor(private dictionaryService: DictionaryService,
              private activeRouter: ActivatedRoute,
              private domSanitizer: DomSanitizer) { }

  ngOnInit(){
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) =>
    {
      const id = paramMap.get('id');
      this.dict = this.dictionaryService.find(id);
    })
  }
  // getDetail()
  // {
  //   const url = this.dict.id;
  //   return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  // }
  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
