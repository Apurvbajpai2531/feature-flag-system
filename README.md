# 🚩 Feature Flag System (DevOps Project)

A complete end-to-end **DevOps project** demonstrating real-world
deployment, GitOps workflow, and monitoring using modern tools like
**Kubernetes, ArgoCD, Prometheus, and Grafana**.

------------------------------------------------------------------------
# 🏗️ Project Architecture

    Developer → GitHub → ArgoCD → Kubernetes → Application
                                          ↓
                                    Prometheus → Grafana

------------------------------------------------------------------------

# ⚙️ Tech Stack

-   Backend: Node.js\
-   Containerization: Docker\
-   Orchestration: Kubernetes\
-   GitOps: ArgoCD\
-   Monitoring: Prometheus\
-   Visualization: Grafana

------------------------------------------------------------------------

# 🚀 What I Implemented

-   Built backend service using Node.js\
-   Dockerized the application\
-   Deployed application on Kubernetes cluster\
-   Implemented GitOps using ArgoCD\
-   Configured Prometheus for monitoring\
-   Integrated Grafana with Prometheus\
-   Created dashboards with working queries

------------------------------------------------------------------------

# 🔥 Key Highlights

-   Managed Kubernetes resources (Deployments, Services)\
-   Solved real-world issues:
    -   ImagePullBackOff\
    -   CrashLoopBackOff
-   DevOps lifecycle:

```{=html}
<!-- -->
```
    Code → Docker → Kubernetes → ArgoCD → Monitoring

------------------------------------------------------------------------

# 🛠️ Setup Instructions

# Clone Repository

    git clone https://github.com/Apurvbajpai2531/feature-flag-system.git
    cd feature-flag-system

------------------------------------------------------------------------

# Build & Push Docker Image

    cd backend
    docker build -t <your-docker-username>/feature-backend:latest .
    docker push <your-docker-username>/feature-backend:latest

------------------------------------------------------------------------

# Deploy on Kubernetes

    kubectl apply -f devops/deployment.yaml
    kubectl apply -f devops/service.yaml

------------------------------------------------------------------------

# 🔐 ArgoCD Setup & Access

# Install ArgoCD

    kubectl create namespace argocd
    kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Access UI

    kubectl port-forward svc/argocd-server -n argocd 8080:443

Open: https://localhost:8080

# Login

Username: admin

#for accessing argocd ui password run following command:
    kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo

------------------------------------------------------------------------

# 🌐 Application Access for ArgoCD

    kubectl port-forward service/feature-backend-service 5000:5000

Open: http://localhost:5000

------------------------------------------------------------------------

# 📊 Monitoring Setup

    helm install prometheus prometheus-community/prometheus
    helm install grafana grafana/grafana

------------------------------------------------------------------------

# 📈 Grafana Access

    kubectl port-forward service/grafana 3002:80

Open: http://localhost:3002

# Login

Username: admin

#for accessing the grafana password run the following command
    kubectl get secret grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

------------------------------------------------------------------------

# 💡 Debugging

    kubectl get pods
    kubectl describe pod <pod-name>
    kubectl logs <pod-name>

------------------------------------------------------------------------
Built and deployed a production-like DevOps system using Kubernetes,
ArgoCD (GitOps), Prometheus, and Grafana.

Screenshot 
![App](screenshots/WhatsApp%20Image%202026-04-13%20at%201.01.50%20AM.jpeg)

![K8s](screenshots/WhatsApp%20Image%202026-04-13%20at%2012.59.43%20AM.jpeg)

![Grafana](screenshots/WhatsApp%20Image%202026-04-13%20at%2012.59.43%20AM%20(2).jpeg)

------------------------------------------------------------------------------------
