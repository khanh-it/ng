
import { AbstractModel } from './abstract';

/**
 *
 */
export class TaskModel extends AbstractModel {

  /**  */
  public name:string;

  /**  */
  public note:string;

  /**  */
  public priority:number;

  /**  */
  protected static _priorities = ['Lowest', 'Low', 'Normal', 'High', 'Highest'];

  /**  */
  public static returnPriorities():string[] {
    return TaskModel._priorities;
  }

  /**  */
  public static readonly DEFAULT_PRIORITY:number = 2; // Normal

  /** Initialize */
  protected init(options:{
    name?:string, note?:string, priority?:number
  } = {name:'', note:'', priority:TaskModel.DEFAULT_PRIORITY}):TaskModel {
    this.name = options.name;
    this.note = options.note;
    this.priority = options.priority;
    // Return
    return this;
  }
}
