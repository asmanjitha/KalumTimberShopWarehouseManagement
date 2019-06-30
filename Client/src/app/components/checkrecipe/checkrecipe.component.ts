import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { RecipedataService } from '../../service/recipedata.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-checkrecipe',
  templateUrl: './checkrecipe.component.html',
  styleUrls: ['./checkrecipe.component.css']
})
export class CheckrecipeComponent implements OnInit {

  recipe:any;
  id:String;
  user:any;

  constructor(
    private recipedata: RecipedataService,
    private acrouter: ActivatedRoute,
    private authservice:AuthService,
    private router: Router
  ) {
    this.id = acrouter.snapshot.params['_id'];
    recipedata.searchByIdTemp({id:this.id}).subscribe(res=> {
      this.recipe = res.recipe;
      this.recipe._id = this.id;
    } );
  }

  ngOnInit() {
    this.authservice.getAdminProfile().subscribe(res => {
      this.user = res.admin;
      this.id = res.admin._id;
    }, err => {
      this.router.navigate(['/adminlogin']);
      return false;
    });
  }

  acceptRecipe(){
    console.log(this.recipe)
    this.recipedata.deleteTemp(this.recipe).subscribe(res=>{
      if (res.state){
        swal(
          'Recipe Accepted!',
          'Data Updated',
          'success'
        )
      }else{
        swal(
          'Failed !',
          'Data not Updated',
          'warning'
        )
      }
    });
    this.recipedata.saveRecipe(this.recipe).subscribe(res=>{
      if (res.state){
        this.router.navigate(['/admin']);
      }else{
        alert("Data not updated, try again");
      }
    });
  }

  declineRecipe(){
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.recipedata.deleteTemp(this.recipe).subscribe(res=>{
          if (res.state){
            swal(
              'Declined!',
              'Recipe has been deleted.',
              'success'
            );
            this.router.navigate(['/admin']);
          }else{
            swal(
              'Failed!',
              'Recipe not deleted.',
              'error'
            )
          }
        });

      }
    })

  }

}
