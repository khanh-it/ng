

window.TaskModel = require('./app/models/task').TaskModel;

let task = new TaskModel({
  'name': 'Task name',
  'note': 'Task note',
  'priority': 0
});
console.log('task: ', task);


// <!--<div class="form-group">
//   <label for="power-obj">Hero Power (obj)</label>
//   <select class="form-control" id="power-obj" required>
//     <option *ngFor="let p of objPowers|keys" [value]="p.value">Key: {{p.key}} / Value: {{p.value}}</option>
//   </select>
// </div>-->
// <!--<p>Task dump: {{diagnostic()}}</p>-->
