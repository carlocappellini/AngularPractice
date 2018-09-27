import {VoteComponent, compute} from './math';

describe('compute', () => {
  it('should return 1 for positive number', () => {
    expect(compute(1)).toBe(1);
  });

  it('should return -1 for negative number', () => {
    expect(compute(-1)).toBe(-1);
  });

});


describe('voteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upVoted', () => {
    component.upVote();
    expect(component.totalVotes).toBe((1));
  });

  it('should decrement totalVoted when  downVoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe((-1));
  });


});
