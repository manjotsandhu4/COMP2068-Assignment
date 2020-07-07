// INSTRUCTIONS:
/*
  Create a new resource controller that uses the
  User as an associative collection (examples):
  - User -> Books
  - User -> Reservation

  The resource controller must contain the 7 resource actions:
  - index
  - show
  - new
  - create
  - edit
  - update
  - delete
*/ 
//Declaring constants 
const viewPath = 'visits';
const Visit = require('../models/Visit');
const User = require ('../models/User');

//Index action 
exports.index = async (req, res)=>{
  try {
    const visits = await Visit
    .find()
    .populate('user')
    .sort({updateAt: 'desc'});

    res.render(`${viewPath}/index`, {
      pageTitle: 'Visit Index',
      visits: visits
    });
  } catch (error) {
    req.flash('danger', `Sorry we encountered an Error while rendering Visit Page:${error}`);
    res.redirect('/');
  }
};

//Show action 
exports.show = async (req, res)=>{
  try {
    const visit = await Visit.findById(req.params.id)
     .populate('user');
    console.log(visit);

    res.render(`${viewPath}/show`, {
      pageTitle: visit.title,
      visit: visit
    });
  } catch (error) {
    req.flash('danger', `Sorry we encountered an Error while rendering this Visite:${error}`);
    res.redirect('/');
  }
};

//new action 
exports.new = (req, res)=>{
  res.render(`${viewPath}/new`, {
    pageTitle: 'New Visit'
  });
};
exports.create = async (req, res)=>{
  try {
    
  } catch (error) {
    
  }
};
exports.edit = async (req, res)=>{};
exports.update = async (req, res)=>{};
exports.delete = async (req, res)=>{};
