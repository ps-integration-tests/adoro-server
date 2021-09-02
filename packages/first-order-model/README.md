# Training and Deploying Models with Paperspace

Today we're going to look at how Papersuite's Gradient lets you train, deploy, and serve models.

For simplicity, we're going to use a pre-trained model to build Adoro, a deepfake app that animates you into a romantic Italian opera singer.

This 2-part series will cover:

1. Using Workflows and Datasets for model validation
2. Using Deployments to serve an online version of your model with a REST API

## About the First Order Motion Model

Every model has its intricacies, and you'll be more familiar with your own use case. For this tutorial we're going to look at the landmark [First Order Motion Model](https://aliaksandrsiarohin.github.io/first-order-model-website/) by Aliaksandr Siarohin et al.

![An overview of the First Order Motion Model by Aliaksandr Siarohin et al.](https://aliaksandrsiarohin.github.io/first-order-model-website/pipeline.png)

> Our framework is composed of two main modules: the motion estimation module and the image generation module. The purpose of the motion estimation module is to predict a dense motion field. We assume there exists an abstract reference frame. And we independently estimate two transformations: from reference to source and from reference to driving. This choice allows us to independently process source and driving frames. This is desired since, at test time the model receives pairs of the source image and driving frames sampled from a different video, which can be very different visually.

## Using Workflows and Datasets for model validation

Workflows let you string together atomic steps through inputs and outputs. If you're a fan of learnxinyminutes like me, you'll appreciate the [spec](https://docs.paperspace.com/gradient/explore-train-deploy/workflows/workflow-spec).

Generally, it's good to think of each "job" as encapsulating all the steps you need to take to produce an artifact. The Workflow runtime versions these artifacts and stores them in Datasets.
