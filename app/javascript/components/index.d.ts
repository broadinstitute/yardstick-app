type Challenge = {
    description: string;
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

type Profile = {
    location: string;
    name: string;
    submissions: Array<Submission>;
    user: User;
    website: string;
}

type Score = {
    metric: Metric;
    submission: Submission;
    value: string;
    version: Version;
}

type Submission = {
    description: string;
    name: string;
    profile: Profile;
    version: Version;
};

type Task = {
    challenges: Array<Challenge>;
    description: string;
    name: string;
};

type User = {
    email: string;
    profile: Profile;
    username: string;
}

type Version = {
    name: string;
    description: string
    trainingPartition: Partition;
    validationPartition: Partition;
    testPartition: Partition;
    metrics: Array<string>
};
