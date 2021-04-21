import {TestBed} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {StepsService} from './steps.service';
import {Step, Steppable} from '../interfaces/step';

describe('StepsService', () => {
  let httpTestingController: HttpTestingController;
  let service: StepsService;
  const url = 'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';
  const expectedData: Steppable[] = [
    new Step().deserialize({
      id: 'd9a439d0-8dbf-4bab-8e08-626f8194a075',
      stepNumber: '1',
      versionContent: [
        {
          title: 'Fill Out a Profile',
          body: 'We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.',
          effectiveDate: '2019-05-20T03:04:05.000Z'
        }
      ]
    }),
    new Step().deserialize({
      id: 'd11b10ba-1cd8-48f8-93eb-454b716fd5a0',
      stepNumber: '2',
      versionContent: [
        {
          title: 'Request A Delivery',
          body: 'Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.',
          effectiveDate: '2019-05-04T03:04:05.000Z'
        },
        {
          title: 'We Deliver',
          body: 'Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.',
          effectiveDate: '2019-04-04T05:04:05.000Z'
        }
      ]
    }),
    new Step().deserialize({
      id: '422e6b50-9c5a-43d5-90cb-839f4678cb75',
      stepNumber: '3',
      versionContent: [
        {
          title: 'Keep What You Like',
          body: 'Tell us “no” by returning any unwanted products in the enclosed packaging.',
          effectiveDate: '2019-04-04T03:04:05.000Z'
        },
        {
          title: 'Keep What You Want',
          body: 'Tell us “no thanks” by returning any unwanted products in the enclosed packaging.',
          effectiveDate: '2019-04-04T05:04:05.000Z'
        },
        {
          title: 'Keep Everything',
          body: 'Tell us “no thanks” by returning any unwanted products in the enclosed packaging.',
          effectiveDate: '2019-02-04T08:04:05.000Z'
        }
      ]
    }),
    new Step().deserialize({
      id: 'dce2554e-00dc-45c1-99c1-93a554d7eba7',
      stepNumber: '4',
      versionContent: [
        {
          title: 'Request Another Delivery',
          body: 'Get your next gaming fix by updating your profile then initiating your next shipment.',
          effectiveDate: '2019-05-20T03:04:05.000Z'
        }
      ]
    })
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(StepsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return expected data', (done) => {

    service.getData().subscribe(data => {
      expect(data).toEqual(expectedData);

      done();
    });

    const testRequest = httpTestingController.expectOne(url);

    testRequest.flush(expectedData);
  });

  it('should use GET to retrieve data', () => {
    service.getData().subscribe();

    const testRequest = httpTestingController.expectOne('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge');

    expect(testRequest.request.method).toEqual('GET');
  });

});
