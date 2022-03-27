<p align="center">
  <a href="https://dev.to/vumdao">
    <img alt="Use CDK8S To Create AWS Controllers for Kubernetes Custom Resources" src="images/cover.png" width="700" />
  </a>
</p>
<h1 align="center">
  <div><b>Use CDK8S To Create AWS Controllers for Kubernetes Custom Resources</b></div>
</h1>

## Abstract
- [Hands-on AWS Controllers for Kubernetes (ACK)](https://dev.to/aws-builders/aws-controllers-for-kubernetes-hands-on-2d70)
- [How does ACK relate to cdk8s?](https://aws-controllers-k8s.github.io/community/docs/community/faq/#cdk8s)
- This post uses AWS CDK8S to create examples of ACK CRs such RDS and S3 bucket

## Table Of Contents
 * [Introduction of ACK](#Introduction-of-ACK)
 * [Install the ACK service controller for RDS](#Install-the-ACK-service-controller-for-RDS)
 * [Create ACK ServiceAccount base on IRSA](#Create-ACK-ServiceAccount-base-on-IRSA)
 * [Create RDS secret keys](#Create-RDS-secret-keys)
 * [Create subnet group](#Create-subnet-group)
 * [Create security group to allow traffic from EKS pods to the RDS](#Create-security-group-to-allow-traffic-from-EKS-pods-to-the-RDS)
 * [Create DBInstance](#Create-DBInstance)
 * [Access RDS through EKS pod](#Access-RDS-through-EKS-pod)
 * [Clean-up workspace](#Clean-up-workspace)
 * [Conclusion](#Conclusion)

---

## 🚀 Init cdk8s-app projen
```
⚡ $ projen new cdk8s-app-ts --projenrc-ts
```

## 🚀 **Import ACK CRDS As CDK8S API** <a name="Introduction-of-ACK"></a>
```