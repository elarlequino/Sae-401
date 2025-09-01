import { TestBed } from '@angular/core/testing';

import { DataService } from '../data';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/*
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Article } from './article';

describe('Article', () => {
  let component: Article;
  let fixture: ComponentFixture<Article>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Article]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Article);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
