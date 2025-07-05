# Fleet Maintenance Tracker App

This is a Fleet Maintenance Tracker application that integrates with Odoo's Fleet module. It includes:

- **FastAPI backend** for custom APIs
- **React frontend** for the user interface
- **Odoo 17** running in Docker with PostgreSQL

---

## Project Structure

fleet_app/
├── backend/ # FastAPI app
├── frontend/ # React frontend
├── docker-compose.yml # Odoo & PostgreSQL services

---

## Requirements

- Python 3.10+
- Node.js & npm (or yarn)
- Docker & Docker Compose

---

## 1. Backend Setup (FastAPI)

### a. Setup Python Environment

```bash
cd fleet_app/backend
python -m venv devenv
source devenv/bin/activate
pip install -r requirements.txt
b. Create .env file
Create a .env file in backend/:

DATABASE_URL=postgresql://postgres:admin@localhost/fleet_odoo

ODOO_URL=http://localhost:8069
ODOO_DB=fleet_odoo
ODOO_USERNAME=admin
ODOO_PASSWORD=odoo
c. Run FastAPI Server

bash
uvicorn app.main:app --reload
Access API at: http://localhost:8000

2. Odoo + PostgreSQL Setup (Docker)
a. Run Odoo and Postgres with Docker

bash
cd fleet_app
docker-compose up -d
b. Open Odoo
Visit: http://localhost:8069

Create database: fleet_odoo

Install: Fleet Management module

Login with:

Username: admin

Password: odoo

Make sure this matches your .env config.

3. Frontend Setup (React)
bash
Copy
Edit
cd fleet_app/frontend
npm install
a. Create .env file in frontend/:
ini
VITE_API_BASE_URL=http://localhost:8000
b. Start React Dev Server:

bash
npm run dev
Open: http://localhost:5173

API Endpoints
Method	Endpoint	Description
GET	/vehicles	Local PostgreSQL fleet data
POST	/vehicles/	Add vehicle to local DB
GET	/vehicles/odoo	Odoo Fleet module vehicle list

Troubleshooting
Odoo 500 Error:

Ensure fleet_odoo database is created

PostgreSQL container is running

.env values are correct

View logs:

bash
docker logs fleet_app-odoo-1 --tail 50
Reset Docker:

bash
docker-compose down -v
Frontend Build (Production)
bash
npm run build
Serve the dist/ folder with a static file server or reverse proxy (e.g., Nginx).

