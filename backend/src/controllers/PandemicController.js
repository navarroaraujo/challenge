const Pandemic = require('../models/Pandemic')

module.exports = {

  async index (request, response){
    const pandemics = await Pandemic.find();

    return response.json(pandemics);
  },

  async store(request, response) {

    const{
      name,
      deaths,
      year,
      img_url,
      history,
      contamination,
      symptoms,
      treatment,
    } = request.body;
  
    let pandemic = await Pandemic.findOne({ name });

    if (!pandemic){
      pandemic = await Pandemic.create({
        name,
        deaths,
        year,
        img_url,
        history,
        contamination,
        symptoms,
        treatment,
      });
    }
  
    return response.json(pandemic);
  }
}