const mongoose = require("mongoose");

exports.collect = (req, res) => {
        const {End_Year,Intensity,Topic,Sector,Insight,Region,Start_Year,Impact,Pestle,Source,Country,Relevance,Title,Likelihood} = req.body;
        const query = {};
        if(End_Year){
            query.end_year = parseInt(End_Year);
        }
        if(Intensity){
            query.intensity = parseInt(Intensity);
        }
        if(Topic){
            query.topic = Topic;
        }
        if(Sector){
            query.sector = Sector;
        }
        if(Insight){
            query.insight = Insight;
        }
        if(Region){
            query.region = Region;
        }
        if(Start_Year){
            query.start_year = Start_Year;
        }
        if(Impact){
            query.impact = Impact;
        }
        if(Pestle){
            query.pestle = Pestle;
        }
        if(Source){
            query.source = Source;
        }
        if(Country){
            query.country = Country;
        }
        if(Relevance){
            query.relevance = parseInt(Relevance);
        }
        if(Title){
            query.title = Title;
        }
        if(Likelihood){
            query.likelihood = parseInt(Likelihood);
        }
        mongoose.connection.db
        .collection("data")
        .find(query)
        .toArray()
        .then((result) => {
            res.status(200).json({
                message: "Data Received",
                data: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
            message: "Error Occurred while getting data",
            error: err,
            });
        });
};
