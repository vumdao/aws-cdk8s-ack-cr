import { Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { Bucket } from '../imports/s3.services.k8s.aws';
import { S3_BUCKET_NAME } from './constants';


export class S3TestBucket extends Chart {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new Bucket(this, 'S3TestBucket', {
      metadata: { name: S3_BUCKET_NAME },
      spec: {
        name: S3_BUCKET_NAME,
        encryption: {
          rules: [
            { applyServerSideEncryptionByDefault: { sseAlgorithm: 'AES256' } },
          ],
        },
        tagging: {
          tagSet: [
            { key: 'stage', value: 'development' },
            { key: 'owner', value: 'dev' },
          ],
        },
      },
    });
  }
}