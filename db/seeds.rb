# frozen_string_literal: true

task = Task.create!(
  name:        "Instance segmentation",
  slug:        "instance-segmentation",
  description: "foo"
)

challenge = task.challenges.create!(
  name:        "Eukaryote structure",
  slug:        "eukaryote-structure",
  description: "foo"
)

challenge.versions.create!(
  name:                 "1.0.0",
  description:          "foo",
  training_partition:   Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "training.tar.gz"
  ),
  validation_partition: Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "validation.tar.gz"
  ),
  test_partition:       Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "test.tar.gz"
  )
)

task = Task.create!(
  name:        "Object detection",
  slug:        "object-detection",
  description: "foo"
)

challenge = task.challenges.create!(
  name:        "Eukaryote structure",
  slug:        "eukaryote-structure",
  description: "foo"
)

version = challenge.versions.create!(
  name:                 "1.0.0",
  description:          "foo",
  training_partition:   Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "training.tar.gz"
  ),
  validation_partition: Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "validation.tar.gz"
  ),
  test_partition:       Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "test.tar.gz"
  )
)

Metric.create!(
  [
    {
      name:         "average precision",
      abbreviation: "AP",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average precision (50% intersection over union)",
      abbreviation: "AP-50%",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average precision (75% intersection over union)",
      abbreviation: "AP-75%",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average precision (small objects)",
      abbreviation: "AP-S",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average precision (medium objects)",
      abbreviation: "AP-M",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average precision (large objects)",
      abbreviation: "AP-L",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average recall (1 detection per image)",
      abbreviation: "AR-1",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average recall (10 detections per image)",
      abbreviation: "AR-10",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average recall (100 detections per image)",
      abbreviation: "AR-100",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average recall (small objects)",
      abbreviation: "AR-S",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average recall (medium objects)",
      abbreviation: "AR-M",
      href:         "/",
      description:  "foo",
      version:      version
    },
    {
      name:         "average recall (large objects)",
      abbreviation: "AR-L",
      href:         "/",
      description:  "foo",
      version:      version
    }
  ]
)

task = Task.create!(
  name:        "Semantic segmentation",
  slug:        "semantic-segmentation",
  description: "foo"
)

challenge = task.challenges.create!(
  name:        "Eukaryote structure",
  slug:        "eukaryote-structure",
  description: "foo"
)

challenge.versions.create!(
  name:                 "1.0.0",
  description:          "foo",
  training_partition:   Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "training.tar.gz"
  ),
  validation_partition: Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "validation.tar.gz"
  ),
  test_partition:       Partition.create!(
    checksum:    "foo",
    description: "foo",
    href:        "test.tar.gz"
  )
)

Task.create!(
  name:        "Super-resolution",
  slug:        "super-resolution",
  description: "foo"
)
