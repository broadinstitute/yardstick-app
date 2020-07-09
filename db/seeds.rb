user = User.create!(
    email:                "allen.goodman@icloud.com",
    password:             "password",
    username:             "0x00B1",
)

user.profile.create!(
    location:             "Somerville, MA",
    name:                 "Allen Goodman",
    website:              "https://www.broadinstitute.org",
)

task = Task.create!(
    description:          "foo",
    name:                 "Instance segmentation",
    slug:                 "instance-segmentation",
)

challenge = task.challenges.create!(
    description:          "foo",
    name:                 "Eukaryote structure",
    slug:                 "eukaryote-structure",
)

challenge.versions.create!(
    description:          "foo",
    name:                 "1.0.0",
    test_partition: Partition.create!(
        checksum:         "d131dd02c5e6eec4",
        description:      "foo",
        href:             "test.tar.gz"
    ),
    training_partition: Partition.create!(
        checksum:         "d8823e3156348f5b",
        description:      "foo",
        href:             "training.tar.gz"
    ),
    validation_partition: Partition.create!(
        checksum:         "55ad340609f4b302",
        description:      "foo",
        href:             "validation.tar.gz"
    ),
)

task = Task.create!(
    name:                 "Object detection",
    slug:                 "object-detection",
    description:          "foo",
)

challenge = task.challenges.create!(
    name:                 "Eukaryote structure",
    slug:                 "eukaryote-structure",
    description:          "foo",
)

version = challenge.versions.create!(
    description:          "foo",
    name:                 "1.0.0",
    test_partition: Partition.create!(
        checksum:         "d131dd02c5e6eec4",
        description:      "foo",
        href:             "test.tar.gz"
    ),
    training_partition: Partition.create!(
        checksum:         "d8823e3156348f5b",
        description:      "foo",
        href:             "training.tar.gz"
    ),
    validation_partition: Partition.create!(
        checksum:         "55ad340609f4b302",
        description:      "foo",
        href:             "validation.tar.gz"
    ),
)

Metric.create!(
    [
        {
            abbreviation: "AP",
            description:  "foo",
            href:         "/",
            name:         "average precision",
            version:      version,
        },
        {
            abbreviation: "AP-50%",
            description:  "foo",
            href:         "/",
            name:         "average precision (50% intersection over union)",
            version:      version,
        },
        {
            abbreviation: "AP-75%",
            description:  "foo",
            href:         "/",
            name:         "average precision (75% intersection over union)",
            version:      version,
        },
        {
            abbreviation: "AP-S",
            description:  "foo",
            href:         "/",
            name:         "average precision (small objects)",
            version:      version,
        },
        {
            abbreviation: "AP-M",
            description:  "foo",
            href:         "/",
            name:         "average precision (medium objects)",
            version:      version,
        },
        {
            abbreviation: "AP-L",
            description:  "foo",
            href:         "/",
            name:         "average precision (large objects)",
            version:      version,
        },
        {
            abbreviation: "AR-1",
            description:  "foo",
            href:         "/",
            name:         "average recall (1 detection per image)",
            version:      version,
        },
        {
            abbreviation: "AR-10",
            description:  "foo",
            href:         "/",
            name:         "average recall (10 detections per image)",
            version:      version,
        },
        {
            abbreviation: "AR-100",
            description:  "foo",
            href:         "/",
            name:         "average recall (100 detections per image)",
            version:      version,
        },
        {
            abbreviation: "AR-S",
            description:  "foo",
            href:         "/",
            name:         "average recall (small objects)",
            version:      version,
        },
        {
            abbreviation: "AR-M",
            description:  "foo",
            href:         "/",
            name:         "average recall (medium objects)",
            version:      version,
        },
        {
            abbreviation: "AR-L",
            description:  "foo",
            href:         "/",
            name:         "average recall (large objects)",
            version:      version,
        },
    ]
)

task = Task.create!(
    description:          "foo",
    name:                 "Semantic segmentation",
    slug:                 "semantic-segmentation",
)

challenge = task.challenges.create!(
    description:          "foo",
    name:                 "Eukaryote structure",
    slug:                 "eukaryote-structure",
)

challenge.versions.create!(
    description:          "foo",
    name:                 "1.0.0",
    test_partition: Partition.create!(
        checksum:         "d131dd02c5e6eec4",
        description:      "foo",
        href:             "test.tar.gz"
    ),
    training_partition: Partition.create!(
        checksum:         "d8823e3156348f5b",
        description:      "foo",
        href:             "training.tar.gz"
    ),
    validation_partition: Partition.create!(
        checksum:         "55ad340609f4b302",
        description:      "foo",
        href:             "validation.tar.gz"
    ),
)

Task.create!(
    description:          "foo",
    name:                 "Super-resolution",
    slug:                 "super-resolution",
)
