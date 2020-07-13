type Challenge = {
    description: string;
    endpoint: string;
    id: string;
    name: string;
    slug: string;
    task: Task;
    versions: Array<Version>;
};

type Metric = {
    abbreviation: string;
    description: string;
    href: string;
    name: string;
    version: Version;
};

type Partition = {
    checksum: string;
    description: string;
    href: string;
};

type Score = {
    metric: Metric;
    submission: Submission;
    value: string;
    version: Version;
};

type Submission = {
    description: string;
    name: string;
    version: Version;
};

type Task = {
    id: string;
    name: string;
    description: string;
    url: string;
    challenges: Array<Challenge>;
};

type User = {
    email: string;
    username: string;
};

type Version = {
    name: string;
    description: string;
    trainingPartition: Partition;
    validationPartition: Partition;
    testPartition: Partition;
    metrics: Array<Metric>;
};
