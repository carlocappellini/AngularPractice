export class VoteComponent {

  totalVotes = 0;

  upVote() {
    this.totalVotes++;
  }


  downVote() {
    this.totalVotes--;
  }
}

export function compute(number) {
  if (number > 0) {
    return 1;
  } else {
    return -1;
  }
}



