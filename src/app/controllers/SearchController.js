const connection = require("../../config/db");
class SearchController{
    index(req,res)
    {
        res.render('revenue')

    }
    show(req,res)
    {
        async function show()
        {
            var result= await connection.query(`CALL ThongKeDoanhThu(${req.body.year})`)
            var revenue=result[0][0]
            console.log(revenue);
                res.render('afterRevenue',{revenue})
          //  res.redirect('/nam');

        }
        show()
    }
}

module.exports=new SearchController()