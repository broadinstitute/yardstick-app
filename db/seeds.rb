instance_segmentation_task = Task.create(
    {
        description: "Classify, detect, and delineate discrete objects.",
        name: "Instance segmentation",
    }
)

object_detection_task = Task.create(
    {
        description: "Classify and detect discrete objects.",
        name: "Object detection",
    }
)

semantic_segmentation_task = Task.create(
    {
        description: "Classify every pixel in an image with an appropriate category.",
        name: "Semantic segmentation",
    }
)

super_resolution_task = Task.create(
    {
        description: "Increase the magnification of an image.",
        name: "Super-resolution",
    }
)

Challenge.create(
    {
        description: "",
        name: "Eukaryote components",
        task: instance_segmentation_task,
    }
)

Challenge.create(
    {
        description: "",
        name: "Eukaryote components",
        task: object_detection_task,
    }
)

Challenge.create(
    {
        description: "",
        name: "Eukaryote components",
        task: semantic_segmentation_task,
    }
)
