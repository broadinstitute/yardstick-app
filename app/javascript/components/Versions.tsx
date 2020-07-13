import * as React from "react";

type VersionsProps = {
    children: any;
};

const Versions = ({ children }: VersionsProps) => (
    <div id="versions">{children}</div>
);

export default Versions;
