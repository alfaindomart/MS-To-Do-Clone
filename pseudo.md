Microsoft Todo features:
DONE    - has my day, important, all projects, completed, Tasks
    - Projects:
        -add new projects
        - name project title
        - each project has its own separate todo
        - change theme of project
        - share, print, email, delete project
DONE    - primary projects can't be deleted
        - all todo in project can be moved to other projects
    - Sidebar:
        - can drag drop sort projects (excluding primary projects)
        - can group projects (UI only)
    -Todo:
        - each todo can be moved to other projects
        - todo can be checked/completed, add importance, deleted, change name, add reminder, add due date, add repeat, add file, add note, and add steps
DONE    - todo creation date can be seen
        - clicking on todo show a right side menu

todo: {
    name/task: bersih2,
    checked: true/false,
    create-date: getInputDateTime,
    completed-date: getCompletedDate,
    due-date: getDueDate,
    impportant: true/false,
}

//Primary Projects Behaviour
DONE! {All} has access to all unchecked (todo),
    all unchecked todo must be shown in All.

All {
    Tasks {
        todo[0] {

        }

        todo[1] {

        }    
    }

    Custom Project[0] {
        todo[0] {

        }
    }

    Custom Project[1] {
        todo[1] {
            
        }
    }
}

DONE! {Important} has access to todo[important = true],
{Important} also know where each todo came from.

Important {
    Todo[0] {
        name
        important true
        from project:
    }
    Todo[1] {
        name
        importance true
        from project:
    }
}

DONE!   if todo[checked = true], remove from all projects,
DONE!    {Completed} has access to todo[checked = true],
DONE!   all checked todo must be shown in {Completed},
   hide input box in {Completed}.

Completed {
        Todo[0] {
        name
        completed true
        from project:
    }
    Todo[1] {
        name
        completed true
        from project:
    }
}

{MyDay} has access to todo[dueDate],
if todo[dueDate] is today, todo must be in MyDay.

MyDay {
    if todo.dueDate = current date, import to MyDay
}

{Task} act as default project for when the user don't specify the todo's parent

Task {
    if todo.project = null, default to tasks
}
//

//Custom Projects Behavior
User click new project in sidebar.
onclick, run project factory function, createProject.

createProject() {
    name = `Untitled Project(num++)`
    todo{}
    return {
        name
        todo
    }
}

expected result -> project[0] {
    name = Untitled Project
    todo {

    }
}

render customProject
user clicked the empty new project,
onclick -> clear #todo-container, set current project to clicked project, run function that render the clicked project.
when user add todo, run todo factory function addTodo().

//

//Todo input
User type in task in input box.
Inside the right  end of the input box, 
place icons where user can set due date, alarm, and repeat.
User press enter, submit, run todo factory function addTodo().

Todo required properties {
    input value, 
    creation date, 
    importance: false, 
    checked: false,
    completedDate: null
    }

Todo optional properties {
    dueDate,
    schedule,
    alarm,
    steps,
    notes,
    repeat
}

createTodo(inputValue) {
    todo = inputValue
    creationDate = get current time
    importance = false
    checked = false
    completed date = null

    return {
        todo,
        creationDate,
        importance,
        checked
    }
}

User input resik2 -> createTodo(resik2)

espected result -> todo[0] {
                            todo: resik2,
                            creationDate: Fri, 17 Nov,
                            importance: false,
                            checked: false
                            }
//

//render todo in .todo
querySelector .todo
createElement inputCheckbox, div.task, div.star and append them
//

//file structure
/modules
    dom.js -> handle all the dom
    

//saving todo to local storage
create object to store currentTodo and newTodo. 
user click add todo, run addTodo() factory function, push addTodo() result to,
newTodo[].

//user click behaviour
when user click primary projects, e.g My DAy,
clear todo container,
current project state = my day,
current todo container state = 

//Task duplication approach
user create custproject.
run createProject() -> expected result custProject [], current project = custProject.
user add new todo, run createTodo(task) ->
    custProj [
        0 {newTodo}
    ]
    All [
        0 {newTodo}
    ]
User set newTodo as important.
click star, run setImportant(), ->
    setImportant() {
        loop all projects, find project.todo[imporant];
        find their index;
        update todo[important]; 
    }

//Filter approach
in default setting, user type on input box, press enter -> 
    getinput(e) {e.enter ? do these:
    push to alltodo array
    renderTodo*
    }

renderTodo() {
    check currentProject
    currentProject All?
        no filter
    currentProject completed?
        allTodo = [
            {task: clean, created: yesterday, completed: false}
            {task: eat, created: now, completed: false}
        ]
        completedFilter = allTodo.filter((todo) => {todo.completed === true})
}

//complete todo function
when user checked a task,
run checkTheBox() {add checked() to every checkbox}
in checked() {
    if (target checked) {
        check the targeted task index
        map allProjects, search object with the same index
        
    }
}


//Current project, Primary Projects, and Projectof behaviour
user open todo app
the app show last used project
if last used project is 'kucing',
Current project read H1 and set to H1 on load.
Usert add new task, projectOf is 'kucing'.

Then user clicked project travel 'travel'

//Check duplicate projects function
user click new projects
run checkDuplicateProj()
checkDuplicateProj() {
    query select user projects
    if user projects.length = 0, return
    query select user
}

