const Azure = require('../models/azure');
const Schema = require('../schema/validate');
const axios = require('axios').default;
//  const fetch = require('node-fetch');
 
exports.createOne = async(req,res,next) =>{
    try{
        const val = await axios.get('https://jacksonsuthip.github.io/nxtJS/url/CpuTime.json');
        console.log("fetched");
       
        const data = val["data"];
        console.log(data.length);
        for(var i=0; i < data.length; i++)
        {
            console.log(data[i]);
            var result = await Azure.create(data[i]);
            console.log(result);
            
        }
        res.send('Inserted Successfully');
        
    }catch(error){
        console.log(error);
    }
    // try{
    //     console.log("inside create controller");
    //     const value = await Schema.validate({MetricName:req.body['MetricName'], count: req.body['count'], avg:req.body['avg'], TimeGenerated: req.body['TimeGenerated'], max: req.body['max'],min: req.body['min']});
    //    console.log(value.error);
    //     if(value.error){
    //         console.log("invalid entry");
    //     }else{
    //         console.log("valid entry");
    //         const azure = await Azure.create({MetricName: req.body['MetricName'], count: req.body['count'], avg:req.body['avg'], TimeGenerated: req.body['TimeGenerated'], max: req.body['max'],min: req.body['min']});
    //         console.log('User Created');
            
    //         res.status(200).json(azure);
    //     }
        
    // }
    // catch(error){
    //     console.log(error);
    //     res.status(500).json("error");
    // }

};
    exports.getAll = async(req,res,next) =>{
        
        console.log("am in");
        // try {
        //     const val = await axios.get('https://jacksonsuthip.github.io/nxtJS/url/CpuTime.json');
        //     //console.log(typeof(val['data']));
        //     //console.log(jsonval);
        //     if(val["data"]){
        //         //console.log(parsed)
        //         res.status(200).json(val["data"]);
        //     }else{
        //         res.status(200).json("error");
        //     }
        try{
            const result= await Azure.findAll();
            res.status(200).json(result);
           
        } catch (error) {
            console.log('An error occured', error);
            res.status(200).json(error);
        }
    };
   
   
    

