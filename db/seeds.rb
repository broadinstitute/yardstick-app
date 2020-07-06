task_0 = Task.create(name: "Instance segmentation")
task_1 = Task.create(name: "Object detection")
task_2 = Task.create(name: "Semantic segmentation")
task_3 = Task.create(name: "Super-resolution")

challenge_0 = Challenge.create(name: "eukaryote components", task: task_0)
challenge_1 = Challenge.create(name: "eukaryote components", task: task_1)
challenge_2 = Challenge.create(name: "eukaryote components", task: task_2)

version_0 = Version.create(name: "1.0.0", challenge: challenge_0)
version_1 = Version.create(name: "1.0.0", challenge: challenge_1)
version_2 = Version.create(name: "1.0.0", challenge: challenge_2)

metric_0 = Metric.create(name: "mean average precision (mAP)", version: version_0)
metric_1 = Metric.create(name: "mean average precision (mAP)", version: version_1)
metric_2 = Metric.create(name: "mean average precision (mAP)", version: version_2)

training_partition_0 = Partition.create(endpoint: "training.tar.gz")
training_partition_1 = Partition.create(endpoint: "training.tar.gz")
training_partition_2 = Partition.create(endpoint: "training.tar.gz")

validation_partition_0 = Partition.create(endpoint: "validation.tar.gz")
validation_partition_1 = Partition.create(endpoint: "validation.tar.gz")
validation_partition_2 = Partition.create(endpoint: "validation.tar.gz")

test_partition_0 = Partition.create(endpoint: "test.tar.gz")
test_partition_1 = Partition.create(endpoint: "test.tar.gz")
test_partition_2 = Partition.create(endpoint: "test.tar.gz")

version_0.training_partition = training_partition_0
version_0.validation_partition = validation_partition_0
version_0.test_partition = test_partition_0

version_1.training_partition = training_partition_1
version_1.validation_partition = validation_partition_1
version_1.test_partition = test_partition_1

version_2.training_partition = training_partition_2
version_2.validation_partition = validation_partition_2
version_2.test_partition = test_partition_2
