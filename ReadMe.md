# Intelligent Prediction System for Autoscaling Microservices

## Abstract

An IoT application typically consists of tens or hundreds of microservices work together in real-time binding. IoT Applications can therefore experience operational failures particularly in cases where these microservices do not dynamically adapt to changes. Hence, autoscaling plays an increasingly vital role in providing and maintaining an acceptable degree of an application performance. However, autoscaling can become extremely expensive in cloud computing where developers may end up paying for more for resources that are not adequately needed. To resolve this problem, we need a mechanism that can predict the behavior of microservices while making IoT systems more adaptive using autoscaling. In this paper, we introduce a microservices prediction model that is capable of effectively making autoscaling recommendations based on quality of service features. To this extent, we continuously collect quality metrics like CPU usage, memory, and network I/O for containerized microservices in order to predict any possible bottlenecks while recommending the degree of scalability. This paper presents experimental validation results and analysis of the presented ideas.

## Cloud Platform & Tools Used:
AWS EKS, Kubernetes, Docker, Eksctl, Grafana for Visualization, Helm Package Manager, Locust.io testing tool & Jupyter Notebook for statistical modeling  

##### Setup Order  
1. Go to source code folder
2. Open Code_Setup_Commands_Instructions

##### Readme order
1. Docker_Image_Create_Commands.txt
2. Cloud9_Setup.txt
3. EKS_Cluster_Setup.txt
4. Dashboard_Deployment_Commands.txt
5. Grafana_Data_Queries.txt
