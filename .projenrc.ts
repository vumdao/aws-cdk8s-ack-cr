import { cdk8s } from "projen";
const project = new cdk8s.Cdk8sTypeScriptApp({
  cdk8sVersion: "1.0.137",
  defaultReleaseBranch: "master",
  name: "aws-cdk8s-ack-cr",
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.gitignore.addPatterns('.env');
project.gitignore.addPatterns('.psd');

project.synth();