import { Component, OnInit } from '@angular/core';
import { Game } from './../../models/model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  gameRating = 0;
  gameId: string = ' ';
  game: Game 
  routeSub: Subscription = new Subscription();
  gameSub: Subscription = new Subscription();
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private HttpService: HttpService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.ActivatedRoute.params.subscribe((Params: Params) => {
      this.gameId = Params['id'];
      this.getGameDetails(this.gameId);
    });
  }
  getGameDetails(id: string) {
    this.gameSub = this.HttpService.getGameDetails(id).subscribe(
      (gameResp: Game) => {
        this.game = gameResp;
        setTimeout(() => {
          this.gameRating = this.game.metacritic;
        }, 1000);
      }
    );
  }
  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else {
      return ' #ef4655';
    }
  }
}
