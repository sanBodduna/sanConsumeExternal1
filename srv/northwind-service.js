const cds = require('@sap/cds');
class NorthwindAPI extends cds.ApplicationService {
    init() {
        this.on('READ', 'Products', async (req) => {
            try {
                const northwindService = await cds.connect.to('northwind');
                let responseData = await northwindService.tx(req).run(req.query);
                return responseData.value;
                //return responseData;
            }
            catch (error) {
                req.error(500, error.message)
            }
        })
 
        this.on('getProducts', async (req) => {
            try {
                const northwindService = await cds.connect.to('northwind');
                let responseData = await northwindService.run(`/Products?$filter=ProductName eq 'Chai'&$select=ProductID,ProductName`);
                return responseData;
            }
            catch (error) {
                req.error(500, error.message)
            }
        })
        return super.init();
    }
 
}
 
module.exports = { NorthwindAPI }