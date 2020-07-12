eukaryote_structure_version_description = <<-MARKDOWN
    ./eukaryote-structure
      ./1.0.0
        /training
          /images
              000001.png
              000002.png
              ...
              000734.png
          /masks
              000001.png
              000002.png
              ...
              000734.png
          instance_segmentation.csv
          object_detection.csv￼
          semantic_segmentation.csv

`instance_segmentation.csv` has the structure:

    "image",      "category", "mask"
    "000001.png", "nucleus",  "1 7161 8 7417 8 7672 …"

*image*—pathname for the image, relative to the `images` directory.

*category*—

*mask*—

`object_detection.csv` has the structure:

    "image",      "category", "bounding_box"
    "000001.png", "nucleus",  "0 0 100 100"

*image*—pathname for the image, relative to the `images` directory.

*category*—

*bounding_box*—

`semantic_segmentation.csv` has the structure:

    "image",      "category", "mask"
    "000001.png", "nucleus",  "000001.png"

*image*—pathname for the image, relative to the `images` directory.

*category*—

*mask*—pathname for the mask, relative to the `masks` directory.
MARKDOWN

User.create!(
    email:                "allen.goodman@icloud.com",
    location:             "Somerville, MA",
    name:                 "Allen Goodman",
    password:             "password",
    username:             "0x00B1",
    website:              "https://www.broadinstitute.org",
)

task = Task.create!(
    description:          "foo",
    name:                 "Image reconstruction",
    slug:                 "image-reconstruction",
)

challenge = task.challenges.create!(
    description:          "foo",
    name:                 "Chemical compound",
    slug:                 "chemical-compound",
)

challenge.versions.create!(
    description:          "foo",
    name:                 "1.0.0",
    slug:                 "1-0-0",
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

challenge = task.challenges.create!(
    description:          "foo",
    name:                 "Mechanism of action (MOA)",
    slug:                 "mechanism-of-action",
)

challenge.versions.create!(
    description:          "foo",
    name:                 "1.0.0",
    slug:                 "1-0-0",
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
    description:          eukaryote_structure_version_description,
    name:                 "1.0.0",
    slug:                 "1-0-0",
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
    description:          "foo",
    name:                 "Object detection",
    slug:                 "object-detection",
)

challenge = task.challenges.create!(
    description:          "foo",
    name:                 "Eukaryote structure",
    slug:                 "eukaryote-structure",
)

version = challenge.versions.create!(
    description:          eukaryote_structure_version_description,
    name:                 "1.0.0",
    slug:                 "1-0-0",
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
    name:                 "Object recognition",
    slug:                 "object-recognition",
)

challenge = task.challenges.create!(
    description:          "foo",
    name:                 "Chemical compound",
    slug:                 "chemical-compound",
)

challenge.versions.create!(
    description:          "foo",
    name:                 "1.0.0",
    slug:                 "1-0-0",
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

challenge = task.challenges.create!(
    description:          "foo",
    name:                 "Mechanism of action (MOA)",
    slug:                 "mechanism-of-action",
)

challenge.versions.create!(
    description:          "foo",
    name:                 "1.0.0",
    slug:                 "1-0-0",
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
    description:          eukaryote_structure_version_description,
    name:                 "1.0.0",
    slug:                 "1-0-0",
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
