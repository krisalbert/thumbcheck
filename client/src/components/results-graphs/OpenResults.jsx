import React from 'react';
import {toJS} from 'immutable';

export default React.createClass({
 renderOpenResults: function(length) {  
   // use this function to send back the length as well 
   if (length && this.props.openResponseAnswers) { return this.props.openResponseAnswers.size; }
   // if we don't get the length arg, it's used to send back the list of questions
   let answers = [];
   this.props.openResponseAnswers ? answers = this.props.openResponseAnswers.toJS() : [] 
    
   return answers.map(function(answer, index) {
     return <div className="bigger-text">{ answer } </div>
   });
 }, 
     
 render: function() {
   return (
     <div>
       <h4>Results from last question</h4>
       { this.renderOpenResults() }
       <div>Number of students who responded: { this.renderOpenResults('yes') }</div>
     </div>
   )
 }
});