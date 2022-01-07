import { Component, OnInit } from '@angular/core';
import { Hero } from '../HeroIntf';
import { HeroService } from '../hero.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  date = new Date();
  dateString = '2022/01/06';
  //public datepipe: DatePipe;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
    //this.dateString =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes=> this.heroes =heroes.slice(0,4));
  }
}
