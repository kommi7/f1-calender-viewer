output "cluster_id" {
  value = aws_eks_cluster.f1_calendar.id
}

output "node_group_id" {
  value = aws_eks_node_group.f1_calendar.id
}

output "vpc_id" {
  value = aws_vpc.f1_calendar_vpc.id
}

output "subnet_ids" {
  value = aws_subnet.f1_calendar_subnet[*].id
}