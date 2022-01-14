import { Stack, StackProps, Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import { NextJSLambdaEdge } from "@sls-next/cdk-construct";
import { Runtime } from "aws-cdk-lib/aws-lambda";

export class NextStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    new NextJSLambdaEdge(this, "NextJsApp", {
      serverlessBuildOutDir: "./build",
      runtime: Runtime.NODEJS_14_X,
      memory: 1024,
      timeout: Duration.seconds(30),
      withLogging: true,
      name: {
        apiLambda: `${id}Api`,
        defaultLambda: `Fn${id}`,
        imageLambda: `${id}Image`,
      },
    });
  }
}
