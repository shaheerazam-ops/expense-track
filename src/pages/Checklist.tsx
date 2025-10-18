import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, AlertCircle, CheckCircle2, Trash2 } from "lucide-react";
import { toast } from "sonner";

type TodoItem = {
  id: string;
  title: string;
  dueDate: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
};

const Checklist = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: "1",
      title: "Pay electricity bill",
      dueDate: "2025-10-22",
      priority: "high",
      completed: false,
    },
    {
      id: "2",
      title: "Review monthly budget",
      dueDate: "2025-10-25",
      priority: "medium",
      completed: false,
    },
    {
      id: "3",
      title: "Pay rent",
      dueDate: "2025-10-28",
      priority: "high",
      completed: true,
    },
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    toast.success("Task updated!");
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast.success("Task deleted!");
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;
    
    const newItem: TodoItem = {
      id: Date.now().toString(),
      title: newTodo,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      priority: "medium",
      completed: false,
    };
    
    setTodos([...todos, newItem]);
    setNewTodo("");
    setShowAddForm(false);
    toast.success("Task added!");
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-primary text-primary-foreground";
      case "low": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getDaysUntil = (dateString: string) => {
    const today = new Date();
    const dueDate = new Date(dateString);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const activeTodos = todos.filter(t => !t.completed);
  const completedTodos = todos.filter(t => t.completed);

  return (
    <div className="min-h-screen p-4 pb-24">
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">To-Do Checklist</h1>
        <p className="text-muted-foreground">Manage your financial tasks</p>
      </div>

      {/* Add New Todo Button */}
      {!showAddForm && (
        <Button 
          onClick={() => setShowAddForm(true)}
          className="w-full mb-6 bg-gradient-primary hover:opacity-90"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Task
        </Button>
      )}

      {/* Add Todo Form */}
      {showAddForm && (
        <Card className="mb-6 shadow-card animate-scale-in">
          <CardContent className="pt-6">
            <div className="flex gap-2">
              <Input
                placeholder="Enter task..."
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                autoFocus
              />
              <Button onClick={addTodo} size="icon">
                <Plus className="w-4 h-4" />
              </Button>
              <Button 
                onClick={() => setShowAddForm(false)} 
                variant="outline" 
                size="icon"
              >
                ✕
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Tasks */}
      {activeTodos.length > 0 && (
        <div className="mb-6 animate-slide-up">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Active Tasks ({activeTodos.length})
          </h2>
          <div className="space-y-3">
            {activeTodos.map((todo) => {
              const daysUntil = getDaysUntil(todo.dueDate);
              const isOverdue = daysUntil < 0;
              const isDueSoon = daysUntil <= 3 && daysUntil >= 0;

              return (
                <Card key={todo.id} className="shadow-card hover:shadow-soft transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => toggleTodo(todo.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground">{todo.title}</h3>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <Badge className={getPriorityColor(todo.priority)} variant="secondary">
                            {todo.priority}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {todo.dueDate}
                          </div>
                          {isOverdue && (
                            <Badge variant="destructive" className="text-xs">
                              Overdue
                            </Badge>
                          )}
                          {isDueSoon && !isOverdue && (
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              Due in {daysUntil} day{daysUntil !== 1 ? 's' : ''}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteTodo(todo.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTodos.length > 0 && (
        <div className="animate-slide-up">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            Completed ({completedTodos.length})
          </h2>
          <div className="space-y-3">
            {completedTodos.map((todo) => (
              <Card key={todo.id} className="shadow-card opacity-60">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={todo.completed}
                      onCheckedChange={() => toggleTodo(todo.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground line-through">
                        {todo.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {todo.dueDate}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTodo(todo.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {todos.length === 0 && (
        <Card className="shadow-card">
          <CardContent className="p-12 text-center">
            <CheckCircle2 className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No tasks yet. Add one to get started!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Checklist;
