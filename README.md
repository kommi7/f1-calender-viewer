F1 Calendar 2026

About
-----

This project is a web application for viewing the Formula 1 (F1) race calendar for the 2026 season. It provides a user-friendly interface to browse race schedules, including details like dates, circuits, and locations. The app combines a Java backend with a JavaScript frontend, and includes infrastructure automation for deployment.

The application fetches and displays F1 race data, with features like filtering (upcoming/past races) and search by location or circuit. It's designed for F1 enthusiasts to easily track the season.

Features
--------

*   Display the full 2026 F1 race calendar with round numbers, race names, circuits, locations, and dates.
    
*   Interactive frontend: Search by country/circuit, filter by upcoming/past races, and toggle details (e.g., countdowns).
    
*   Static data handling in JavaScript, with backend integration for dynamic API fetches (e.g., from Ergast F1 API).
    
*   Role-Based Access Control (RBAC) documentation for future user management.
    
*   Containerization with Docker for easy deployment.
    
*   Infrastructure as Code (IaC) using Terraform for cloud provisioning (e.g., AWS S3 or Elastic Beanstalk).
    
*   CI/CD pipeline setup with Jenkins.
    
*   Kubernetes deployment manifests for scalable hosting.
    

Technology Stack
----------------

*   **Backend**: Java (Spring Boot), Maven for build management.
    
*   **Build Tools**: Maven (pom.xml).
    
*   **Containerization**: Docker (Dockerfile).
    
*   **Infrastructure**: Terraform (HCL in terraform/ directory).
    
*   **Deployment**: Kubernetes (deployment-service.yml).
    
*   **CI/CD**: Jenkins (jenkins_pipeline.txt).
    
*   **Other**: Git configuration (.gitattributes, .gitignore).
    

Prerequisites
-------------

*   Java JDK 17+ (for building the backend).
    
*   Maven 3.8+ (for project build).
    
*   Docker (for containerization).
    
*   Terraform 1.5+ (for infrastructure).
    
*   Kubernetes CLI (kubectl) and a cluster (e.g., Minikube for local testing).
    
*   Node.js (if extending frontend, though not required for basics).
    
*   AWS/GCP/Azure account (if using Terraform for cloud deployment).
    

Installation and Setup
----------------------

1.  git clone https://github.com/kommi7/f1-calendar-viewer.gitcd f1-calendar-viewer
    
2.  Install dependencies:
    
    *   For Java/Maven: Run mvn install to fetch dependencies defined in pom.xml.
        
3.  Configure environment:
    
    *   Update src/main/resources/application.properties with any API keys or settings (e.g., for Ergast API integration).
        
    *   For Terraform: Set up provider credentials (e.g., AWS keys in terraform/terraform.tfvars).
        

Building the Application
------------------------

*   mvn clean packageThis generates target/f1-calendar-viewer.jar or .war (based on pom.xml packaging).
    
*   Troubleshooting Build Errors:
    
    *   If you encounter "\[ERROR\] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.13.0:compile ... release version 21 not supported":
        
        *   Ensure your JDK is 21+ (java -version).
            
        *   Update the compiler plugin in pom.xml to version 3.14.0+.
            
        *   Use 21 in plugin configuration.
            

Running Locally
---------------

1.  mvn spring-boot:runAccess at http://localhost:8080.
    
2.  docker build -t f1-calendar-viewer .docker run -p 8080:8080 f1-calendar-viewer
    
3.  Test the app: Open in a browser and interact with the calendar viewer.
    

Deployment
----------

### Using Terraform

1.  cd terraformterraform initterraform planterraform applyThis provisions infrastructure (e.g., S3 bucket or EC2 for hosting).
    

### Using Kubernetes

1.  kubectl apply -f deployment-service.ymlEnsure your Kubernetes cluster is set up.
    

### CI/CD with Jenkins

*   Use the pipeline defined in jenkins\_pipeline.txt to automate builds and deployments. Install in Jenkins as a new pipeline job.