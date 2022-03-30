import { App } from 'cdk8s';
import { RdsDBInstance } from './rds/db-instance';
import { RdsSubnetGroup } from './rds/subnet-group';
import { S3TestBucket } from './s3/s3';


const rdsApp = new App({
  outputFileExtension: '.yaml',
  outdir: 'dist/rds',
});
new RdsSubnetGroup(rdsApp, 'rds-subnet-group');
rdsApp.synth();


new RdsDBInstance(rdsApp, 'rds-db-instance');
rdsApp.synth();

const s3App = new App({
  outputFileExtension: '.yaml',
  outdir: 'dist/s3',
});
new S3TestBucket(s3App, 's3-test-bucket');
s3App.synth();