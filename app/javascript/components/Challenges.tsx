import * as React from "react";

type ChallengesProps = {
    children: any;
};

const Challenges = ({ children }: ChallengesProps): JSX.Element => (
    <div id="challenges">{children}</div>
);

export default Challenges;
