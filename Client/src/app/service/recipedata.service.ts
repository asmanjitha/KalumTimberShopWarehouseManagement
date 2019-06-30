import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RecipedataService {

  recipe: any;

  constructor(
    private http: HttpClient
  ) { }

  searchBiIngredients(ingredients) {
    return this.http.post('recipe/ingredients',ingredients).map((res: any) => res);
  }

  searchBiOccasions(occasions) {
    return this.http.post('recipe/occasion',occasions).map((res: any) => res);
  }

  searchBiHealth(health) {
    return this.http.post('recipe/health',health).map((res: any) => res);
  }

  searchByIngredientsExcepts(ingredients) {
    return this.http.post('recipe/ingredientsexcept',ingredients).map((res: any) => res);
  }
  searchById(id) {
    return this.http.post('recipe/id',id).map((res: any) => res);
  }

  searchByName(name) {
    return this.http.post('recipe/name',name).map((res: any) => res);
  }

  searchByIdTemp(id) {
    return this.http.post('temprecipe/id',id).map((res: any) => res);
  }

  searchByAuthor(author) {
    return this.http.post('recipe/author',author).map((res: any) => res);
  }

  searchAllTemp() {
    return this.http.post('temprecipe/searchall',{user:"as"}).map((res: any) => res);
  }

  saveTempRecipe(recipe){
    return this.http.post('temprecipe/saverecipe',recipe).map((res:any) => res);
  }
  saveRecipe(recipe){
    return this.http.post('recipe/saverecipe',recipe).map((res:any) => res);
  }

  saveComment(recipe) {
    return this.http.post('recipe/savecomment',recipe).map((res:any) => res);
  }

  saveRate(recipe) {
    console.log(recipe);
    return this.http.post('recipe/saverate',recipe).map((res:any) => res);
  }


  editRecipe(recipe){
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('recipe/update', recipe, {headers: headers}).map((res: any) => res);
  }

  deleteTemp(recipe){
    return this.http.post('temprecipe/delete',recipe).map((res:any) => res);
  }

  deleteRecipe(recipe){
    return this.http.post('recipe/delete',recipe).map((res:any) => res);
  }
}
