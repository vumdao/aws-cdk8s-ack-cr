import { Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { DbSubnetGroup } from '../imports/rds.services.subnet.group.k8s.aws';
import { RDS_DB_SUBNET_GROUP } from './constants';


export class RdsSubnetGroup extends Chart {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DbSubnetGroup(this, 'RdsDbSubnetGroup', {
      metadata: { name: RDS_DB_SUBNET_GROUP },
      spec: {
        name: RDS_DB_SUBNET_GROUP,
        description: 'RDS for app in EKS',
        subnetIDs: [
          'subnet-03112351e0b6460ab',
          'subnet-0cc32e562dc62e491',
          'subnet-048931802b9fe4d68',
          'subnet-089fe79a0c5c5247d',
          'subnet-00db34a7658c08114',
          'subnet-0e62ed7d0f2221791',
        ],
        tags: [
          { key: 'stage', value: 'development' },
          { key: 'owner', value: 'dev' },
        ],
      },
    });
  }
}