import Todo from "./models/Todo.js";

const resolvers = {
    Query: {
        hello: () => "Hello world!",
        getTodos: async () => {
            const todos = await Todo.find().exec();
            return todos || []; // Eğer sonuç yoksa boş bir liste döndür
        },
        
        getTodoById: async (parent, args) => {
            const todo = await Todo.findById(args.id);
            if (!todo) {
                throw new Error("Todo not found!"); // Eğer belirtilen ID bulunamazsa hata fırlat
            }
            return todo;
        }
    },
    Mutation: {
        createTodo: async (parent, args) => {
            const todo = new Todo({
                title: args.title,
                description: args.description,
                isCompleted: args.isCompleted,
                dateTime: args.dateTime
            });
            await todo.save();
            return todo;
        },
        updateTodo: async (parent, args) => {
            const todo = await Todo.findById(args.id);
            if (!todo) {
                throw new Error("Todo not found!"); // Eğer belirtilen ID bulunamazsa hata fırlat
            }
            todo.title = args.title;
            todo.description = args.description;
            todo.isCompleted = args.isCompleted;
            todo.dateTime = args.dateTime;
            await todo.save();
            return todo;
        },
        deleteTodo: async (parent, args) => {
            const todo = await Todo.findById(args.id);
            if (!todo) {
                throw new Error("Todo not found!"); // Eğer ID yanlış veya todo bulunamazsa hata fırlat
            }
            await Todo.deleteOne({ _id: args.id }); // Daha modern bir silme metodu
            return todo; // Silinen todo'yu geri döndür
        }
    }
};

export default resolvers;
