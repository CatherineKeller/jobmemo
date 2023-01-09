const Card = require('./Card');
const List = require('./List');
const Type = require('./Type');
const Status = require('./Status');
const Candidacy = require('./Candidacy');
const TypeCompagny = require('./TypeCompagny');
const Interview = require('./Interview');
const InterviewType = require('./InterviewType');
const Event = require('./Event');

// List <-> Type
// One-To-Many
Type.hasMany(List, {
  as: 'lists',
  foreignKey: 'type_id'
});
List.belongsTo(Type, {
  as: 'type',
  foreignKey: 'type_id'
});

// Card <-> List
// One-To-Many
List.hasMany(Card, {
  as: 'cards',
  foreignKey: 'list_id'
});
Card.belongsTo(List, {
  as: 'list',
  foreignKey: 'list_id'
});

// Card <-> Status
// One-To-Many
Status.hasMany(Card, {
  as: 'cards',
  foreignKey: 'status_id'
});
Card.belongsTo(Status, {
  as: 'status',
  foreignKey: 'status_id'
});

// Card <-> Candidacy
// One-To-Many
Candidacy.hasMany(Card, {
  as: 'cards',
  foreignKey: 'candidacy_id'
});
Card.belongsTo(Candidacy, {
  as: 'candidacy',
  foreignKey: 'candidacy_id'
});

// Card <-> TypeCompagny
// One-To-Many
TypeCompagny.hasMany(Card, {
  as: 'cards',
  foreignKey: 'type_compagny_id'
});
Card.belongsTo(TypeCompagny, {
  as: 'type_compagny',
  foreignKey: 'type_compagny_id'
});

// Interview <-> InterviewType
// One-To-Many
InterviewType.hasMany(Interview, {
  as: 'interviews',
  foreignKey: 'interview_type_id'
});
Interview.belongsTo(InterviewType, {
  as: 'interview_type',
  foreignKey: 'interview_type_id'
});

// Event <-> Type
// One-To-Many
Type.hasMany(Event, {
  as: 'events',
  foreignKey: 'type_id'
});
Event.belongsTo(Type, {
  as: 'type',
  foreignKey: 'type_id'
});

// Event <-> Card
// One-To-Many
Card.hasMany(Event, {
  as: 'events',
  foreignKey: 'card_id'
});
Event.belongsTo(Card, {
  as: 'card',
  foreignKey: 'card_id'
});

module.exports = { Card, List, Type, Status, Candidacy, TypeCompagny, Interview, InterviewType, Event };
