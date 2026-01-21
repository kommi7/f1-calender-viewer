output "cluster_id" {
  value = aws_eks_cluster.f1_calender.id
}

output "node_group_id" {
  value = aws_eks_node_group.f1_calender.id
}

output "vpc_id" {
  value = aws_vpc.f1_calender_vpc.id
}

output "subnet_ids" {
  value = aws_subnet.f1_calender_subnet[*].id
}