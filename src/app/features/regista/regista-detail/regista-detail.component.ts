import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Regista } from 'src/app/model/regista';
import { RegistaService } from '../regista.service';

@Component({
  selector: 'app-regista-detail',
  templateUrl: './regista-detail.component.html',
  styleUrls: ['./regista-detail.component.css']
})
export class RegistaDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private registaService: RegistaService,
    private router: Router) { }

  selectedRegista?: Regista;
  errorMessage: string = '';
  confirmMessage: string = '';

  ngOnInit(): void {
    let idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.registaService.getRegista(idParam).subscribe({
      next: registaItem => {
        this.selectedRegista = registaItem;
        console.log(JSON.stringify(registaItem))
      },
      error: err => this.errorMessage = err
    });

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }
}
