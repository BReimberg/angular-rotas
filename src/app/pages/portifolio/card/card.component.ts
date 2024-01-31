import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router
    ) {

    //Para recuperar o id: http://localhost:4200/portfolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
      )

      //Recuperar child
      this.activeRoute.firstChild?.params.subscribe(
        res => console.log(res)
        )

    //Para recuperar QueryParams: http://localhost:4200/portfolio/1?name=brenda&token=123
      this.activeRoute.queryParams.subscribe(
        res => console.log(res)
    )
  }

  ngOnInit(): void {
   /* setInterval(() => {
      this.navegador.navigate(['/'])
    }, 5000)*/
  }
/*toda vez que for para outra página depois de 5s volta
para a página inicial */
}
