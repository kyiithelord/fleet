import os
import xmlrpc.client
from dotenv import load_dotenv

load_dotenv()

ODOO_URL = os.getenv("ODOO_URL")
ODOO_DB = os.getenv("ODOO_DB")
ODOO_USERNAME = os.getenv("ODOO_USERNAME")
ODOO_PASSWORD = os.getenv("ODOO_PASSWORD")

common = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/common")

try:
    uid = common.authenticate(ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD, {})
    print("Authenticated UID:", uid)
except Exception as e:
    print("Authentication failed:", e)
    exit(1)

models = xmlrpc.client.ServerProxy(f"{ODOO_URL}/xmlrpc/2/object")

vehicles = models.execute_kw(
    ODOO_DB,
    uid,
    ODOO_PASSWORD,
    'fleet.vehicle',
    'search_read',
    [[]],
    {'fields': ['name', 'license_plate'], 'limit': 5}
)

print("Vehicles:", vehicles)
