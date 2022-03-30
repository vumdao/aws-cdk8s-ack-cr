// generated by cdk8s
import { ApiObject, ApiObjectMetadata, GroupVersionKind } from 'cdk8s';
import { Construct } from 'constructs';


/**
 * DBSubnetGroup is the Schema for the DBSubnetGroups API
 *
 * @schema DBSubnetGroup
 */
export class DbSubnetGroup extends ApiObject {
  /**
   * Returns the apiVersion and kind for "DBSubnetGroup"
   */
  public static readonly GVK: GroupVersionKind = {
    apiVersion: 'rds.services.k8s.aws/v1alpha1',
    kind: 'DBSubnetGroup',
  };

  /**
   * Renders a Kubernetes manifest for "DBSubnetGroup".
   *
   * This can be used to inline resource manifests inside other objects (e.g. as templates).
   *
   * @param props initialization props
   */
  public static manifest(props: DbSubnetGroupProps = {}): any {
    return {
      ...DbSubnetGroup.GVK,
      ...toJson_DbSubnetGroupProps(props),
    };
  }

  /**
   * Defines a "DBSubnetGroup" API object
   * @param scope the scope in which to define this object
   * @param id a scope-local name for the object
   * @param props initialization props
   */
  public constructor(scope: Construct, id: string, props: DbSubnetGroupProps = {}) {
    super(scope, id, {
      ...DbSubnetGroup.GVK,
      ...props,
    });
  }

  /**
   * Renders the object to Kubernetes JSON.
   */
  public toJson(): any {
    const resolved = super.toJson();

    return {
      ...DbSubnetGroup.GVK,
      ...toJson_DbSubnetGroupProps(resolved),
    };
  }
}

/**
 * DBSubnetGroup is the Schema for the DBSubnetGroups API
 *
 * @schema DBSubnetGroup
 */
export interface DbSubnetGroupProps {
  /**
   * @schema DBSubnetGroup#metadata
   */
  readonly metadata?: ApiObjectMetadata;

  /**
   * DBSubnetGroupSpec defines the desired state of DBSubnetGroup.
   * Contains the details of an Amazon RDS DB subnet group.
   * This data type is used as a response element in the DescribeDBSubnetGroups action.
   *
   * @schema DBSubnetGroup#spec
   */
  readonly spec?: DbSubnetGroupSpec;

}

/**
 * Converts an object of type 'DbSubnetGroupProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DbSubnetGroupProps(obj: DbSubnetGroupProps | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'metadata': obj.metadata,
    'spec': toJson_DbSubnetGroupSpec(obj.spec),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * DBSubnetGroupSpec defines the desired state of DBSubnetGroup.
 * Contains the details of an Amazon RDS DB subnet group.
 * This data type is used as a response element in the DescribeDBSubnetGroups action.
 *
 * @schema DbSubnetGroupSpec
 */
export interface DbSubnetGroupSpec {
  /**
   * The description for the DB subnet group.
   *
   * @schema DbSubnetGroupSpec#description
   */
  readonly description: string;

  /**
   * The name for the DB subnet group. This value is stored as a lowercase string.
   * Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.
   * Example: mySubnetgroup
   *
   * @schema DbSubnetGroupSpec#name
   */
  readonly name: string;

  /**
   * The EC2 Subnet IDs for the DB subnet group.
   *
   * @schema DbSubnetGroupSpec#subnetIDs
   */
  readonly subnetIDs: string[];

  /**
   * Tags to assign to the DB subnet group.
   *
   * @schema DbSubnetGroupSpec#tags
   */
  readonly tags?: DbSubnetGroupSpecTags[];

}

/**
 * Converts an object of type 'DbSubnetGroupSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DbSubnetGroupSpec(obj: DbSubnetGroupSpec | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'description': obj.description,
    'name': obj.name,
    'subnetIDs': obj.subnetIDs?.map(y => y),
    'tags': obj.tags?.map(y => toJson_DbSubnetGroupSpecTags(y)),
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

/**
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 *
 * @schema DbSubnetGroupSpecTags
 */
export interface DbSubnetGroupSpecTags {
  /**
   * @schema DbSubnetGroupSpecTags#key
   */
  readonly key?: string;

  /**
   * @schema DbSubnetGroupSpecTags#value
   */
  readonly value?: string;

}

/**
 * Converts an object of type 'DbSubnetGroupSpecTags' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_DbSubnetGroupSpecTags(obj: DbSubnetGroupSpecTags | undefined): Record<string, any> | undefined {
  if (obj === undefined) { return undefined; }
  const result = {
    'key': obj.key,
    'value': obj.value,
  };
  // filter undefined values
  return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : ({ ...r, [i[0]]: i[1] }), {});
}
/* eslint-enable max-len, quote-props */

