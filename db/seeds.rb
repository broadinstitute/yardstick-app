task = Task.create(
    name: "Instance segmentation",
    slug: "instance-segmentation"
)

challenge = task.challenges.create(
    name: "Eukaryote structure",
    slug: "eukaryote-structure"
)

version = challenge.versions.create(
    name: "1.0.0",
    training_partition: Partition.create(endpoint: "training.tar.gz"),
    validation_partition: Partition.create(endpoint: "validation.tar.gz"),
    test_partition: Partition.create(endpoint: "test.tar.gz"),
)

task = Task.create(
    name: "Object detection",
    slug: "object-detection"
)

challenge = task.challenges.create(
    name: "Eukaryote structure",
    slug: "eukaryote-structure"
)

version = challenge.versions.create(
    name: "1.0.0",
    training_partition: Partition.create(endpoint: "training.tar.gz"),
    validation_partition: Partition.create(endpoint: "validation.tar.gz"),
    test_partition: Partition.create(endpoint: "test.tar.gz"),
)

Metric.create(
    [
        {
            name: "average precision",
            abbreviation: "AP",
            version: version
        },
        {
            name: "average precision (50% intersection over union)",
            abbreviation: "AP-50%",
            version: version
        },
        {
            name: "average precision (75% intersection over union)",
            abbreviation: "AP-75%",
            version: version
        },
        {
            name: "average precision (small objects)",
            abbreviation: "AP-S",
            version: version
        },
        {
            name: "average precision (medium objects)",
            abbreviation: "AP-M",
            version: version
        },
        {
            name: "average precision (large objects)",
            abbreviation: "AP-L",
            version: version
        },
        {
            name: "average recall (1 detection per image)",
            abbreviation: "AR-1",
            version: version
        },
        {
            name: "average recall (10 detections per image)",
            abbreviation: "AR-10",
            version: version
        },
        {
            name: "average recall (100 detections per image)",
            abbreviation: "AR-100",
            version: version
        },
        {
            name: "average recall (small objects)",
            abbreviation: "AR-S",
            version: version
        },
        {
            name: "average recall (medium objects)",
            abbreviation: "AR-M",
            version: version
        },
        {
            name: "average recall (large objects)",
            abbreviation: "AR-L",
            version: version
        },
    ]
)

task = Task.create(
    name: "Semantic segmentation",
    slug: "semantic-segmentation"
)

challenge = task.challenges.create(
    name: "Eukaryote structure",
    slug: "eukaryote-structure",
)

version = challenge.versions.create(
    name: "1.0.0",
    training_partition: Partition.create(endpoint: "training.tar.gz"),
    validation_partition: Partition.create(endpoint: "validation.tar.gz"),
    test_partition: Partition.create(endpoint: "test.tar.gz"),
)

super_resolution_task = Task.create(
    name: "Super-resolution",
    slug: "super-resolution"
)
