const adminUri = "http://localhost:8080/admin";
const companyUri = "http://localhost:8080/company";
const customerUri = "http://localhost:8080/customer";

// Methods Class
class MethodsUri {

    // Admin Methods
    public adminUris = {
        adminLogin: adminUri + "/login",
        adminAddCompany: adminUri + "/add-company",
        adminUpdateCompany: adminUri + "/update-company",
        adminDeleteCompany: adminUri + "/delete-company",
        adminGetAllCompanies: adminUri + "/get-companies",
        adminGetOneCompany: adminUri + "/get-company",
        adminAddCustomer: adminUri + "/add-customer",
        adminUpdateCustomer: adminUri + "/update-customer",
        adminDeleteCustomer: adminUri + "/delete-customer",
        adminGetAllCustomers: adminUri + "/get-customers",
        adminGetOneCustomer: adminUri + "/get-customer",
    }

    // Company Methods
    public companyUris = {
        companyLogin: companyUri + "/login",
        companyAddCoupon: companyUri + "/add-coupon",
        companyUpdateCoupon: companyUri + "/update-coupon",
        companyDeleteCoupon: companyUri + "/delete-coupon",
        companyGetCoupons: companyUri + "/get-coupons",
        companyGetCouponsByCategory: companyUri + "/get-coupons-by-category",
        companyGetCouponsByMaxPrice: companyUri + "/get-coupons-by-price",
        companyGetDetails: companyUri + "/details"
    }

    // Customer Methods
    public customerUris = {
        customerLogin: customerUri + "/login",
        customerPurchaseCoupon: customerUri + "/purchase-coupon",
        customerGetCoupons: customerUri + "/get-coupons",
        customerGetCouponsByCategory: customerUri + "/get-coupons-by-category",
        customerGetCouponsByMaxPrice: customerUri + "/get-coupons-by-max-price",
        customerGetDetails: customerUri + "/details"
    }

    // TODO -- Add a boolean that changes the box of login/logout
    public loggedIn = true;
}

const globals = new MethodsUri();
export default globals;