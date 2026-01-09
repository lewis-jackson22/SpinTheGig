import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeDetails } from './episode-details';

describe('EpisodeDetails', () => {
  let component: EpisodeDetails;
  let fixture: ComponentFixture<EpisodeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodeDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
