import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeroesComponent} from './heroes.component';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroes;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [HeroesComponent]
  //   })
  //     .compileComponents();
  // }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    heroes = HEROES[HEROES.length];
  });

  // it('should display heroes', async(() => {
  //   const heroe = [
  //   { id: 11, name: 'Mr. Nice' },
  //   { id: 12, name: 'Narco' },
  //   { id: 13, name: 'Bombasto' },
  //   { id: 14, name: 'Celeritas' },
  //   { id: 15, name: 'Magneta' },
  //   { id: 16, name: 'RubberMan' },
  //   { id: 17, name: 'Dynama' },
  //   { id: 18, name: 'Dr IQ' },
  //   { id: 19, name: 'Magma' },
  //   { id: 20, name: 'Tornado' }
  //   ];
  //
  //   expect(heroe).toContain();
  // }));
  // it(`should have as hero 'WINDSTORM'`, async(() => {
  //   const fixture = TestBed.createComponent(HeroesComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.hero.name).toBe(Hero[name]);
  // }));
  // it('should render hero in a h2 tag', async(() => {
  //   const fixture = TestBed.createComponent(HeroesComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('WINDSTORM');
  // }));
});




