import { PriorityQueue } from "@datastructures-js/priority-queue";

interface Task {
  userId: number;
  taskId: number;
  priority: number;
}

class TaskManager {
  private pq: PriorityQueue<Task>;
  private taskMap: Map<number, Task>;

  constructor(tasks: [userId: number, taskId: number, priority: number][]) {
    this.pq = new PriorityQueue((a, b) => {
      if (a.priority === b.priority) {
        return b.taskId - a.taskId;
      } else {
        return b.priority - a.priority;
      }
    });

    this.taskMap = new Map();

    for (const task of tasks) {
      this.add(...task);
    }
  }

  add(userId: number, taskId: number, priority: number): void {
    const task: Task = { userId, taskId, priority };
    this.pq.enqueue(task);
    this.taskMap.set(taskId, task);
  }

  edit(taskId: number, newPriority: number): void {
    const task = this.taskMap.get(taskId);
    if (task) {
      this.rmv(taskId);
      this.add(task.userId, taskId, newPriority);
    }
  }

  rmv(taskId: number): void {
    // 懒删除，只删除 taskMap 里面的任务
    this.taskMap.delete(taskId);
  }

  execTop(): number {
    while (!this.pq.isEmpty()) {
      const { taskId, priority } = this.pq.dequeue();
      const task = this.taskMap.get(taskId);

      if (task && task.priority === priority) {
        // 这里从 map 获取 userId, 因为可能删除 taskId 又新加了 taskId
        const { userId } = task;
        this.rmv(taskId);
        return userId;
      }
    }

    return -1;
  }
}

export { TaskManager };
