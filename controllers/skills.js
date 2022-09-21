import { Skill } from "../models/skill.js";

function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills : skills
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkills(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkills as new,
  create,
  show,
}