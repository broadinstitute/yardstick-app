instance_segmentation_task = Task.create(
    name: "Instance segmentation",
    slug: "instance-segmentation"
)

object_detection_task = Task.create(
    name: "Object detection",
    slug: "object-detection"
)

semantic_segmentation_task = Task.create(
    name: "Semantic segmentation",
    slug: "semantic-segmentation"
)

super_resolution_task = Task.create(
    name: "Super-resolution",
    slug: "super-resolution"
)

instance_segmentation_eukaryote_structure_challenge = Challenge.create(
    name: "Eukaryote structure",
    slug: "eukaryote-structure",
    task: instance_segmentation_task
)

object_detection_eukaryote_structure_challenge = Challenge.create(
    name: "Eukaryote structure",
    slug: "eukaryote-structure",
    task: object_detection_task
)

semantic_segmentation_eukaryote_structure_challenge = Challenge.create(
    name: "Eukaryote structure",
    slug: "eukaryote-structure",
    task: semantic_segmentation_task
)

instance_segmentation_eukaryote_structure_challenge_version = Version.create(
    name: "1.0.0",
    challenge: instance_segmentation_eukaryote_structure_challenge
)

object_detection_eukaryote_structure_challenge_version = Version.create(
    name: "1.0.0",
    challenge: object_detection_eukaryote_structure_challenge
)

semantic_segmentation_eukaryote_structure_challenge_version = Version.create(
    name: "1.0.0",
    challenge: semantic_segmentation_eukaryote_structure_challenge
)

Metric.create(
    name: "average precision",
    abbreviation: "AP",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average precision (50% intersection over union)",
    abbreviation: "AP (50% IoU)",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average precision (75% intersection over union)",
    abbreviation: "AP (75% IoU)",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average precision (small objects)",
    abbreviation: "AP-SMALL",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average precision (medium objects)",
    abbreviation: "AP-MEDIUM",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average precision (large objects)",
    abbreviation: "AP-LARGE",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average recall (1 detection per image)",
    abbreviation: "AR-1",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average recall (10 detections per image)",
    abbreviation: "AR-10",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average recall (100 detections per image)",
    abbreviation: "AR-10",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average recall (small objects)",
    abbreviation: "AR-SMALL",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average recall (medium objects)",
    abbreviation: "AR-MEDIUM",
    version: object_detection_eukaryote_structure_challenge_version
)

Metric.create(
    name: "average recall (large objects)",
    abbreviation: "AR-LARGE",
    version: object_detection_eukaryote_structure_challenge_version
)

training_partition_0 = Partition.create(
    endpoint: "training.tar.gz"
)

training_partition_1 = Partition.create(
    endpoint: "training.tar.gz"
)

training_partition_2 = Partition.create(
    endpoint: "training.tar.gz"
)

validation_partition_0 = Partition.create(
    endpoint: "validation.tar.gz"
)

validation_partition_1 = Partition.create(
    endpoint: "validation.tar.gz"
)

validation_partition_2 = Partition.create(
    endpoint: "validation.tar.gz"
)

test_partition_0 = Partition.create(
    endpoint: "test.tar.gz"
)

test_partition_1 = Partition.create(
    endpoint: "test.tar.gz"
)

test_partition_2 = Partition.create(
    endpoint: "test.tar.gz"
)

instance_segmentation_eukaryote_structure_challenge_version.training_partition = training_partition_0
instance_segmentation_eukaryote_structure_challenge_version.validation_partition = validation_partition_0
instance_segmentation_eukaryote_structure_challenge_version.test_partition = test_partition_0

object_detection_eukaryote_structure_challenge_version.training_partition = training_partition_1
object_detection_eukaryote_structure_challenge_version.validation_partition = validation_partition_1
object_detection_eukaryote_structure_challenge_version.test_partition = test_partition_1

semantic_segmentation_eukaryote_structure_challenge_version.training_partition = training_partition_2
semantic_segmentation_eukaryote_structure_challenge_version.validation_partition = validation_partition_2
semantic_segmentation_eukaryote_structure_challenge_version.test_partition = test_partition_2
