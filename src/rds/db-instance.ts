import { Chart } from 'cdk8s';
import { Construct } from 'constructs';
import { DbInstance } from '../imports/rds.services.db.instance.k8s.aws';
import { RDS_DB_INSTANCE_NAME, RDS_DB_SUBNET_GROUP, RDS_SECRET } from './constants';


export class RdsDBInstance extends Chart {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new DbInstance(this, 'RdsDbInstance', {
      metadata: { name: RDS_DB_INSTANCE_NAME },
      spec: {
        dbInstanceIdentifier: RDS_DB_INSTANCE_NAME,
        allocatedStorage: 20,
        autoMinorVersionUpgrade: true,
        backupRetentionPeriod: 7,
        dbInstanceClass: 'db.t3.micro',
        dbSubnetGroupName: RDS_DB_SUBNET_GROUP,
        engine: 'postgres',
        engineVersion: '10',
        masterUsername: 'rds_dev',
        masterUserPassword: {
          key: 'password',
          name: RDS_SECRET,
        },
        tags: [
          { key: 'stage', value: 'development' },
          { key: 'owner', value: 'dev' },
        ],
      },
    });
  }
}