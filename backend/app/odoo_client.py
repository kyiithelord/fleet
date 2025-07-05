import os
import time
import xmlrpc.client
from dotenv import load_dotenv

load_dotenv()

ODOO_URL = os.getenv("ODOO_URL")
ODOO_DB = os.getenv("ODOO_DB")
ODOO_USERNAME = os.getenv("ODOO_USERNAME")
ODOO_PASSWORD = os.getenv("ODOO_PASSWORD")

if not ODOO_URL.startswith("http"):
    raise ValueError("ODOO_URL must start with http:// or https://")

common = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/common")
models = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/object")

def authenticate_to_odoo(max_retries=10, delay=3):
    for i in range(max_retries):
        try:
            uid = common.authenticate(ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {})
            if uid:
                print(f"✅ Authenticated to Odoo with UID {uid}")
                return uid
            else:
                print("❌ Authentication failed, UID is False.")
        except Exception as e:
            print(f"🔁 Attempt {i+1}/{max_retries}: Error authenticating to Odoo: {e}")
        time.sleep(delay)
    raise ConnectionError("❌ Failed to authenticate to Odoo after retries.")

def get_fleet_vehicles():
    uid = authenticate_to_odoo()
    vehicles = models.execute_kw(
        ODOO_DB,
        uid,
        ODOO_PASSWORD,
        'fleet.vehicle',
        'search_read',
        [[]],
        {'fields': ['name', 'license_plate'], 'limit': 10}
    )
    return vehicles
