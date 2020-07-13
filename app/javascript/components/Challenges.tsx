import * as React from "react";

type ChallengesProps = {
    children: any;
};

const Challenges = ({ children }: ChallengesProps) => (
    <div id="challenges">{children}</div>
);

export default Challenges;
