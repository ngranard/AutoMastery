from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, SaleRecord

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "id",
        "sold"
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
        "id"
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        "id"
    ]

class SaleRecordListEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "sales_person",
        "customer",
        "sale_price",
        "id"
    ]
    encoders = {
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }

    def get_extra_data(self, o):
        return {
            "vin": o.automobile.vin,
            "employee_number": o.sales_person.employee_number,
        }
