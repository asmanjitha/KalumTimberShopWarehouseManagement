import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AddrecipeComponent} from './addrecipe.component';
import {NavbaruserComponent} from '../navbaruser/navbaruser.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {LandingpageComponent} from "../landingpage/landingpage.component";
import {FooterComponent} from "../footer/footer.component";
import {RouterTestingModule} from '@angular/router/testing';




describe('AddrecipeComponent', () => {
  let component: AddrecipeComponent;
  let fixture: ComponentFixture<AddrecipeComponent>;
  const applicationRoutes: Routes = [
    {path: 'add', component: AddrecipeComponent},
    {path: '/', component: LandingpageComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddrecipeComponent, NavbaruserComponent,LandingpageComponent,FooterComponent],
      imports: [FormsModule, RouterModule.forRoot(applicationRoutes),RouterTestingModule.withRoutes([])]
    })
      .compileComponents()
      .then(() => {
          fixture = TestBed.createComponent(AddrecipeComponent);
          component = fixture.componentInstance;
        });
  }));


  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddrecipeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  afterEach(() => {
    console.log("C");
    // fixture.destroy();
    // component = null;
  });

  it('should create', () => {
    console.log("D");
    // expect(component).toBeTruthy();
  });

  it('addRecipe getdate should return date', () => {
    console.log("E");
    // let result = component.getDate();
    // expect(result).toBeTruthy();
  })
});
